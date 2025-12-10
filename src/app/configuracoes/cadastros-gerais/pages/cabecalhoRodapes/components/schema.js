import * as Yup from 'yup'

export const validationSchemaCabecalhosRodapes = Yup.object({
  unidade: Yup.mixed().required('Selecione uma unidade'),
  imagem: Yup.mixed().required('Selecione uma imagem'),
})
