'use client'
import { Outfit300 } from '@/fonts'

export const Status = ({ active }) => {
  const status = {
    ativo: (
      <div
        className={`flex h-[26px] w-[46px] items-center justify-center rounded-[50px] bg-[#E9FDEE] text-[14px] text-[#2CB04B] ${Outfit300.className}`}
      >
        Ativo
      </div>
    ),
    inativo: (
      <div
        className={`flex h-[26px] w-[59px] items-center justify-center rounded-[50px] bg-[#E7E7E7] text-[14px] text-[#636363] ${Outfit300.className}`}
      >
        Inativo
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
