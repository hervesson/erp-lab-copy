import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import { listAllServicesOfHealth, listBankAccount, UpdateUnit } from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaCreateUnit } from '../components/schema'
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
import { formatCNAE } from '@/utils'
dayjs.extend(customParseFormat)

const EditUnityOfHealth = ({ onClose, findData, unit }) => {
  // Loading
  const [loading, setLoading] = useState(false)

  // Coisas
  const [services, setServices] = useState([])

  const [openModalAlerts, setOpenModalAlerts] = useState(false)

  const [banks, setBanks] = useState([])

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

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [allServices, AllAccounts] = await Promise.all([
          listAllServicesOfHealth(),
          listBankAccount('', '', '', '', 100000),
        ])

        const servcs = allServices.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.descricao}`,
          }
        })

        const principalService = servcs.find(
          (element) => element.id === unit?.codigoServicoPrincipal,
        )

        formik.setFieldValue('codigoServicoPrincipal', principalService)

        const csecundarios = unit?.codigoServicoSecundario?.map((e) =>
          servcs.find((element) => element.id === e),
        )

        formik.setFieldValue(
          'codigoServicoSecundarioSelecionados',
          csecundarios,
        )

        const acc = AllAccounts.data.data.map((item) => {
          return {
            id: item.id,
            label: `${item.banco.nome} - ${item.observacoes} - ${item.agencia}-${item.digito_agencia}/${item.numero_conta}-${item.digito_conta}`,
          }
        })

        // formik.setFieldValue('cnaePrincipal', principalCnae)

        setServices(servcs)
        setBanks(acc)
      } catch (error) {
        console.error(error)
      }
    }

    findUsersByFilters()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(unit)

  const formik = useFormik({
    validationSchema: validationSchemaCreateUnit,
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
      codigoServicoPrincipal: {},
      codigoServicoSecundario: {},
      codigoServicoSecundarioSelecionados: [],
      cnaePrincipal: {},
      cnaeSecundario: {},
      cnaesSecundariosSelecionados:
        unit?.cnaeSecundarios?.map((c) => {
          return {
            id: c?.cnae?.id,
            label: `${formatCNAE(c?.cnae?.codigo)} - ${c?.cnae?.descricao}`,
          }
        }) || [],

      // endereço
      cep: unit?.cep,
      rua: unit?.rua,
      numero: unit?.numero,
      bairro: unit?.bairro,
      complemento: unit?.complemento,
      estado: {
        id: '',
        label: unit?.estado,
      },
      cidade: {
        id: '',
        label: unit?.cidade,
      },
      // horarios
      horarios: openingHours,

      // responsavel
      nomeResponsavel: unit?.nomeResponsavel,
      emailResponsavel: unit?.emailResponsavel,
      contatoResponsavel: unit?.contatoResponsavel,

      // impostos
      irrf: Number(unit?.irrfPercentual),
      pis: Number(unit?.pisPercentual),
      cofins: Number(unit?.cofinsPercentual),
      csll: Number(unit?.csllPercentual),
      iss: Number(unit?.issPercentual),
      ibs: Number(unit?.ibsPercentual),
      cbs: Number(unit?.cbsPercentual),
      reterISS: unit?.reterIss,
      reterIR: unit?.reterIr,
      reterPCC: unit?.reterPcc,
      reterIBS: unit?.reterIbs,
      reterCBS: unit?.reterCbs,
      optantePeloSimples: unit?.optanteSimplesNacional,

      // financeiro
      financeiro: unit.contas_bancarias.map((item) => {
        return {
          conta: {
            id: item?.conta_bancaria?.id,
            label: `${item?.conta_bancaria?.banco?.nome} - ${item?.conta_bancaria?.observacoes} - ${item?.conta_bancaria?.agencia}-${item?.conta_bancaria?.digito_agencia}/${item?.conta_bancaria?.numero_conta}-${item?.conta_bancaria?.digito_conta}`,
          },
        }
      }),

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
        contas_bancarias: values.financeiro
          .filter((e) => e?.conta) // só entra quem tem conta diferente de null/undefined
          .map((e) => {
            return {
              conta_bancaria_id: e.conta.id,
            }
          }),
      }

      try {
        const responseCreateUnity = await UpdateUnit(unit?.id, payload)

        if (responseCreateUnity.success) {
          setOpenModalAlerts(true)
          findData()
          formik.resetForm()
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
        <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-white px-12">
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
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => onClose()}
              className="flex h-11 w-[108px] items-center justify-evenly rounded-lg border border-[#F23434]"
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
              className={`flex h-11 w-32 items-center justify-evenly rounded-lg ${
                formik.isValid
                  ? 'bg-[#0F9B7F] text-white hover:from-[#3BC1E2] hover:to-[#1D6F87]'
                  : 'bg-[#A9A9A9] text-[#494949]'
              } ${Outfit400.className}`}
              disabled={loading}
            >
              <span className={`${Outfit400.className} uppercase`}>
                {loading ? 'Salvando' : 'Salvar'}
              </span>
            </button>
          </div>
        </div>

        {/* <div className="flex h-full w-full gap-x-3 overflow-x-auto"> */}
        <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
          <div className="mx-12 my-7 flex h-fit flex-1 flex-col gap-8 rounded bg-white p-12">
            {/* informacoes */}
            <InformacoesBasicas formik={formik} services={services} />
            {/* endereco */}
            <Endereco formik={formik} />
            {/* horários */}
            <Horarios formik={formik} />
            {/* responsável */}
            <Responsaveis formik={formik} />
            {/* impostos */}
            <Impostos formik={formik} />
            {/* financeiro */}
            <Financeiro formik={formik} banks={banks} />
            {/* certificado digital */}
            <CertificadoDigital formik={formik} />
          </div>
        </div>

        <ToastContainer />
      </form>
      {openModalAlerts && (
        <ModalFramer
          open={openModalAlerts}
          setOpen={() => setOpenModalAlerts(false)}
        >
          <SuccessEdit onCloseRegister={() => onClose()} />
        </ModalFramer>
      )}
    </>
  )
}

export default EditUnityOfHealth
