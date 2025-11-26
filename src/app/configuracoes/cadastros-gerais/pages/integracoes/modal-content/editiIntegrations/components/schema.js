// ./schema.js
import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

export const validationSchema = Yup.object().shape({
  tipoDeIntegracao: Yup.object()
    .nullable()
    .required('Selecione um tipo de integração')
    .test(
      'tipo-valido',
      'Selecione um tipo de integração',
      (value) => !!value && (value.id || value.value || value.item),
    ),

  descricao: Yup.string()
    .transform(trimToUndefined)
    .required('Descrição é obrigatória'),

  codigo: Yup.string()
    .transform(trimToUndefined)
    .required('Código é obrigatório'),
})
