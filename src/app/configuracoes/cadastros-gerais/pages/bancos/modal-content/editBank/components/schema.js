import * as Yup from 'yup'

// ... seus helpers selectRequired, digitsOnly, optionObj

const selectRequired = (label) =>
  Yup.mixed()
    .nullable(true) // <- evita "cannot be null"
    .typeError(`${label} é obrigatório(a)`)
    .test('select-shape', `${label} é obrigatório(a)`, (value) => {
      if (value == null) return false
      if (typeof value === 'object') return !!value.id
      if (typeof value === 'string' || typeof value === 'number') {
        return String(value).trim().length > 0
      }
      return false
    })

const digitsOnly = (schema) =>
  schema
    .transform((val) =>
      typeof val === 'string' ? val.replace(/\D+/g, '') : val,
    )
    .matches(/^\d+$/, 'Use apenas números')
    .required('Campo obrigatório')

export const infoItemSchemaAccountBank = Yup.object({
  banco_id: selectRequired('Banco'),
  description: Yup.string()
    .trim()
    .required('Descrição é obrigatória')
    .min(3, 'Mínimo de 3 caracteres')
    .max(120, 'Máximo de 120 caracteres'),
  status: selectRequired('Status do banco'),
  agencia: digitsOnly(Yup.string())
    .min(1, 'Muito curto')
    .max(10, 'Muito longo'),
  numero_conta: digitsOnly(Yup.string())
    .min(3, 'Muito curto')
    .max(20, 'Muito longo'),
  digito_conta: digitsOnly(Yup.string())
    .min(1, 'Muito curto')
    .max(2, 'Máximo 2 dígitos'),
  digito_agencia: digitsOnly(Yup.string())
    .min(1, 'Muito curto')
    .max(2, 'Máximo 2 dígitos'),
  tipoConta: selectRequired('Tipo de conta'),
  pix_chave: Yup.string()
    .trim()
    .max(140, 'Máximo de 140 caracteres')
    .nullable(),
})
