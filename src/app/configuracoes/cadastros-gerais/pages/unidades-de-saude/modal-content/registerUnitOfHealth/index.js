import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import {
  CreateUnit,
  listAllActiveBanks,
  ListAllCNAEs,
  listAllServicesOfHealth,
} from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import CancelRegister from './components/CancelRegister'
import SuccessRegister from './components/SuccessRegister'

// Components
import InformacoesBasicas from './components/informacoesBasicas'

const RegisterUnityOfHealth = ({ onClose, findData }) => {
  const fileInputRef = useRef(null)

  // Loading
  const [loading, setLoading] = useState(false)

  // Informações básicas
  const [name, setName] = useState('')
  const [internalCode, setInternalCode] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [corporateReason, setCorporateReason] = useState('')
  const [fantasyName, setFantasyName] = useState('')
  const [municipalRegistration, setMunicipalRegistration] = useState('')
  const [stateRegistration, setStateRegistration] = useState('')
  const [CNES, setCNES] = useState('')
  const [contacts, setContacts] = useState('')
  const [email, setEmail] = useState('')
  const [mainServiceCode, setMainServiceCode] = useState('')

  const [secondaryServiceCode, setSecondaryServiceCode] = useState('')
  const [selectSecondaryServiceCode, setSelectSecondaryServiceCode] = useState(
    [],
  )

  const [mainCNAE, setMainCNAE] = useState({})

  const [secondaryCNAE, setSecondaryCNAE] = useState({})

  const [selectSecondaryCNAE, setSelectSecondaryCNAE] = useState([])

  // Endereço
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [district, setDistrict] = useState('')
  const [complement, setComplement] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  // Dias de atendimento
  const [openingHours, setOpeningHours] = useState([
    {
      days: [],
      of: '',
      until: '',
      interval: '',
      returnInterval: '',
      enabled: true,
    },
  ])

  // Responsáveis
  const [responsibleName, setResponsibleName] = useState('')
  const [responsibleContact, setResponsibleContact] = useState('')
  const [responsibleEmail, setResponsibleEmail] = useState('')

  // Impostos
  const [IRRF, setIRRF] = useState('')
  const [PIS, setPIS] = useState('')
  const [COFINS, setCOFINS] = useState('')
  const [CSLL, setCSLL] = useState('')
  const [ISS, setISS] = useState('')
  const [IBS, setIBS] = useState('')
  const [CBS, setCBS] = useState('')
  const [retainISS, setRetainISS] = useState(false)
  const [retainIR, setRetainIR] = useState(false)
  const [retainPCC, setRetainPCC] = useState(false)
  const [retainIBS, setRetainIBS] = useState(false)
  const [retainCBS, setRetainCBS] = useState(false)
  const [nationalSimpleOptant, setNationalSimpleOptant] = useState(false)

  // coisas
  const [activeBanks, setActiveBanks] = useState([])
  const [services, setServices] = useState([])
  const [CNAEs, setCNAES] = useState([])

  // Certificado digital
  const [cert, setCert] = useState(false)

  // Financeiro
  const [financial, setFinancial] = useState([
    {
      banco: '',
      codigoBanco: '',
      bancoId: '',
      agencia: '',
      digitoAgencia: '',
      contaCorrente: '',
      digitoConta: '',
      tipoConta: '',
      principal: false,
      observacoes: '',
    },
  ])

  const [step, setStep] = useState('')
  const [openModalAlerts, setOpenModalAlerts] = useState(false)

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [allBanks, allServices, allCnaes] = await Promise.all([
          listAllActiveBanks(),
          listAllServicesOfHealth(),
          ListAllCNAEs(),
        ])

        const banks = allBanks.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.nome}`,
          }
        })

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

        setActiveBanks(banks)
        setServices(servcs)
        setCNAES(cns)
      } catch (error) {
        console.error(error)
      }
    }

    findUsersByFilters()
  }, [])

  // const handleClick = () => {
  //   fileInputRef.current.click() // abre o seletor de arquivos
  // }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCert(file.name)
    }
  }

  // const handleChangeFinancial = (index, field, value) => {
  //   setFinancial((prev) =>
  //     prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
  //   )
  // }

  // const handleChange = (index, field, value, isArrayToggle = false) => {
  //   setOpeningHours((prev) =>
  //     prev.map((item, i) => {
  //       if (isArrayToggle && field === 'days') {
  //         const exists = item[field].includes(value)

  //         // Se for o item selecionado
  //         if (i === index) {
  //           return {
  //             ...item,
  //             [field]: exists
  //               ? item[field].filter((v) => v !== value) // remove se já existe
  //               : [...item[field], value], // adiciona se não existe
  //           }
  //         }

  //         // Para os outros itens, removemos o dia caso exista
  //         return {
  //           ...item,
  //           [field]: item[field].filter((v) => v !== value),
  //         }
  //       }

  //       // Se for input "normal"
  //       if (i === index) {
  //         return { ...item, [field]: value }
  //       }

  //       return item
  //     }),
  //   )
  // }

  const handleSubmit = async () => {
    setLoading(true)
    const payload = {
      nomeUnidade: name,
      codigoInterno: internalCode,
      cnpj: cnpj.replace(/\D/g, '').slice(0, 14),
      razaoSocial: corporateReason,
      nomeFantasia: fantasyName,
      inscricaoMunicipal: municipalRegistration,
      inscricaoEstadual: stateRegistration,
      cnes: CNES,
      contatosUnidade: contacts,
      email,
      codigoServicoPrincipal: mainServiceCode.id,
      codigoServicoSecundario: selectSecondaryServiceCode.map((e) => {
        return e.id
      }),
      cnaePrincipalId: mainCNAE?.id,
      cep: cep.replace('-', ''),
      rua: street,
      numero: number,
      bairro: district,
      complemento: complement,
      estado: state,
      cidade: city,
      nomeResponsavel: responsibleName,
      contatoResponsavel: responsibleContact,
      emailResponsavel: responsibleEmail,
      irrfPercentual: Number(IRRF),
      pisPercentual: Number(PIS),
      cofinsPercentual: Number(COFINS),
      csllPercentual: Number(CSLL),
      issPercentual: Number(ISS),
      ibsPercentual: Number(IBS),
      cbsPercentual: Number(CBS),
      reterIss: retainISS,
      reterIr: retainIR,
      reterPcc: retainPCC,
      reterIbs: retainIBS,
      reterCbs: retainCBS,
      optanteSimplesNacional: nationalSimpleOptant,
      certificadoDigitalVinculado: !!cert,
      ativo: true,
      horariosAtendimento: openingHours.flatMap((item) =>
        item.days.map((dia) => ({
          diaSemana: dia,
          horarioInicio: item.of || '',
          horarioFim: item.until || '',
          intervaloInicio: item.interval || '00:00',
          intervaloFim: item.returnInterval || '00:00',
          semIntervalo: item.enabled,
        })),
      ),
      dadosBancarios: financial.map((e) => {
        return {
          bancoId: e.bancoId,
          agencia: e.agencia,
          digitoAgencia: e.digitoAgencia,
          contaCorrente: e.contaCorrente,
          digitoConta: e.digitoConta,
          tipoConta: 'CORRENTE',
          principal: true,
          observacoes: '0',
        }
      }),
      cnaeSecundarios: selectSecondaryCNAE.map((e) => {
        return { cnaeId: e.id }
      }),
    }

    try {
      const responseCreateUnity = await CreateUnit(payload)

      if (responseCreateUnity.success) {
        setStep('sucess')
        setOpenModalAlerts(true)
        findData()
      } else {
        responseCreateUnity.error.message.forEach((element) => {
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
  }

  // const searchCEP = async () => {
  //   if (cep.length === 9) {
  //     const result = await SearchCep(cep)
  //     setStreet(result?.data?.rua)
  //     setDistrict(result?.data?.bairro)
  //     setCity(result?.data?.cidade)
  //     setState(result?.data?.estado)
  //   }
  // }

  const resetFields = () => {
    setName('')
    setInternalCode('')
    setCnpj('')
    setCorporateReason('')
    setFantasyName('')
    setMunicipalRegistration('')
    setStateRegistration('')
    setCNES('')
    setContacts('')
    setEmail('')
    setMainServiceCode('')
    setSecondaryServiceCode('')
    setSelectSecondaryServiceCode([])
    setMainCNAE({})
    setSecondaryCNAE({})
    setSelectSecondaryCNAE([])
    setCep('')
    setStreet('')
    setNumber('')
    setDistrict('')
    setComplement('')
    setCity('')
    setState('')
    setOpeningHours([
      {
        days: [],
        of: '',
        until: '',
        interval: '',
        returnInterval: '',
        enabled: true,
      },
    ])
    setResponsibleName('')
    setResponsibleContact('')
    setResponsibleEmail('')
    setIRRF('')
    setPIS('')
    setCOFINS('')
    setCSLL('')
    setISS('')
    setIBS('')
    setCBS('')
    setRetainISS(false)
    setRetainIR(false)
    setRetainPCC(false)
    setRetainIBS(false)
    setRetainCBS(false)
    setNationalSimpleOptant(false)
    setCert(false)
    setFinancial([
      {
        banco: '',
        codigoBanco: '',
        bancoId: '',
        agencia: '',
        digitoAgencia: '',
        contaCorrente: '',
        digitoConta: '',
        tipoConta: '',
        principal: false,
        observacoes: '',
      },
    ])
    setStep('sucess')
  }

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
          resetFields()
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
              onClick={() => handleSubmit()}
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
            {/* <Endereco /> */}
            {/* horários */}
            {/* <Horarios /> */}
            {/* responsável */}
            {/* <Responsaveis /> */}
            {/* impostos */}
            {/* <Impostos /> */}
            {/* financeiro */}
            {/* <Financeiro /> */}
            {/* certificado digital */}
            {/* <CertificadoDigital /> */}
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".pem,.crt,.cer,.pdf" // opcional: tipos permitidos
        />
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
