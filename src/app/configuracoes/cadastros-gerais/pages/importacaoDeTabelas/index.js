'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { DeleteAccountBank, listBankAccount } from '@/helpers'
import {
  AddSquare,
  Book,
  ClipboardImport,
  DocumentDownload,
  Edit2,
  Trash,
} from 'iconsax-reactjs'
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

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm] = useState('')
  const [status] = useState({ id: '', label: 'Status: Todos' })
  const [type] = useState({ id: '', label: 'Tipos: Todas' })

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
    <div className="flex flex-1 flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <ClipboardImport size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Tabelas
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[76px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="flex flex-1 gap-3 rounded-[8px] px-[16px]">
          <div className="flex flex-1 items-center justify-around gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="flex h-[44px] w-[609px] items-center justify-center gap-3 rounded-[8px] border border-[#A9A9A9] bg-[#FFF]">
                <DocumentDownload size="28" color="#737373" />
                <span
                  className={`${Outfit300.className} text-[#222] uppercase`}
                >
                  Importar arquivo
                </span>
              </div>
            </div>

            <CustomSelect
              select={{ id: 'todas', label: 'Status: Todas' }}
              // setSelect={(e) => findDataPerStatus(e)}
              options={[
                { id: '', label: 'Todas' },
                { id: 'ativas', label: 'Ativas' },
                { id: 'inativas', label: 'Inativas' },
              ]}
              placeholder={'Selecione uma unidade'}
              className={'h-[44px] border border-[#BBBBBB] bg-[#FFF]'}
            />

            <button
              type="botton"
              // onClick={() => setOpenModalCategorie(true)}
              className={`flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
            >
              <AddSquare size="32" color="#ffffff" variant="Bulk" />
              <span className={`${Outfit400.className} text-[16px] text-white`}>
                ADICIONAR
              </span>
            </button>
          </div>
        </div>
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-[48px] bg-[#D4D4D4]">
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
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Unidade associada
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
                className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]"
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
                  {item.unidades_vinculadas
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
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
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
