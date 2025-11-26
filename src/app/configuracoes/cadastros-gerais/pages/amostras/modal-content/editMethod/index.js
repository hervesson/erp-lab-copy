import CustomSelect from '@/components/CustomSelect'
import { Outfit400, Outfit500 } from '@/fonts'
import {
  GetMethodPerId,
  LinklaboratoryToMethod,
  ListAllEnterprisesPerType,
  UpdateMethod,
} from '@/helpers'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaMethod } from './components/schema'

const EditMethod = ({ onClose, selectedMethod, findData }) => {
  // Informações básicas
  const [allLabs, setAllLabs] = useState([])

  const status = {
    ativo: { id: 'ativo', label: 'ATIVO' },
    inativo: { id: 'inativo', label: 'INATIVO' },
    em_validacao: { id: 'em_validacao', label: 'EM VALIDAÇÃO' },
  }

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

  useEffect(() => {
    const fetchMethod = async () => {
      try {
        const response = await GetMethodPerId(selectedMethod.id)
        formik.setFieldValue('id', response.data.id)
        formik.setFieldValue('nomeMetodo', response.data.nome)
        formik.setFieldValue('codigoInterno', response.data.codigoInterno)
        formik.setFieldValue('descricao', response.data.descricao)
        formik.setFieldValue('status', status[response.data.status])
        formik.setFieldValue(
          'laboratoriosAssociados',
          response.data.laboratorioMetodos.map((i) => {
            return {
              laboratorio: {
                id: i.laboratorioId,
                label: 'Faltando o nome do laboratório',
              },
              readOnly: true,
            }
          }),
        )
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchMethod()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMethod.id])

  const formik = useFormik({
    validationSchema: validationSchemaMethod,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      id: '',
      nomeMetodo: '',
      codigoInterno: '',
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
        descricao: values.descricao,
        status: values.status.id,
      }

      try {
        const responseMethod = await UpdateMethod(values.id, payload)

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
        readOnly: false,
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
            AMOSTRAS
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
              Informações básicas
            </span>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Nome da amostra
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('nomeMetodo')}
                    type="text"
                    id="nomeMetodo"
                    name="nomeMetodo"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome da unidade"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={formik.values.codigoInterno}
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite o código interno"
                    disabled
                    readOnly
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
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
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite todos os sinônimos"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Status da amostra
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.status}
                    setSelect={(e) => formik.setFieldValue('status', e)}
                    options={[
                      { id: 'ativo', label: 'ATIVO' },
                      { id: 'inativo', label: 'INATIVO' },
                      { id: 'em_validacao', label: 'EM VALIDAÇÃO' },
                    ]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
              {/* a partir daqui vou ter vários custons selects */}
              {/* LABORATÓRIOS ASSOCIADOS */}
              <div className="flex flex-col gap-4">
                <span
                  className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                >
                  Laboratórios de apoio associados
                </span>

                {formik?.values?.laboratoriosAssociados?.map((item, index) => (
                  <div key={index} className="flex items-end gap-4">
                    {/* SELECT DO LABORATÓRIO */}
                    <div className="flex flex-1 flex-col gap-1">
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
                        readOnly={item.readOnly}
                      />
                    </div>

                    {/* BOTÃO VALIDAR */}
                    <div className="flex flex-col justify-end gap-1">
                      <button
                        type="button"
                        className={`flex h-10 w-[220px] items-center justify-center rounded-lg border border-[#0F9B7F] ${Outfit400.className} text-[14px] text-[#0F9B7F]`}
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
                  className={`mt-2 flex h-10 w-[279px] items-center justify-center rounded-lg border border-[#0F9B7F] ${Outfit400.className} text-[14px] text-[#0F9B7F]`}
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
      <ToastContainer />
    </form>
  )
}

export default EditMethod
