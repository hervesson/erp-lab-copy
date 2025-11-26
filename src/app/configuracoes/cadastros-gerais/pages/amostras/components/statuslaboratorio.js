'use client'
import { Outfit300 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

export const StatusLaboratorio = ({ active }) => {
  const status = {
    true: (
      <div
        className={`flex h-7 items-center rounded-lg bg-[#E9FDEE] px-2 text-[14px] text-[#2CB04B] ${Outfit300.className}`}
      >
        <InfoCircle size="16" color="#2CB04B" />
        Ativo
      </div>
    ),
    false: (
      <div
        className={`flex h-7 items-center rounded-lg bg-[#E7E7E7] px-2 text-[14px] text-[#737373] ${Outfit300.className}`}
      >
        <InfoCircle size="16" color="#737373" />
        Ainda não validado
      </div>
    ),
    em_validacao: (
      <div
        className={`flex h-[26px] w-[105px] items-center justify-center rounded-[50px] bg-[#FFECDE] text-[14px] text-[#F9852E] ${Outfit300.className}`}
      >
        Em validação
      </div>
    ),
  }

  return status[active]
}
