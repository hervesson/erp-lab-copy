import { Outfit300 } from '@/fonts'

export const IsActive = (active) => {
  return active ? (
    <div
      className={`flex h-[26px] w-[39px] items-center justify-center rounded-[50px] bg-[#E9FDEE] text-[14px] text-[#2CB04B] ${Outfit300.className}`}
    >
      Sim
    </div>
  ) : (
    <div
      className={`flex h-[26px] w-[39px] items-center justify-center rounded-[50px] bg-[#E7E7E7] text-[14px] text-[#636363] ${Outfit300.className}`}
    >
      Não
    </div>
  )
}
