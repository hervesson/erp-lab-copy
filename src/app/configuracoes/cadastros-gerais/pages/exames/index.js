'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalUp from '@/components/ModalUp'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { listAllExams, listAllFields, UpdateStatusExam } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Dropdown, DropdownItem } from 'flowbite-react'
import {
  ArrowLeft2,
  ArrowRight2,
  Book,
  Edit2,
  Heart,
  More,
  SearchStatus,
} from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Status } from '../bancos/components/status'

// Components
import EditExam from './modal-content/editExam'
import RegisterExams from './modal-content/registerExam'

const UnitOfHealth = ({ openModalRegisterExams, setModalRegisterExams }) => {
  const [exams, setExams] = useState([])
  const [total, setTotal] = useState()
  const [selectedExam, setSelectedExam] = useState({})
  const [fields, setFields] = useState([])

  const [openModalEditExam, setOpenModalEditExam] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState({ id: '', label: 'Status: Todos' })
  // const [type, setType] = useState({ id: '', label: 'Tipos: Todas' })

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  useEffect(() => {
    const findFields = async () => {
      try {
        const [fields, exm] = await Promise.all([
          listAllFields(),
          listAllExams('', '', 1, 100000),
        ])

        setFields(fields?.data?.data)
        setExams(exm?.data?.data)
        setTotal(exm?.data?.total)
      } catch (error) {
        console.error(error)
      }
    }

    findFields()
  }, [])

  const findData = async (src = '', stt = '', pg, lim) => {
    try {
      const exm = await listAllExams(src, stt.id, pg, lim)

      setExams(exm?.data?.data)
      setTotal(exm?.data?.total)
    } catch (error) {
      console.error(error)
    }
  }

  // Filtrar por status
  const findDataPerStatus = async (props) => {
    setCurrentPage(1)
    const sts = {
      Todos: { id: '', label: 'Status: Todos' },
      Ativos: { id: 'ativa', label: 'Status: Ativos' },
      Inativos: { id: 'inativa', label: 'Status: Inativos' },
      'Em validação': { id: 'em_validacao', label: 'Status: Em validação' },
    }

    setStatus(sts[props.label])

    try {
      const exm = await listAllExams(searchTerm, props.id, 1, 10)

      setExams(exm?.data?.data)
      setTotal(exm?.data?.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
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

    try {
      const exm = await listAllExams(props, '', 1, 10)

      setExams(exm?.data?.data)
      setTotal(exm?.data?.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const toggleActiveExam = async (exam) => {
    const payload = {
      status: exam?.status === 'ativo' ? 'inativo' : 'ativo',
    }

    const result = await UpdateStatusExam(exam.id, payload)
    if (result.success) {
      findData(searchTerm, status, currentPage, 10)
    } else {
      toast.error('Erro ao mudar status do exame', {
        position: 'top-right',
      })
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex h-[84px] items-center justify-between rounded-2xl bg-[#F9F9F9]">
        <div className="mx-2.5 flex h-16 w-full items-center rounded-lg bg-white">
          <div className="flex gap-3 rounded-lg px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F9F9F9]">
              <Heart size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Exames
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <CustomSelect
          select={{ id: 1, label: 'Status: Todos' }}
          setSelect={(e) => findDataPerStatus(e)}
          options={[
            { id: '', label: 'Todos' },
            { id: 'ativo', label: 'Ativo' },
            { id: 'inativo', label: 'Inativo' },
          ]}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <CustomSelect
          select={{ id: 1, label: 'Tipo de exame: todos' }}
          setSelect={() => null}
          options={fields
            ?.find((element) => element?.nomeCampo === 'tipo_exames')
            ?.alternativas.map((i) => {
              return {
                id: i.id,
                label: i.textoAlternativa,
              }
            })}
          placeholder={'Tipos de exames: todos'}
          className={'bg-[#F9F9F9]'}
        />
        <CustomSelect
          select={{ id: 1, label: 'Especialidade: todos' }}
          setSelect={() => null}
          options={fields
            ?.find((element) => element?.nomeCampo === 'especialidade')
            ?.alternativas.map((i) => {
              return {
                id: i.id,
                label: i.textoAlternativa,
              }
            })}
          placeholder={'Tipos de exames: todos'}
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
              Codigo interno
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Nome do exame
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Especialidade
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Setor
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Prazo de entrega
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
              Opçoes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {exams?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item.codigo_interno}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item.nome}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {
                    fields
                      ?.find(
                        (element) => element?.nomeCampo === 'especialidade',
                      )
                      ?.alternativas?.find(
                        (ele) => ele?.id === item?.especialidade_id,
                      )?.textoAlternativa
                  }
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.setorAlternativa?.textoAlternativa}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.prazo_entrega_dias} dias úteis
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Status active={item.status} />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setOpenModalEditExam(true)
                      setSelectedExam(item)
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
                      setSelectedExam(item)
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
                        onClick={() => toggleActiveExam(item)}
                      >
                        Ativar/Desativar
                      </DropdownItem>
                      <DropdownItem
                        className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                        // onClick={() => deleteUnit(item)}
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
              01
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px] text-[#222]`}>
            de 01 registros
          </span>
        </div>

        <div className="flex items-center">
          <ArrowLeft2 size="28" color="#D9D9D9" />
          <div className="flex h-10 items-center justify-center rounded-lg bg-[#E0FFF9]">
            <span className={`${Outfit400.className} flex px-4 text-[#0F9B7F]`}>
              01
            </span>
          </div>
          <ArrowRight2 size="28" color="#D9D9D9" />
        </div>
      </div>
      <ModalUp
        isOpen={openModalRegisterExams}
        onClose={() => setModalRegisterExams(false)}
      >
        <RegisterExams
          onClose={() => setModalRegisterExams(false)}
          findData={() => findData('', '', 1, 10)}
        />
      </ModalUp>
      <ModalUp
        isOpen={openModalEditExam}
        onClose={() => setOpenModalEditExam(false)}
      >
        <EditExam
          onClose={() => setModalRegisterExams(false)}
          selectedExam={selectedExam}
          findData={() => findData('', '', 1, 10)}
        />
      </ModalUp>
      {/* <ModalLeft
        isOpen={openModalProfileuUnit}
        onClose={() => setOpenModalProfileuUnit(false)}
      >
        <ProfileUnitHealth unit={selectedUnit} />
      </ModalLeft> */}
      <ToastContainer />
    </div>
  )
}

export default UnitOfHealth
