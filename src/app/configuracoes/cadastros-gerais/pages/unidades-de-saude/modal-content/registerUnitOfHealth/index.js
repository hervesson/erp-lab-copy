import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import { CreateUnit, ListAllCNAEs, listAllServicesOfHealth } from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import CancelRegister from './components/CancelRegister'
import SuccessRegister from './components/SuccessRegister'
import { validationSchemaCreateUnit } from './schema'

// Components
import CertificadoDigital from './components/certificadoDigital'
import Endereco from './components/endereco'
import Financeiro from './components/financeiro'
import Horarios from './components/horarios'
import Impostos from './components/impostos'
import InformacoesBasicas from './components/informacoesBasicas'
import Responsaveis from './components/responsaveis'

const RegisterUnityOfHealth = ({ onClose, findData }) => {
  // Loading
  const [loading, setLoading] = useState(false)

  // Coisas
  const [services, setServices] = useState([])
  const [CNAEs, setCNAES] = useState([])

  const [step, setStep] = useState('')
  const [openModalAlerts, setOpenModalAlerts] = useState(false)

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [allServices, allCnaes] = await Promise.all([
          listAllServicesOfHealth(),
          ListAllCNAEs(),
        ])

        const servcs = allServices.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.descricao}`,
          }
        })

        const cns = allCnaes.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.descricao}`,
          }
        })

        setServices(servcs)
        setCNAES(cns)
      } catch (error) {
        console.error(error)
      }
    }

    findUsersByFilters()
  }, [])

  const steps = {
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

  const formik = useFormik({
    validationSchema: validationSchemaCreateUnit,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      // informações básicas

      nomeUnidade: '',
      codigoInterno: '',
      cnpj: '',
      razaoSocial: '',
      nomeFantasia: '',
      inscricaoMunicipal: '',
      inscricaoEstadual: '',
      cnes: '',
      telefone: '',
      email: '',
      codigoServicoPrincipal: {},
      codigoServicoSecundario: {},
      codigoServicoSecundarioSelecionados: [],
      cnaePrincipal: {},
      cnaeSecundario: {},
      cnaesSecundariosSelecionados: [],

      // endereço
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      complemento: '',
      estado: '',
      cidade: '',

      // horarios
      horarios: [
        {
          days: [],
          of: '',
          until: '',
          interval: '',
          returnInterval: '',
          enabled: true,
        },
      ],

      // responsavel
      nomeResponsavel: '',
      emailResponsavel: '',
      contatoResponsavel: '',

      // impostos
      irrf: 0,
      pis: 0,
      cofins: 0,
      csll: 0,
      iss: 0,
      ibs: 0,
      cbs: 0,
      reterISS: false,
      reterIR: false,
      reterPCC: false,
      reterIBS: false,
      reterCBS: false,
      optantePeloSimples: false,

      // financeiro
      financeiro: [
        {
          banco: '', // label do banco
          codigoBanco: '', // ex.: "001"
          bancoId: '', // id interno/opcional
          agencia: '',
          tipoDeConta: '',
          digitoAgencia: '',
          conta: '',
          digitoConta: '',
        },
      ],

      // certificado
      certificado: null,
    },
    onSubmit: async (values) => {
      setLoading(true)
      const payload = {
        nomeUnidade: values.nomeUnidade,
        codigoInterno: values.codigoInterno,
        cnpj: values.cnpj.replace(/\D/g, '').slice(0, 14),
        razaoSocial: values.razaoSocial,
        nomeFantasia: values.nomeFantasia,
        inscricaoMunicipal: values.inscricaoMunicipal,
        inscricaoEstadual: values.inscricaoEstadual,
        cnes: values.cnes,
        contatosUnidade: values.telefone,
        email: values.email,
        codigoServicoPrincipal: values.codigoServicoPrincipal.id || '',
        codigoServicoSecundario: values.codigoServicoSecundarioSelecionados.map(
          (e) => {
            return e.id
          },
        ),
        cnaePrincipalId: values.cnaePrincipal.id || '',
        cnaeSecundarios: values.cnaesSecundariosSelecionados.map((e) => {
          return { cnaeId: e.id }
        }),
        cep: values.cep.replace('-', ''),
        rua: values.rua,
        numero: values.numero,
        bairro: values.bairro,
        complemento: values.complemento,
        estado: values.estado.label,
        cidade: values.cidade.label,
        nomeResponsavel: values.nomeResponsavel,
        contatoResponsavel: values.contatoResponsavel,
        emailResponsavel: values.emailResponsavel,
        irrfPercentual: values.irrf,
        pisPercentual: values.pis,
        cofinsPercentual: values.cofins,
        csllPercentual: values.csll,
        issPercentual: values.iss,
        ibsPercentual: values.ibs,
        cbsPercentual: values.cbs,
        reterIss: values.reterISS,
        reterIr: values.reterIR,
        reterPcc: values.reterPCC,
        reterIbs: values.reterIBS,
        reterCbs: values.reterCBS,
        optanteSimplesNacional: values.optantePeloSimples,
        certificadoDigitalVinculado: !!values.certificado,
        ativo: true,
        horariosAtendimento: values.horarios.flatMap((item) =>
          item.days.map((dia) => ({
            diaSemana: dia,
            horarioInicio: item.of || '',
            horarioFim: item.until || '',
            intervaloInicio: item.interval || '00:00',
            intervaloFim: item.returnInterval || '00:00',
            semIntervalo: item.enabled,
          })),
        ),
        contas_bancarias: values.financeiro.map((e) => {
          return {
            banco_id: e.bancoId,
            agencia: e.agencia,
            digito_agencia: e.digitoAgencia,
            numero_conta: e.conta,
            digito_conta: e.digitoConta,
            tipo_conta: e.tipoDeConta.id,
          }
        }),
      }

      try {
        const responseCreateUnity = await CreateUnit(payload)
        if (responseCreateUnity.success) {
          setStep('sucess')
          setOpenModalAlerts(true)
          findData()
          formik.resetForm()
        } else {
          responseCreateUnity.error.erros.forEach((element) => {
            toast.error(element, {
              position: 'top-right',
            })
          })
        }
      } catch (error) {
        console.log('erro', error)
      } finally {
        setLoading(false)
      }
    },
  })

  const getErrorMessages = (errors) => {
    const messages = []

    const walk = (err) => {
      if (!err) return

      if (typeof err === 'string') {
        messages.push(err)
        return
      }

      if (Array.isArray(err)) {
        err.forEach(walk)
        return
      }

      if (typeof err === 'object') {
        Object.values(err).forEach(walk)
      }
    }

    walk(errors)

    // remove duplicadas
    return [...new Set(messages)]
  }

  const handleValidateAndSubmit = async () => {
    const errors = await formik.validateForm()

    if (Object.keys(errors).length > 0) {
      const messages = getErrorMessages(errors)

      toast.error(
        <div>
          <p>Corrija os campos abaixo:</p>
          <ul className="mt-2 list-disc pl-5">
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>,
        {
          position: 'top-right',
          autoClose: 8000,
        },
      )

      return // não faz submit
    }

    // se não tiver erro, chama o submit do formik
    formik.handleSubmit()
  }

  return (
    <>
      <form
        className="flex h-screen flex-col bg-[#F9F9F9]"
        onSubmit={() => null}
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
              Unidades de saúde
            </span>
          </div>
          <div className="flex gap-[16px]">
            <button
              type="button"
              onClick={() => {
                setStep('cancel')
                setOpenModalAlerts(true)
              }}
              className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434]"
            >
              <span
                className={`${Outfit400.className} text-[#F23434] uppercase`}
              >
                Cancelar
              </span>
            </button>
            <button
              type="button"
              onClick={handleValidateAndSubmit}
              className={`flex h-[44px] w-[128px] items-center justify-evenly rounded-[8px] ${
                formik.isValid
                  ? 'bg-[#0F9B7F] text-white hover:from-[#3BC1E2] hover:to-[#1D6F87]'
                  : 'bg-[#A9A9A9] text-[#494949]'
              } ${Outfit400.className}`}
              disabled={loading}
            >
              <span className={`${Outfit400.className} uppercase`}>
                {loading ? 'Finalizando' : 'Finalizar'}
              </span>
            </button>
          </div>
        </div>

        {/* <div className="flex h-full w-full gap-x-3 overflow-x-auto"> */}
        <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
          <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col gap-[32px] rounded bg-[#fff] p-[48px]">
            {/* informacoes */}
            <InformacoesBasicas
              formik={formik}
              services={services}
              CNAEs={CNAEs}
            />
            {/* endereco */}
            <Endereco formik={formik} />
            {/* horários */}
            <Horarios formik={formik} />
            {/* responsável */}
            <Responsaveis formik={formik} />
            {/* impostos */}
            <Impostos formik={formik} />
            {/* financeiro */}
            <Financeiro formik={formik} />
            {/* certificado digital */}
            <CertificadoDigital formik={formik} />
          </div>
        </div>
      </form>
      {openModalAlerts && (
        <ModalFramer
          open={openModalAlerts}
          setOpen={() => setOpenModalAlerts(false)}
        >
          {steps[step]}
        </ModalFramer>
      )}
      {/* <ToastContainer /> */}
    </>
  )
}

export default RegisterUnityOfHealth
