import { Outfit400 } from '@/fonts'

const InformacoesDeApoio = ({ informations }) => {
  console.log(informations)
  return informations.map((info, index) => (
    <div className="flex flex-col gap-3" key={index.toString()}>
      <div className="flex h-[60px] items-center justify-between rounded bg-[#F9F9F9] px-3">
        <p className={`${Outfit400.className} text-[14px] text-[#0F9B7F]`}>
          APOIO {index + 1}
        </p>
      </div>
      <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
        Requisitos para realização do exame
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Metodologia utilizada
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.metodologia_id}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Unidade de medida
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.unidade_medida_id}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Peso
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.peso ? 'SIM' : 'NÃO'}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Altura
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.altura ? 'SIM' : 'NÃO'}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Volume
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.volume ? 'SIM' : 'NÃO'}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Amostra biológica necessária
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.amostra_id?.label}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Amostra a enviar
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.amostra_enviar_id}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Tipo de recipiente para coleta
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.tipo_recipiente_id}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Região de coleta
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {Array.isArray(info?.regioes_coleta_ids)
                ? info.regioes_coleta_ids
                    .map((region) => region.label)
                    .filter(Boolean)
                    .join(', ')
                : info?.regioes_coleta_ids || ''}
            </label>
          </div>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Volume minímo requerido
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.volume_minimo_id}
            </label>
          </div>
        </div>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Estabilidade
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.estabilidade_id}
            </label>
          </div>
        </div>
      </div>
      <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
        Formulários para atendimento
      </p>
      <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
        Preparo e coleta
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Preparo - Público geral
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.preparo_geral}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Preparo - Feminino
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.preparo_feminino}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Preparo - Infantil
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.preparo_infantil}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Coleta - Público geral
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.coleta_geral}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Coleta - Feminino
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.coleta_feminino}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Coleta - Infantil
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.coleta_infantil}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Técnica de coleta
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.tecnica_coleta}
            </label>
          </div>
        </div>
      </div>
      <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
        Lembretes
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Coletora
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.lembrete_coletora}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Recepcionista - Agendamentos e orçamentos
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.lembrete_recepcionista_agendamento}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Recepcionista - Ordem de serviço
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.lembrete_recepcionista_os}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Distribuição
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.distribuicao}
            </label>
          </div>
        </div>
      </div>
      <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
        Processamento e Entrega de Laudos
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Prazo de entrega dos resultados(em dias)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {info?.prazo_entrega_dias}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Formato do Laudo
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {Array.isArray(info?.formatos_laudo)
                ? info.formatos_laudo.filter(Boolean).join(', ')
                : info?.formatos_laudo || ''}
            </label>
          </div>
        </div>
      </div>
    </div>
  ))
}

export default InformacoesDeApoio
