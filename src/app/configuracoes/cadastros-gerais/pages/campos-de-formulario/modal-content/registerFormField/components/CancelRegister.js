import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const CancelRegister = ({ onClose, onCloseRegister }) => {
  return (
    <div className="h-[268px] w-[464px] rounded-[8px] bg-[#FFF]">
      <div className="h-[12px] rounded-t-[8px] bg-[#FFECDE]" />
      <div className="px-[32px]">
        <InfoCircle
          size="40"
          color="#F9852E"
          variant="Bulk"
          className="mt-[32px]"
        />
        <h2
          className={`${Outfit500.className} pt-[8px] text-[20px] text-[#171717]`}
        >
          Deseja CANCELAR esse cadastro ?
        </h2>

        <h2
          className={`${Outfit300.className} pt-[16px] text-[16px] text-[#8A8A8A]`}
        >
          Ao continuar dados serão perdidos.
        </h2>
        <div className="flex justify-end gap-[16px] pt-[32px]">
          <button
            type="button"
            className={`${Outfit400.className} h-[44px] w-[84px] rounded-[8px] bg-[#E7E7E7] text-[#222222]`}
            onClick={() => onClose()}
          >
            VOLTAR
          </button>
          <button
            type="button"
            onClick={() => onCloseRegister()}
            className={`${Outfit400.className} h-[44px] w-[196px] rounded-[8px] bg-[#F23434] text-white`}
          >
            CANCELAR CADASTRO
          </button>
        </div>
      </div>
    </div>
  )
}

export default CancelRegister
