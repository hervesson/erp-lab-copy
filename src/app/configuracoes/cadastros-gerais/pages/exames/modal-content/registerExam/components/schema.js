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

  unidadesSelecionadas: Yup.array()
    .min(1, 'Selecione ao menos uma unidade')
    .required('Selecione ao menos uma unidade'),

  destino: Yup.mixed().required('Selecione o destino'), // vai entrar na regra condicional lá embaixo

  laboratorioDeApoio: Yup.mixed().required('Selecione o laboratório de apoio'),

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

  // =========================
  //  INFORMAÇÕES DE APOIO
  // =========================
  informacoesDeApoio: Yup.lazy((value, ctx) => {
    const { destino, tipoExame } = ctx.parent

    const isExternoLaboratorial =
      destino?.id === 'externo' && tipoExame?.label === 'Laboratorial'
    // se for por label:
    // const isExternoLaboratorial =
    //   destino?.id === 'externo' && tipoExame?.label === 'Laboratorial'

    // ❌ NÃO é externo + laboratorial → não exige nada desse campo
    if (!isExternoLaboratorial) {
      return Yup.array()
        .of(Yup.mixed()) // não valida estrutura interna
        .nullable()
    }

    // ✅ É externo + laboratorial → valida TUDO
    return Yup.array()
      .of(
        Yup.object({
          laboratorio_apoio_id: Yup.mixed().required(
            'Selecione o laboratório de apoio',
          ),
          codigo_exame_apoio: Yup.string()
            .trim()
            .required('Informe o código do exame no laboratório de apoio'),
          metodologia_id: Yup.mixed().required('Selecione a metodologia'),
          unidade_medida_id: Yup.mixed().required(
            'Selecione a unidade de medida',
          ),

          requer_peso: Yup.boolean(),
          requer_altura: Yup.boolean(),
          requer_volume: Yup.boolean(),

          amostra_id: Yup.mixed().required('Selecione a amostra'),
          amostra_enviar_id: Yup.mixed().required(
            'Selecione a amostra a enviar',
          ),
          tipo_recipiente_id: Yup.mixed().required(
            'Selecione o tipo de recipiente',
          ),

          regioes_coleta_ids: Yup.array()
            .of(Yup.mixed())
            .min(1, 'Selecione ao menos uma região de coleta'),

          volume_minimo_id: Yup.mixed().required('Informe o volume mínimo'),
          estabilidade_id: Yup.mixed().required('Informe a estabilidade'),

          formularios_atendimento: Yup.array().of(Yup.string()),

          preparo_geral: Yup.string().nullable(),
          preparo_feminino: Yup.string().nullable(),
          preparo_infantil: Yup.string().nullable(),

          coleta_geral: Yup.string().nullable(),
          coleta_feminino: Yup.string().nullable(),
          coleta_infantil: Yup.string().nullable(),

          tecnica_coleta: Yup.string().nullable(),

          lembrete_coletora: Yup.string().nullable(),
          lembrete_recepcionista_agendamento: Yup.string().nullable(),
          lembrete_recepcionista_os: Yup.string().nullable(),

          distribuicao: Yup.string().nullable(),

          prazo_entrega_dias: Yup.number()
            .typeError('Prazo de entrega deve ser numérico')
            .integer('Prazo de entrega deve ser um número inteiro')
            .min(0, 'Prazo de entrega não pode ser negativo')
            .nullable(),

          formatos_laudo: Yup.array().of(Yup.string()),
          ativo: Yup.boolean(),
        }),
      )
      .min(1, 'Adicione ao menos uma informação de apoio')
      .required(
        'Adicione as informações de apoio para exames externos laboratoriais',
      )
  }),
})
