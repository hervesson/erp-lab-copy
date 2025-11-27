import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

export const validationSchemaMethod = Yup.object({
  nomeAmostra: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o nome do método'),

  descricao: Yup.string()
    .transform(trimToUndefined)
    .max(200, 'Máximo de 200 caracteres')
    .nullable(),

  // AGORA SIMPLES: só exige que tenha algum valor
  status: Yup.mixed()
    .test(
      'status-required',
      'Selecione o status do método',
      (value) => value !== null && value !== undefined && value !== '',
    )
    .required('Selecione o status do método'),
})
