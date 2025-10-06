'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import { Outfit300, Outfit400 } from '@/fonts'
import { Dropdown, DropdownItem } from 'flowbite-react'
import {
  ArrowDown2,
  Calendar,
  Edit2,
  More,
  SearchStatus,
} from 'iconsax-reactjs'
import Image from 'next/image'
import { useState } from 'react'

import PassOn from './modal-content/passOn'
import PayBills from './modal-content/payBills'
import RegisterAccountPayable from './modal-content/registerAccountsPayable'
import ViewAccount from './modal-content/viewAccount'

import checkGreen from '../../../../public/assets/images/directions.png'

export default function Fila() {
  const [openModalRegisterAccount, setOpenModalRegisterAccount] =
    useState(false)
  const [openModalPayBills, setOpenModalPayBills] = useState(false)
  const [openModalPassOn, setOpenModalPassOn] = useState(false)
  const [openModalViewAccount, setOpenModalViewAccount] = useState(false)

  return (
    <div className="mt-[8px] mr-[8px] flex h-screen flex-1 flex-col rounded-[20px] bg-white">
      <div className="flex h-[84px] w-full items-center justify-between border-b-1 border-[#E7E7E7]">
        <span
          className={`${Outfit400.className} ml-[32px] text-[20px] text-[#000] uppercase`}
        >
          CONTABILIDADE
        </span>
      </div>
      <div className="mt-[16px] px-[32px]">
        <div className="flex h-[40px] max-w-max items-center gap-2 rounded-[8px] bg-[#F9F9F9]">
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#171717] px-2 text-[14px] text-white`}
          >
            Contas a pagar
          </button>
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#F9F9F9] px-2 text-[14px] text-[#636363]`}
          >
            Contas a receber
          </button>
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#F9F9F9] px-2 text-[14px] text-[#636363]`}
          >
            Conciliação
          </button>
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#F9F9F9] px-2 text-[14px] text-[#636363]`}
          >
            Fechamento de caixa
          </button>
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#F9F9F9] px-2 text-[14px] text-[#636363]`}
          >
            Extrato
          </button>
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#F9F9F9] px-2 text-[14px] text-[#636363]`}
          >
            Fluxo de caixa
          </button>
          <button
            className={`${Outfit300.className} h-[36px] rounded-[8px] bg-[#F9F9F9] px-2 text-[14px] text-[#636363]`}
          >
            DRE
          </button>
        </div>
      </div>
      <div className="mt-[16px] flex gap-3 px-[32px]">
        <div className="flex h-[40px] flex-1 items-center rounded-[8px] border border-[#BBBBBB] px-2">
          <input
            placeholder="Pesquisar"
            className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] outline-0`}
          />
          <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
        </div>
        <div className="flex items-center gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Gerar:
          </span>
          <button className="flex h-[44px] items-center justify-evenly rounded-[8px] bg-[#E0FFF9] px-2">
            <span className={`${Outfit400.className} text-[#0F9B7F]`}>
              RELATÓRIO
            </span>
          </button>
          <button
            type="button"
            className="flex h-[44px] items-center justify-evenly rounded-[8px] border border-[#0F9B7F] px-2"
            onClick={() => setOpenModalPassOn(true)}
          >
            <span className={`${Outfit400.className} text-[#0F9B7F] uppercase`}>
              REPASSE
            </span>
          </button>
          <div className="h-[40px] border border-[#BBBBBB]" />
          <button
            type="button"
            className="flex h-[44px] items-center justify-evenly rounded-[8px] border border-[#0F9B7F] px-2"
            onClick={() => setOpenModalPayBills(true)}
          >
            <span className={`${Outfit400.className} text-[#0F9B7F] uppercase`}>
              PAGAR CONTAS
            </span>
          </button>
          <button
            type="button"
            className="flex h-[44px] items-center justify-evenly rounded-[8px] bg-[#0F9B7F] px-2"
            onClick={() => setOpenModalRegisterAccount(true)}
          >
            <span className={`${Outfit400.className} text-[#FFF] uppercase`}>
              CADASTRAR CONTA
            </span>
          </button>
        </div>
      </div>
      <div className="mt-[16px] flex w-full gap-3 px-[32px]">
        <div className="flex w-full items-center gap-[16px]">
          <div className="flex h-[40px] flex-1 items-center justify-between rounded bg-[#F9F9F9] px-2">
            <span className={`${Outfit400.className}`}>Status: todas</span>
            <ArrowDown2 size="28" color="#A1A1A1" />
          </div>
          <div className="flex h-[40px] flex-1 items-center justify-between rounded bg-[#F9F9F9] px-2">
            <span className={`${Outfit400.className}`}>Unidades: todas</span>
            <ArrowDown2 size="28" color="#A1A1A1" />
          </div>
          <div className="flex h-[40px] items-center justify-between gap-2 rounded bg-[#F9F9F9] px-2">
            <span className={`${Outfit400.className}`}>06/05/2025</span>
            <Calendar size="28" color="#A1A1A1" />
          </div>
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            A
          </span>
          <div className="flex h-[40px] items-center justify-between gap-2 rounded bg-[#F9F9F9] px-2">
            <span className={`${Outfit400.className}`}>06/05/2025</span>
            <Calendar size="28" color="#A1A1A1" />
          </div>
          <div className="flex h-[40px] flex-1 items-center justify-between rounded bg-[#F9F9F9] px-2">
            <span className={`${Outfit400.className}`}>
              Agrupar: por código interno
            </span>
            <ArrowDown2 size="28" color="#A1A1A1" />
          </div>
        </div>
      </div>
      <div className="mt-[16px] flex w-full gap-3 px-[32px]">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-[48px] bg-[#D4D4D4]">
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Image src={checkGreen} alt="bgfooter" />
                  Emissão
                </div>
              </th>

              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                <div className="flex items-center gap-2">Competência</div>
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                <div className="gap- flex items-center">
                  <Image src={checkGreen} alt="bgfooter" />
                  Vencimento
                </div>
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Número do documento
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Empresa credora
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Unidade
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Valor bruto
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                valor líquido
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Parcela
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
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
                Opções
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            <tr className="h-[64px] bg-white py-[5px]">
              <td
                className={`text-[14px] ${Outfit300.className} border-l-4 border-red-500 text-center text-[#383838]`}
              >
                01/04/2025
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
              >
                05/2025
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                05/2025
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                999.999.999-99
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                Nome da empresa credora
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                Nome da unidade
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                R$ 2000,00
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                R$ 1833,00
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                1/3
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                status
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <Edit2 size="28" color="#737373" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => <More size="28" color="#737373" />}
                    placement="left-start"
                  >
                    <DropdownItem
                      className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                      onClick={() => setOpenModalViewAccount(true)}
                    >
                      Visualizar
                    </DropdownItem>
                    <DropdownItem
                      className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                    >
                      Pagar/Agendar
                    </DropdownItem>
                    <DropdownItem
                      className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                    >
                      Replicar conta
                    </DropdownItem>
                    <DropdownItem
                      className={`${Outfit300.className} text-[16px] text-[#8A8A8A]`}
                    >
                      Cancelar
                    </DropdownItem>
                  </Dropdown>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalUp
        isOpen={openModalRegisterAccount}
        onClose={() => setOpenModalRegisterAccount(false)}
      >
        <RegisterAccountPayable
          onClose={() => setOpenModalRegisterAccount(false)}
        />
      </ModalUp>
      <ModalUp
        isOpen={openModalPayBills}
        onClose={() => setOpenModalPayBills(false)}
      >
        <PayBills onClose={() => setOpenModalPayBills(false)} />
      </ModalUp>
      <ModalUp
        isOpen={openModalPassOn}
        onClose={() => setOpenModalPassOn(false)}
      >
        <PassOn onClose={() => setOpenModalPassOn(false)} />
      </ModalUp>
      <ModalLeft
        isOpen={openModalViewAccount}
        onClose={() => setOpenModalViewAccount(false)}
      >
        <ViewAccount />
      </ModalLeft>
    </div>
  )
}
