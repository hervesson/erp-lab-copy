import { Outfit400, Outfit500 } from '@/fonts'
import dayjs from 'dayjs'
import { useState, useEffect } from 'react'
import {
  GetHelpInformations,
  listAllFields,
  ListSamples,
  ListAllEnterprisesPerType,
} from '@/helpers'
import InformacoesDeApoio from './components/InformacoesDeApoio'
import InformacoesGerais from './components/InformacoesGerais'
import InformacoesInternas from './components/InformacoesInternas'

const ProfileExam = ({ selectedExam }) => {
  const [tab, setTab] = useState('informacoesGerais')
  const [fields, setFields] = useState([])
  const [samples, setSamples] = useState([])
  const [informations, setInformations] = useState([])

  useEffect(() => {
    const getData = async () => {
      const [fields, lbs, spls, informacoesDeApoio] = await Promise.all([
        listAllFields(),
        ListAllEnterprisesPerType('LABORATORIO_APOIO'),
        ListSamples('', '', 1, 10000),
        GetHelpInformations(selectedExam?.id),
      ])

      const opts = fields.data.data
        ?.find((element) => element?.nomeCampo === 'regiao_coleta')
        ?.alternativas.map((i) => {
          return {
            id: i.id,
            label: i.textoAlternativa,
          }
        })

      const labs = lbs?.data?.map((item) => {
        return {
          id: item.id,
          label: item.nomeFantasia,
        }
      })

      const samples = spls?.data?.data?.map((item) => {
        return {
          id: item.id,
          label: item.nome,
        }
      })

      const mappedInformations = informacoesDeApoio.data.data.map((item) => ({
        exame_id: item.exame_id,
        laboratorio_apoio_id: labs.find(
          (ele) => ele.id === item.laboratorioApoioId,
        ),
        codigo_exame_apoio: item.codigo_exame_apoio,
        metodologia_id: fields.data.data
          ?.find((element) => element?.nomeCampo === 'metodologia')
          ?.alternativas?.find((ele) => ele.id === item?.metodologia_id)
          ?.textoAlternativa,

        unidade_medida_id: fields.data.data
          ?.find((element) => element?.nomeCampo === 'unidade_medida')
          ?.alternativas?.find((ele) => ele.id === item?.unidade_medida_id)
          ?.textoAlternativa,
        requer_peso: item.peso,
        requer_altura: item.altura,
        requer_volume: item.volume,
        amostra_id: samples.find((ele) => ele.id === item?.amostra_id),
        amostra_enviar_id: fields.data.data
          ?.find((element) => element?.nomeCampo === 'amostra')
          ?.alternativas?.find((ele) => ele.id === item?.amostra_enviar_id)
          ?.textoAlternativa,
        tipo_recipiente_id: fields.data.data
          ?.find((element) => element?.nomeCampo === 'tipo_recipiente')
          ?.alternativas?.find((ele) => ele.id === item?.tipo_recipiente_id)
          ?.textoAlternativa,
        regioes_coleta_ids: opts.filter((o) =>
          item?.regioes_coleta_ids?.includes(o.id),
        ),
        volume_minimo_id: fields.data.data
          ?.find((element) => element?.nomeCampo === 'volume_minimo')
          ?.alternativas?.find((ele) => ele.id === item?.volume_minimo_id)
          ?.textoAlternativa,
        estabilidade_id: fields.data.data
          ?.find((element) => element?.nomeCampo === 'estabilidade')
          ?.alternativas?.find((ele) => ele.id === item?.estabilidade_id)
          ?.textoAlternativa,
        formularios_atendimento: [],
        preparo_geral: item.preparo_geral,
        preparo_feminino: item.preparo_feminino,
        preparo_infantil: item.preparo_infantil,
        coleta_geral: item.coleta_geral,
        coleta_feminino: item.coleta_feminino,
        coleta_infantil: item.coleta_infantil,
        tecnica_coleta: item?.tecnica_coleta,
        lembrete_coletora: item?.lembrete_coletora,
        lembrete_recepcionista_agendamento:
          item?.lembrete_recepcionista_agendamento,
        lembrete_recepcionista_os: item?.lembrete_recepcionista_os,
        distribuicao: item?.distribuicao,
        prazo_entrega_dias: item?.prazo_entrega_dias,
        formatos_laudo: item?.formatos_laudo,
        ativo: true,
      }))

      setSamples(samples)
      setFields(fields.data.data)
      setInformations(mappedInformations)
    }

    getData(selectedExam?.id)
  }, [selectedExam?.id])

  const steps = {
    informacoesGerais: <InformacoesGerais selectedExam={selectedExam} />,
    informacoesInternas: (
      <InformacoesInternas
        fields={fields}
        samples={samples}
        selectedExam={selectedExam}
      />
    ),
    informacoesDeApoio: <InformacoesDeApoio informations={informations} />,
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex h-[62px] items-center justify-between rounded-xl bg-[#F9F9F9] px-4">
        <p
          className={`${Outfit500.className} text-[20px] text-[#057B64] uppercase`}
        >
          {selectedExam?.nome}
        </p>
        <div className="flex gap-6">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(selectedExam?.createdAt).format('DD/MM/YYYY - hh:mm')}
              {selectedExam?.nomeResponsavel
                ? ` / ${selectedExam?.nomeResponsavel}`
                : ''}
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(selectedExam?.updatedAt).format('DD/MM/YYYY - hh:mm')}
              {selectedExam?.nomeResponsavel
                ? ` / ${selectedExam?.nomeResponsavel}`
                : ''}
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-14 items-center gap-8">
        <button
          type="button"
          onClick={() => setTab('informacoesGerais')}
          className={`${Outfit400.className} ${tab === 'informacoesGerais' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
        >
          INFORMAÇÕES GERAIS
        </button>
        <button
          type="button"
          onClick={() => setTab('informacoesInternas')}
          className={`${Outfit400.className} ${tab === 'informacoesInternas' && 'border-b-2 border-[#0F9B7F] bg-white'} h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
        >
          INFORMAÇÕES INTERNAS
        </button>

        <button
          type="button"
          onClick={() => setTab('informacoesDeApoio')}
          className={`${Outfit400.className} ${
            tab === 'informacoesDeApoio' &&
            'border-b-2 border-[#0F9B7F] bg-white'
          } h-14 rounded-tl-lg rounded-tr-lg px-2 text-[16px] text-[#222]`}
        >
          INFORMAÇÕES DE APOIO
        </button>
      </div>
      {steps[tab]}
    </div>
  )
}

export default ProfileExam
