import CustomSelect from '@/components/CustomSelect'
import ModalUp from '@/components/ModalUp'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  DeleteIntegracao,
  ListIntegrations,
  ToggleStatusIntegration,
} from '@/helpers'
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
import { IsActive } from '../../../../../components/IsActive'

// Components
import { toast } from 'react-toastify'
import EditIntegrations from './modal-content/editiIntegrations'
import RegisterIntegrations from './modal-content/registerIntegrations'

const Integrations = ({ openModalIntegracoes, setOpenModalIntegracoes }) => {
  const [integrations, setIntegrations] = useState([])
  const [selectedIntegration, setSelectedIntegrations] = useState({})
  const [openModalEditIntegrations, setOpenModalEditIntegrations] =
    useState(false)

  useEffect(() => {
    const fecthIntegrations = async () => {
      const result = await ListIntegrations()
      setIntegrations(result.data)
    }

    fecthIntegrations()
  }, [])

  const fecthIntegrations = async () => {
    const result = await ListIntegrations()
    setIntegrations(result.data)
  }

  const deleteIntegration = async (item) => {
    const result = await DeleteIntegracao(item.id)

    if (result.success) {
      fecthIntegrations()
    } else {
      toast.error('Ocorreu um erro ao deletar integração', {
        position: 'top-right',
      })
    }
  }

  const toggleStatus = async (item) => {
    const result = await ToggleStatusIntegration(item.id)

    if (result.success) {
      fecthIntegrations()
    } else {
      toast.error('Ocorreu um erro ao deletar integração', {
        position: 'top-right',
      })
    }
    fecthIntegrations()
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
                160
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
          select={{ id: 1, label: 'Status: Todos' }}
          setSelect={() => null}
          options={[
            { id: 1, label: 'Status: Todos' },
            { id: 2, label: '2' },
          ]}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <div className="flex h-10 flex-2 items-center rounded-lg border border-[#BBBBBB] px-2">
          <input
            placeholder="Pesquisar"
            className={`h-full w-full rounded-lg ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
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
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
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
        isOpen={openModalIntegracoes}
        onClose={() => setOpenModalIntegracoes(false)}
      >
        <RegisterIntegrations
          onClose={() => setOpenModalIntegracoes(false)}
          findData={() => fecthIntegrations()}
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
