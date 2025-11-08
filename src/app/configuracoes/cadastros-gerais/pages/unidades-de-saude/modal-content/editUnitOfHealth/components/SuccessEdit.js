import { Outfit400, Outfit500 } from '@/fonts'
import { TickCircle } from 'iconsax-reactjs'

const SuccessRegister = ({ onCloseRegister }) => {
  return (
    <div className="h-[228px] w-[464px] rounded-[8px] bg-[#FFF]">
      <div className="h-[12px] rounded-t-[8px] bg-[#E9FDEE]" />
      <div className="px-[32px]">
        <TickCircle
          size="40"
          color="#2CB04B"
          variant="Bulk"
          className="mt-[32px]"
        />
        <h2
          className={`${Outfit500.className} pt-[8px] text-[20px] text-[#171717]`}
        >
          Cadastro finalizado
        </h2>

        <div className="flex justify-end gap-[16px] pt-[32px]">
          <button
            type="button"
            className={`${Outfit400.className} h-[44px] w-[84px] rounded-[8px] bg-[#E7E7E7] text-[#222]`}
            onClick={() => onCloseRegister()}
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessRegister
