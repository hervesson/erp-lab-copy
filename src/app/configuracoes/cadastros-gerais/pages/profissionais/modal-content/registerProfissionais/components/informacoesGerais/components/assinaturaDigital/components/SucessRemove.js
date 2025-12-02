import { Outfit400, Outfit500 } from '@/fonts'
import { TickCircle } from 'iconsax-reactjs'

const SuccessRemove = ({ onClose }) => {
  return (
    <div className="h-[238px] w-[464px] rounded-lg bg-[#FFF]">
      <div className="h-3 rounded-t-lg bg-[#E9FDEE]" />
      <div className="px-8">
        <TickCircle size="40" color="#2CB04B" variant="Bulk" className="mt-8" />
        <h2
          className={`${Outfit500.className} pt-2 text-[20px] text-[#171717]`}
        >
          Certificado removido
        </h2>

        <div className="flex justify-end gap-4 pt-8">
          <button
            type="button"
            className={`${Outfit400.className} h-11 w-[84px] rounded-lg bg-[#E7E7E7] text-[#222]`}
            onClick={() => onClose()}
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessRemove
