'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  AddSquare,
  Bill,
  Book,
  Calendar,
  CallCalling,
  ClipboardText,
  More,
  Profile2User,
  Whatsapp,
} from 'iconsax-reactjs'
import Image from 'next/image'
import { useState } from 'react'
import NovoPaciente from './modal-content/novopaciente'
import ProfilePatient from './modal-content/perfilpaciente'

import checkGreen from '../../../../public/assets/images/directions.png'

export default function Pacientes() {
  const [openModalAddPatient, setOpenModalAddPatient] = useState(false)
  const [openModalProfilePatient, setOpenModalProfilePatient] = useState(false)

  return (
    <div className="mt-[8px] mr-[8px] flex h-screen flex-1 flex-col rounded-[20px] bg-white">
      <div className="flex h-[84px] w-full items-center justify-between border-b-1 border-[#E7E7E7]">
        <span
          className={`${Outfit400.className} ml-[32px] text-[20px] text-[#000] uppercase`}
        >
          PACIENTES
        </span>
        <button
          type="botton"
          onClick={() => setOpenModalAddPatient(true)}
          className={`mr-[32px] flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
        >
          <AddSquare size="32" color="#ffffff" variant="Bulk" />
          <span className={`${Outfit400.className} text-[16px] text-white`}>
            CADASTRAR
          </span>
        </button>
      </div>

      <div className="mt-[16px] px-[32px]">
        <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
          <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
            <div className="flex gap-3 rounded-[8px] px-[8px]">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
                <Profile2User size="28" color="#A1A1A1" />
              </div>
              <div className="flex flex-col justify-around">
                <span
                  className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
                >
                  500
                </span>
                <span className={`${Outfit300.className} text-[#737373]`}>
                  Pacientes
                </span>
              </div>
            </div>
          </div>
        </div>

        <table className="mt-[16px] w-full">
          <thead className="sticky top-0">
            <tr className="h-[48px] bg-[#D4D4D4]">
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Image src={checkGreen} alt="bgfooter" />
                  Codigo interno
                </div>
              </th>

              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Image src={checkGreen} alt="bgfooter" />
                  Nome do paciente
                </div>
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                CPF
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Prontuário
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Email
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Telefone
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Cidade
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Laudos
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Atendimento
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Agendar/Orçar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Ligar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                WhatsApp
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
            <tr className="h-[64px] bg-white py-[5px]">
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                PAC1234
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                Kalebe da Silva Jardins
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                999.999.999-99
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                12345678
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                email@email.com
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                (99) 99999-9999
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                São Paulo
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <ClipboardText size="28" color="#737373" />
                </div>
              </td>
              <td>
                <div className="flex h-full items-center justify-center">
                  <Bill size="28" color="#737373" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <Calendar size="28" color="#737373" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <CallCalling size="28" color="#737373" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <Whatsapp size="28" color="#737373" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div
                  className="flex h-full items-center justify-center"
                  onClick={() => setOpenModalProfilePatient(true)}
                >
                  <Book size="28" color="#737373" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <More size="28" color="#737373" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalUp
        isOpen={openModalAddPatient}
        onClose={() => setOpenModalAddPatient(false)}
      >
        <NovoPaciente onClose={() => setOpenModalAddPatient(false)} />
      </ModalUp>
      <ModalLeft
        isOpen={openModalProfilePatient}
        onClose={() => setOpenModalProfilePatient(false)}
      >
        <ProfilePatient />
      </ModalLeft>
    </div>
  )
}
