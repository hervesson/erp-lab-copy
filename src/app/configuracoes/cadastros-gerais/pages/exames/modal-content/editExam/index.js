import ModalFramer from '@/components/ModalFramer'
import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import {
  CreateExam,
  ListAllEnterprisesPerType,
  listAllFields,
  listAllUnits,
  ListSamples,
} from '@/helpers'
import { getFlatErrors } from '@/utils'
import { useFormik } from 'formik'
import { DocumentDownload } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {
  validarInformacoesDeApoioEToast,
  validarUnidadesEToast,
  validationSchema,
} from './components/schema'

import InformacoesDeApoio from './components/informacoesDeApoio'
import InformacoesGerais from './components/informacoesGerais'
import InformacoesInternas from './components/informacoesInternas'

// alerts
import CancelRegister from '@/components/Alerts/CancelRegister'
import SuccessRegister from '@/components/Alerts/SuccessRegister'

// colocar o findData
const EditExam = ({ onClose, findData }) => {
  const [tab, setTab] = useState('informacoesGerais')
  const [fields, setFields] = useState([])
  const [units, setUnits] = useState([])
  const [samples, setSamples] = useState([])
  const [labs, setLabs] = useState([])
  const [loading, setLoading] = useState(false)

  const [step, setStep] = useState('')
  const [openModalAlerts, setOpenModalAlerts] = useState(false)

  useEffect(() => {
    const findFields = async () => {
      try {
        const [fields, unts, lbs, spls] = await Promise.all([
          listAllFields(),
          listAllUnits(1, '', 100000),
          ListAllEnterprisesPerType('LABORATORIO_APOIO'),
          ListSamples('', '', 1, 10000),
        ])

        const valuesUnits = unts.data.data.map((item) => {
          return {
            id: item.id,
            label: item.nomeUnidade,
          }
        })

        const labs = lbs?.data?.map((item) => {
          return {
            id: item.id,
            label: item.nomeFantasia,
          }
        })

        const samples = spls?.data?.data?.map((item) => {
          return {
            id: item.id,
            label: item.nome,
          }
        })

        console.log()

        setFields(fields.data.data)
        setUnits(valuesUnits)
        setSamples(samples)
        setLabs(labs)
      } catch (error) {
        console.error(error)
      }
    }

    findFields()
  }, [])

  const formik = useFormik({
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      nomeExame: '',
      codigoInterno: '',
      sinonimo: '',
      sinonimos: [],
      codigoCBHPM: '',
      codigoTuss: '',
      codigoLoinc: '',
      codigoSUS: '',
      codigoAMB: '',
      tipoExame: {},
      especialidadeExame: '',
      grupo: '',
      subGrupo: '',
      setor: '',
      unidades: [
        {
          unidade_id: null,
          destino: '',
          telemedicina_id: null,
          laboratorio_apoio_id: null,
        },
      ],
      laboratorioDeApoio: {},
      termoConsentimento: false,
      requisitos_anvisa: {},
      metodologiaUtilizada: '',
      unidadeDeMedida: '',
      peso: false,
      altura: false,
      volume: false,
      amostraBiologicaNecessaria: '',
      amostraAEnviar: '',
      tipoDeRecipiente: '',
      regiaoDeColeta: {},
      regiao_coleta_ids: [],
      valorMinimoRequerido: '',
      estabilidade: '',
      preparoPublicoGeral: '',
      preparoFeminino: '',
      preparoInfantil: '',
      coletaPublicoGeral: '',
      coletaFeminino: '',
      coletaInfantil: '',
      tecnicaDeColeta: '',
      lembretesColetora: '',
      lembretesRecepcionistaAgendamentos: '',
      lembretesRecepcionistaOrdemDeServico: '',
      lembretesDistribuicao: '',
      prazoDeEntrega: '',
      formatoLaudo: [],
      informacoesDeApoio: [],
    },
    onSubmit: async (values, { setSubmitting }) => {
      setLoading(true)
      try {
        const isExternoLaboratorial =
          values?.tipoExame?.label === 'Laboratorial' &&
          values?.destino?.id === 'externo'

        const isExternoImagem =
          values?.tipoExame?.label === 'Imagem' &&
          values?.destino?.id === 'externo'

        const payload = {
          codigo_interno: values.codigoInterno,
          nome: values.nomeExame,
          sinonimos: values.sinonimos,
          codigo_cbhpm: values.codigoCBHPM,
          codigo_tuss: values.codigoTuss,
          codigo_amb: values.codigoAMB,
          codigo_loinc: values.codigoLoinc,
          codigo_sus: values.codigoSUS,
          tipo_exame_id: values.tipoExame.id,
          especialidade_id: values.especialidadeExame.id,
          subgrupo_id: values.subGrupo.id,
          setor_id: values.setor.id,
          unidades: values.unidades.map((item) => {
            return {
              unidade_id: item.unidade_id.id,
              destino: isExternoLaboratorial ? 'apoio' : 'telemedicina',
              ...(isExternoLaboratorial && {
                laboratorio_apoio_id: values.laboratorioDeApoio.id,
              }),
              ...(isExternoImagem && {
                telemedicina_id: values.telemedicina_id.id,
              }),
            }
          }),
          metodologia_id: values.metodologiaUtilizada.id,
          grupo_id: values.grupo.id,
          requer_peso: values.peso,
          requer_altura: values.altura,
          requer_volume: values.volume,
          termo_consentimento: values.termoConsentimento,
          unidade_medida_id: values.unidadeDeMedida.id,
          amostra_id: values.amostraBiologicaNecessaria.id,
          amostra_enviar_id: values.amostraAEnviar.id,
          tipo_recipiente_id: values.tipoDeRecipiente.id,
          regiao_coleta_ids: values.regiao_coleta_ids.map((item) => item.id),
          estabilidade_id: values.estabilidade.id,
          volume_minimo_id: values.valorMinimoRequerido.id,
          formatos_laudo: values.formatoLaudo.map((item) => item.id),
          requisitos_anvisa_id: values.requisitos_anvisa.id,
          prazo_entrega_dias: Number(values.prazoDeEntrega),
          tecnica_coleta: values.tecnicaDeColeta,
          distribuicao: values.lembretesDistribuicao,
          preparo_geral: values.preparoPublicoGeral,
          preparo_feminino: values.preparoFeminino,
          preparo_infantil: values.preparoInfantil,
          coleta_geral: values.coletaPublicoGeral,
          coleta_feminino: values.coletaFeminino,
          coleta_infantil: values.coletaInfantil,
          lembrete_coletora: values.lembretesColetora,
          lembrete_recepcionista_agendamento:
            values.lembretesRecepcionistaAgendamentos,
          lembrete_recepcionista_os:
            values.lembretesRecepcionistaOrdemDeServico,
          status: 'ativo',
        }

        try {
          const responseCreateUnity = await CreateExam(payload)
          if (responseCreateUnity.success) {
            setStep('sucess')
            setOpenModalAlerts(true)
            findData()
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

  // console.log(formik.errors)

  const steps = {
    informacoesGerais: (
      <InformacoesGerais
        formik={formik}
        fields={fields}
        units={units}
        labs={labs}
      />
    ),
    informacoesInternas: (
      <InformacoesInternas formik={formik} fields={fields} samples={samples} />
    ),
    informacoesDeApoio: (
      <InformacoesDeApoio
        formik={formik}
        fields={fields}
        labs={labs}
        samples={samples}
      />
    ),
  }

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

    const ok = validarUnidadesEToast(formik.values, (m) => toast.error(m))
    if (!ok) return

    const okInfos = validarInformacoesDeApoioEToast(formik.values, (m) =>
      toast.error(m),
    )
    if (!okInfos) return

    // se não tiver erro, segue o fluxo normal do formik
    formik.handleSubmit()
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
              Exames
            </span>
          </div>
          <div className="flex gap-4">
            <button className="flex h-11 w-[120px] items-center justify-evenly rounded-lg bg-[#F9F9F9] hover:bg-[#E0FFF9]">
              <span className={`${Outfit300.className} text-[#222222]`}>
                Baixar planilha
              </span>
            </button>
            <button className="flex h-11 w-[166px] items-center justify-evenly rounded-lg bg-[#F9F9F9] hover:bg-[#E0FFF9]">
              <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
              <span className={`${Outfit300.className} text-[#222222]`}>
                Importar arquivo
              </span>
            </button>
            <div className="border border-[#BBBBBB]" />
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
                {loading ? 'Finalizando' : 'Finalizar'}
              </span>
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
                onClick={() => setTab('informacoesInternas')}
                className={`${Outfit400.className} ${tab === 'informacoesInternas' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
              >
                INFORMAÇÕES INTERNAS
              </button>

              <button
                type="button"
                onClick={() => setTab('informacoesDeApoio')}
                className={`${Outfit400.className} ${
                  tab === 'informacoesDeApoio' &&
                  'border-b-2 border-[#0F9B7F] bg-white'
                } h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
              >
                INFORMAÇÕES DE APOIO
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
      <ToastContainer />
    </>
  )
}

export default EditExam
