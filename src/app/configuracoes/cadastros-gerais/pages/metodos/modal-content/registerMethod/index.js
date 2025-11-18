import CancelRegister from '@/components/Alerts/CancelRegister'
import SuccessRegister from '@/components/Alerts/SuccessRegister'
import CustomSelect from '@/components/CustomSelect'
import ModalFramer from '@/components/ModalFramer'
import { Outfit400, Outfit500 } from '@/fonts'
import {
  CreateMethod,
  LinklaboratoryToMethod,
  ListAllEnterprisesPerType,
} from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaMethod } from './components/schema'

const RegisterMethod = ({ onClose, findData }) => {
  // Informações básicas
  const [allLabs, setAllLabs] = useState([])
  const [openModalAlerts, setOpenModalAlerts] = useState(false)
  const [step, setStep] = useState('')
  const [codigoInterno] = useState(() => gerarCodigoInterno())

  useEffect(() => {
    const fetchListEnterprises = async () => {
      try {
        const response = await ListAllEnterprisesPerType('LABORATORIO_APOIO')

        const labs = response.data.map((item) => {
          return {
            id: item.id,
            label: `${item.nomeFantasia}`,
          }
        })

        setAllLabs(labs)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchListEnterprises()
  }, [])

  function gerarCodigoInterno() {
    const prefixo = 'MET'
    const numero = Math.floor(Math.random() * 1000) // 0 até 999
    const numeroFormatado = String(numero).padStart(3, '0') // sempre 3 dígitos

    return `${prefixo}${numeroFormatado}`
  }

  const formik = useFormik({
    validationSchema: validationSchemaMethod,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      nomeMetodo: '',
      descricao: '',
      status: '',
      laboratoriosAssociados: [
        {
          laboratorio: null, // objeto vindo do CustomSelect
        },
      ],
    },
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const payload = {
        nome: values.nomeMetodo,
        codigoInterno,
        descricao: values.descricao,
        status: values.status.id,
      }

      try {
        const responseMethod = await CreateMethod(payload)

        if (!responseMethod?.success) {
          const apiErrors = responseMethod?.error?.erros || [
            'Erro ao cadastrar método.',
          ]

          apiErrors.forEach((message) => {
            toast.error(message, { position: 'top-right' })
          })

          return
        }

        const metodoId = responseMethod.data?.id

        // pega só os laboratórios válidos
        const laboratoriosSelecionados = values.laboratoriosAssociados
          .map((item) => item.laboratorio?.id)
          .filter(Boolean)

        if (laboratoriosSelecionados.length > 0) {
          await Promise.all(
            laboratoriosSelecionados.map((laboratorioId) =>
              LinklaboratoryToMethod({
                laboratorioId,
                metodoId,
                validado: false,
                observacoes: '',
              }),
            ),
          )
        }

        setStep('success')
        setOpenModalAlerts(true)
        findData()
        resetForm()
      } catch (error) {
        console.error('Erro ao cadastrar método:', error)

        toast.error('Ocorreu um erro ao salvar o método. Tente novamente.', {
          position: 'top-right',
        })
      } finally {
        setSubmitting(false)
      }
    },
  })

  console.log(formik?.values?.laboratoriosAssociados)

  const getFlatErrors = (errors) => {
    const messages = []

    const walk = (err) => {
      if (!err) return

      if (typeof err === 'string') {
        messages.push(err)
      } else if (Array.isArray(err)) {
        err.forEach(walk)
      } else if (typeof err === 'object') {
        Object.values(err).forEach(walk)
      }
    }

    walk(errors)

    // remove duplicados, se houver
    return [...new Set(messages)]
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

    // se não tiver erro, segue o fluxo normal do formik
    formik.handleSubmit()
  }

  const handleAddLaboratorio = () => {
    formik.setFieldValue('laboratoriosAssociados', [
      ...formik.values.laboratoriosAssociados,
      {
        laboratorio: null,
        valor: '',
      },
    ])
  }

  // const handleRemoveLaboratorio = (index) => {
  //   const list = [...formik.values.laboratoriosAssociados]
  //   list.splice(index, 1)
  //   formik.setFieldValue('laboratoriosAssociados', list)
  // }

  // se quiser validar com o laboratório específico
  const handleValidarLaboratorio = (index) => {
    const item = formik.values.laboratoriosAssociados[index]
    console.log('Validar com laboratório:', item)
    // aqui você pode chamar uma API, abrir modal, etc.
  }

  const steps = {
    cancel: (
      <CancelRegister
        onClose={() => setOpenModalAlerts(false)}
        onCloseRegister={() => onClose()}
      />
    ),
    success: (
      <SuccessRegister
        onClose={() => {
          setOpenModalAlerts(false)
        }}
        onCloseRegister={() => onClose()}
      />
    ),
  }

  const getLabsOptions = (indexAtual) => {
    const selectedIds = formik.values.laboratoriosAssociados
      .map((item, index) => {
        if (index === indexAtual) return null // ignora o da própria linha
        return item.laboratorio?.id || null
      })
      .filter(Boolean) // remove null/undefined

    // retorna só labs que ainda não foram escolhidos em outras linhas
    return allLabs.filter((lab) => !selectedIds.includes(lab.id))
  }

  return (
    <form
      className="flex h-screen flex-col bg-[#F9F9F9]"
      onSubmit={handleValidateAndSubmit}
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
            MÉTODOS
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button
            type="button"
            onClick={() => {
              setStep('cancel')
              setOpenModalAlerts(true)
            }}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434] hover:bg-[#FFE6E6]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="submit"
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
        <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col gap-[32px] rounded bg-[#fff] p-[48px]">
          {/* Informacoes */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Informações básicas
            </span>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Nome do método
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('nomeMetodo')}
                    type="text"
                    id="nomeMetodo"
                    name="nomeMetodo"
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome da unidade"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={codigoInterno}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite o código interno"
                    disabled
                    readOnly
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Descrição
                  </label>
                  <input
                    {...formik.getFieldProps('descricao')}
                    type="text"
                    id="descricao"
                    name="descricao"
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite todos os sinônimos"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Status do método
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.status}
                    setSelect={(e) => formik.setFieldValue('status', e)}
                    options={[
                      { id: 'ativo', label: 'ATIVO' },
                      { id: 'inativo', label: 'INATIVO' },
                    ]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
              {/* a partir daqui vou ter vários custons selects */}
              {/* LABORATÓRIOS ASSOCIADOS */}
              <div className="flex flex-col gap-[16px]">
                <span
                  className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                >
                  Laboratórios de apoio associados
                </span>

                {formik?.values?.laboratoriosAssociados?.map((item, index) => (
                  <div key={index} className="flex items-end gap-[16px]">
                    {/* SELECT DO LABORATÓRIO */}
                    <div className="flex flex-1 flex-col gap-[4px]">
                      <label
                        className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                      >
                        Laboratório de apoio associado
                      </label>

                      <CustomSelect
                        select={item.laboratorio}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `laboratoriosAssociados[${index}].laboratorio`,
                            e,
                          )
                        }
                        options={getLabsOptions(index)}
                        placeholder={'Selecione uma opção'}
                        className={'border border-[#BBBBBB]'}
                      />
                    </div>

                    {/* BOTÃO VALIDAR */}
                    <div className="flex flex-col justify-end gap-[4px]">
                      <button
                        type="button"
                        className={`flex h-[40px] w-[220px] items-center justify-center rounded-[8px] border border-[#0F9B7F] ${Outfit400.className} text-[14px] text-[#0F9B7F]`}
                        onClick={() => handleValidarLaboratorio(index)}
                      >
                        VALIDAR COM LABORATÓRIO
                      </button>
                    </div>
                  </div>
                ))}

                {/* ADICIONAR NOVO LABORATÓRIO */}
                <button
                  type="button"
                  className={`mt-[8px] flex h-[40px] w-[279px] items-center justify-center rounded-[8px] border border-[#0F9B7F] ${Outfit400.className} text-[14px] text-[#0F9B7F]`}
                  onClick={handleAddLaboratorio}
                  disabled={
                    formik.values.laboratoriosAssociados.length ===
                    allLabs.length
                  }
                >
                  NOVO LABORATÓRIO ASSOCIADO
                </button>
              </div>

              {/* aqui encerra */}
            </div>
          </div>
        </div>
      </div>
      {openModalAlerts && (
        <ModalFramer
          open={openModalAlerts}
          setOpen={() => setOpenModalAlerts(false)}
        >
          {steps[step]}
        </ModalFramer>
      )}
      <ToastContainer />
    </form>
  )
}

export default RegisterMethod
