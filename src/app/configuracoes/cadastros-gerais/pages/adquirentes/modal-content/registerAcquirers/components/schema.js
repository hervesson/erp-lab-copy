// schema.js
import * as Yup from 'yup'

// helper: aceita select como objeto {id,label} ou como id (string/number)
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

// helper: mantém só dígitos (para agência/conta/dígito)
const digitsOnly = (schema) =>
  schema
    .transform((val) =>
      typeof val === 'string' ? val.replace(/\D+/g, '') : val,
    )
    .matches(/^\d+$/, 'Use apenas números')
    .required('Campo obrigatório')

// valida item de chip: { id, label }
const optionObj = Yup.object({
  id: Yup.mixed().required(),
  label: Yup.string().required(),
})

const infoItemSchema = Yup.object({
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
  tipoConta: selectRequired('Tipo de conta'),
  pix_chave: Yup.string()
    .trim()
    .max(140, 'Máximo de 140 caracteres')
    .nullable(),
  unidades_associadas: Yup.array()
    .ensure() // <- se vier undefined/null, vira []
    .of(optionObj)
    .min(1, 'Adicione ao menos uma unidade'),
})

export const validationSchemaAccountBank = Yup.object({
  informations: Yup.array()
    .of(infoItemSchema)
    .min(1, 'Inclua ao menos uma conta'),
})
