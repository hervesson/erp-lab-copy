import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const InformacoesGerais = () => {
  // Informações básicas
  const [name, setName] = useState('')
  const [internalCode, setInternalCode] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [corporateReason, setCorporateReason] = useState('')
  const [fantasyName, setFantasyName] = useState('')
  const [municipalRegistration, setMunicipalRegistration] = useState('')
  const [CNES, setCNES] = useState('')
  const [contacts, setContacts] = useState('')

  const [secondaryServiceCode, setSecondaryServiceCode] = useState('')
  const [selectSecondaryServiceCode, setSelectSecondaryServiceCode] = useState(
    [],
  )
  const [retainISS, setRetainISS] = useState(false)
  const [retainIR, setRetainIR] = useState(false)

  return (
    <div className="flex h-[504px] w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações básicas
        </span>

        <div className="flex h-[144px] gap-[16px]">
          <div className="h-[144px] w-[144px] rounded border border-[#A9A9A9]"></div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Código interno
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código interno"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Nome completo
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
                  CPF<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o CPF"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Email
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={corporateReason}
                  onChange={(e) => setCorporateReason(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o e-mail"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Telefone
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={fantasyName}
                  onChange={(e) => setFantasyName(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite um telefone"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Celular/WhatsApp
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={municipalRegistration}
                  onChange={(e) => setMunicipalRegistration(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite um número de celular/WhatsApp"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Cargo/função
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={CNES}
                  setSelect={(e) => setCNES(e)}
                  options={[
                    { id: 1, label: '1' },
                    { id: 2, label: '2' },
                  ]}
                  placeholder={'Selecione uma função'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  CNPJ associado
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={CNES}
                  setSelect={(e) => setCNES(e)}
                  options={[
                    { id: 1, label: '1' },
                    { id: 2, label: '2' },
                  ]}
                  placeholder={'Selecione uma opção'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Data de admissão
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={contacts}
                  onChange={(e) => setContacts(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a data de admissão"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} text-[14px] text-[##222222]`}
          >
            Unidades associadas
            <strong className="text-[#F23434]">*</strong>
          </label>
          <div className="flex flex-1 gap-3">
            <CustomSelect
              select={secondaryServiceCode}
              setSelect={(e) => setSecondaryServiceCode(e)}
              options={[
                {
                  id: '4.03',
                  label:
                    '4.03 - Hospitais, clínicas, laboratórios, sanatórios, manicômios, casas de saúde, pronto-socorros, ambulatórios e congêneres',
                },
                { id: '4.04', label: '4.04 - Instrumentação cirúrgica' },
              ]}
              placeholder={'Selecione o código do serviço secundário'}
            />
            <button
              type="button"
              onClick={() => {
                if (
                  secondaryServiceCode &&
                  !selectSecondaryServiceCode.some(
                    (item) => item.id === secondaryServiceCode.id,
                  )
                ) {
                  setSelectSecondaryServiceCode([
                    ...selectSecondaryServiceCode,
                    secondaryServiceCode,
                  ])
                }
                setSecondaryServiceCode('')
              }}
              className={`${Outfit400.className} h-[40px] rounded-[8px] border border-[#0F9B7F] px-2 text-[#0F9B7F]`}
            >
              ADICIONAR
            </button>
            <div className="flex h-[40px] flex-1 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
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
      {/* endereco */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Notificações
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
            >
              Notificar via e-mail
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
          <div className="flex flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
            >
              Notificar via WhatsApp
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!retainIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() => setRetainIR(!retainIR)}
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${retainIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() => setRetainIR(!retainIR)}
              >
                SIM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
