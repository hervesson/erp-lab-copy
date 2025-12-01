import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { listAllFields } from '@/helpers'
import { useFormik } from 'formik'
import { DocumentDownload } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { validationSchemaAccountBank } from './components/schema'

import ModalFramer from '@/components/ModalFramer'

import InformacoeseIntegracao from './components/informacoeseIntegracao'
import InformacoesGerais from './components/informacoesGerais'
import Vinculacao from './components/vinculacao'

// alerts
import CancelRegister from '@/components/Alerts/CancelRegister'
import SuccessRegister from '@/components/Alerts/SuccessRegister'

// colocar o findData
const RegisterAgendas = ({ onClose }) => {
  const [tab, setTab] = useState('informacoesGerais')
  const [fields, setFields] = useState([])

  const [step, setStep] = useState('')
  const [openModalAlerts, setOpenModalAlerts] = useState(false)

  useEffect(() => {
    const findUsersByFilters = async () => {
      try {
        const [fields] = await Promise.all([listAllFields()])

        setFields(fields.data.data)
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
      nomeExame: '',
      codigoInterno: '',
      sinonimos: '',
      codigoTuss: '',
      codigoLoinc: '',
      codigoSUS: '',
      codigoAMB: '',
      tipoExame: '',
      especialidadeExame: '',
      grupo: '',
      subGrupo: '',
      setor: '',
      metodologiaUtilizada: '',
      unidadeDeMedida: '',
      peso: false,
      altura: false,
      volume: false,
      amostraBiologicaNecessaria: '',
      amostraAEnviar: '',
      tipoDeRecipiente: '',
      regiaoDeColeta: '',
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
      formatoLaudo: '',
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
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        console.log(values)
      } finally {
        setSubmitting(false)
      }
    },
  })

  const steps = {
    informacoesGerais: <InformacoesGerais formik={formik} fields={fields} />,
    vinculacao: <Vinculacao formik={formik} fields={fields} />,
    notificacoeseintegracoes: <InformacoeseIntegracao formik={formik} />,
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
        onSubmit={formik.handleSubmit}
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
              Agendas
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
              onClick={() => null}
              className="flex h-11 w-[108px] items-center justify-evenly rounded-lg bg-[#A9A9A9] hover:bg-[#E0FFF9]"
            >
              <span
                className={`${Outfit400.className} text-[#494949] uppercase`}
              >
                Finalizar
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
                onClick={() => setTab('vinculacao')}
                className={`${Outfit400.className} ${tab === 'vinculacao' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
              >
                VINCULAÇÃO
              </button>
              <button
                type="button"
                onClick={() => setTab('notificacoeseintegracoes')}
                className={`${Outfit400.className} ${tab === 'notificacoeseintegracoes' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
              >
                INFORMAÇÕES E INTEGRAÇÃO
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

export default RegisterAgendas
