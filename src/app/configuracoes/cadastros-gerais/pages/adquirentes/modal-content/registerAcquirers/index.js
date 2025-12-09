import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import {
  CreateAcquire,
  listAllFields,
  listAllUnits,
  listBankAccount,
} from '@/helpers'
import { getFlatErrors } from '@/utils'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { validationSchemaAcquirers } from './components/schema'

import InformacoesGerais from './components/informacoesGerais'
import Integracao from './components/integracao'

// alerts
import CancelRegister from '@/components/Alerts/CancelRegister'
import SuccessRegister from '@/components/Alerts/SuccessRegister'

const RegisterAcquirers = ({ onClose, findData }) => {
  const [tab, setTab] = useState('informacoesGerais')
  const [units, setUnits] = useState([])
  const [banks, setBanks] = useState([])
  const [fields, setFields] = useState([])
  const [openModalAlerts, setOpenModalAlerts] = useState(false)
  const [step, setStep] = useState('')
  const [loading, setLoading] = useState(false)
  const [codigoInterno, setCodigoInterno] = useState(() => gerarCodigoInterno())

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [fields, unts, AllAccounts] = await Promise.all([
          listAllFields(),
          listAllUnits(),
          listBankAccount(),
        ])

        const unt = unts.data.data.map((item) => {
          return {
            id: item.id,
            label: `${item.nomeUnidade}`,
            item,
          }
        })
        if (fields.success) {
          setFields(fields?.data?.data)
        }

        const acc = AllAccounts.data.data.map((item) => {
          return {
            id: item.id,
            label: `${item.banco.nome} - ${item.observacoes} - ${item.agencia}-${item.digito_agencia}/${item.numero_conta}-${item.digito_conta}`,
          }
        })
        setUnits(unt)
        setBanks(acc)
      } catch (error) {
        console.error(error)
      }
    }

    findUsersByFilters()
  }, [])

  const formik = useFormik({
    validationSchema: validationSchemaAcquirers,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      codigoInterno,
      nomeDoAdquirente: '',
      descricao: '',
      contaAssociada: {},
      unidadeAssociada: {},
      unidadeAssociadasSelecionadas: [],
      cartaoSuportado: {},
      cartoesSuportadosSelecionados: [],
      opcaoDeParcelamento: {},
      taxaPorTransacao: '',
      taxaPorParcelamento: '',
      porcentagemDeRepasse: '',
      prazoDeRepasse: '',
      restricoes: [
        {
          unidade: '',
          restricao: '',
        },
      ],
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload = {
          codigo_interno: values.codigoInterno,
          nome_adquirente: values.nomeDoAdquirente,
          descricao: values.descricao,
          conta_bancaria_id: values.contaAssociada.id,
          tipos_cartao_ids: values.cartoesSuportadosSelecionados.map(
            (item) => item.id,
          ),
          opcao_parcelamento_id: values.opcaoDeParcelamento.id,
          taxa_transacao: values.taxaPorTransacao,
          taxa_parcelamento: values.taxaPorParcelamento,
          percentual_repasse: values.porcentagemDeRepasse,
          prazo_repasse: values.prazoDeRepasse,
          validade_configuracao_api: '2026-12-31',
          chave_contingencia: '',
          unidades_associadas: values.unidadeAssociadasSelecionadas.map(
            (item) => {
              return {
                unidade_saude_id: item.id,
                ativo: true,
              }
            },
          ),
          restricoes: values.restricoes.map((item) => {
            return {
              unidade_saude_id: item.unidade.id,
              restricao_id: item.restricao.id,
              valor_restricao: '',
            }
          }),
        }

        try {
          const responseCreateUnity = await CreateAcquire(payload)
          if (responseCreateUnity.success) {
            setStep('sucess')
            setOpenModalAlerts(true)
            findData()
            regenerarCodigoInterno()
            formik.resetForm()
          } else {
            responseCreateUnity?.error?.erros?.forEach((element) => {
              toast.error(element, {
                position: 'top-right',
              })
            })
            toast.error(responseCreateUnity.error.mensagem, {
              position: 'top-right',
            })
          }
        } catch (error) {
          console.log('erro', error)
        } finally {
          setLoading(false)
        }
      } finally {
        setSubmitting(false)
      }
    },
  })

  const handleValidateAndSubmit = async (e) => {
    e.preventDefault()

    const errors = await formik.validateForm()

    if (Object.keys(errors).length > 0) {
      const messages = getFlatErrors(errors)

      toast.error(
        <div>
          <p className="font-semibold">Corrija os campos obrigatórios:</p>
          <ul className="mt-2 list-disc pl-5">
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>,
        {
          autoClose: 6000,
        },
      )

      return
    }

    // se não tiver erro, segue o fluxo normal do formik
    formik.handleSubmit()
  }

  function gerarCodigoInterno() {
    const prefixo = 'ADQ'
    const numero = Math.floor(Math.random() * 1000) // 0 até 999
    const numeroFormatado = String(numero).padStart(3, '0') // sempre 3 dígitos

    return `${prefixo}${numeroFormatado}`
  }

  const regenerarCodigoInterno = () => {
    const novoCodigo = gerarCodigoInterno()
    setCodigoInterno(novoCodigo)
    // se tiver Formik, mantém sincronizado:
    formik.setFieldValue('codigo', novoCodigo)
  }

  const steps = {
    informacoesGerais: (
      <InformacoesGerais
        formik={formik}
        units={units}
        fields={fields}
        banks={banks}
      />
    ),
    integracao: <Integracao />,
  }

  const alerts = {
    cancel: (
      <CancelRegister
        onClose={() => setOpenModalAlerts(false)}
        onCloseRegister={() => onClose()}
      />
    ),
    sucess: (
      <SuccessRegister
        onClose={() => {
          setOpenModalAlerts(false)
        }}
        onCloseRegister={() => onClose()}
      />
    ),
  }

  return (
    <>
      <form
        onSubmit={handleValidateAndSubmit}
        className="flex h-screen flex-1 flex-col bg-[#F9F9F9]"
      >
        <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-white px-12">
          <div className="flex flex-col">
            <span
              className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Cadastrar
            </span>
            <span
              className={` ${Outfit500.className} text-[16px] text-[#222222]`}
            >
              ADQUIRENTES
            </span>
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setStep('cancel')
                setOpenModalAlerts(true)
              }}
              className="flex h-11 w-[108px] items-center justify-evenly rounded-lg border border-[#F23434] hover:bg-[#FFE6E6]"
            >
              <span
                className={`${Outfit400.className} text-[#F23434] uppercase`}
              >
                Cancelar
              </span>
            </button>
            <button
              type="submit"
              className={`flex h-11 w-32 items-center justify-evenly rounded-lg ${
                formik.isValid
                  ? 'bg-[#0F9B7F] text-white hover:from-[#3BC1E2] hover:to-[#1D6F87]'
                  : 'bg-[#A9A9A9] text-[#494949]'
              } ${Outfit400.className}`}
              disabled={loading}
            >
              {formik.isSubmitting ? 'FINALIZANDO' : 'FINALIZAR'}
            </button>
          </div>
        </div>

        <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
          <div className="mx-12 my-7 flex h-fit flex-1 flex-col rounded">
            <div className="flex h-14 items-center gap-8 px-12">
              <button
                type="button"
                onClick={() => setTab('informacoesGerais')}
                className={`${Outfit400.className} ${tab === 'informacoesGerais' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
              >
                INFORMAÇÕES GERAIS
              </button>
              <button
                type="button"
                onClick={() => setTab('integracao')}
                className={`${Outfit400.className} ${tab === 'integracao' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
              >
                INTEGRAÇÃO
              </button>
            </div>
            {steps[tab]}
          </div>
        </div>
      </form>
      {openModalAlerts && (
        <ModalFramer
          open={openModalAlerts}
          setOpen={() => setOpenModalAlerts(false)}
        >
          {alerts[step]}
        </ModalFramer>
      )}
    </>
  )
}

export default RegisterAcquirers
