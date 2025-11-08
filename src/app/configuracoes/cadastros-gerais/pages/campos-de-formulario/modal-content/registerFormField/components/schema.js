// ./components/schema.js
import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

export const validationSchemaFormField = Yup.object({
  campo: Yup.object({
    id: Yup.mixed().required('Selecione um campo'),
    label: Yup.string()
      .transform(trimToUndefined)
      .required('Selecione um campo'),
  })
    .required('Selecione um campo')
    .test(
      'campo-valido',
      'Selecione um campo',
      (value) => !!value && value.id != null,
    ),

  description: Yup.string()
    .transform(trimToUndefined)
    .max(200, 'Máximo de 200 caracteres')
    .nullable(),

  options: Yup.array()
    .of(
      Yup.object({
        name: Yup.string()
          .transform(trimToUndefined)
          .required('Informe o nome da alternativa')
          .max(120, 'Máximo de 120 caracteres'),
        status: Yup.mixed()
          .oneOf(['active', 'inactive'], 'Status inválido')
          .required('Status obrigatório'),
      }),
    )
    .min(1, 'Adicione ao menos uma alternativa')
    .test(
      'unique-names',
      'Existem alternativas com nomes duplicados',
      (arr) => {
        if (!arr) return true
        const seen = new Set()
        for (const item of arr) {
          const key = (item?.name ?? '').trim().toLowerCase()
          if (!key) continue // deixa o required do name cuidar disso
          if (seen.has(key)) return false
          seen.add(key)
        }
        return true
      },
    )
    .test(
      'at-least-one-active',
      'Marque pelo menos uma alternativa como ATIVO',
      (arr) =>
        Array.isArray(arr) ? arr.some((o) => o?.status === 'active') : true,
    ),
})
