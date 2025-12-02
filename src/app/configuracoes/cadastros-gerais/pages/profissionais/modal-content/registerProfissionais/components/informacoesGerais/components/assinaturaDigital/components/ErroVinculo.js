import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { CloseCircle } from 'iconsax-reactjs'

const CancelRegister = ({ onClose }) => {
  return (
    <div className="h-[268px] w-[464px] rounded-lg bg-[#FFF]">
      <div className="h-3 rounded-t-lg bg-[#FFECDE]" />
      <div className="px-8">
        <CloseCircle
          size="40"
          color="#F23434"
          variant="Bulk"
          className="mt-8"
        />
        <h2
          className={`${Outfit500.className} pt-2 text-[20px] text-[#171717]`}
        >
          Dados incorretos
        </h2>

        <h2
          className={`${Outfit300.className} pt-4 text-[16px] text-[#8A8A8A]`}
        >
          Um ou mais dados estão incorretos, tente novamente
        </h2>
        <div className="flex justify-end gap-4 pt-8">
          <button
            type="button"
            className={`${Outfit400.className} h-11 w-[186px] rounded-lg bg-[#E7E7E7] text-[#222222]`}
            onClick={() => onClose()}
          >
            TENTAR NOVAMENTE
          </button>
        </div>
      </div>
    </div>
  )
}

export default CancelRegister
