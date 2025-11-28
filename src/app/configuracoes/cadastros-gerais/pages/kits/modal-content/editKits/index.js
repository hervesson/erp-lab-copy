import { Outfit400, Outfit500 } from '@/fonts'
import { listAllActiveBanks, listAllUnits, UpdateBankAccount } from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import InformacoesGerais from './components/informacoesgerais'
import Integracao from './components/integracao'

import { infoItemSchemaAccountBank } from './components/schema'

const EditUser = ({ onClose, account, findData }) => {
  const [tab, setTab] = useState('informacoesGerais')
  const [units, setUnits] = useState([])

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [unts] = await Promise.all([listAllActiveBanks(), listAllUnits()])

        const unt = unts.data.data.map((item) => {
          return {
            id: item.id,
            label: `${item.nomeUnidade}`,
            item,
          }
        })

        setUnits(unt)
      } catch (error) {
        console.error(error)
      }
    }

    findUsersByFilters()
  }, [])

  const formik = useFormik({
    validationSchema: infoItemSchemaAccountBank,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      banco_id: {
        id: account.banco.id,
        label: `${account.banco.codigo} - ${account.banco.nome}`,
      },
      description: account.observacoes ?? '',
      status:
        account.status === 'ativa'
          ? { id: 'ativa', label: 'ATIVA' } // <- corrigido
          : { id: 'inativa', label: 'INATIVA' },
      agencia: account.agencia ?? '',
      numero_conta: account.numero_conta ?? '',
      digito_conta: account.digito_conta ?? '',
      tipoConta:
        account.tipo_conta === 'corrente'
          ? { id: 'corrente', label: 'CORRENTE' }
          : { id: 'poupanca', label: 'POUPANÇA' },
      pix_chave: account.pix_chave ?? '',
      unidadeSelecionada: null, // <- em vez de {}
      unidades_associadas: account.unidades_vinculadas.map((e) => {
        return {
          id: e.unidade_saude.id,
          label: e.unidade_saude.nomeUnidade,
        }
      }),
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const payload = toApiItem(values)
        await UpdateBankAccount(account.id, payload) // ou UpdateBankAccount(account.id, payload)

        // sucesso
        // toast.success('Conta atualizada com sucesso!')
        resetForm({ values }) // mantém o que foi salvo
        findData?.()
        onClose?.()
      } catch (err) {
        const msg =
          err?.response?.data?.message ||
          err?.message ||
          'Erro ao atualizar a conta.'
        toast.error(msg)
      } finally {
        setSubmitting(false)
      }
    },
  })

  const digits = (s) => (typeof s === 'string' ? s.replace(/\D+/g, '') : s)

  const toApiItem = (it) => ({
    banco_id:
      typeof it.banco_id === 'object' ? it.banco_id?.id : it.banco_id || null,
    observacoes: it.description?.trim() || '',
    status: typeof it.status === 'object' ? it.status?.id : it.status || null,
    agencia: digits(it.agencia || ''),
    numero_conta: digits(it.numero_conta || ''),
    digito_conta: digits(it.digito_conta || ''),
    tipo_conta:
      typeof it.tipoConta === 'object'
        ? it.tipoConta?.id
        : it.tipoConta || null,
    pix_chave: it.pix_chave?.trim() || null,
    unidades_ids: (it.unidades_associadas || []).map(
      (u) => u?.id ?? u?.unidade_saude?.id,
    ),
  })

  // rótulos amigáveis
  const labelMap = {
    banco_id: 'Banco',
    description: 'Descrição',
    status: 'Status do banco',
    agencia: 'Agência',
    numero_conta: 'Número da conta',
    digito_conta: 'Dígito da conta',
    tipoConta: 'Tipo de conta',
    pix_chave: 'Chave PIX',
    unidades_associadas: 'Unidades associadas',
  }

  // traduz finais comuns do Yup
  const translateTail = (s) =>
    String(s)
      .replace(/cannot be null/i, 'é obrigatório')
      .replace(/is a required field/i, 'é obrigatório')
      .replace(/invalid/i, 'inválido')

  // formata mensagens cruas (ex.: "status cannot be null")
  const prettifyMessage = (raw) => {
    const m = /^(\w+)\s+(.*)$/i.exec(String(raw) || '')
    if (m && labelMap[m[1]]) return `${labelMap[m[1]]}: ${translateTail(m[2])}`
    return translateTail(raw)
  }

  // achata o objeto de erros do Formik para lista de strings
  const flattenErrorsSingle = (errObj, path = []) => {
    if (!errObj) return []
    if (typeof errObj === 'string') {
      const field = path[path.length - 1]
      if (field && labelMap[field])
        return [`${labelMap[field]}: ${prettifyMessage(errObj)}`]
      return [prettifyMessage(errObj)]
    }
    if (Array.isArray(errObj))
      return errObj.flatMap((v, i) => flattenErrorsSingle(v, [...path, i]))
    if (typeof errObj === 'object')
      return Object.keys(errObj).flatMap((k) =>
        flattenErrorsSingle(errObj[k], [...path, k]),
      )
    return []
  }

  // marca tudo como touched (mesmo shape de values)
  const makeTouched = (values) => {
    if (Array.isArray(values)) return values.map(makeTouched)
    if (values && typeof values === 'object')
      return Object.fromEntries(
        Object.keys(values).map((k) => [k, makeTouched(values[k])]),
      )
    return true
  }

  const handleFinalizeEdit = async () => {
    const errors = await formik.validateForm()
    const hasErrors = Object.keys(errors || {}).length > 0

    if (hasErrors) {
      formik.setTouched(makeTouched(formik.values), true)

      const lines = flattenErrorsSingle(errors)
      const MAX = 8
      const head = lines.slice(0, MAX)
      const rest = lines.length - head.length

      toast.error(
        <div>
          <div className="font-semibold">
            Corrija os campos ({lines.length} erro
            {(s) => (s.length > 1 ? 's' : '')})
          </div>
          <ul className="mt-2 list-disc pl-5">
            {head.map((m, i) => (
              <li key={i} className="mb-1 text-[14px]">
                {m}
              </li>
            ))}
          </ul>
          {rest > 0 && (
            <div className="mt-2 text-sm">…e mais {rest} erro(s)</div>
          )}
        </div>,
      )
      return
    }

    await formik.submitForm()
  }

  const steps = {
    informacoesGerais: <InformacoesGerais formik={formik} units={units} />,
    integracao: <Integracao />,
  }

  return (
    <form className="flex h-screen w-full flex-col bg-[#F9F9F9]">
      <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Cadastrar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            BANCOS
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434] hover:bg-[#FFE6E6]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="button"
            onClick={handleFinalizeEdit}
            className={`flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] ${
              formik.isValid
                ? 'bg-[#0F9B7F] text-white hover:from-[#3BC1E2] hover:to-[#1D6F87]'
                : 'bg-[#A9A9A9] text-[#494949]'
            } ${Outfit400.className}`}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? 'FINALIZANDO' : 'FINALIZAR'}
          </button>
        </div>
      </div>

      <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col rounded">
          <div className="flex h-[56px] items-center gap-8 px-[48px]">
            <button
              type="button"
              onClick={() => setTab('informacoesGerais')}
              className={`${Outfit400.className} ${tab === 'informacoesGerais' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
            >
              INFORMAÇÕES GERAIS
            </button>
            <button
              type="button"
              onClick={() => setTab('integracao')}
              className={`${Outfit400.className} ${tab === 'integracao' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222]`}
            >
              INTEGRAÇÃO
            </button>
          </div>
          {steps[tab]}
        </div>
      </div>
      <ToastContainer />
    </form>
  )
}

export default EditUser
