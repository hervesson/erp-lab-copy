// validationSchemaAccountBank.ts
import * as Yup from 'yup'

const trimToUndefined = (v) =>
  typeof v === 'string' ? (v.trim() === '' ? undefined : v.trim()) : v

const onlyDigits = (v) => (typeof v === 'string' ? v.replace(/\D+/g, '') : v)

const cnpjRegex = /^\d{14}$/ // 14 dígitos

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

  telefoneFixo: Yup.string()
    .transform(trimToUndefined)
    .test('phone-mask', 'Telefone inválido', (value) => {
      if (!value) return true // opcional

      const maskRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/

      return maskRegex.test(value)
    })
    .required('O telefone fixo é obrigatório'),
  celular: Yup.string()
    .transform(trimToUndefined)
    .test('phone-mask', 'Telefone inválido', (value) => {
      if (!value) return true // opcional

      const maskRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/

      return maskRegex.test(value)
    })
    .required('O numero do celular fixo é obrigatório'),

  emailComercial: Yup.string()
    .transform(trimToUndefined)
    .email('E-mail inválido')
    .required('O email comercial é obrigatório'),

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
  estado: Yup.object({
    label: Yup.string().required('Selecione o estado'),
  }),
  cidade: Yup.object({
    label: Yup.string().required('Selecione a cidade'),
  }),

  formaDePagamento: Yup.object({
    id: Yup.string().required('Selecione a forma de pagamento'),
  }).required('Selecione a forma de pagamento'),

  // Responsável (ajuste required conforme necessidade)
  nomeDoResponsavel: Yup.string()
    .transform(trimToUndefined)
    .required('Nome do responsável é obrigatório'),
  cargoResponsavel: Yup.string()
    .transform(trimToUndefined)
    .required('Cargo do responsável é obrigatório'),
  contatoResponsavel: Yup.string()
    .transform(trimToUndefined)
    .test('phone-mask', 'Telefone inválido', (value) => {
      if (!value) return true // opcional

      const maskRegex = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/

      return maskRegex.test(value)
    })
    .required('O telefone do responsável é obrigatório'),
  email: Yup.string()
    .transform(trimToUndefined)
    .email('E-mail inválido')
    .required('O email do responsável é obrigatório'),

  // Financeiro — pelo menos 1 conta válida
  financeiro: Yup.array()
    .of(financialItemSchema)
    .min(1, 'Adicione ao menos uma conta bancária')
    .required('Informe as contas bancárias'),

  nomeFantasia: Yup.string()
    .transform(trimToUndefined)
    .required('Nome fantasia é obrigatória'),

  nomeConvenio: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o nome do convênio'),

  registroAns: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o registro ANS'),

  matricula: Yup.string().transform(trimToUndefined).nullable(),

  tipoConvenio: Yup.object({
    id: Yup.string().required('Selecione o tipo de convênio'),
  }).required('Tipo de convênio é obrigatório'), // tipo_convenio_id

  formaLiquidacao: Yup.object({
    id: Yup.string().required('Selecione a forma de liquidação'),
  }).required('Tipo de convênio é obrigatório'), // forma_liquidacao_id

  valorCH: Yup.number()
    .typeError('Informe um valor numérico para o valor CH')
    .required('Informe o valor CH'),

  valorFilme: Yup.number()
    .typeError('Informe um valor numérico para o valor do filme')
    .nullable(),

  tiss: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o código TISS'),

  versaoTiss: Yup.string()
    .transform(trimToUndefined)
    .required('Informe a versão TISS'),

  tissCodigoOperadora: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o código da operadora TISS'),

  codigoOperadora: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o código da operadora para autorização'),

  codigoPrestador: Yup.string()
    .transform(trimToUndefined)
    .required('Informe o código do prestador'),

  envio: Yup.object({
    id: Yup.string().required('Selecione o tipo de envio'),
  }).required('Tipo de envio é obrigatório'), // envio_faturamento_id

  faturaAte: Yup.object({
    id: Yup.string().required('Selecione um dia pra faturar até'),
  }).required('Dia até pra ser faturado é obrigatório'),

  diaVencimento: Yup.number()
    .typeError('Informe um dia válido para vencimento')
    .min(1, 'Dia mínimo é 1')
    .max(31, 'Dia máximo é 31')
    .required('Informe o dia de vencimento'),

  contrato: Yup.string().required('Contrato é obrigatorio'),

  ultimoAjuste: Yup.string().required('Último ajuste é obrigatorio'),

  instrucoesParaFaturmento: Yup.string().transform(trimToUndefined).nullable(),

  tabelaDeServico: Yup.object({
    id: Yup.string().required('Selecione a tebela de serviço'),
  }).required('Tipo de tabela de serviço é obrigatória'), // tabela_servico_id

  tabelaBase: Yup.object({
    id: Yup.string().required('Selecione a tebela base'),
  }).required('Tipo de tabela base é obrigatória'), // tabela_base_id

  tabelaMaterial: Yup.object({
    id: Yup.string().required('Selecione a tebela material'),
  }).required('Tipo de tabela material é obrigatória'), // tabela_material_id

  cnes: Yup.string().transform(trimToUndefined).required('Informe o CNES'),

  contato: Yup.string()
    .transform(trimToUndefined)
    .required('Digite as informaçcões de contato'),

  instrucoes: Yup.string().transform(trimToUndefined).nullable(),

  observacoes: Yup.string().transform(trimToUndefined).nullable(),
})
