import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

export const validationSchemaSalasSetores = Yup.object({
  unidade: Yup.mixed().required('Selecione a unidade da sala'),

  setor: Yup.mixed().required('Selecione o setor da sala'),

  // AGORA SIMPLES: só exige que tenha algum valor
  nomeDaSala: Yup.string()
    .transform(trimToUndefined)
    .max(200, 'Máximo de 200 caracteres')
    .required('Digite o nome da sala'),
})
