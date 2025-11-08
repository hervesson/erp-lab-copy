'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import {
  DeleteAlternative,
  listAllFormField,
  listFormFields,
  UpdateStatusField,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Dropdown, DropdownItem } from 'flowbite-react'
import { Book, Edit2, More, SearchStatus } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Status } from './components/status'

// Components
import EditFormField from './modal-content/editFormField'
import ProfileFormFields from './modal-content/profileFormField'
import RegisterFormField from './modal-content/registerFormField'

const CamposDeFormulario = ({
  modalRegisterFormField,
  setModalRegisterFormField,
}) => {
  const [selectedFormField, setSelectedFormField] = useState({})

  const [formFields, setFormFields] = useState([])

  const [fields, setFields] = useState([])
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  // modal
  const [modalEditFormField, setModalEditFormField] = useState(false)
  const [openModalProfileFormFields, setOpenModalProfileFormFields] =
    useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [lisFormFields, lstFields] = await Promise.all([
          listAllFormField(),
          listFormFields(),
        ])

        // mantém apenas itens com alternativas = 0 (ou inexistente)
        const zeroAltItems = (lstFields?.data ?? []).filter(
          (e) => !Array.isArray(e.alternativas) || e.alternativas.length === 0,
        )

        const fds = zeroAltItems.map((e) => ({
          id: e.id,
          label: e.nomeCampo,
        }))

        setFormFields(lisFormFields.data.data) // não mexi
        setFields(fds) // agora só com alternativas = 0
        setTotal(lisFormFields.data.meta.total) // não mexi
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  const fetchFormsField = async (term = '', page = '', limit = 10) => {
    try {
      const [lisFormFields, lstFields] = await Promise.all([
        listAllFormField(term, page, limit),
        listFormFields(),
      ])

      // mantém apenas itens com alternativas = 0 (ou inexistente)
      const zeroAltItems = (lstFields?.data ?? []).filter(
        (e) => !Array.isArray(e.alternativas) || e.alternativas.length === 0,
      )

      const fds = zeroAltItems.map((e) => ({
        id: e.id,
        label: e.nomeCampo,
      }))

      setFormFields(lisFormFields.data.data) // não mexi
      setFields(fds) // agora só com alternativas = 0
      setTotal(lisFormFields.data.meta.total) // não mexi
    } catch (error) {
      console.error(error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const response = await listAllFormField(searchTerm, props, 10)
      setFormFields(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por termo pesquisado
  const handleChangeUnit = (e) => {
    setSearchTerm(e.target.value)
    debounceChange(e.target.value)
  }

  const debounceChange = useDebounce(handler, 800)

  async function handler(props) {
    setCurrentPage(1)

    try {
      const response = await listAllFormField(props, currentPage, 10)
      setFormFields(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const toggleActiveField = async (unit) => {
    const result = await UpdateStatusField(unit.id)
    if (result.success) {
      fetchFormsField(searchTerm, currentPage, 10)
    } else {
      toast.error('Erro ao inativar unidade', {
        position: 'top-right',
      })
    }
  }

  // opcional: passe onComplete para rodar algo após terminar tudo
  const deleteField = async (field, onComplete) => {
    try {
      const alternativas = field?.alternativas ?? []
      if (alternativas.length === 0) {
        // nada a deletar
        await fetchFormsField(searchTerm, currentPage, 10)
        onComplete?.()
        return
      }

      // dispara todas as deleções de uma vez e espera finalizar
      const results = await Promise.allSettled(
        alternativas.map((alt) => DeleteAlternative(field.id, alt.id)),
      )

      // contabiliza sucessos e falhas
      const successes = results.filter(
        (r) => r.status === 'fulfilled' && r.value?.success,
      ).length
      const failures = results.filter(
        (r) => r.status === 'rejected' || r.value?.success !== true,
      ).length

      if (successes > 0) {
        await fetchFormsField(searchTerm, currentPage, 10) // atualiza UMA vez só
      }

      if (failures > 0) {
        toast.error(`Não foi possível excluir ${failures} alternativa(s).`, {
          position: 'top-right',
        })
      }
    } catch (err) {
      console.error(err)
      toast.error('Erro inesperado ao tentar deletar alternativas.', {
        position: 'top-right',
      })
    } finally {
      onComplete?.()
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-[32px]">
      <div
        className={`flex h-[40px] items-center rounded-[8px] px-2 ${
          isFocusedSearch
            ? 'border-[1px] border-[#0F9B7F]'
            : 'border border-[#BBBBBB]'
        }`}
      >
        <input
          placeholder="Pesquisar"
          onChange={handleChangeUnit}
          className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
          onFocus={() => setIsFocusedSearch(true)}
          onBlur={() => setIsFocusedSearch(false)}
        />
        <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-[48px] bg-[#D4D4D4]">
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Campo
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Descrição
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Total de alternativas
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Status
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Editar
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Visualizar
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Opções
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {formFields?.map((item, index) => {
            return (
              <tr
                className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item?.nomeCampo}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item?.descricao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.alternativas.length}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Status active={item?.ativo} />
                  </div>
                </td>

                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setModalEditFormField(true)
                      setSelectedFormField(item)
                    }}
                  >
                    <Edit2 size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setOpenModalProfileFormFields(true)
                      setSelectedFormField(item)
                    }}
                  >
                    <Book size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Dropdown
                      label=""
                      dismissOnClick={true}
                      renderTrigger={() => <More size="28" color="#737373" />}
                      placement="left-start"
                      className="bg-white"
                    >
                      <DropdownItem
                        className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                        onClick={() => toggleActiveField(item)}
                      >
                        Ativar/Desativar
                      </DropdownItem>
                      <DropdownItem
                        className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                        onClick={() => deleteField(item)}
                      >
                        Excluir
                      </DropdownItem>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span
              className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
            >
              {formFields.length > 10 ? 10 : formFields.length}
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px] text-[#222]`}>
            de {total} registros
          </span>
        </div>

        <Pagination
          totalRecords={total}
          recordsPerPage={10}
          onPageChange={(value) => findDataPerPage(value)}
          currentPage={currentPage} // Pass the current page state
        />
      </div>
      <ModalUp
        isOpen={modalRegisterFormField}
        onClose={() => setModalRegisterFormField(false)}
      >
        <RegisterFormField
          onClose={() => setModalRegisterFormField(false)}
          fields={fields}
          findData={() => fetchFormsField('', 1, 10)}
        />
      </ModalUp>
      <ModalUp
        isOpen={modalEditFormField}
        onClose={() => setModalEditFormField(false)}
      >
        <EditFormField
          onClose={() => setModalEditFormField(false)}
          formField={selectedFormField}
          findData={() => fetchFormsField(searchTerm, currentPage, 10)}
        />
      </ModalUp>
      <ModalLeft
        isOpen={openModalProfileFormFields}
        onClose={() => setOpenModalProfileFormFields(false)}
      >
        <ProfileFormFields formField={selectedFormField} />
      </ModalLeft>
      <ToastContainer />
    </div>
  )
}

export default CamposDeFormulario
