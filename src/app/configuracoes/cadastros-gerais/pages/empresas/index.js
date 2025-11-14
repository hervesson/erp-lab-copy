'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  ActiveStatusEnterprise,
  DeleteEnterprise,
  InactiveStatusEnterprise,
  ListAllEnterprises,
  ListEnterprises,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Dropdown, DropdownItem } from 'flowbite-react'
import { Book, Briefcase, Edit2, More, SearchStatus } from 'iconsax-reactjs'
import { useEffect, useMemo, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { IsActive } from '../../../../../components/IsActive'

import EditEnterprise from './modal-content/editEnterprise'
import RegisterEnterprise from './modal-content/registerEnterprise'

const Convenios = ({
  openModalRegisterCompanies,
  setModalRegisterCompanies,
  page,
  setPage,
}) => {
  const [selectedEnterprise, setSelectedEnterprise] = useState({})

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // modal
  const [modalEditCompanies, setModalEditCompanies] = useState(false)

  const [listEnterprises, setListEnterprises] = useState([])
  const [total, setTotal] = useState([])

  const [allTotal, setAllTotal] = useState({
    PRESTADORES_SERVICOS: 0,
    FORNECEDORES: 0,
    TELEMEDICINA: 0,
    LABORATORIO_APOIO: 0,
    CONVENIOS: 0,
  })

  // filters
  const [status, setStatus] = useState({ id: '', label: 'Tipos: Todas' })
  const [searchTerm, setSearchTerm] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const enterprises = useMemo(
    () => ({
      convenios: 'CONVENIOS',
      laboratorioDeApoio: 'LABORATORIO_APOIO',
      telemedicina: 'TELEMEDICINA',
      fornecedores: 'FORNECEDORES',
      prestadoresDeServico: 'PRESTADORES_SERVICOS',
    }),
    [],
  )

  useEffect(() => {
    const fetchListEnterprises = async () => {
      try {
        const response = await ListAllEnterprises()
        const CONVENIOS = response?.data?.filter(
          (word) => word.tipoEmpresa === 'CONVENIOS',
        )
        const PRESTADORES_SERVICOS = response?.data?.filter(
          (word) => word.tipoEmpresa === 'PRESTADORES_SERVICOS',
        )
        const FORNECEDORES = response?.data?.filter(
          (word) => word.tipoEmpresa === 'FORNECEDORES',
        )
        const TELEMEDICINA = response?.data?.filter(
          (word) => word.tipoEmpresa === 'TELEMEDICINA',
        )
        const LABORATORIO_APOIO = response?.data?.filter(
          (word) => word.tipoEmpresa === 'LABORATORIO_APOIO',
        )
        setAllTotal({
          PRESTADORES_SERVICOS: PRESTADORES_SERVICOS.length,
          FORNECEDORES: FORNECEDORES.length,
          TELEMEDICINA: TELEMEDICINA.length,
          LABORATORIO_APOIO: LABORATORIO_APOIO.length,
          CONVENIOS: CONVENIOS.length,
        })
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchListEnterprises()
  }, [])

  useEffect(() => {
    const fetchEnterprises = async () => {
      try {
        const response = await ListEnterprises('', enterprises[page], '', 1, 10)
        setListEnterprises(response.data.data)
        setTotal(response.data.meta.total)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchEnterprises()
  }, [enterprises, page])

  const fetchEnterprises = async (
    search = '',
    enterprise = enterprises[page],
    sts = '',
    pg,
  ) => {
    try {
      const response = await ListEnterprises(search, enterprise, sts, pg, 10)
      setListEnterprises(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const findDataPerPage = async () => {
    setCurrentPage()
    try {
      const response = await ListEnterprises(
        searchTerm,
        enterprises[page],
        status.id,
        currentPage,
        10,
      )
      setListEnterprises(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por termo pesquisado
  const handleChangeEnterprise = (e) => {
    setSearchTerm(e.target.value)
    debounceChange(e.target.value)
  }

  const debounceChange = useDebounce(handler, 800)

  async function handler(props) {
    setCurrentPage(1)

    try {
      const response = await ListEnterprises(
        props,
        enterprises[page],
        status.id,
        currentPage,
        10,
      )
      setListEnterprises(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // filtrar por tipo
  const findDataPerStatus = async (props) => {
    setCurrentPage(1)

    const typ = {
      Todas: { id: '', label: 'Tipo: Todas' },
      Ativas: { id: true, label: 'Tipo: Inativas' },
      Inativas: { id: false, label: 'Tipo: Ativas' },
    }

    setStatus(typ[props.label])

    try {
      const response = await ListEnterprises(
        searchTerm,
        enterprises[page],
        typ[props.label].id,
        currentPage,
        10,
      )
      setListEnterprises(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const toggleEnterprise = async (unit) => {
    if (unit.ativo) {
      const result = await InactiveStatusEnterprise(unit.id)
      if (!result.success) {
        toast.error('Erro ao inativar unidade', {
          position: 'top-right',
        })
      }
    } else {
      const result = await ActiveStatusEnterprise(unit.id)
      if (!result.success) {
        toast.error('Erro ao ativar unidade', {
          position: 'top-right',
        })
      }
    }

    fetchEnterprises(searchTerm, enterprises[page], status.id, currentPage)
  }

  const deleteEnterprise = async (unit) => {
    const result = await DeleteEnterprise(unit.id)
    if (!result.success) {
      toast.error('Erro ao inativar unidade', {
        position: 'top-right',
      })
    }

    fetchEnterprises(searchTerm, enterprises[page], status.id, currentPage)
  }

  return (
    <div className="flex flex-1 flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <Briefcase size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {allTotal.CONVENIOS}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Convênios
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {allTotal.LABORATORIO_APOIO}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Laboratórios de apoio
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {allTotal.TELEMEDICINA}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Telemedicina
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {allTotal.FORNECEDORES}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Fornecedores
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {allTotal.PRESTADORES_SERVICOS}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Prestadores de seviços
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
            { id: '', label: 'Todas' },
            { id: 'ativas', label: 'Ativas' },
            { id: 'inativas', label: 'Inativas' },
          ]}
          placeholder={'Tipos de exames: todos'}
          className={'bg-[#F9F9F9]'}
        />
        <div
          className={`flex h-[40px] flex-2 items-center rounded-[8px] px-2 ${
            isFocusedSearch
              ? 'border-[1px] border-[#0F9B7F]'
              : 'border border-[#BBBBBB]'
          }`}
        >
          <input
            placeholder="Pesquisar"
            onChange={handleChangeEnterprise}
            className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
            onFocus={() => setIsFocusedSearch(true)}
            onBlur={() => setIsFocusedSearch(false)}
          />
          <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
        </div>
      </div>

      <div>
        <div className="flex h-[64px] items-end gap-8 bg-[#F9F9F9] px-[48px]">
          <button
            type="button"
            onClick={() => setPage('convenios')}
            className={`${Outfit400.className} ${page === 'convenios' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            convênios
          </button>
          <button
            type="button"
            onClick={() => {
              setPage('laboratorioDeApoio')
            }}
            className={`${Outfit400.className} ${page === 'laboratorioDeApoio' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Laboratórios de apoio
          </button>
          <button
            type="button"
            onClick={() => setPage('telemedicina')}
            className={`${Outfit400.className} ${page === 'telemedicina' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Telemedicina
          </button>
          <button
            type="button"
            onClick={() => setPage('fornecedores')}
            className={`${Outfit400.className} ${page === 'fornecedores' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Fornecedores
          </button>
          <button
            type="button"
            onClick={() => setPage('prestadoresDeServico')}
            className={`${Outfit400.className} ${page === 'prestadoresDeServico' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Prestadores de serviço
          </button>
        </div>
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-[48px] bg-[#D4D4D4]">
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Codigo interno
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Nome fantasia
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                CNPJ
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                E-mail comercial
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Cidade/Estado
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
            {listEnterprises?.map((item, index) => {
              return (
                <tr
                  className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]"
                  key={index.toString()}
                >
                  <td
                    className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                  >
                    {item?.codigoInterno}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                  >
                    {item?.nomeFantasia}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    {item?.cnpj}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    {item?.emailComercial}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    {item?.cidade}/{item?.estado}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <IsActive active={item?.ativo} />
                    </div>
                  </td>
                  <td>
                    <div
                      className="flex h-full items-center justify-center"
                      onClick={() => {
                        setSelectedEnterprise(item)
                        setModalEditCompanies(true)
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
                        setSelectedEnterprise(item)
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
                          onClick={() => toggleEnterprise(item)}
                        >
                          Ativar/Desativar
                        </DropdownItem>
                        <DropdownItem
                          className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                          onClick={() => deleteEnterprise(item)}
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
      </div>
      <div className="flex items-center gap-3">
        <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
          <span
            className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
          >
            {listEnterprises.length > 10 ? 10 : listEnterprises.length}
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
      <ModalUp
        isOpen={openModalRegisterCompanies}
        onClose={() => setModalRegisterCompanies(false)}
      >
        <RegisterEnterprise
          onClose={() => setModalRegisterCompanies(false)}
          setPage={(e) => setPage(e)}
          findData={() => fetchEnterprises()}
        />
      </ModalUp>
      <ModalUp
        isOpen={modalEditCompanies}
        onClose={() => setModalEditCompanies(false)}
      >
        <EditEnterprise
          onClose={() => setModalEditCompanies(false)}
          selectedEnterprise={selectedEnterprise}
          findData={() => fetchEnterprises()}
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

export default Convenios
