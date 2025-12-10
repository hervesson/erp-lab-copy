'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  DeleteAcquirers,
  ListAcquirers,
  listAllUnits,
  ToggleStatusAcquirers,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Dropdown, DropdownItem } from 'flowbite-react'
import { Book, Edit2, More, Profile2User, SearchStatus } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Status } from './components/status'

// Components
import EditAcquirers from './modal-content/editAcquirers'
import ProfileBankAccount from './modal-content/profileBankAccount'
import RegisterAcquirers from './modal-content/registerAcquirers'

const Adquirentes = ({ modalRegisterAcquirers, setModalRegisterAcquirers }) => {
  const [selectedAcquirers, setSelectedAcquirers] = useState({})

  const [units, setUnits] = useState([])

  const [listAcquirers, setListAcquirers] = useState([])

  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState({ id: '', label: 'Status: Todos' })
  const [unit, setUnit] = useState({ id: '', label: 'Unidade: Todas' })

  // modal
  const [modalEditBank, setModalEditBank] = useState(false)
  const [openModalProfileBankAccount, setOpenModalProfileBankAccount] =
    useState(false)

  useEffect(() => {
    const findData = async () => {
      try {
        const [unts, sls] = await Promise.all([
          listAllUnits(1, '', 100000),
          ListAcquirers(),
        ])

        const valuesUnits = unts.data.data.map((item) => {
          return {
            id: item.id,
            label: item.nomeUnidade,
          }
        })

        if (unts.success) {
          setUnits(valuesUnits)
        }
        if (sls.success) {
          setListAcquirers(sls.data.data)
          setTotal(sls.data.meta.total)
        }
      } catch (error) {
        console.log('erro', error)
      }
    }
    findData()
  }, [])

  const fetchAcquirers = async (ter, unt, stt, pg, limit) => {
    try {
      const response = await ListAcquirers(ter, unt.id, stt.id, pg, limit)
      setListAcquirers(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const response = await ListAcquirers(
        searchTerm,
        unit.id,
        status.id,
        props,
        10,
      )
      setListAcquirers(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por status
  const findDataPerStatus = async (props) => {
    setCurrentPage(1)
    const sts = {
      Todos: { id: '', label: 'Status: Todos' },
      Ativas: { id: 'ativo', label: 'Status: Ativas' },
      Inativas: { id: 'inativo', label: 'Status: Inativas' },
    }

    setStatus(sts[props.label])

    try {
      const response = await ListAcquirers(
        searchTerm,
        unit.id,
        props.id,
        currentPage,
        10,
      )
      setListAcquirers(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // filtrar por tipo
  const findDataPerUnit = async (props) => {
    setCurrentPage(1)

    setUnit({ id: props.id, label: `Unidade: ${props.label}` })

    try {
      const response = await ListAcquirers(
        searchTerm,
        props.id,
        status.id,
        currentPage,
        10,
      )
      setListAcquirers(response.data.data)
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
      const response = await ListAcquirers(
        props,
        unit.id,
        status.id,
        currentPage,
        10,
      )
      setListAcquirers(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const deleteAdquirente = async (bank) => {
    const response = await DeleteAcquirers(bank.id)
    if (response.success) {
      fetchAcquirers(searchTerm, unit, status, currentPage, 10)
    } else {
      toast.error('Erro ao tentar deletar unidade', {
        position: 'top-right',
      })
    }
  }

  const handleChangeBox = async (id) => {
    const resp = await ToggleStatusAcquirers(id)
    if (resp.success) {
      fetchAcquirers(searchTerm, unit, status, currentPage, 10)
    } else {
      toast.error('Erro ao tentar deletar unidade', {
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
              <Profile2User size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Adquirentes
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
            { id: 'ativo', label: 'Ativas' },
            { id: 'inativo', label: 'Inativas' },
          ]}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <CustomSelect
          select={unit}
          setSelect={(e) => findDataPerUnit(e)}
          options={[{ id: '', label: 'Todos' }, ...units]}
          placeholder={'Selecione a unidade'}
          className={'bg-[#F9F9F9]'}
        />
        <div
          className={`flex h-10 flex-3 items-center rounded-lg px-2 ${
            isFocusedSearch
              ? 'border border-[#0F9B7F]'
              : 'border border-[#BBBBBB]'
          }`}
        >
          <input
            placeholder="Pesquisar"
            onChange={handleChangeUnit}
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
              Nome do adquirente
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Descrição
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Conta associada
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Unidades associadas
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
          {listAcquirers?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item?.codigo_interno}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item?.nome_adquirente}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.descricao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.conta_bancaria.banco?.codigo} -{' '}
                  {item?.conta_bancaria.banco?.nome}{' '}
                  {item?.conta_bancaria.numero_conta}-
                  {item?.conta_bancaria.digito_conta}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.unidades_associadas
                    ?.map((u) => u?.unidade_saude?.nomeUnidade)
                    .filter(Boolean)
                    .join(', ') || '—'}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Status active={item?.status} />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setModalEditBank(true)
                      setSelectedAcquirers(item)
                    }}
                  >
                    <Edit2 size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
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
                        onClick={() => handleChangeBox(item.id)}
                      >
                        Ativar/Desativar
                      </DropdownItem>
                      <DropdownItem
                        className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                        onClick={() => deleteAdquirente(item)}
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
              {listAcquirers.length > 10 ? 10 : listAcquirers.length}
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
        isOpen={modalRegisterAcquirers}
        onClose={() => setModalRegisterAcquirers(false)}
      >
        <RegisterAcquirers
          onClose={() => setModalRegisterAcquirers(false)}
          findData={() =>
            fetchAcquirers(searchTerm, unit, status, currentPage, 10)
          }
        />
      </ModalUp>
      <ModalUp isOpen={modalEditBank} onClose={() => setModalEditBank(false)}>
        <EditAcquirers
          onClose={() => setModalEditBank(false)}
          acquirers={selectedAcquirers}
          findData={() =>
            fetchAcquirers(searchTerm, unit, status, currentPage, 10)
          }
        />
      </ModalUp>
      <ModalLeft
        isOpen={openModalProfileBankAccount}
        onClose={() => setOpenModalProfileBankAccount(false)}
      >
        <ProfileBankAccount account={selectedAcquirers} />
      </ModalLeft>
      <ToastContainer />
    </div>
  )
}

export default Adquirentes
