import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const Seguranca = () => {
  // Informações básicas

  const [internalCode, setInternalCode] = useState('')
  const [retainISS, setRetainISS] = useState(false)
  const [CNES, setCNES] = useState('')

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Configuração */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Acesso
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Email para login<strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o nome completo"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Senha<strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o nome completo"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Confirmar senha<strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o nome completo"
            />
          </div>
          <div className="flex flex-col justify-end gap-[4px]">
            <button
              className={`${Outfit400.className} h-[40px] rounded-[8px] border border-[#F23434] px-2 text-[#F23434]`}
            >
              RESETAR SENHA
            </button>
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[13px] text-[#636363]`}
            >
              A senha deve conter
            </label>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 text-[#636363]">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <span className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de <strong>8 caracteres</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#636363]">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <span className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de <strong>1 caractere em letra maiúscula</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#636363]">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <span className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de <strong>1 caractere numérico</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#636363]">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <span className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de{' '}
                  <strong>1 caractere especial (*\-.,@#$%&=+!)</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#636363]">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <span className={`${Outfit400.className} text-[13px]`}>
                  <strong>Senha</strong> deve ser <strong>diferente</strong> da
                  senha anterior
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Autenticação
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
            >
              Validação em duas etapas
              <strong className="text-red-700">*</strong>
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!retainISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() => setRetainISS(!retainISS)}
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${retainISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() => setRetainISS(!retainISS)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Método de validação em duas etapas
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[{ id: 1, label: 'FINANCEIRO' }]}
              placeholder={'Selecione uma opção'}
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Pergunta de recuperação de senha
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[{ id: 1, label: 'FINANCEIRO' }]}
              placeholder={'Selecione uma opção'}
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Resposta para recuperação de senha
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[{ id: 1, label: 'FINANCEIRO' }]}
              placeholder={'Selecione uma opção'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seguranca
