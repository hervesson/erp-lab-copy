import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { CloseCircle, InfoCircle } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik, fields, units, labs }) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações basicas
          </span>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome do exame
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeExame')}
                  type="text"
                  id="nomeExame"
                  name="nomeExame"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o nome do exame"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código interno
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('codigoInterno')}
                  type="text"
                  id="codigoInterno"
                  name="codigoInterno"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o código interno"
                />
              </div>
              <div className="flex flex-2 gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Sinônimos
                  </label>
                  <input
                    {...formik.getFieldProps('sinonimo')}
                    type="text"
                    id="sinonimo"
                    name="sinonimo"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite todos um sinônimos"
                  />
                </div>
                <div className="flex flex-col justify-end gap-1">
                  <button
                    type="button"
                    className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                    onClick={() => {
                      if (
                        !formik?.values?.sinonimos.includes(
                          formik.values.sinonimo,
                        ) &&
                        formik.values.sinonimo.length > 0
                      ) {
                        formik.setFieldValue('sinonimos', [
                          ...formik?.values?.sinonimos,
                          formik.values.sinonimo,
                        ])
                        formik.setFieldValue('sinonimo', '')
                      }
                    }}
                  >
                    ADICIONAR
                  </button>
                </div>
                {formik?.values?.sinonimos?.length > 0 ? (
                  <div className="flex flex-2 gap-1">
                    {formik?.values?.sinonimos?.map((item, index) => {
                      return (
                        <div
                          key={index.toString()}
                          className={`h-10 self-end bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                        >
                          {item}
                          <CloseCircle
                            size="22"
                            color="#F23434"
                            variant="Bold"
                            onClick={() =>
                              formik.setFieldValue(
                                'sinonimos',
                                formik.values.sinonimos.filter(
                                  (code) => code !== item,
                                ),
                              )
                            }
                          />
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <div className="flex flex-2 flex-col justify-end gap-1">
                    <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                      <InfoCircle size="20" color="#737373" variant="Bulk" />
                      <label
                        className={`${Outfit300.className} text-[14px] text-[#737373]`}
                      >
                        Nenhuma opção adicionada
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código CBHPM
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoCBHPM')}
                  type="text"
                  id="codigoCBHPM"
                  name="codigoCBHPM"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o código CBHPM"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código TUSS<strong className="text-[#F23434]">*</strong>
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoTuss')}
                  type="text"
                  id="codigoTuss"
                  name="codigoTuss"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o código TUSS"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Código LOINC
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    {...formik.getFieldProps('codigoLoinc')}
                    type="text"
                    id="codigoLoinc"
                    name="codigoLoinc"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite o código LOINC"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código SUS
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoSUS')}
                  type="text"
                  id="codigoSUS"
                  name="codigoSUS"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o codigo SUS"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código AMB
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoAMB')}
                  type="text"
                  id="codigoAMB"
                  name="codigoAMB"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o código AMB"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tipo de exame<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.tipoExame}
                  setSelect={(e) => formik.setFieldValue('tipoExame', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'tipo_exames')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione o tipo de exame'}
                  className={
                    'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                  }
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Especialidade do exame
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.especialidadeExame}
                  setSelect={(e) =>
                    formik.setFieldValue('especialidadeExame', e)
                  }
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'especialidade')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione uma especialidade'}
                  className={
                    'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                  }
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Grupo
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.grupo}
                  setSelect={(e) => formik.setFieldValue('grupo', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'grupo')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um grupo'}
                  className={
                    'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                  }
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  SubGrupo<strong className="text-[#F23434]">*</strong>
                </label>

                <CustomSelect
                  select={formik.values.subGrupo}
                  setSelect={(e) => formik.setFieldValue('subGrupo', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'subgrupo')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um SubGrupo'}
                  className={
                    'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                  }
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Setor<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.setor}
                  setSelect={(e) => formik.setFieldValue('setor', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'setor')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um setor'}
                  className={
                    'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Regulação
          </span>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex justify-between">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  Requisitos da ANVISA/Normas Técnicas
                  <strong className="text-[#F23434]">*</strong>
                </label>

                <InfoCircle size="20" color="#A1A1A1" />
              </div>
              <CustomSelect
                select={formik.values.requisitos_anvisa}
                setSelect={(e) => formik.setFieldValue('requisitos_anvisa', e)}
                options={fields
                  ?.find(
                    (element) => element?.nomeCampo === 'requisitos_anvisa',
                  )
                  ?.alternativas.map((i) => {
                    return {
                      id: i.id,
                      label: i.textoAlternativa,
                    }
                  })}
                placeholder={'Selecione os requisitos'}
                className={
                  'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Termo de consentimento
                </label>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.termoConsentimento ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() =>
                    formik.setFieldValue('termoConsentimento', true)
                  }
                >
                  SIM
                </button>
                <button
                  type="button"
                  className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.termoConsentimento ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() =>
                    formik.setFieldValue('termoConsentimento', false)
                  }
                >
                  NÃO
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Integração e Regulação
          </span>
          {formik?.values?.unidades?.map((item, index) => {
            return (
              <div className="flex gap-4" key={index.toString()}>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Unidade que realiza o exame
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={item?.unidade_id}
                    setSelect={(e) => {
                      formik.setFieldValue(`unidades[${index}].unidade_id`, e)
                      console.log(item?.unidade_id)
                    }}
                    options={units}
                    placeholder={'Selecione uma unidade'}
                    className={
                      'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                    }
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Destino do exame
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={item?.destino}
                    setSelect={(e) =>
                      formik.setFieldValue(`unidades[${index}].destino`, e)
                    }
                    options={[
                      {
                        id: 'interno',
                        label: 'INTERNO',
                      },
                      {
                        id: 'externo',
                        label: 'EXTERNO',
                      },
                    ]}
                    placeholder={'Selecione o destino'}
                    className={
                      'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                    }
                  />
                </div>

                <div
                  className={`flex flex-1 flex-col gap-1 ${item?.destino?.id === 'externo' &&
                      formik.values.tipoExame.label === 'Laboratorial'
                      ? ''
                      : 'opacity-45'
                    }`}
                >
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Laboratório de apoio
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={item?.laboratorio_apoio_id}
                    setSelect={(e) => {
                      formik.setFieldValue(
                        `unidades[${index}].laboratorio_apoio_id`,
                        e,
                      )
                      formik.setFieldValue('informacoesDeApoio', [
                        ...formik.values.informacoesDeApoio,
                        {
                          exame_id: '',
                          laboratorio_apoio_id: e,
                          codigo_exame_apoio: '',
                          metodologia_id: '',
                          unidade_medida_id: '',
                          requer_peso: false,
                          requer_altura: false,
                          requer_volume: true,
                          amostra_id: '',
                          amostra_enviar_id: '',
                          tipo_recipiente_id: '',
                          regioes_coleta_ids: [],
                          volume_minimo_id: '',
                          estabilidade_id: '',
                          formularios_atendimento: [],
                          preparo_geral: '',
                          preparo_feminino: '',
                          preparo_infantil: '',
                          coleta_geral: '',
                          coleta_feminino: '',
                          coleta_infantil: '',
                          tecnica_coleta: '',
                          lembrete_coletora: '',
                          lembrete_recepcionista_agendamento: '',
                          lembrete_recepcionista_os: '',
                          distribuicao: '',
                          prazo_entrega_dias: 0,
                          formatos_laudo: [],
                          ativo: true,
                        },
                      ])
                    }}
                    options={labs}
                    placeholder={'Selecione um laboratório de apoio'}
                    className={`${item.destino.id === 'externo' && formik.values.tipoExame.label === 'Laboratorial' ? 'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]' : 'border border-dashed border-[#BBB]'} `}
                    readOnly={
                      item.destino.id === 'interno' ||
                      formik.values.tipoExame.label !== 'Laboratorial'
                    }
                  />
                </div>

                <div
                  className={`flex flex-1 flex-col gap-1 ${item?.destino?.id === 'externo' &&
                      formik.values.tipoExame.label === 'Imagem'
                      ? ''
                      : 'opacity-45'
                    }`}
                >
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Telemedicina
                  </label>
                  <CustomSelect
                    select={formik.values.telemedicina_id}
                    setSelect={(e) =>
                      formik.setFieldValue('telemedicina_id', e)
                    }
                    options={[]}
                    placeholder={'Selecione uma opção'}
                    className={`${item.destino.id === 'externo' && formik.values.tipoExame.label === 'Imagem' ? 'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]' : 'border border-dashed border-[#BBB]'} `}
                    readOnly={
                      item.destino.id === 'interno' ||
                      formik.values.tipoExame.label !== 'Imagem'
                    }
                  />
                </div>
              </div>
            )
          })}

          <button
            type="button"
            className={`${Outfit400.className} flex h-10 w-[200] items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
            onClick={() =>
              formik.setFieldValue('unidades', [
                ...formik.values.unidades,
                {
                  unidade_id: {},
                  destino: '',
                  telemedicina_id: {},
                  laboratorio_apoio_id: {},
                },
              ])
            }
          >
            NOVA INTEGRAÇÃO
          </button>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
