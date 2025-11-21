import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { useState } from 'react'

const Integracao = () => {
  // Informações básicas
  const [CNES, setCNES] = useState('')

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
              className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
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
        </div>
      </div>
    </div>
  )
}

export default Integracao
