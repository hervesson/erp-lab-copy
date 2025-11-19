import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import { ListAllCNAEs, listAllServicesOfHealth } from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import CancelRegister from './components/CancelRegister'
import SuccessRegister from './components/SuccessRegister'

// Components
import CertificadoDigital from './components/certificadoDigital'
import Endereco from './components/endereco'
import Financeiro from './components/financeiro'
import Horarios from './components/horarios'
import Impostos from './components/impostos'
import InformacoesBasicas from './components/informacoesBasicas'
import Responsaveis from './components/responsaveis'

const RegisterUnityOfHealth = ({ onClose }) => {
  // Loading
  const [loading] = useState(false)

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

  // const handleSubmit = async () => {
  //   setLoading(true)
  //   const payload = {
  //     nomeUnidade: name,
  //     codigoInterno: internalCode,
  //     cnpj: cnpj.replace(/\D/g, '').slice(0, 14),
  //     razaoSocial: corporateReason,
  //     nomeFantasia: fantasyName,
  //     inscricaoMunicipal: municipalRegistration,
  //     inscricaoEstadual: stateRegistration,
  //     cnes: CNES,
  //     contatosUnidade: contacts,
  //     email,
  //     codigoServicoPrincipal: mainServiceCode.id,
  //     codigoServicoSecundario: selectSecondaryServiceCode.map((e) => {
  //       return e.id
  //     }),
  //     cnaePrincipalId: mainCNAE?.id,
  //     cep: cep.replace('-', ''),
  //     rua: street,
  //     numero: number,
  //     bairro: district,
  //     complemento: complement,
  //     estado: state,
  //     cidade: city,
  //     nomeResponsavel: responsibleName,
  //     contatoResponsavel: responsibleContact,
  //     emailResponsavel: responsibleEmail,
  //     irrfPercentual: Number(IRRF),
  //     pisPercentual: Number(PIS),
  //     cofinsPercentual: Number(COFINS),
  //     csllPercentual: Number(CSLL),
  //     issPercentual: Number(ISS),
  //     ibsPercentual: Number(IBS),
  //     cbsPercentual: Number(CBS),
  //     reterIss: retainISS,
  //     reterIr: retainIR,
  //     reterPcc: retainPCC,
  //     reterIbs: retainIBS,
  //     reterCbs: retainCBS,
  //     optanteSimplesNacional: nationalSimpleOptant,
  //     certificadoDigitalVinculado: !!cert,
  //     ativo: true,
  //     horariosAtendimento: openingHours.flatMap((item) =>
  //       item.days.map((dia) => ({
  //         diaSemana: dia,
  //         horarioInicio: item.of || '',
  //         horarioFim: item.until || '',
  //         intervaloInicio: item.interval || '00:00',
  //         intervaloFim: item.returnInterval || '00:00',
  //         semIntervalo: item.enabled,
  //       })),
  //     ),
  //     dadosBancarios: financial.map((e) => {
  //       return {
  //         bancoId: e.bancoId,
  //         agencia: e.agencia,
  //         digitoAgencia: e.digitoAgencia,
  //         contaCorrente: e.contaCorrente,
  //         digitoConta: e.digitoConta,
  //         tipoConta: 'CORRENTE',
  //         principal: true,
  //         observacoes: '0',
  //       }
  //     }),
  //     cnaeSecundarios: selectSecondaryCNAE.map((e) => {
  //       return { cnaeId: e.id }
  //     }),
  //   }

  //   try {
  //     const responseCreateUnity = await CreateUnit(payload)

  //     if (responseCreateUnity.success) {
  //       setStep('sucess')
  //       setOpenModalAlerts(true)
  //       findData()
  //     } else {
  //       responseCreateUnity.error.message.forEach((element) => {
  //         toast.error(element, {
  //           position: 'top-right',
  //         })
  //       })
  //     }
  //   } catch (error) {
  //     console.log('erro', error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

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
    // validationSchema: validationSchemaAccountBank,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
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
      irrf: '',
      pis: '',
      cofins: '',
      csll: '',
      iss: '',
      ibs: '',
      cbs: '',

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
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(values)
      } finally {
        setSubmitting(false)
      }
    },
  })

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
              // onClick={() => handleSubmit()}
              className="flex h-[44px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9] px-4 text-[#494949] hover:bg-[#0F9B7F] hover:text-[#fff]"
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
      <ToastContainer />
    </>
  )
}

export default RegisterUnityOfHealth
