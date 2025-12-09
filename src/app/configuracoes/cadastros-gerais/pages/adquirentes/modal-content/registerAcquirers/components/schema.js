import * as Yup from 'yup'

export const validationSchemaAcquirers = Yup.object({
  nomeDoAdquirente: Yup.string()
    .trim()
    .max(140, 'Máximo de 140 caracteres')
    .required('Informe o nome do adquinte '),
  descricao: Yup.string()
    .trim()
    .max(140, 'Máximo de 140 caracteres')
    .required('Informe a descrição'),
  contaAssociada: Yup.mixed().required('Selecione uma conta'),
  unidadeAssociadasSelecionadas: Yup.array().min(
    1,
    'Inclua ao menos uma unidade',
  ),
  cartoesSuportadosSelecionados: Yup.array().min(
    1,
    'Inclua ao menos um cartão',
  ),
  opcaoDeParcelamento: Yup.mixed().required(
    'Selecione uma opção de parcelamento',
  ),
  porcentagemDeRepasse: Yup.string()
    .trim()
    .max(140, 'Máximo de 140 caracteres')
    .required('Informe a porcentagem de repasse'),
  prazoDeRepasse: Yup.string()
    .trim()
    .max(140, 'Máximo de 140 caracteres')
    .required('Informe o prazo de repasse'),
})
