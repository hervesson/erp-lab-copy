import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const RemoveVinculo = ({ onClose, onCloseRegister }) => {
  return (
    <div className="h-[300px] w-[464px] rounded-lg bg-[#FFF]">
      <div className="h-3 rounded-t-lg bg-[#FFECDE]" />
      <div className="px-8">
        <InfoCircle size="40" color="#F9852E" variant="Bulk" className="mt-8" />
        <h2
          className={`${Outfit500.className} pt-2 text-[20px] text-[#171717]`}
        >
          Deseja REMOVER esse certificado ?
        </h2>

        <h2
          className={`${Outfit300.className} pt-4 text-[16px] text-[#8A8A8A]`}
        >
          <strong>Atenção:</strong> ao prosseguir, a unidade não terá nenhum
          certificado vinculado a ela.
        </h2>
        <div className="flex justify-end gap-4 pt-8">
          <button
            type="button"
            className={`${Outfit400.className} h-11 w-[108px] rounded-lg bg-[#E7E7E7] text-[#222222]`}
            onClick={() => onClose()}
          >
            CANCELAR
          </button>
          <button
            type="button"
            onClick={() => onCloseRegister()}
            className={`${Outfit400.className} h-11 w-[100px] rounded-lg bg-[#F23434] text-white`}
          >
            REMOVER
          </button>
        </div>
      </div>
    </div>
  )
}

export default RemoveVinculo
