import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import { ListAllCNAEs, listAllServicesOfHealth, UpdateUnit } from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import SuccessEdit from './components/SuccessEdit'

import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

// Components
import CertificadoDigital from './components/certificadoDigital'
import Endereco from './components/endereco'
import Financeiro from './components/financeiro'
import Horarios from './components/horarios'
import Impostos from './components/impostos'
import InformacoesBasicas from './components/informacoesBasicas'
import Responsaveis from './components/responsaveis'
dayjs.extend(customParseFormat)

const EditUnityOfHealth = ({ onClose, findData, unit }) => {
  console.log(unit)
  // Loading
  const [loading, setLoading] = useState(false)

  // Coisas
  const [services, setServices] = useState([])
  const [CNAEs, setCNAES] = useState([])

  const [openModalAlerts, setOpenModalAlerts] = useState(false)

  // Dias de atendimento
  const [openingHours] = useState(() => {
    const list = unit?.horariosAtendimento ?? []
    if (!list.length)
      return [
        {
          days: [],
          of: '',
          until: '',
          interval: '',
          returnInterval: '',
          enabled: true,
        },
      ]

    const z = (v) => !v || v === '00:00' || v === '00:00:00'
    const hm = (v) => dayjs(v, 'HH:mm:ss').format('HH:mm')

    const map = new Map()
    for (const r of list) {
      const of = hm(r.horarioInicio)
      const until = hm(r.horarioFim)
      const interval =
        r.semIntervalo || z(r.intervaloInicio) ? '' : hm(r.intervaloInicio)
      const returnInterval =
        r.semIntervalo || z(r.intervaloFim) ? '' : hm(r.intervaloFim)
      const enabled = !!r.semIntervalo

      const key = `${of}|${until}|${interval}|${returnInterval}|${enabled ? 1 : 0}`
      if (!map.has(key))
        map.set(key, { days: [], of, until, interval, returnInterval, enabled })
      map.get(key).days.push(r.diaSemana)
    }

    return [...map.values()].map((g) => ({ ...g, days: [...new Set(g.days)] }))
  })
  // Financeiro
  const [financial] = useState(() => {
    const mapped = (unit?.contas_bancarias ?? []).map((i) => ({
      banco: i.conta_bancaria?.nome ?? '',
      codigoBanco: i.conta_bancaria?.codigo ?? '',
      bancoId: i.bancoId ?? i.conta_bancaria?.banco_id ?? '',
      agencia: i.agencia ?? '',
      digitoAgencia: i.digitoAgencia ?? '',
      contaCorrente: i.contaCorrente ?? '',
      digitoConta: i.digitoConta ?? '',
      tipoConta: i.tipoConta ?? '',
      principal: !!i.principal,
      observacoes: i.observacoes ?? '',
    }))
    return mapped.length
      ? mapped
      : [
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
        ]
  })

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
      const responseCreateUnity = await UpdateUnit(unit?.id, payload)

      if (responseCreateUnity.success) {
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

  const formik = useFormik({
    // validationSchema: validationSchemaCreateUnit,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      // informações básicas

      nomeUnidade: unit?.nomeUnidade,
      codigoInterno: unit?.codigoInterno,
      cnpj: unit?.cnpj,
      razaoSocial: unit?.razaoSocial,
      nomeFantasia: unit?.nomeFantasia,
      inscricaoMunicipal: unit?.inscricaoMunicipal,
      inscricaoEstadual: unit?.inscricaoEstadual,
      cnes: unit?.cnes,
      telefone: unit?.contatosUnidade,
      email: unit?.email,
      codigoServicoPrincipal: {
        id: unit?.codigoServicoPrincipal?.id,
        label: `${unit?.codigoServicoPrincipal?.codigo} - ${unit?.codigoServicoPrincipal?.descricao}`,
      },
      codigoServicoSecundario: {},
      codigoServicoSecundarioSelecionados:
        unit?.codigoServicoSecundario?.map((c) => {
          return {
            id: c?.cnae?.id,
            label: `${c?.cnae?.codigo} - ${c?.cnae?.descricao}`,
          }
        }) || [],
      cnaePrincipal: {
        id: unit?.cnaePrincipal.codigo,
        label: `${unit?.cnaePrincipal?.codigo} - ${unit?.cnaePrincipal?.descricao}`,
      },
      cnaeSecundario: {},
      cnaesSecundariosSelecionados:
        unit?.cnaeSecundarios?.map((c) => {
          return {
            id: c?.cnae?.id,
            label: `${c?.cnae?.codigo} - ${c?.cnae?.descricao}`,
          }
        }) || [],

      // endereço
      cep: unit?.cep,
      rua: unit?.rua,
      numero: unit?.numero,
      bairro: unit?.bairro,
      complemento: unit?.complemento,
      estado: unit?.estado,
      cidade: unit?.cidade,

      // horarios
      horarios: openingHours,

      // responsavel
      nomeResponsavel: unit?.nomeResponsavel,
      emailResponsavel: unit?.contatoResponsavel,
      contatoResponsavel: unit?.emailResponsavel,

      // impostos
      irrf: unit?.irrfPercentual,
      pis: unit?.pisPercentual,
      cofins: unit?.cofinsPercentual,
      csll: unit?.csllPercentual,
      iss: unit?.issPercentual,
      ibs: unit?.ibsPercentual,
      cbs: unit?.cbsPercentual,
      reterISS: unit?.reterIss,
      reterIR: unit?.reterIr,
      reterPCC: unit?.reterPcc,
      reterIBS: unit?.reterIbs,
      reterCBS: unit?.reterCbs,
      optantePeloSimples: unit?.optanteSimplesNacional,

      // financeiro
      financeiro: financial,

      // certificado
      certificado: unit?.certificadoDigitalVinculado,
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
        codigoServicoSecundario: values.cnaesSecundariosSelecionados.map(
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
            digito_conta: e.digitoConta,
            tipo_conta: e.tipoDeConta.id,
          }
        }),
      }

      try {
        // const responseCreateUnity = await CreateUnit(payload)
        // if (responseCreateUnity.success) {
        //   setOpenModalAlerts(true)
        //   findData()
        // } else {
        //   responseCreateUnity.error.erros.forEach((element) => {
        //     toast.error(element, {
        //       position: 'top-right',
        //     })
        //   })
        // }
      } catch (error) {
        console.log('erro', error)
      } finally {
        setLoading(false)
      }
    },
  })

  return (
    <form className="flex h-screen flex-col bg-[#F9F9F9]" onSubmit={() => null}>
      <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Editar
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
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="flex h-[44px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9] px-4 text-[#494949] hover:bg-[#0F9B7F] hover:text-[#fff]"
          >
            <span className={`${Outfit400.className} uppercase`}>
              {loading ? 'Salvando' : 'Salvar'}
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
      {openModalAlerts && (
        <ModalFramer
          open={openModalAlerts}
          setOpen={() => setOpenModalAlerts(false)}
        >
          <SuccessEdit onCloseRegister={() => onClose()} />
        </ModalFramer>
      )}
      <ToastContainer />
    </form>
  )
}

export default EditUnityOfHealth
