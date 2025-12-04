import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

const horarioSchema = Yup.object({
  days: Yup.array()
    .of(Yup.string())
    .min(1, 'Selecione pelo menos um dia')
    .required(),

  of: Yup.string()
    .transform(trimToUndefined)
    .required('Horário inicial é obrigatório'),

  until: Yup.string()
    .transform(trimToUndefined)
    .required('Horário final é obrigatório'),

  // campos de intervalo dependem da flag hasInterval
  interval: Yup.string()
    .transform(trimToUndefined)
    .when('enabled', {
      is: false,
      then: (schema) => schema.required('Início do intervalo é obrigatório'),
      otherwise: (schema) => schema.nullable(),
    }),

  returnInterval: Yup.string()
    .transform(trimToUndefined)
    .when('enabled', {
      is: false,
      then: (schema) => schema.required('Fim do intervalo é obrigatório'),
      otherwise: (schema) => schema.nullable(),
    }),
  enabled: Yup.boolean().nullable(), // ignorado na regra
})

const financialItemSchema = Yup.object().shape({
  conta: Yup.object()
    .shape({
      id: Yup.mixed().required('Selecione uma conta bancária'),
      label: Yup.string().required('Selecione uma conta bancária'),
    })
    .nullable()
    .required('Selecione uma conta bancária'),
})

export const validationSchemaCreateUnit = Yup.object({
  nomeUnidade: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o nome da unidade'),

  codigoInterno: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o código interno'),

  cnpj: Yup.string().transform(trimToUndefined).required('Informe o CNPJ'),

  razaoSocial: Yup.string()
    .transform(trimToUndefined)
    .required('Informe a razão social'),

  // opcional
  nomeFantasia: Yup.string().transform(trimToUndefined).nullable(),

  inscricaoMunicipal: Yup.string()
    .transform(trimToUndefined)
    .required('Informe a inscrição municipal'),

  inscricaoEstadual: Yup.string()
    .transform(trimToUndefined)
    .required('Informe a inscrição estadual'),

  cnes: Yup.string().transform(trimToUndefined).required('Informe o CNES'),

  telefone: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o telefone'),

  email: Yup.string()
    .transform(trimToUndefined)
    .email('Informe um e-mail válido')
    .required('Informe o e-mail'),

  codigoServicoPrincipal: Yup.object({
    label: Yup.string().required('Selecione um codigo de serviço principal'),
  }),

  // 📍 Endereço
  cep: Yup.string().transform(trimToUndefined).required('Informe o CEP'),

  rua: Yup.string().transform(trimToUndefined).required('Informe a rua'),

  numero: Yup.string().transform(trimToUndefined).required('Informe o número'),

  bairro: Yup.string().transform(trimToUndefined).required('Informe o bairro'),

  estado: Yup.object({
    label: Yup.string().required('Selecione o estado'),
  }),
  cidade: Yup.object({
    label: Yup.string().required('Selecione a cidade'),
  }),

  complemento: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o complemento'),

  // sem validação obrigatória / estrutura
  codigoServicoSecundarioSelecionados: Yup.array().nullable(),
  cnaePrincipal: Yup.mixed().nullable(),
  cnaesSecundariosSelecionados: Yup.array().nullable(),

  horarios: Yup.array().of(horarioSchema).required('Informe os horários'),

  // responsavel
  nomeResponsavel: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o nome do responsável'),
  emailResponsavel: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o email do responsável'),
  contatoResponsavel: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o contato do responsável'),

  financeiro: Yup.array()
    .of(financialItemSchema)
    .test(
      'at-least-one-account',
      'Adicione ao menos uma conta bancária',
      (value) => Array.isArray(value) && value.some((item) => item?.conta?.id), // pelo menos uma conta com id
    )
    .required('Informe as contas bancárias'),
})
