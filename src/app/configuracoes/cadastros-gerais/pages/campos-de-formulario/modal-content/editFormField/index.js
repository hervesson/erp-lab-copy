import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import {
  CreateAlternative,
  DeleteAlternative,
  UpdateAlternative,
  UpdateField,
} from '@/helpers'
import { FormikProvider, useFormik } from 'formik'
import { Trash } from 'iconsax-reactjs'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaFormField } from './components/schema'

const RegisterFormField = ({ onClose, formField, findData }) => {
  const [excludeItems, setExcludeItems] = useState([])

  const formik = useFormik({
    validationSchema: validationSchemaFormField,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      campo: { id: formField.id, label: formField.nomeCampo },
      description: formField.descricao,
      options: formField.alternativas.map((item) => {
        return {
          id: item.id,
          name: item.textoAlternativa,
          status: item.ativo ? 'active' : 'inactive',
          ordem: item.ordem,
        }
      }),
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await UpdateField(values.campo.id, {
          descricao: values.description,
        })

        const resultsExclude = await Promise.allSettled(
          excludeItems.map((payload) =>
            DeleteAlternative(values.campo.id, payload.id),
          ),
        )

        // caso tudo ok, você pode limpar a lista de itens a serem excluídos
        const allOkExclude = resultsExclude.every(
          (r) => r.status === 'fulfilled',
        )
        if (allOkExclude) {
          setExcludeItems([])
        }

        const results = await Promise.allSettled(
          values.options.map((item, index) =>
            item.id
              ? UpdateAlternative(values.campo.id, item.id, {
                  textoAlternativa: item.name,
                  ordem: index,
                  ativo: item.status === 'active',
                })
              : CreateAlternative(values.campo.id, {
                  textoAlternativa: item.name,
                  ordem: index,
                  ativo: item.status === 'active',
                }),
          ),
        )

        // caso tudo ok, você pode limpar/fechar/atualizar
        const allOk = results.every((r) => r.status === 'fulfilled')
        if (allOk) {
          // resetar o form se quiser:
          formik.resetForm()
          findData()
          onClose()
        }
      } catch (error) {
        console.error(error)
      } finally {
        setSubmitting(false)
      }
    },
  })

  // helpers
  const touchAll = (obj) => {
    if (Array.isArray(obj)) return obj.map(touchAll)
    if (obj && typeof obj === 'object') {
      return Object.fromEntries(
        Object.keys(obj).map((k) => [k, touchAll(obj[k])]),
      )
    }
    return true
  }

  const flattenErrors = (errs, out = []) => {
    if (!errs) return out
    if (typeof errs === 'string') {
      out.push(errs)
      return out
    }
    if (Array.isArray(errs)) errs.forEach((e) => flattenErrors(e, out))
    else if (typeof errs === 'object')
      Object.values(errs).forEach((v) => flattenErrors(v, out))
    return out
  }

  // no componente:
  const handleFinalize = async () => {
    // dispara validação do Formik/Yup
    const errors = await formik.validateForm()

    if (Object.keys(errors).length > 0) {
      // marca tudo como touched pra exibir erros inline (se quiser)
      formik.setTouched(touchAll(formik.values), true)

      // agrega mensagens únicas pro toast
      const messages = Array.from(new Set(flattenErrors(errors)))
      const body = messages.join('\n')

      toast.error(body, {
        position: 'top-right',
        autoClose: 6000,
        closeOnClick: true,
      })
      return
    }

    // se estiver válido, submete
    formik.handleSubmit()
  }

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className="flex h-screen flex-1 flex-col bg-[#F9F9F9]"
      >
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
              CAMPOS DE FORMULÁRIO
            </span>
          </div>
          <div className="flex gap-[16px]">
            <button
              type="button"
              onClick={() => onClose()}
              className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434] hover:bg-[#FFE6E6]"
            >
              <span
                className={`${Outfit400.className} text-[#F23434] uppercase`}
              >
                Cancelar
              </span>
            </button>
            <button
              type="button"
              onClick={handleFinalize}
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
          <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col rounded">
            <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
              <div className="flex flex-col gap-[32px]">
                <div className="flex flex-col gap-[16px]">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Informações iniciais
                  </span>

                  <div className="flex gap-[16px]">
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex gap-[16px]">
                        <div className="flex flex-1 flex-col gap-[4px]">
                          <label
                            className={`${Outfit400.className} text-[14px] text-[#222222]`}
                          >
                            Campo
                            <strong className="text-[#F23434]">*</strong>
                          </label>
                          <CustomSelect
                            select={formik.values.campo}
                            setSelect={(option) => {
                              formik.setFieldValue(`campo`, option)
                              formik.setFieldTouched(`campo`, true, false)
                            }}
                            options={[]}
                            placeholder="Selecione um campo"
                            className="border border-[#BBBBBB]"
                            readOnly
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-[4px]">
                          <label
                            className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                          >
                            Descrição
                          </label>
                          <input
                            id="description"
                            name="description"
                            value={formik.values.description ?? ''}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                            placeholder="Digite uma descrição"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* informaçoes da conta */}
                <div className="flex flex-col gap-[16px]">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Alternativas
                  </span>

                  <table className="w-full">
                    <thead className="sticky top-0">
                      <tr className="h-[48px] bg-[#D4D4D4]">
                        <th
                          className={`text-[13px] ${Outfit400.className} pl-3 text-start text-[#717171]`}
                        >
                          Alternativa
                        </th>
                        <th
                          className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
                        >
                          Status
                        </th>
                        <th
                          className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
                        >
                          Excluir
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 overflow-y-hidden">
                      {formik.values.options?.map((item, index) => {
                        return (
                          <tr
                            className="h-[64px] bg-white py-[5px]"
                            key={index.toString()}
                          >
                            <td
                              className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                            >
                              <input
                                name={`alternativas.${index}.name`}
                                value={formik.values.options[index]?.name ?? ''}
                                onChange={(e) => {
                                  formik.setFieldValue(
                                    `options.${index}.name`,
                                    e.target.value,
                                  )
                                  formik.setFieldTouched(
                                    `options.${index}.name`,
                                    true,
                                    false,
                                  )
                                }}
                                onBlur={formik.handleBlur}
                                className={`${Outfit400.className} ring-none flex h-[40px] w-full items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                                placeholder="Digite o nome da alternativa"
                                inputMode="numeric"
                              />
                            </td>
                            <td
                              className={`text-[14px] ${Outfit300.className} w-[180px] px-3 text-[#383838]`}
                            >
                              <div className="flex h-full items-center justify-center gap-[16px]">
                                {/* INATIVO */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    formik.setFieldValue(
                                      `options.${index}.status`,
                                      'inactive',
                                    )
                                    formik.setFieldTouched(
                                      `options.${index}.status`,
                                      true,
                                      false,
                                    )
                                  }}
                                  className={`h-[40px] w-[71px] rounded-[8px] ${Outfit400.className} ${
                                    item.status === 'inactive'
                                      ? 'bg-[#E0FFF9]'
                                      : 'bg-[#F9F9F9]'
                                  }`}
                                >
                                  INATIVO
                                </button>

                                {/* ATIVO */}
                                <button
                                  type="button"
                                  onClick={() => {
                                    formik.setFieldValue(
                                      `options.${index}.status`,
                                      'active',
                                    )
                                    formik.setFieldTouched(
                                      `options.${index}.status`,
                                      true,
                                      false,
                                    )
                                  }}
                                  className={`h-[40px] w-[57px] rounded-[8px] ${Outfit400.className} ${
                                    item.status === 'active'
                                      ? 'bg-[#E0FFF9]'
                                      : 'bg-[#F9F9F9]'
                                  }`}
                                >
                                  ATIVO
                                </button>
                              </div>
                            </td>
                            <td
                              className={`text-[14px] ${Outfit300.className} w-[80px] text-[#383838]`}
                            >
                              <div className="flex h-full items-center justify-center">
                                <button
                                  type="button"
                                  onClick={() => {
                                    const next = (
                                      formik.values.options || []
                                    ).filter((_, i) => i !== index)
                                    formik.setFieldValue('options', next)
                                    formik.setFieldTouched(
                                      'options',
                                      true,
                                      false,
                                    )
                                    setExcludeItems([...excludeItems, item])
                                  }}
                                  aria-label="Excluir alternativa"
                                  className="rounded p-1 hover:bg-[#F2F2F2]"
                                >
                                  <Trash size="28" color="#737373" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  <div className="flex h-[40px] items-center justify-end">
                    <button
                      type="button"
                      className={`${Outfit400.className} h-[40px] rounded-[8px] border border-[#0F9B7F] px-2 text-[16px] text-[#0F9B7F] uppercase`}
                      onClick={() => {
                        const next = [
                          ...(formik.values.options || []),
                          { name: '', status: 'active' },
                        ]
                        formik.setFieldValue('options', next)
                        formik.setFieldTouched('options', true, false)
                      }}
                    >
                      Adicionar alternativa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </FormikProvider>
  )
}

export default RegisterFormField
