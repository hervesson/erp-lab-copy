import * as Yup from 'yup'

const onlyDigits = (v) => (typeof v === 'string' ? v.replace(/\D+/g, '') : v)

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

const financialItemSchema = Yup.object({
  bancoId: Yup.string()
    .transform(trimToUndefined)
    .required('Selecione um banco'),
  // se você guarda também 'codigoBanco'/'banco' e quiser validar, acrescente:
  // codigoBanco: Yup.string().transform(trimToUndefined).required('Código do banco obrigatório'),
  // banco: Yup.string().transform(trimToUndefined).required('Nome do banco obrigatório'),

  tipoDeConta: Yup.object({
    id: Yup.string().required('Selecione o tipo de conta'),
  }).required('Tipo de conta obrigatório'),

  agencia: Yup.string()
    .transform((v) => onlyDigits(trimToUndefined(v)))
    .required('Agência obrigatória')
    .min(3, 'Agência inválida')
    .max(6, 'Agência inválida'),

  digitoAgencia: Yup.string()
    .transform((v) => onlyDigits(trimToUndefined(v)))
    .required('Dígito da agência obrigatório')
    .max(2, 'Máximo 2 dígitos'),

  // Se seu form usa "contaCorrente", valide este campo:
  conta: Yup.string()
    .transform((v) => onlyDigits(trimToUndefined(v)))
    .required('Conta obrigatória')
    .min(3, 'Conta inválida')
    .max(12, 'Conta inválida'),

  // Caso você padronize para "conta" em vez de "contaCorrente", troque o bloco acima por:
  // conta: Yup.string()
  //   .transform((v) => onlyDigits(trimToUndefined(v)))
  //   .required('Conta obrigatória')
  //   .min(3, 'Conta inválida')
  //   .max(12, 'Conta inválida'),

  digitoConta: Yup.string()
    .transform((v) => onlyDigits(trimToUndefined(v)))
    .required('Dígito da conta obrigatório')
    .max(2, 'Máximo 2 dígitos'),

  // Campos opcionais comuns:
  // pix_tipo: Yup.mixed<'cpf' | 'cnpj' | 'email' | 'telefone' | 'aleatoria'>().nullable(),
  // pix_chave: Yup.string().transform(trimToUndefined).nullable(),
  // observacoes: Yup.string().transform(trimToUndefined).max(300, 'Máximo de 300 caracteres').nullable(),
}).required()

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
    .min(1, 'Adicione ao menos uma conta bancária')
    .required('Informe as contas bancárias'),
})
