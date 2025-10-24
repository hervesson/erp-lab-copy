/* eslint-disable camelcase */
import CustomSelect from '@/components/CustomSelect'
import Divider from '@/components/Divider'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'

import { listAllActiveBanks } from '@/helpers'

const InformacoesGerais = () => {
  // Informações básicas
  const [internalCode, setInternalCode] = useState('')
  const [corporateReason, setCorporateReason] = useState('')
  const [CNES, setCNES] = useState('')
  const [activeBanks, setActiveBanks] = useState([])

  // itens payload
  const [banco_id, setBanco_Id] = useState('')
  const [tipo_conta, setTipo_conta] = useState({
    id: 'CORRRENTE',
    label: 'CORRRENTE',
  })
  const [status, setStatus] = useState({ id: 'ativa', label: 'Ativa' })
  const [description, setDescription] = useState('')
  const [agencia, setAgencia] = useState('')
  const [numero_conta, setNumero_conta] = useState('')
  const [digito_conta, setDigito_conta] = useState('')
  const [pix_chave, setPix_chave] = useState('')

  useEffect(() => {
    const findAllBanks = async () => {
      try {
        const response = await listAllActiveBanks()
        const banks = response.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.nome}`,
          }
        })
        setActiveBanks(banks)
      } catch (e) {
        console.log(e)
      }
    }

    findAllBanks()
  }, [])

  const payloadCorrente = {
    banco_id: banco_id.id,
    unidade_saude_id: '{{unidadeId}}',
    codigo_interno: 'CC001',
    nome_conta: 'Conta Corrente Principal',
    tipo_conta,
    agencia,
    digito_agencia: '5',
    numero_conta,
    digito_conta,
    titular: 'Clínica Saúde Total Ltda',
    cpf_cnpj_titular: '12.345.678/0001-90',
    pix_tipo: 'cnpj',
    pix_chave,
    status: status.id,
    saldo_inicial: 1000.0,
    observacoes: description,
  }

  const payloadPoupança = {
    banco_id: banco_id.id,
    unidade_saude_id: '{{unidadeId}}',
    codigo_interno: 'CP001',
    nome_conta: 'Conta Poupança Reserva',
    tipo_conta,
    agencia,
    numero_conta,
    digito_conta,
    titular: 'Clínica Saúde Total Ltda',
    cpf_cnpj_titular: '12.345.678/0001-90',
    status: status.id,
    saldo_inicial: 5000.0,
  }

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
                <CustomSelect
                  select={banco_id}
                  setSelect={(e) => setBanco_Id(e)}
                  options={activeBanks}
                  placeholder={'Selecione o banco'}
                  className={'border border-[#BBBBBB]'}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  select={status}
                  setSelect={(e) => setStatus(e)}
                  options={[
                    { id: 'ativa', label: 'Ativa' },
                    { id: 'inativo', label: 'Inativa' },
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
              value={agencia}
              onChange={(e) => setAgencia(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Número da agência"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Conta
              <strong className="text-red-700">*</strong>
            </label>
            <input
              value={numero_conta}
              onChange={(e) => setNumero_conta(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Número da conta"
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
              value={digito_conta}
              onChange={(e) => setDigito_conta(e.target.value)}
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
                { id: 'CORRRENTE', label: 'CORRRENTE' },
                { id: 'POUPANÇA', label: 'POUPANÇA' },
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
              value={pix_chave}
              onChange={(e) => setPix_chave(e.target.value)}
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
