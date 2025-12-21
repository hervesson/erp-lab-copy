import { Outfit400 } from '@/fonts'

const InformacoesInternas = ({ fields, samples, selectedExam }) => {
  const opts = fields
    ?.find((element) => element?.nomeCampo === 'regiao_coleta')
    ?.alternativas.map((i) => {
      return {
        id: i.id,
        label: i.textoAlternativa,
      }
    })

  return (
    <div className="flex flex-col gap-3">
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
              {
                fields
                  ?.find((element) => element?.nomeCampo === 'metodologia')
                  ?.alternativas?.find(
                    (ele) => ele.id === selectedExam?.metodologia_id,
                  )?.textoAlternativa
              }
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
              {
                fields
                  ?.find((element) => element?.nomeCampo === 'unidade_medida')
                  ?.alternativas?.find(
                    (ele) => ele.id === selectedExam?.unidade_medida_id,
                  )?.textoAlternativa
              }
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
              {selectedExam?.peso ? 'SIM' : 'NÃO'}
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
              {selectedExam?.altura ? 'SIM' : 'NÃO'}
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
              {selectedExam?.volume ? 'SIM' : 'NÃO'}
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
              {samples.find((ele) => ele.id === selectedExam?.amostra_id)
                ?.label || '* Faltando vir da API *'}
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
              {
                fields
                  ?.find((element) => element?.nomeCampo === 'amostra')
                  ?.alternativas?.find(
                    (ele) => ele.id === selectedExam?.amostra_enviar_id,
                  )?.textoAlternativa
              }
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
              {
                fields
                  ?.find((element) => element?.nomeCampo === 'tipo_recipiente')
                  ?.alternativas?.find(
                    (ele) => ele.id === selectedExam?.tipo_recipiente_id,
                  )?.textoAlternativa
              }
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
              {selectedExam?.regiao_coleta_ids
                .map((regionId) => {
                  const region = opts.find((o) => o.id === regionId)
                  return region ? region.label : null
                })
                .filter(Boolean)
                .join(', ')}
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
              {
                fields
                  ?.find((element) => element?.nomeCampo === 'volume_minimo')
                  ?.alternativas?.find(
                    (ele) => ele.id === selectedExam?.volume_minimo_id,
                  )?.textoAlternativa
              }
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
              {
                fields
                  ?.find((element) => element?.nomeCampo === 'estabilidade')
                  ?.alternativas?.find(
                    (ele) => ele.id === selectedExam?.estabilidade_id,
                  )?.textoAlternativa
              }
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
              {selectedExam?.preparo_geral}
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
              {selectedExam?.preparo_feminino}
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
              {selectedExam?.preparo_infantil}
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
              {selectedExam?.coleta_geral}
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
              {selectedExam?.coleta_feminino}
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
              {selectedExam?.coleta_infantil}
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
              {selectedExam?.tecnica_coleta}
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
              {selectedExam?.lembrete_coletora}
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
              {selectedExam?.lembrete_recepcionista_agendamento}
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
              {selectedExam?.lembrete_recepcionista_os}
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
              {selectedExam?.distribuicao}
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
              {selectedExam?.prazo_entrega_dias}
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
              {Array.isArray(selectedExam?.formatos_laudo)
                ? selectedExam.formatos_laudo.filter(Boolean).join(', ')
                : selectedExam?.formatos_laudo || ''}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesInternas
