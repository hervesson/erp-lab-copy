import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { TickCircle } from 'iconsax-reactjs'

const SuccessRegister = ({ onClose, onCloseRegister }) => {
  return (
    <div className="h-[268px] w-[464px] rounded-[8px] bg-[#FFF]">
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

        <h2
          className={`${Outfit300.className} pt-[16px] text-[16px] text-[#8A8A8A]`}
        >
          Deseja realizar um novo cadastro ?
        </h2>
        <div className="flex justify-end gap-[16px] pt-[32px]">
          <button
            type="button"
            className={`${Outfit400.className} h-[44px] w-[84px] rounded-[8px] bg-[#E7E7E7]`}
            onClick={() => onCloseRegister()}
          >
            FECHAR
          </button>
          <button
            type="button"
            onClick={() => onClose()}
            className={`${Outfit400.className} h-[44px] w-[196px] rounded-[8px] bg-[#0F9B7F] text-white`}
          >
            NOVO CADASTRO
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessRegister
