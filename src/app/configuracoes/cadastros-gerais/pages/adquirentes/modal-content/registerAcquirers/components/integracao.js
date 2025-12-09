import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const Integracao = () => {
  // Informações básicas
  const [CNES, setCNES] = useState('')
  const [internalCode, setInternalCode] = useState('')

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Configuração */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Vincular integração
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Integração<strong className="text-red-700">*</strong>
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[{ id: 1, label: 'FINANCEIRO' }]}
              placeholder={'Selecione uma integração'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-col justify-end gap-[4px]">
            <button
              type="button"
              className="h-[44px] w-[162px] rounded-[8px] border border-[#0F9B7F] hover:bg-[#E0FFF9]"
              onClick={() => null}
            >
              <p
                className={`text-[16px] text-[#0F9B7F] ${Outfit400.className} `}
              >
                TESTAR CONEXÃO
              </p>
            </button>
          </div>
        </div>
        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Validade de configiração da API
              <strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="--/--/----"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <div className="flex justify-between">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
              >
                Contingência<strong className="text-red-700">*</strong>
              </label>
              <InfoCircle size="20" color="#A1A1A1" />
            </div>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite a chave de uma API alternativa"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Integracao
