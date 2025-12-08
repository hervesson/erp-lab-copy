'use client'

import { Outfit300 } from '@/fonts'

export const Status = ({ active }) => {
  if (active) {
    return (
      <div
        className={`flex h-[26px] w-[46px] items-center justify-center rounded-[50px] bg-[#E9FDEE] text-[14px] text-[#2CB04B] ${Outfit300.className}`}
      >
        Ativo
      </div>
    )
  }

  return (
    <div
      className={`flex h-[26px] w-[59px] items-center justify-center rounded-[50px] bg-[#E7E7E7] text-[14px] text-[#636363] ${Outfit300.className}`}
    >
      Inativo
    </div>
  )
}
