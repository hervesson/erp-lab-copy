// schema.js
import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  nomeExame: Yup.string().trim().required('Informe o nome do exame'),

  codigoInterno: Yup.string().trim().required('Informe o código interno'),

  codigoCBHPM: Yup.string().required('Informe o código CBHPM'),
  codigoTuss: Yup.string().required('Informe o código TUSS'),
  codigoLoinc: Yup.string().nullable(),
  codigoSUS: Yup.string().nullable(),
  codigoAMB: Yup.string().nullable(),

  // Se no form for um select (objeto), o ideal é mudar initialValues.tipoExame de '' para {} ou null
  tipoExame: Yup.mixed().required('Selecione o tipo de exame'),

  especialidadeExame: Yup.mixed().required(
    'Selecione a especialidade do exame',
  ),
  grupo: Yup.mixed().required('Selecione o grupo'),
  subGrupo: Yup.mixed().required('Selecione o subgrupo'),
  setor: Yup.mixed().required('Selecione o setor'),

  unidades: Yup.array().min(1, 'Adicione ao menos uma unidade'),

  termoConsentimento: Yup.boolean(),

  requisitos_anvisa: Yup.mixed().required('Selecione o requisitos da anvisa'),

  metodologiaUtilizada: Yup.mixed().required(
    'Selecione a metodologia utilizada',
  ),
  unidadeDeMedida: Yup.mixed().required('Selecione a uidade de medida'),

  peso: Yup.boolean(),
  altura: Yup.boolean(),
  volume: Yup.boolean(),

  amostraBiologicaNecessaria: Yup.mixed().required(
    'Selecione a amostra biológica',
  ),
  amostraAEnviar: Yup.mixed().required('Selecione a amostra a enviar'),
  tipoDeRecipiente: Yup.mixed().required('Selecione o tipo de recipiente'),

  regiao_coleta_ids: Yup.array()
    .min(1, 'Adicione ao menos uma região de coleta')
    .required('Adicione ao menos uma região de coleta'),

  valorMinimoRequerido: Yup.mixed().required(
    'Selecione o valor minímo requerido',
  ),
  estabilidade: Yup.mixed().required('Selecione a estabilidade'),

  preparoPublicoGeral: Yup.string().required(
    'Informe o preparo do pubico geral',
  ),
  preparoFeminino: Yup.string().nullable(),
  preparoInfantil: Yup.string().nullable(),

  coletaPublicoGeral: Yup.string().required('Informe a coleta do pubico geral'),
  coletaFeminino: Yup.string().nullable(),
  coletaInfantil: Yup.string().nullable(),

  tecnicaDeColeta: Yup.string().required(
    'Informe a técnica de coleta do pubico geral',
  ),

  lembretesColetora: Yup.string().nullable(),
  lembretesRecepcionistaAgendamentos: Yup.string().nullable(),
  lembretesRecepcionistaOrdemDeServico: Yup.string().nullable(),
  lembretesDistribuicao: Yup.string().nullable(),

  prazoDeEntrega: Yup.string().nullable(),

  formatoLaudo: Yup.mixed().required('Selecione ao menos um formato de laudo'),
})

// toastFn: ex. (msg) => toast.error(msg)
export function validarUnidadesEToast(values, toastFn) {
  const unidades = Array.isArray(values?.unidades) ? values.unidades : []
  const tipoExame = values?.tipoExame?.label

  let temErro = false

  unidades.forEach((u, i) => {
    const itens = []

    if (!u?.unidade_id?.id) itens.push('Selecione a unidade')
    if (!u?.destino?.id) itens.push('Selecione o destino')

    if (tipoExame === 'Imagem' && u?.destino?.id === 'externo') {
      if (!u?.telemedicina_id?.id) itens.push('Selecione a telemedicina')
    }

    if (tipoExame === 'Laboratorial' && u?.destino?.id === 'externo') {
      if (!u?.laboratorio_apoio_id?.id) itens.push('Selecione o laboratório')
    }

    if (itens.length) {
      temErro = true
      const titulo = `Unidade ${i + 1}`
      const lista = itens.map((t) => `• ${t}`).join('\n\n')
      toastFn(`${titulo}\n\n${lista}`)
    }
  })

  return !temErro
}

// toastFn: ex. (msg) => toast.error(msg)
export function validarInformacoesDeApoioEToast(values, toastFn) {
  const infos = Array.isArray(values?.informacoesDeApoio)
    ? values.informacoesDeApoio
    : []

  let temErro = false

  infos.forEach((item, i) => {
    const itens = []

    // helpers
    const hasId = (v) => !!v?.id
    const hasText = (v) => typeof v === 'string' && v.trim().length > 0

    // obrigatórios

    if (!hasId(item?.laboratorio_apoio_id))
      itens.push('Selecione o laboratório de apoio')
    if (!hasText(item?.codigo_exame_apoio))
      itens.push('Informe o código do exame no laboratório de apoio')
    if (!hasId(item?.metodologia_id)) itens.push('Selecione a metodologia')
    if (!hasId(item?.unidade_medida_id))
      itens.push('Selecione a unidade de medida')

    if (!hasId(item?.amostra_id)) itens.push('Selecione a amostra')
    if (!hasId(item?.amostra_enviar_id))
      itens.push('Selecione a amostra a enviar')
    if (!hasId(item?.tipo_recipiente_id))
      itens.push('Selecione o tipo de recipiente')

    if (
      !Array.isArray(item?.regioes_coleta_ids) ||
      item.regioes_coleta_ids.length < 1
    ) {
      itens.push('Selecione ao menos uma região de coleta')
    }

    if (!hasId(item?.volume_minimo_id)) itens.push('Informe o volume mínimo')
    if (!hasId(item?.estabilidade_id)) itens.push('Informe a estabilidade')

    if (!hasId(item?.preparoPublicoGeral))
      itens.push('Informe o preparo público geral')
    if (!hasId(item?.preparoFeminino)) itens.push('Informe o preparo feminino')
    if (!hasId(item?.preparoInfantil)) itens.push('Informe o preparo infantil')

    // prazo_entrega_dias (se preenchido, valida)
    const prazo = item?.prazo_entrega_dias
    if (prazo !== null && prazo !== undefined && prazo !== '') {
      const n = Number(prazo)
      if (Number.isNaN(n)) itens.push('Prazo de entrega deve ser numérico')
      else {
        if (!Number.isInteger(n))
          itens.push('Prazo de entrega deve ser um número inteiro')
        if (n < 0) itens.push('Prazo de entrega não pode ser negativo')
      }
    }

    if (!Array.isArray(item?.formatoLaudo) || item.formatoLaudo.length < 1) {
      itens.push('Selecione pelo menos um formato de laudo')
    }

    if (itens.length) {
      temErro = true
      const titulo = `Informação de apoio ${i + 1}`
      const lista = itens.map((t) => `• ${t}`).join('\n')
      toastFn(`${titulo}\n\n${lista}`)
    }
  })

  return !temErro
}
