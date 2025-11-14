// validationSchemaAccountBank.ts
import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

const onlyDigits = (v) => (typeof v === 'string' ? v.replace(/\D+/g, '') : v)

const cnpjRegex = /^\d{14}$/ // 14 dígitos

const phoneOpt = Yup.string()
  .transform(trimToUndefined)
  .nullable()
  .test('phone-mask', 'Telefone inválido', (value) => {
    if (!value) return true // opcional

    const maskRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/

    return maskRegex.test(value)
  })

const emailOpt = Yup.string()
  .transform(trimToUndefined)
  .email('E-mail inválido')
  .nullable()

// Item de conta bancária
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

export const validationSchemaEnterprises = Yup.object({
  codigoInterno: Yup.string().transform(trimToUndefined).nullable(),

  // CNPJ obrigatório — valida 14 dígitos
  cnpj: Yup.string()
    .transform((v) => onlyDigits(trimToUndefined(v)))
    .matches(cnpjRegex, 'CNPJ inválido (use 14 dígitos)')
    .required('CNPJ é obrigatório'),

  razaoSocial: Yup.string()
    .transform(trimToUndefined)
    .required('Razão social é obrigatória')
    .max(150, 'Máximo de 150 caracteres'),

  telefoneFixo: phoneOpt,
  celular: phoneOpt,

  emailComercial: emailOpt,

  // Endereço (ajuste required conforme sua regra de negócio)
  cep: Yup.string()
    .transform((v) => onlyDigits(trimToUndefined(v)))
    .min(8, 'CEP inválido')
    .max(8, 'CEP inválido')
    .required('CEP é obrigatório'),
  rua: Yup.string().transform(trimToUndefined).required('Rua é obrigatória'),
  numero: Yup.string()
    .transform(trimToUndefined)
    .required('Número é obrigatório'),
  bairro: Yup.string()
    .transform(trimToUndefined)
    .required('Bairro é obrigatório'),
  estado: Yup.string()
    .transform(trimToUndefined)
    .length(2, 'Use a sigla do estado (UF)')
    .required('Estado é obrigatório'),
  cidade: Yup.string()
    .transform(trimToUndefined)
    .required('Cidade é obrigatória'),

  formaDePagamento: Yup.object({
    id: Yup.string().required('Selecione a forma de pagamento'),
  }).required('Selecione a forma de pagamento'),

  // Responsável (ajuste required conforme necessidade)
  nomeDoResponsavel: Yup.string()
    .transform(trimToUndefined)
    .required('Nome do responsável é obrigatório'),
  cargoResponsavel: Yup.string().transform(trimToUndefined).nullable(),
  contatoResponsavel: phoneOpt,
  emailResponsavel: emailOpt,

  // Financeiro — pelo menos 1 conta válida
  financeiro: Yup.array()
    .of(financialItemSchema)
    .min(1, 'Adicione ao menos uma conta bancária')
    .required('Informe as contas bancárias'),
})
