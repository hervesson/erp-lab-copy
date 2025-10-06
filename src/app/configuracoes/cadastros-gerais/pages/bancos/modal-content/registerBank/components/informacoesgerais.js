import CustomSelect from '@/components/CustomSelect'
import Divider from '@/components/Divider'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const InformacoesGerais = () => {
  // Informações básicas
  const [internalCode, setInternalCode] = useState('')
  const [corporateReason, setCorporateReason] = useState('')
  const [CNES, setCNES] = useState('')

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações iniciais
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Código interno
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={'BAN001'}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código interno"
                  readOnly
                  disabled
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Banco
                  <strong className="text-[#F23434]">*</strong>
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
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Descrição
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={corporateReason}
                  onChange={(e) => setCorporateReason(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite uma descrição para a conta"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Status do banco
                </label>
                <CustomSelect
                  select={CNES}
                  setSelect={(e) => setCNES(e)}
                  options={[
                    { id: 1, label: '1' },
                    { id: 2, label: '2' },
                  ]}
                  placeholder={'Selecione uma opção'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* informaçoes da conta */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações da conta
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Agência
              <strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Número da agência"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Conta corrente
              <strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Número da conta corrente"
            />
          </div>
          <div className="flex flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Dígito verificador
              <strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Informe o dígito"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Tipo de conta
              <strong className="text-red-700">*</strong>
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[
                { id: 1, label: '1' },
                { id: 2, label: '2' },
              ]}
              placeholder={'Selecione uma opção'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Chave PIX
              <strong className="text-red-700">*</strong>
            </label>
            <input
              value={internalCode}
              onChange={(e) => setInternalCode(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite uma chave PIX"
            />
          </div>
        </div>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Unidades associadas
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[
                { id: 1, label: '1' },
                { id: 2, label: '2' },
              ]}
              placeholder={'Selecione uma ou mais unidades'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-col justify-end gap-[4px]">
            <button
              className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
            >
              ADICIONAR
            </button>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-[4px]">
            <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Nenhuma opção adicionada
              </label>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <button
        className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
      >
        NOVA CONTA
      </button>
    </div>
  )
}

export default InformacoesGerais
