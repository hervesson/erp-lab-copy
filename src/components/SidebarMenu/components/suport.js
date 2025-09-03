import { Outfit400 } from '@/fonts'
import { AddSquare, ArrowCircleRight, Whatsapp } from 'iconsax-reactjs'

const Suport = () => {
  return (
    <div className="flex w-full flex-col gap-5 px-[12px]">
      <div className="flex-1 rounded-[8px] bg-[#171717]">
        Área para chat integrado
      </div>

      <div className="flex flex-col gap-[16px] pb-[12px]">
        <button
          className={`${Outfit400.className} flex h-[44px] items-center justify-between rounded-[8px] border border-[#0F9B7F] px-2`}
        >
          <div className="flex items-center gap-2">
            <AddSquare size="28" color="#0F9B7F" variant="Bulk" />
            <span className="text-[#0F9B7F] uppercase">Falar no WhatsApp</span>
          </div>
          <Whatsapp size="28" color="#0F9B7F" variant="TwoTone" />
        </button>
        <button
          className={`${Outfit400.className} flex h-[44px] items-center justify-between rounded-[8px] border border-[#0F9B7F] px-2`}
        >
          <div className="flex items-center gap-2">
            <AddSquare size="28" color="#0F9B7F" variant="Bulk" />
            <span className="text-[#0F9B7F] uppercase">Dúvidas frequentes</span>
          </div>
          <ArrowCircleRight size="28" color="#0F9B7F" variant="Outline" />
        </button>
      </div>
    </div>
  )
}

export default Suport
