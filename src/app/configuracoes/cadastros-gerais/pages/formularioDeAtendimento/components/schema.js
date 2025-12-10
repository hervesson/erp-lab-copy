import * as Yup from 'yup'

export const validationSchemaForms = Yup.object({
  unidade: Yup.mixed().required('Selecione uma unidade'),
  file: Yup.mixed().required('Selecione um arquivo'),
})
