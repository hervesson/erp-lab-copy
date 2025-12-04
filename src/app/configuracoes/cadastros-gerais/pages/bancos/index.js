'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { DeleteAccountBank, listBankAccount } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Bank, Book, Edit2, SearchStatus, Trash } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Status } from './components/status'

// Components
import EditBank from './modal-content/editBank'
import ProfileBankAccount from './modal-content/profileBankAccount'
import RegisterBank from './modal-content/registerBank'

const Bancos = ({ modalRegisterBanks, setModalRegisterBanks }) => {
  const [selectedAccount, setSelectedAccount] = useState({})

  const [banks, setBanks] = useState([])
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [status, setStatus] = useState({ id: '', label: 'Status: Todos' })
  const [type, setType] = useState({ id: '', label: 'Tipos: Todas' })

  // modal
  const [modalEditBank, setModalEditBank] = useState(false)
  const [openModalProfileBankAccount, setOpenModalProfileBankAccount] =
    useState(false)

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await listBankAccount()
        setBanks(response.data.data)
        setTotal(response.data.meta.total)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchBanks()
  }, [])

  const fetchBanks = async () => {
    try {
      const response = await listBankAccount()
      setBanks(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const response = await listBankAccount(
        searchTerm,
        type.id,
        status.id,
        props,
        10,
      )
      setBanks(response.data.data)
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
      Ativas: { id: 'ativa', label: 'Status: Ativas' },
      Inativas: { id: 'inativa', label: 'Status: Inativas' },
    }

    setStatus(sts[props.label])

    try {
      const response = await listBankAccount(
        searchTerm,
        type.id,
        props.id,
        currentPage,
        10,
      )
      setBanks(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // filtrar por tipo
  const findDataPerType = async (props) => {
    setCurrentPage(1)

    const typ = {
      Todas: { id: '', label: 'Tipo: Todas' },
      Corrente: { id: 'corrente', label: 'Tipo: Corrente' },
      Poupança: { id: 'poupanca', label: 'Tipo: Poupança' },
    }

    setType(typ[props.label])

    try {
      const response = await listBankAccount(
        searchTerm,
        props.id,
        status.id,
        currentPage,
        10,
      )
      setBanks(response.data.data)
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
      const response = await listBankAccount(
        props,
        type.id,
        status.id,
        currentPage,
        10,
      )
      setBanks(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const deleteAccountBank = async (bank) => {
    const response = await DeleteAccountBank(bank.id)
    if (response.success) {
      fetchBanks()
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
              <Bank size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Bancos
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
            { id: 'ativas', label: 'Ativas' },
            { id: 'inativas', label: 'Inativas' },
          ]}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <CustomSelect
          select={type}
          setSelect={(e) => findDataPerType(e)}
          options={[
            { id: '', label: 'Todas' },
            { id: 'corrente', label: 'Corrente' },
            { id: 'poupanca', label: 'Poupança' },
          ]}
          placeholder={'Tipos de exames: todos'}
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
              Codigo do banco
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Banco
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
          {banks?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item?.banco.codigo}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item?.banco?.nome}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.observacoes}
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
                      deleteAccountBank(item)
                    }}
                  >
                    <Trash size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setModalEditBank(true)
                      setSelectedAccount(item)
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
                      setOpenModalProfileBankAccount(true)
                      setSelectedAccount(item)
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
      <div className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-[61px] items-center rounded-lg bg-[#F9F9F9]">
            <span
              className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
            >
              {banks.length > 10 ? 10 : banks.length}
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
        isOpen={modalRegisterBanks}
        onClose={() => setModalRegisterBanks(false)}
      >
        <RegisterBank
          onClose={() => setModalRegisterBanks(false)}
          findData={() => fetchBanks()}
        />
      </ModalUp>
      <ModalUp isOpen={modalEditBank} onClose={() => setModalEditBank(false)}>
        <EditBank
          onClose={() => setModalEditBank(false)}
          account={selectedAccount}
          findData={() => fetchBanks()}
        />
      </ModalUp>
      <ModalLeft
        isOpen={openModalProfileBankAccount}
        onClose={() => setOpenModalProfileBankAccount(false)}
      >
        <ProfileBankAccount account={selectedAccount} />
      </ModalLeft>
      <ToastContainer />
    </div>
  )
}

export default Bancos
