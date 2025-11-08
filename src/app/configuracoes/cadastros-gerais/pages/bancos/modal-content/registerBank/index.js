import { Outfit400, Outfit500 } from '@/fonts'
import { CreateBankAccount, listAllActiveBanks, listAllUnits } from '@/helpers'
import { FormikProvider, useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { validationSchemaAccountBank } from './components/schema'

import InformacoesGerais from './components/informacoesgerais'
import Integracao from './components/integracao'

const RegisterUser = ({ onClose, findData }) => {
  const [tab, setTab] = useState('informacoesGerais')
  const [activeBanks, setActiveBanks] = useState([])
  const [units, setUnits] = useState([])

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [allBanks, unts] = await Promise.all([
          listAllActiveBanks(),
          listAllUnits(),
        ])

        const banks = allBanks.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.nome}`,
          }
        })

        const unt = unts.data.data.map((item) => {
          return {
            id: item.id,
            label: `${item.nomeUnidade}`,
            item,
          }
        })

        setActiveBanks(banks)
        setUnits(unt)
      } catch (error) {
        console.error(error)
      }
    }

    findUsersByFilters()
  }, [])

  const formik = useFormik({
    validationSchema: validationSchemaAccountBank,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      informations: [
        {
          banco_id: '',
          description: '',
          status: '',
          agencia: '',
          numero_conta: '',
          digito_conta: '',
          tipoConta: '',
          pix_chave: '',
          unidadeSelecionada: {},
          unidades_associadas: [],
        },
      ],
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const items = values.informations.map(toApiItem)

        // dispara todas paralelamente (se o backend aguentar)
        const results = await Promise.allSettled(
          items.map((payload) => CreateBankAccount(payload)),
        )

        // caso tudo ok, você pode limpar/fechar/atualizar
        const allOk = results.every((r) => r.status === 'fulfilled')
        if (allOk) {
          // resetar o form se quiser:
          formik.resetForm()
          findData()
          onClose()
        }
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
    unidades_ids: (it.unidades_associadas || []).map((u) =>
      typeof u === 'object' ? u.id : u,
    ),
  })

  // mapeia chaves -> rótulos amigáveis
  const labelMap = {
    banco_id: 'Banco',
    description: 'Descrição',
    status: 'Status do banco',
    agencia: 'Agência',
    numero_conta: 'Número da conta',
    digito_conta: 'Dígito da conta',
    tipoConta: 'Tipo de conta',
    pix_chave: 'Chave PIX',
    unidadeSelecionada: 'Unidade selecionada',
    unidades_associadas: 'Unidades associadas',
  }

  // touched recursivo com o mesmo shape de values
  const makeTouched = (values) => {
    if (Array.isArray(values)) return values.map(makeTouched)
    if (values && typeof values === 'object') {
      return Object.fromEntries(
        Object.keys(values).map((k) => [k, makeTouched(values[k])]),
      )
    }
    return true
  }

  const flattenErrorsForItem = (errObj, path = []) => {
    if (!errObj) return []
    if (typeof errObj === 'string') {
      const field = path[path.length - 1]
      const label = labelMap[field] || field
      return [`${label}: ${errObj}`]
    }
    if (Array.isArray(errObj)) {
      return errObj.flatMap((val, idx) =>
        flattenErrorsForItem(val, [...path, idx]),
      )
    }
    if (typeof errObj === 'object') {
      return Object.keys(errObj).flatMap((k) =>
        flattenErrorsForItem(errObj[k], [...path, k]),
      )
    }
    return []
  }

  const handleFinalize = async () => {
    const errors = await formik.validateForm()
    const hasErrors = Object.keys(errors || {}).length > 0

    if (!hasErrors) {
      await formik.submitForm()
      return
    }

    // marca tudo como touched
    formik.setTouched(makeTouched(formik.values), true)

    // erros por conta (somente o array informations)
    const infoErrors = errors?.informations || []
    const MAX_LINES = 6

    infoErrors.forEach((errItem, idx) => {
      if (!errItem) return
      const lines = flattenErrorsForItem(errItem)
      if (lines.length === 0) return

      const head = lines.slice(0, MAX_LINES)
      const rest = lines.length - head.length

      toast.error(
        <div>
          <div className="font-semibold">
            Conta #{idx + 1}: {lines.length} erro(s)
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
    })
  }

  const steps = {
    informacoesGerais: (
      <InformacoesGerais
        formik={formik}
        activeBanks={activeBanks}
        units={units}
      />
    ),
    integracao: <Integracao />,
  }

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex h-screen flex-1 flex-col bg-[#F9F9F9]"
      >
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
              <span
                className={`${Outfit400.className} text-[#F23434] uppercase`}
              >
                Cancelar
              </span>
            </button>
            <button
              type="button"
              onClick={handleFinalize}
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
      </form>
    </FormikProvider>
  )
}

export default RegisterUser
