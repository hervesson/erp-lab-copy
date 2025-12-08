import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

export const validationSchemaSalasSetores = Yup.object({
  unidade: Yup.mixed().required('Selecione a unidade do equipamento'),

  nomeDoEquipamento: Yup.string()
    .transform(trimToUndefined)
    .max(200, 'Máximo de 200 caracteres')
    .required('Digite o nome do equipamento'),

  numeracao: Yup.mixed().required('Digite a numeração do equipamento'),

  sala: Yup.mixed().required('Selecione o setor da sala'),

  // AGORA SIMPLES: só exige que tenha algum valor
})
