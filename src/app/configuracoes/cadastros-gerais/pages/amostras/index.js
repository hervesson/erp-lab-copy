'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { ListMethods } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import {
  Book,
  ChemicalGlass,
  Edit2,
  SearchStatus,
  Trash,
} from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { Status } from './components/status'

// Components
import EditMethod from './modal-content/editSamples'
import RegisterMethod from './modal-content/registerSamples'

const Methods = ({ modalRegisterAmostras, setModalRegisterAmostras }) => {
  const [selectedMethod, setSelectedMethod] = useState({})

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  const [listMethods, setListMethods] = useState([])
  const [total, setTotal] = useState([])

  // filters
  const [status, setStatus] = useState({ id: '', label: 'Status: Todas' })
  const [searchTerm, setSearchTerm] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [openModalEditMwthod, setOpenModalEditMethod] = useState(false)

  useEffect(() => {
    // const fetchMethods = async () => {
    //   try {
    //     const response = await ListMethods()
    //     setListMethods(response.data.data)
    //     setTotal(response.data.total)
    //   } catch (error) {
    //     console.error('Error fetching banks:', error)
    //   }
    // }
    // fetchMethods()
  }, [])

  const fetchMethods = async (trm = '', sts = '', pg = 1) => {
    try {
      const response = await ListMethods(trm, sts, pg, 10)
      setListMethods(response.data.data)
      setTotal(response.data.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
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
      const response = await ListMethods(searchTerm, props.id, currentPage, 10)
      setListMethods(response.data.data)
      setTotal(response.data.total)
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
      const response = await ListMethods(props, status.id, currentPage)
      setListMethods(response.data.data)
      setTotal(response.data.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const deleteMethod = (method) => {
    console.log(method)
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex h-[84px] items-center justify-between rounded-2xl bg-[#F9F9F9]">
        <div className="mx-2.5 flex h-16 w-full items-center rounded-lg bg-white">
          <div className="flex gap-3 rounded-lg px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F9F9F9]">
              <ChemicalGlass size="28" variant="twoTone" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Amostras
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <CustomSelect
          select={status}
          setSelect={(e) => findDataPerStatus(e)}
          options={[
            { id: '', label: 'Todos' },
            { id: 'ativo', label: 'Ativos' },
            { id: 'inativo', label: 'Inativos' },
            { id: 'em_validacao', label: 'Em validação' },
          ]}
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
              Nome da amostra
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Descrição
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Status
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Excluir
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
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {listMethods?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item.codigoInterno}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item.nome}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.descricao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Status active={item.status} />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  onClick={() => deleteMethod()}
                >
                  <div className="flex h-full items-center justify-center">
                    <Trash size="28" color="#737373" variant="Outline" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setOpenModalEditMethod(true)
                      setSelectedMethod(item)
                    }}
                  >
                    <Edit2 size="28" color="#737373" />
                  </div>
                </td>
                <td>
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      // setOpenModalProfileuUnit(true)
                      setSelectedMethod(item)
                    }}
                  >
                    <Book size="28" color="#737373" />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-[61px] items-center rounded-lg bg-[#F9F9F9]">
          <span
            className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
          >
            {listMethods.length > 10 ? 10 : listMethods.length}
          </span>
        </div>
        <span className={`${Outfit300.className} text-[16px] text-[#222]`}>
          de {total} registros
        </span>
      </div>

      <Pagination
        totalRecords={total}
        recordsPerPage={10}
        // onPageChange={(value) => findDataPerPage(value)}
        currentPage={currentPage} // Pass the current page state
      />
      <ModalUp
        isOpen={modalRegisterAmostras}
        onClose={() => setModalRegisterAmostras(false)}
      >
        <RegisterMethod
          onClose={() => setModalRegisterAmostras(false)}
          findData={() => fetchMethods()}
        />
      </ModalUp>
      <ModalUp
        isOpen={openModalEditMwthod}
        onClose={() => setOpenModalEditMethod(false)}
      >
        <EditMethod
          onClose={() => setOpenModalEditMethod(false)}
          selectedMethod={selectedMethod}
          findData={() => fetchMethods()}
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

export default Methods
