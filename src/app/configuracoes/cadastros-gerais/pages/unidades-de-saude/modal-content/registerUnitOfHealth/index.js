import CustomSelect from '@/components/CustomSelect'
import ModalFramer from '@/components/ModalFramer'
import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import {
  CreateUnit,
  listAllActiveBanks,
  ListAllCNAEs,
  listAllServicesOfHealth,
  SearchCep,
} from '@/helpers'
import { formatCep, formatCnpj, formatPhoneNumber } from '@/utils'
import { Clock, CloseCircle, InfoCircle, Link, Trash } from 'iconsax-reactjs'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import CancelRegister from './components/CancelRegister'
import SuccessRegister from './components/SuccessRegister'

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

  const handleClick = () => {
    fileInputRef.current.click() // abre o seletor de arquivos
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setCert(file.name)
    }
  }

  const handleChangeFinancial = (index, field, value) => {
    setFinancial((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)),
    )
  }

  const handleChange = (index, field, value, isArrayToggle = false) => {
    setOpeningHours((prev) =>
      prev.map((item, i) => {
        if (isArrayToggle && field === 'days') {
          const exists = item[field].includes(value)

          // Se for o item selecionado
          if (i === index) {
            return {
              ...item,
              [field]: exists
                ? item[field].filter((v) => v !== value) // remove se já existe
                : [...item[field], value], // adiciona se não existe
            }
          }

          // Para os outros itens, removemos o dia caso exista
          return {
            ...item,
            [field]: item[field].filter((v) => v !== value),
          }
        }

        // Se for input "normal"
        if (i === index) {
          return { ...item, [field]: value }
        }

        return item
      }),
    )
  }

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

  const searchCEP = async () => {
    if (cep.length === 9) {
      const result = await SearchCep(cep)
      setStreet(result?.data?.rua)
      setDistrict(result?.data?.bairro)
      setCity(result?.data?.cidade)
      setState(result?.data?.estado)
    }
  }

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
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Informações básicas
              </span>

              <div className="flex h-[144px] gap-[16px]">
                <div className="h-[144px] w-[144px] rounded border border-[#A9A9A9]"></div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex gap-[16px]">
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Nome da unidade
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o nome da unidade"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Código interno
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={internalCode}
                        onChange={(e) => setInternalCode(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o código interno"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        CNPJ<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={formatCnpj(cnpj)}
                        onChange={(e) => setCnpj(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o CNPJ"
                        maxLength={18}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Razão social
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={corporateReason}
                        onChange={(e) => setCorporateReason(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite a razão social"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Nome fantasia
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={fantasyName}
                        onChange={(e) => setFantasyName(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o nome fantasia"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[16px]">
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Inscrição municipal
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={municipalRegistration}
                        onChange={(e) =>
                          setMunicipalRegistration(e.target.value)
                        }
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite a inscrição municipal"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Inscrição estadual
                      </label>
                      <input
                        value={stateRegistration}
                        onChange={(e) => setStateRegistration(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite a inscrição estadual"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        CNES<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={CNES}
                        onChange={(e) => setCNES(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o CNES"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Contatos da unidade
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={formatPhoneNumber(contacts)}
                        onChange={(e) => setContacts(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o contato da unidade"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Email
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o e-mail de contato da unidade"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código do serviço principal
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={mainServiceCode}
                  setSelect={(e) => setMainServiceCode(e)}
                  options={services}
                  placeholder={'Selecione o código do serviço principal'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código do serviço secundário
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <div className="flex flex-1 gap-3">
                  <CustomSelect
                    select={secondaryServiceCode}
                    setSelect={(e) => setSecondaryServiceCode(e)}
                    options={services}
                    placeholder={'Selecione o código do serviço secundário'}
                    className={'border border-[#BBBBBB]'}
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
                </div>
              </div>
              {selectSecondaryServiceCode.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectSecondaryServiceCode?.map((item, index) => {
                    return (
                      <div
                        key={index.toString()}
                        className={`h-[40px] bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                      >
                        {item.label}
                        <CloseCircle
                          size="22"
                          color="#F23434"
                          variant="Bold"
                          onClick={() =>
                            setSelectSecondaryServiceCode((prev) =>
                              prev.filter((code) => code !== item),
                            )
                          }
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                  <InfoCircle size="20" color="#737373" variant="Bulk" />
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#737373]`}
                  >
                    Nenhuma opção adicionada
                  </label>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  CNAE principal
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={mainCNAE}
                  setSelect={(e) => setMainCNAE(e)}
                  options={CNAEs}
                  placeholder={`Digite o CNAE`}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  CNAE(s) secundários
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <div className="flex flex-1 gap-3">
                  <CustomSelect
                    select={secondaryCNAE}
                    setSelect={(e) => setSecondaryCNAE(e)}
                    options={CNAEs}
                    placeholder={`Digite o CNAE`}
                    className={'border border-[#BBBBBB]'}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        secondaryCNAE &&
                        !selectSecondaryCNAE.some(
                          (item) => item.id === secondaryCNAE.id,
                        )
                      ) {
                        setSelectSecondaryCNAE([
                          ...selectSecondaryCNAE,
                          secondaryCNAE,
                        ])
                      }
                      setSecondaryCNAE('')
                    }}
                    className={`${Outfit400.className} text-[] h-[40px] rounded-[8px] border-1 border-[#0F9B7F] px-2 text-[#0F9B7F]`}
                  >
                    ADICIONAR
                  </button>
                </div>
              </div>
              {selectSecondaryCNAE.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {selectSecondaryCNAE?.map((item, index) => {
                    return (
                      <div
                        key={index.toString()}
                        className={`h-[40px] bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                      >
                        {item.codigo} {item.label}
                        <CloseCircle
                          size="22"
                          color="#F23434"
                          variant="Bold"
                          onClick={() =>
                            setSelectSecondaryCNAE((prev) =>
                              prev.filter((code) => code !== item),
                            )
                          }
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                  <InfoCircle size="20" color="#737373" variant="Bulk" />
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#737373]`}
                  >
                    Nenhuma opção adicionada
                  </label>
                </div>
              )}
            </div>
            {/* endereco */}
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Endereço
              </span>

              <div className="flex h-[144px] gap-[16px]">
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex gap-[16px]">
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        CEP<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={formatCep(cep)}
                        onChange={(e) => setCep(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o cep"
                        onBlur={() => searchCEP()}
                        autoComplete="off"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Rua
                      </label>
                      <input
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite a rua"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Número<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o número"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Bairro
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o bairro"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[16px]">
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Complemento<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={complement}
                        onChange={(e) => setComplement(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite um complemento"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Estado<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o estado"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Cidade<strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o estado"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* horários */}
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Horários de atendimento
              </span>

              {openingHours?.map((item, index) => {
                return (
                  <div
                    className="flex flex-col gap-[16px]"
                    key={index.toString()}
                  >
                    <div className="flex gap-[16px]">
                      <div className="flex flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} text-[14px] text-[#222222]`}
                        >
                          Dias de atendimento
                          <strong className="text-[#F23434]">*</strong>
                        </label>
                        <div className="w-full">
                          <div className="flex gap-2">
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'SEGUNDA', true)
                              }
                              className={`${
                                openingHours[index].days.includes('SEGUNDA')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              SEG
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'TERCA', true)
                              }
                              className={`${
                                openingHours[index].days.includes('TERCA')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              TER
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'QUARTA', true)
                              }
                              className={`${
                                openingHours[index].days.includes('QUARTA')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              QUA
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'QUINTA', true)
                              }
                              className={`${
                                openingHours[index].days.includes('QUINTA')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              QUI
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'SEXTA', true)
                              }
                              className={`${
                                openingHours[index].days.includes('SEXTA')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              SEX
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'SABADO', true)
                              }
                              className={`${
                                openingHours[index].days.includes('SABADO')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              SAB
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'DOMINGO', true)
                              }
                              className={`${
                                openingHours[index].days.includes('DOMINGO')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              DOM
                            </span>
                            <span
                              onClick={() =>
                                handleChange(index, 'days', 'FERIADOS', true)
                              }
                              className={`${
                                openingHours[index].days.includes('FERIADOS')
                                  ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                                  : 'bg-[#F9F9F9] text-[#BBBBBB]'
                              } flex h-[40px] w-[90px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                            >
                              FERIADOS
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} text-[14px] text-[#222222]`}
                        >
                          Período de atendimento
                          <strong className="text-[#F23434]">*</strong>
                        </label>
                        <div className="flex items-center gap-[16px]">
                          <div className="flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] border border-[#A1A1A1] px-2">
                            <input
                              value={openingHours[index].of}
                              onChange={(e) =>
                                handleChange(index, 'of', e.target.value)
                              }
                              type="time"
                              className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                            />
                            <Clock size="28" color="#A1A1A1" />
                          </div>
                          <span
                            className={`${Outfit400.className} text-[#222]`}
                          >
                            às
                          </span>
                          <div className="flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] border border-[#A1A1A1] px-2">
                            <input
                              value={openingHours[index].until}
                              onChange={(e) =>
                                handleChange(index, 'until', e.target.value)
                              }
                              type="time"
                              className={`${Outfit400.className} w-[60px] outline-0`}
                            />
                            <Clock size="28" color="#A1A1A1" />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} text-[14px] text-[#222222]`}
                        >
                          Período de intervalo
                          <strong className="text-[#F23434]">*</strong>
                        </label>
                        <div className="flex items-center gap-[16px]">
                          <div
                            className={`flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] ${openingHours[index].enabled ? 'border border-dashed' : 'border'} border-[#A1A1A1] px-2`}
                          >
                            <input
                              value={openingHours[index].interval}
                              onChange={(e) =>
                                handleChange(index, 'interval', e.target.value)
                              }
                              type="time"
                              className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                              disabled={openingHours[index].enabled}
                            />
                            <Clock size="28" color="#A1A1A1" />
                          </div>
                          <span
                            className={`${Outfit400.className} text-[#222]`}
                          >
                            às
                          </span>
                          <div
                            className={`flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] ${openingHours[index].enabled ? 'border border-dashed' : 'border'} border-[#A1A1A1] px-2`}
                          >
                            <input
                              value={openingHours[index].returnInterval}
                              onChange={(e) =>
                                handleChange(
                                  index,
                                  'returnInterval',
                                  e.target.value,
                                )
                              }
                              type="time"
                              className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                              disabled={openingHours[index].enabled}
                            />
                            <Clock size="28" color="#A1A1A1" />
                          </div>
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={openingHours[index].enabled}
                              onChange={(e) => {
                                handleChange(index, 'enabled', e.target.checked)
                                if (e.target.checked) {
                                  handleChange(index, 'returnInterval', '')
                                  handleChange(index, 'interval', '')
                                }
                              }}
                              className={`${Outfit400.className} text-[#222222] outline-0`}
                            />
                            <span
                              className={`${Outfit300.className} text-[#222]`}
                            >
                              Sem intervalo
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col justify-end">
                        {openingHours[index].days.length > 0 ? (
                          <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E0FFF9] px-3">
                            <label
                              className={`${Outfit300.className} text-[14px] text-[#0F9B7F]`}
                            >
                              {openingHours[index].days.join(' - ')} - das{' '}
                              {openingHours[index].of} as{' '}
                              {openingHours[index].until}{' '}
                              {!openingHours[index].enabled && 'e das '}
                              {openingHours[index].interval}{' '}
                              {!openingHours[index].enabled && 'as '}
                              {openingHours[index].returnInterval}
                            </label>
                          </div>
                        ) : (
                          <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                            <InfoCircle
                              size="20"
                              color="#737373"
                              variant="Bulk"
                            />
                            <label
                              className={`${Outfit300.className} text-[14px] text-[#737373]`}
                            >
                              Nenhuma opção adicionada
                            </label>
                          </div>
                        )}
                      </div>
                      {openingHours.length === 1 ? null : (
                        <div
                          className="flex flex-col justify-end py-[8px]"
                          onClick={() =>
                            setOpeningHours((prev) =>
                              prev.filter((_, i) => i !== index),
                            )
                          }
                        >
                          <Trash size="28" color="#737373" />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}

              <button
                type="button"
                onClick={() =>
                  setOpeningHours([
                    ...openingHours,
                    {
                      days: [],
                      of: '',
                      until: '',
                      interval: '',
                      returnInterval: '',
                      enabled: true,
                    },
                  ])
                }
                className={`${Outfit400.className} h-[40px] w-[235px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F]`}
              >
                ADICIONAR NOVO PERÍODO
              </button>
            </div>
            {/* responsável */}
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Responsável
              </span>

              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-1 flex-col gap-[4px]">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[#222222]`}
                    >
                      Nome do responsável
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      value={responsibleName}
                      onChange={(e) => setResponsibleName(e.target.value)}
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                      placeholder="Digite o nome do responsável"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-1 flex-col gap-[4px]">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[#222222]`}
                    >
                      Contato do responsável
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      value={formatPhoneNumber(responsibleContact)}
                      onChange={(e) => setResponsibleContact(e.target.value)}
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                      placeholder="Digite o contato do responsável"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex flex-1 flex-col gap-[4px]">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[#222222]`}
                    >
                      Email
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      value={responsibleEmail}
                      onChange={(e) => setResponsibleEmail(e.target.value)}
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                      placeholder="Digite o email do responsável"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* impostos */}
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Impostos
              </span>

              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    IRRF (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={IRRF}
                    onChange={(e) => setIRRF(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    PIS (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={PIS}
                    onChange={(e) => setPIS(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    COFINS (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={COFINS}
                    onChange={(e) => setCOFINS(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    CSLL (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={CSLL}
                    onChange={(e) => setCSLL(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    ISS (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={ISS}
                    onChange={(e) => setISS(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    IBS (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={IBS}
                    onChange={(e) => setIBS(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    CBS (% ou R$)
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    value={CBS}
                    onChange={(e) => setCBS(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite percentual"
                  />
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Reter ISS
                    <InfoCircle size="20" color="#A1A1A1" />
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
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Reter IR
                    <InfoCircle size="20" color="#A1A1A1" />
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
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Reter PCC
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`${!retainPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => setRetainPCC(!retainPCC)}
                    >
                      NÃO
                    </button>
                    <button
                      type="button"
                      className={`${retainPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => setRetainPCC(!retainPCC)}
                    >
                      SIM
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Reter IBS
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`${!retainIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => setRetainIBS(!retainIBS)}
                    >
                      NÃO
                    </button>
                    <button
                      type="button"
                      className={`${retainIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => setRetainIBS(!retainIBS)}
                    >
                      SIM
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Reter CBS
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`${!retainCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => setRetainCBS(!retainCBS)}
                    >
                      NÃO
                    </button>
                    <button
                      type="button"
                      className={`${retainCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => setRetainCBS(!retainCBS)}
                    >
                      SIM
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Optante pelo simples nacional
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`${!nationalSimpleOptant ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() =>
                        setNationalSimpleOptant(!nationalSimpleOptant)
                      }
                    >
                      NÃO
                    </button>
                    <button
                      type="button"
                      className={`${nationalSimpleOptant ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() =>
                        setNationalSimpleOptant(!nationalSimpleOptant)
                      }
                    >
                      SIM
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px]" />
              </div>
            </div>
            {/* financeiro */}
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Financeiro
              </span>
              {financial?.map((item, index) => {
                return (
                  <div className="flex gap-[16px]" key={index.toString()}>
                    <div className="flex w-full flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Selecione um banco
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={{ id: item.codigoBanco, label: item.banco }}
                        setSelect={(e) => {
                          handleChangeFinancial(index, 'banco', e.label)
                          handleChangeFinancial(index, 'codigoBanco', e.id)
                          handleChangeFinancial(index, 'bancoId', e.id)
                        }}
                        options={activeBanks}
                        placeholder={'Selecione o banco'}
                        className={'border border-[#BBBBBB]'}
                      />
                    </div>

                    <div className="flex w-full flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Agência
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={item.agencia}
                        onChange={(e) =>
                          handleChangeFinancial(
                            index,
                            'agencia',
                            e.target.value,
                          )
                        }
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite a agência"
                      />
                    </div>

                    <div className="flex flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Dígito agência
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={item.digitoAgencia}
                        onChange={(e) =>
                          handleChangeFinancial(
                            index,
                            'digitoAgencia',
                            e.target.value,
                          )
                        }
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o dígito da agência"
                      />
                    </div>

                    <div className="flex w-full flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Conta corrente
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={item.contaCorrente}
                        onChange={(e) =>
                          handleChangeFinancial(
                            index,
                            'contaCorrente',
                            e.target.value,
                          )
                        }
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite a conta corrente"
                      />
                    </div>

                    <div className="flex flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Dígito Conta
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <input
                        value={item.digitoConta}
                        onChange={(e) =>
                          handleChangeFinancial(
                            index,
                            'digitoConta',
                            e.target.value,
                          )
                        }
                        className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                        placeholder="Digite o dígito da agência"
                      />
                    </div>

                    <div
                      className="flex flex-col justify-end py-[8px]"
                      onClick={() =>
                        setFinancial((prev) =>
                          prev.filter((_, i) => i !== index),
                        )
                      }
                    >
                      <Trash size="28" color="#737373" />
                    </div>
                  </div>
                )
              })}

              <button
                type="button"
                className={`${Outfit400.className} h-[40px] w-[235px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F]`}
                onClick={() =>
                  setFinancial([
                    ...financial,
                    {
                      banco: '',
                      codigoBanco: '0',
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
                }
              >
                ADICIONAR NOVO BANCO
              </button>
            </div>
            {/* certificado digital */}
            <div className="flex flex-col gap-[16px]">
              <span
                className={`${Outfit400.className} h-[28px] text-[16px] text-[#0F9B7F]`}
              >
                Certificado digital
              </span>

              <div className="flex flex-col gap-[16px]">
                <div className="flex flex-1 gap-2">
                  <button
                    onClick={cert ? () => setCert(null) : () => handleClick()}
                    type="button"
                    className={`${Outfit400.className} ${cert ? 'border border-[#F23434] text-[#F23434]' : 'border border-[#0F9B7F] text-[#0F9B7F]'} flex h-[40px] w-[235px] items-center justify-evenly rounded-[8px]`}
                  >
                    <Link
                      size="28"
                      color={cert ? '#F23434' : '#0F9B7F'}
                      variant="TwoTone"
                    />
                    {cert ? 'REMOVER CERTIFICADO' : 'VINCULAR CERTIFICADO'}
                  </button>
                  {cert ? (
                    <div className="flex h-[40px] items-center gap-2 rounded-[8px] bg-[#E9FDEE] px-3">
                      <InfoCircle size="20" color="#2CB04B" variant="Bulk" />
                      <label
                        className={`${Outfit300.className} text-[14px] text-[#2CB04B]`}
                      >
                        Certificado vinculado com sucesso
                      </label>
                    </div>
                  ) : (
                    <div className="flex h-[40px] items-center gap-2 rounded-[8px] bg-[#E7E7E7] px-3">
                      <InfoCircle size="20" color="#737373" variant="Bulk" />
                      <label
                        className={`${Outfit300.className} text-[14px] text-[#737373]`}
                      >
                        Certificado pendente
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
