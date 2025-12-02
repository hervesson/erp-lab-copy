import { Outfit400, Outfit500 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const FormCert = ({ onClose }) => {
  return (
    <div className="w-[514px] rounded-lg bg-[#FFF]">
      <div className="flex flex-col gap-6 p-8">
        <h2 className={`${Outfit500.className} text-[20px] text-[#171717]`}>
          VINCULAR CERTIFICADO
        </h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              PIS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite o número"
            />
          </div>{' '}
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              PIS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite o número"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              PIS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite o número"
            />
          </div>{' '}
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              PIS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              type="text"
              id="numero"
              name="numero"
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite o número"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            className={`${Outfit400.className} h-11 w-[84px] rounded-lg bg-[#E7E7E7] text-[#222]`}
            onClick={() => onClose()}
          >
            FECHAR
          </button>
          <button
            type="button"
            className={`${Outfit400.className} h-11 w-[103px] rounded-lg bg-[#E7E7E7] text-[#222]`}
            onClick={() => onClose()}
          >
            FINALIZAR
          </button>
        </div>
      </div>
    </div>
  )
}
export default FormCert
