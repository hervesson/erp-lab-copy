import { Outfit400 } from '@/fonts'
import { AddSquare } from 'iconsax-reactjs'

export default function Fila() {
  return (
    <div className="mt-[8px] mr-[8px] flex h-screen flex-1 rounded-[20px] bg-white">
      <div className="flex h-[84px] w-full items-center justify-between border-b-1 border-[#E7E7E7]">
        <span
          className={`${Outfit400.className} ml-[32px] text-[20px] text-[#000] uppercase`}
        >
          ATENDIMENTO
        </span>
        <button
          className={`mr-[32px] flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
        >
          <AddSquare size="32" color="#ffffff" variant="Bulk" />
          <span className={`${Outfit400.className} text-[16px] text-white`}>
            CADASTRAR
          </span>
        </button>
      </div>
    </div>
  )
}
