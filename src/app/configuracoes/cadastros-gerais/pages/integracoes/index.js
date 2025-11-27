import CustomSelect from '@/components/CustomSelect'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  DeleteIntegracao,
  GetListTypesIntegrations,
  ListIntegrations,
  ToggleStatusIntegration,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Dropdown, DropdownItem } from 'flowbite-react'
import { Book, Data, Edit2, More, SearchStatus } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { IsActive } from '../../../../../components/IsActive'

// Components
import { toast } from 'react-toastify'
import EditIntegrations from './modal-content/editiIntegrations'
import RegisterIntegrations from './modal-content/registerIntegrations'

const Integrations = ({ openModalIntegracoes, setOpenModalIntegracoes }) => {
  const [integrations, setIntegrations] = useState([])
  const [total, setTotal] = useState(0)
  const [listTypesIntegrations, setListTypesIntegrations] = useState([])
  const [selectedIntegration, setSelectedIntegrations] = useState({})
  const [openModalEditIntegrations, setOpenModalEditIntegrations] =
    useState(false)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [status, setStatus] = useState({
    id: '',
    label: 'Tipo de integração: Todas',
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchListEnterprises = async () => {
      try {
        const response = await GetListTypesIntegrations()

        const labs = response?.data?.map((item) => {
          return {
            id: item.slug,
            label: item.nome,
            item,
          }
        })

        setListTypesIntegrations([
          {
            id: '',
            label: 'Todas',
          },
          ...labs,
        ])
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchListEnterprises()
  }, [])

  useEffect(() => {
    const fecthIntegrations = async () => {
      const result = await ListIntegrations()
      setIntegrations(result?.data?.data)
      setTotal(result?.data?.total)
    }

    fecthIntegrations()
  }, [])

  const fecthIntegrations = async (trm = '', stt = '', pg = '') => {
    const result = await ListIntegrations(trm, stt.id, pg)
    setIntegrations(result?.data?.data)
    setTotal(result?.data?.total)
  }

  // Deletar o método
  const deleteIntegration = async (item) => {
    const result = await DeleteIntegracao(item.id)

    if (result.success) {
      fecthIntegrations(searchTerm, status, currentPage)
    } else {
      toast.error('Ocorreu um erro ao deletar integração', {
        position: 'top-right',
      })
    }
  }

  // Mudar o status
  const toggleStatus = async (item) => {
    const result = await ToggleStatusIntegration(item.id)

    if (result.success) {
      fecthIntegrations(searchTerm, status, currentPage)
    } else {
      toast.error('Ocorreu um erro ao deletar integração', {
        position: 'top-right',
      })
    }
  }

  // Pesquisar por termo
  const handleChangeMethod = (e) => {
    setSearchTerm(e.target.value)
    debounceChange(e.target.value)
  }

  const debounceChange = useDebounce(handler, 800)

  async function handler(props) {
    setCurrentPage(1)

    fecthIntegrations(props, status, currentPage)
  }

  // Filtrar por tipo de integração
  const findDataPerStatus = async (props) => {
    setCurrentPage(1)

    const find = listTypesIntegrations.find(
      (element) => element.id === props.id,
    )

    setStatus({
      id: find.id,
      label: `Tipo de integração: ${find.label}`,
    })

    fecthIntegrations(searchTerm, props.id, currentPage)
  }

  // Buscar por página
  const findDataPerPage = async (props) => {
    setCurrentPage(props)
    fecthIntegrations(searchTerm, status, props)
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex h-[84px] items-center justify-between rounded-2xl bg-[#F9F9F9]">
        <div className="mx-2.5 flex h-16 w-full items-center rounded-lg bg-white">
          <div className="flex gap-3 rounded-lg px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F9F9F9]">
              <Data size="28" color="#A1A1A1" variant="TwoTone" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Integrações
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <CustomSelect
          select={status}
          setSelect={(e) => findDataPerStatus(e)}
          options={listTypesIntegrations}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <div
          className={`flex h-10 flex-2 items-center rounded-lg px-2 ${
            isFocusedSearch
              ? 'border border-[#0F9B7F]'
              : 'border border-[#BBBBBB]'
          }`}
        >
          <input
            placeholder="Pesquisar"
            onChange={handleChangeMethod}
            className={`h-full w-full rounded-lg ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
            onFocus={() => setIsFocusedSearch(true)}
            onBlur={() => setIsFocusedSearch(false)}
          />
          <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
        </div>
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-12 bg-[#D4D4D4]">
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Tipo de integração
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Descriçao da API
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Código de identificação
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Ativo
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
          {integrations?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {Array.isArray(item.tiposContexto)
                    ? item.tiposContexto.join(', ')
                    : item.tiposContexto}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item.descricao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.codigoIdentificacao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <IsActive active={item.ativo} />
                  </div>
                </td>

                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setSelectedIntegrations(item)
                      setOpenModalEditIntegrations(true)
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
                      // setOpenModalProfileuUnit(true)
                      setSelectedIntegrations(item)
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
                        onClick={() => toggleStatus(item)}
                      >
                        Ativar/Desativar
                      </DropdownItem>
                      <DropdownItem
                        className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                        onClick={() => deleteIntegration(item)}
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
      <div className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-[61px] items-center rounded-lg bg-[#F9F9F9]">
            <span
              className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
            >
              {integrations.length > 10 ? 10 : integrations.length}
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
        isOpen={openModalIntegracoes}
        onClose={() => setOpenModalIntegracoes(false)}
      >
        <RegisterIntegrations
          onClose={() => setOpenModalIntegracoes(false)}
          findData={() => fecthIntegrations()}
          listTypesIntegrations={listTypesIntegrations}
        />
      </ModalUp>
      <ModalUp
        isOpen={openModalEditIntegrations}
        onClose={() => setOpenModalEditIntegrations(false)}
      >
        <EditIntegrations
          selectedIntegration={selectedIntegration}
          onClose={() => setOpenModalEditIntegrations(false)}
          findData={() => fecthIntegrations()}
        />
      </ModalUp>
      {/* <ModalLeft
        isOpen={openModalProfileuUnit}
        onClose={() => setOpenModalProfileuUnit(false)}
      >
        <ProfileUnitHealth unit={selectedUnit} />
      </ModalLeft> */}
    </div>
  )
}

export default Integrations
