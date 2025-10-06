'use client'
import { Outfit400 } from '@/fonts'
import { TickCircle } from 'iconsax-reactjs'

const SucessForgotPassword = ({ onClose }) => {
  return (
    <div className="h-[240px] w-[500px] rounded-[12px] bg-white">
      <div className="h-[12px] rounded-[12px] bg-[#E9FDEE]" />
      <div className="flex flex-col gap-[32px] p-[32px]">
        <div className="flex flex-col gap-2">
          <TickCircle size="40" color="#2CB04B" variant="Bulk" />
          <p className={`${Outfit400.className} text-[20px]`}>
            Senha alterada com sucesso.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            className={`h-[44px] w-full rounded-[8px] bg-[#E7E7E7] text-[#3E3E3E] transition duration-300 hover:bg-[#222222] hover:text-[#FFF]`}
            type="buttom"
            onClick={() => onClose()}
          >
            <p className={`text-[16px] ${Outfit400.className}`}>ACESSAR</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SucessForgotPassword
