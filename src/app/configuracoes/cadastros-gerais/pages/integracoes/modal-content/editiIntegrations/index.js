import CustomSelect from '@/components/CustomSelect'
import { Outfit400, Outfit500 } from '@/fonts'
import { GetListTypesIntegrations, UpdateIntegration } from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchema } from './components/schema'
import { TypeFields } from './components/typeField'

const EditIntegrations = ({ selectedIntegration, onClose, findData }) => {
  const [listTypesIntegrations, setListTypesIntegrations] = useState([])

  useEffect(() => {
    const fetchListEnterprises = async () => {
      try {
        const response = await GetListTypesIntegrations()

        const labs = response?.data?.map((item) => {
          return {
            id: item.slug,
            label: item.slug,
            item,
          }
        })

        const integration = labs.find(
          (element) => element.item.nome === selectedIntegration.nomeInstancia,
        )

        const initialConfigs = Array.isArray(selectedIntegration.configuracoes)
          ? selectedIntegration.configuracoes.reduce((acc, cfg) => {
              acc[cfg.chave] = cfg.valor
              return acc
            }, {})
          : selectedIntegration.configuracoes || {}

        handleChangeTipoIntegracao(integration, initialConfigs)

        setListTypesIntegrations(labs)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchListEnterprises()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const formik = useFormik({
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      tipoDeIntegracao: {},
      descricao: selectedIntegration?.descricao,
      codigo: selectedIntegration.codigoIdentificacao,
      camposIntegracao: {},
    },

    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const payload = {
        templateSlug: values.tipoDeIntegracao.item.slug,
        codigoIdentificacao: values.codigo,
        nomeInstancia: values.tipoDeIntegracao.item.nome,
        descricao: values.descricao,
        tiposContexto: values.tipoDeIntegracao.item.tipos_contexto,
        configuracoes: values.camposIntegracao,
      }

      console.log(payload)

      try {
        const responseMethod = await UpdateIntegration(
          selectedIntegration.id,
          payload,
        )

        if (!responseMethod?.success) {
          const apiErrors = responseMethod?.error?.erros || [
            'Erro ao cadastrar método.',
          ]

          apiErrors.forEach((message) => {
            toast.error(message, { position: 'top-right' })
          })

          return
        }

        findData()
        resetForm()
        onClose()
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

    // 1) validação do Yup (campos fixos)
    const errors = await formik.validateForm()
    const messagesFromYup = getFlatErrors(errors)

    // 2) validação manual dos campos dinâmicos
    const dynamicMessages = []
    const campos = formik.values?.tipoDeIntegracao?.item?.campos || []

    campos.forEach((campo) => {
      if (!campo.obrigatorio) return

      const valor = formik.values.camposIntegracao?.[campo.chave]

      // regras simples: string vazia, null, undefined
      if (
        valor === undefined ||
        valor === null ||
        (typeof valor === 'string' && valor.trim() === '')
      ) {
        dynamicMessages.push(`Informe ${campo.label}`)
        return
      }

      // se quiser tratar number diferente:
      if (campo.tipo === 'number') {
        const num = Number(valor)
        if (Number.isNaN(num)) {
          dynamicMessages.push(`Informe um número válido para ${campo.label}`)
        }
      }

      // se quiser tratar URL:
      if (campo.tipo === 'url') {
        try {
          // valida muito básica de URL
          // eslint-disable-next-line no-new
          new URL(valor)
        } catch {
          dynamicMessages.push(`Informe uma URL válida para ${campo.label}`)
        }
      }
    })

    // 3) junta tudo (fixos + dinâmicos)
    const allMessages = [...new Set([...messagesFromYup, ...dynamicMessages])]

    if (allMessages.length > 0) {
      toast.error(
        <div>
          <p className="font-semibold">Corrija os campos obrigatórios:</p>
          <ul className="mt-2 list-disc pl-5">
            {allMessages.map((msg, index) => (
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

    // 4) se não tiver erro, segue o fluxo normal do formik
    formik.handleSubmit()
  }

  const handleChangeTipoIntegracao = (opt, initialConfigs = {}) => {
    formik.setFieldValue('tipoDeIntegracao', opt)

    const campos = opt?.item?.campos ?? []

    const novosCampos = campos.reduce((acc, campo) => {
      const key = campo.chave

      // 1ª prioridade: valor vindo da edição (selectedIntegration.configuracoes)
      if (initialConfigs && initialConfigs[key] !== undefined) {
        acc[key] = initialConfigs[key]
      } else {
        // 2ª prioridade: valor já existente no formik (caso usuário já tenha digitado algo)
        acc[key] = formik.values.camposIntegracao[key] ?? ''
      }

      return acc
    }, {})

    formik.setFieldValue('camposIntegracao', novosCampos)
  }

  return (
    <form
      className="flex h-screen flex-col bg-[#F9F9F9]"
      onSubmit={handleValidateAndSubmit}
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
            INTEGRAÇÕES
          </span>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-11 w-[108px] items-center justify-evenly rounded-lg border border-[#F23434] hover:bg-[#FFE6E6]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="submit"
            className={`flex h-11 w-[108px] items-center justify-evenly rounded-lg ${
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
        <div className="mx-12 my-7 flex h-fit flex-1 flex-col gap-8 rounded bg-white p-12">
          {/* Informacoes */}
          <div className="flex flex-col gap-4">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Informações iniciais
            </span>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Tipo de integração
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.tipoDeIntegracao}
                    setSelect={handleChangeTipoIntegracao}
                    options={listTypesIntegrations}
                    placeholder={'Selecione um tipo de integração'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Descrição da API
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('descricao')}
                    type="text"
                    id="descricao"
                    name="descricao"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite uma descrição para integração"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Código de identificação
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('codigo')}
                    type="text"
                    id="codigo"
                    name="codigo"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite um código de identificação"
                  />
                </div>
              </div>
              {/* A partir daqui vou ter vários custons selects */}
            </div>
            {formik.values?.tipoDeIntegracao?.id && (
              <span
                className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Informações especificas
              </span>
            )}

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                {formik.values?.tipoDeIntegracao?.item?.campos?.map(
                  (item, index) => (
                    <div
                      className="flex flex-col gap-1"
                      key={item.chave || index.toString()}
                    >
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        {item.label}
                        {item.obrigatorio && (
                          <strong className="text-[#F23434]">*</strong>
                        )}
                      </label>
                      <TypeFields item={item} formik={formik} />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </form>
  )
}

export default EditIntegrations
