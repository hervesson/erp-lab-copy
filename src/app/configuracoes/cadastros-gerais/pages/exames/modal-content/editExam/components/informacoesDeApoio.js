import CustomMultiSelect from '@/components/CustomMultiSelect'
import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { CloseCircle, DocumentDownload, InfoCircle } from 'iconsax-reactjs'

const InformacoesDeApoio = ({ formik, fields, labs, samples }) => {
  // console.log(formik.values.informacoesDeApoio)

  const getLabsOptions = (indexAtual) => {
    const selectedIds = formik.values.informacoesDeApoio
      ?.map((item) => {
        return { laboratorio_apoio_id: item.laboratorio_apoio_id }
      })
      .map((item, index) => {
        if (index === indexAtual) return null // ignora o da própria linha
        return item.laboratorio_apoio_id?.id || null
      })

    // retorna só labs que ainda não foram escolhidos em outras linhas
    return labs.filter((lab) => !selectedIds.includes(lab.id))
  }

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      {/* Configuração */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
          Utilize essa área para incluir informações sobre o exame cadastrado
          para cada laboratório de apoio.
        </span>
      </div>
      {formik.values.informacoesDeApoio.map((item, index) => {
        return (
          <div
            key={index.toString()}
            className="flex rounded border border-[#E7E7E7] p-6 shadow-xl"
          >
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col gap-8">
                <div className="flex h-[60px] items-center justify-between rounded bg-[#F9F9F9] px-3">
                  <p
                    className={`${Outfit400.className} text-[14px] text-[#0F9B7F]`}
                  >
                    APOIO {index + 1}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Laboratório de apoio
                  </span>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Laboratório de apoio
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={
                          formik.values.informacoesDeApoio[index]
                            ?.laboratorio_apoio_id ?? null
                        }
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.laboratorio_apoio_id`,
                            e,
                          )
                        }
                        options={getLabsOptions(index)}
                        placeholder={'Selecione uma metodologia'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                        readOnly={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Requisitos para realização do exame
                  </span>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Metodologia utilizada
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.metodologia_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.metodologia_id`,
                            e,
                          )
                        }
                        options={fields
                          ?.find(
                            (element) => element?.nomeCampo === 'metodologia',
                          )
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione uma metodologia'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Unidade de medida
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.unidade_medida_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.unidade_medida_id`,
                            e,
                          )
                        }
                        options={fields
                          ?.find(
                            (element) =>
                              element?.nomeCampo === 'unidade_medida',
                          )
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione uma unidade de medida'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                      >
                        Peso
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${item?.requer_peso ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                          onClick={() =>
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.requer_peso`,
                              true,
                            )
                          }
                        >
                          SIM
                        </button>
                        <button
                          type="button"
                          className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.requer_peso ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                          onClick={() =>
                            formik.setFieldValue('requer_peso', false)
                          }
                        >
                          NÃO
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                      >
                        Altura
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${item.requer_altura ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                          onClick={() =>
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.requer_altura`,
                              true,
                            )
                          }
                        >
                          SIM
                        </button>
                        <button
                          type="button"
                          className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${item?.requer_altura ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                          onClick={() =>
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.requer_altura`,
                              false,
                            )
                          }
                        >
                          NÃO
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label
                        className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                      >
                        Volume
                      </label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${item?.requer_volume ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                          onClick={() =>
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.requer_volume`,
                              true,
                            )
                          }
                        >
                          SIM
                        </button>
                        <button
                          type="button"
                          className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${item?.requer_volume ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                          onClick={() =>
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.requer_volume`,
                              false,
                            )
                          }
                        >
                          NÃO
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Amostra biológica necessária
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.amostra_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.amostra_id`,
                            e,
                          )
                        }
                        options={samples}
                        placeholder={'Selecione uma amostra'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Amostra a enviar
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.amostra_enviar_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.amostra_enviar_id`,
                            e,
                          )
                        }
                        options={fields
                          ?.find((element) => element?.nomeCampo === 'amostra')
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione uma amostra'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Tipo de recipiente para coleta
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.tipo_recipiente_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.tipo_recipiente_id`,
                            e,
                          )
                        }
                        options={fields
                          ?.find(
                            (element) =>
                              element?.nomeCampo === 'tipo_recipiente',
                          )
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione um recipiente para coleta'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Região de coleta
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.regiaoDeColeta}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.regiaoDeColeta`,
                            e,
                          )
                        }
                        options={fields
                          ?.find(
                            (element) => element?.nomeCampo === 'regiao_coleta',
                          )
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione uma ou mais regiões de coleta'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                    <div className="flex flex-col justify-end gap-1">
                      <button
                        type="button"
                        className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                        onClick={() => {
                          if (
                            !item?.regioes_coleta_ids?.includes(
                              item?.regiaoDeColeta,
                            ) &&
                            item?.regiaoDeColeta.id
                          ) {
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.regioes_coleta_ids`,
                              [
                                ...item?.regioes_coleta_ids,
                                item.regiaoDeColeta,
                              ],
                            )
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.regiaoDeColeta`,
                              {},
                            )
                          }
                        }}
                      >
                        ADICIONAR
                      </button>
                    </div>
                    {item.regioes_coleta_ids?.length > 0 ? (
                      <div className="flex flex-2 gap-1">
                        {item?.regioes_coleta_ids?.map((regiao) => {
                          // Alterei o nome para 'regiao' para evitar confusão
                          return (
                            <div
                              key={regiao.id}
                              className={`h-10 self-end bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                            >
                              {regiao.label}
                              <CloseCircle
                                size="22"
                                color="#F23434"
                                variant="Bold"
                                className="cursor-pointer"
                                onClick={() => {
                                  // 1. Filtramos a lista atual (item.regioes_coleta_ids)
                                  const novaLista =
                                    item.regioes_coleta_ids.filter(
                                      (r) => r.id !== regiao.id,
                                    )

                                  // 2. Atualizamos o Formik no caminho específico do index
                                  formik.setFieldValue(
                                    `informacoesDeApoio.${index}.regioes_coleta_ids`,
                                    novaLista,
                                  )
                                }}
                              />
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-2 flex-col justify-end gap-1">
                        <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                          <InfoCircle
                            size="20"
                            color="#737373"
                            variant="Bulk"
                          />
                          <label
                            className={`${Outfit300.className} text-[14px] text-[#737373]`}
                          >
                            Nenhuma opção adicionada
                          </label>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Volume minímo requerido
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.volume_minimo_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.volume_minimo_id`,
                            e,
                          )
                        }
                        options={fields
                          ?.find(
                            (element) => element?.nomeCampo === 'volume_minimo',
                          )
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione um volume minímo'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Estabilidade
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <CustomSelect
                        select={item?.estabilidade_id}
                        setSelect={(e) =>
                          formik.setFieldValue(
                            `informacoesDeApoio.${index}.estabilidade_id`,
                            e,
                          )
                        }
                        options={fields
                          ?.find(
                            (element) => element?.nomeCampo === 'estabilidade',
                          )
                          ?.alternativas.map((i) => {
                            return {
                              id: i.id,
                              label: i.textoAlternativa,
                            }
                          })}
                        placeholder={'Selecione uma estabilidade'}
                        className={
                          'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Formulário para atendimento */}
                <div className="flex flex-col gap-4">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Formulário para atendimento
                  </span>
                  <div className="flex gap-4">
                    <div className="flex h-[52px] w-[557px] items-center justify-center gap-3 rounded-lg border-[#A9A9A9] bg-[#F9F9F9]">
                      <DocumentDownload size="28" color="#737373" />
                      <span
                        className={`${Outfit300.className} text-[#222] uppercase`}
                      >
                        Anexar formulários de atendimento
                      </span>
                    </div>
                  </div>
                </div>

                {/* Prepararo e coleta */}
                <div className="flex flex-col gap-4">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Prepararo e coleta
                  </span>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Preparo - Público geral
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.preparo_geral`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.preparo_geral`}
                        name={`informacoesDeApoio.${index}.preparo_geral`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de preparo"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Preparo - Feminino
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.preparo_feminino`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.preparo_feminino`}
                        name={`informacoesDeApoio.${index}.preparo_feminino`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de preparo"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Preparo - Infantil
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.preparo_infantil`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.preparo_infantil`}
                        name={`informacoesDeApoio.${index}.preparo_infantil`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de preparo"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Coleta - Público geral
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.coleta_geral`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.coleta_geral`}
                        name={`informacoesDeApoio.${index}.coleta_geral`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de coleta"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Coleta - Feminino
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.coleta_feminino`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.coleta_feminino`}
                        name={`informacoesDeApoio.${index}.coleta_feminino`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de coleta"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Coleta - Infantil
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.coleta_infantil`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.coleta_infantil`}
                        name={`informacoesDeApoio.${index}.coleta_infantil`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de coleta"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Técnica de coleta
                        <strong className="text-[#F23434]">*</strong>
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.tecnica_coleta`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.tecnica_coleta`}
                        name={`informacoesDeApoio.${index}.tecnica_coleta`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Preencha com as instruções de coleta"
                      />
                    </div>
                  </div>
                </div>

                {/* Lembretes */}
                <div className="flex flex-col gap-4">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Lembretes
                  </span>

                  <div className="flex gap-4">
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Coletora
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.lembrete_coletora`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.lembrete_coletora`}
                        name={`informacoesDeApoio.${index}.lembrete_coletora`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Caso necessário deixe um lembrete pra coletora"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Recepcionista - Agendamentos e Orçamentos
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.lembrete_recepcionista_agendamento`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.lembrete_recepcionista_agendamento`}
                        name={`informacoesDeApoio.${index}.lembrete_recepcionista_agendamento`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Caso necessário deixe um lembrete para a recepcionista"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <label
                        className={`${Outfit400.className} text-[14px] text-[#222222]`}
                      >
                        Recepcionista - Ordem de serviço
                      </label>
                      <textarea
                        {...formik.getFieldProps(
                          `informacoesDeApoio.${index}.lembrete_recepcionista_os`,
                        )}
                        type="text"
                        id={`informacoesDeApoio.${index}.lembrete_recepcionista_os`}
                        name={`informacoesDeApoio.${index}.lembrete_recepcionista_os`}
                        className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                        placeholder="Caso necessário deixe um lembrete para recepcionista"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[#222222]`}
                    >
                      Distribuição
                    </label>
                    <input
                      {...formik.getFieldProps(
                        `informacoesDeApoio.${index}.distribuicao`,
                      )}
                      type="text"
                      id={`informacoesDeApoio.${index}.distribuicao`}
                      name={`informacoesDeApoio.${index}.distribuicao`}
                      className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
                      placeholder="Preencha sobre a distribuição"
                    />
                  </div>
                </div>

                {/* Processamento e entrega de laudos */}
                <div className="flex flex-col gap-4">
                  <span
                    className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                  >
                    Processamento e entrega de Laudos
                  </span>

                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <div className="flex flex-1 flex-col gap-1">
                        <label
                          className={`${Outfit400.className} text-[14px] text-[#222222]`}
                        >
                          Prazo de entrega dos resultados (em dias)
                          <strong className="text-[#F23434]">*</strong>
                        </label>
                        <input
                          {...formik.getFieldProps(
                            `informacoesDeApoio.${index}.prazo_entrega_dias`,
                          )}
                          type="text"
                          id={`informacoesDeApoio.${index}.prazo_entrega_dias`}
                          name={`informacoesDeApoio.${index}.prazo_entrega_dias`}
                          className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                          placeholder="Digite um prazo pra entrega dos resultados"
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '') // Remove tudo que não for dígito
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.prazo_entrega_dias`,
                              value,
                            )
                          }}
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-1">
                        <label
                          className={`${Outfit400.className} text-[14px] text-[#222222]`}
                        >
                          Formato do laudo
                          <strong className="text-[#F23434]">*</strong>
                        </label>
                        <CustomMultiSelect
                          select={item?.formatos_laudo}
                          setSelect={(e) =>
                            formik.setFieldValue(
                              `informacoesDeApoio.${index}.formatos_laudo`,
                              e,
                            )
                          }
                          options={[
                            { id: 'PDF', label: 'PDF' },
                            { id: 'XML', label: 'XML' },
                            { id: 'HTML', label: 'HTML' },
                            { id: 'TEXTO', label: 'TEXTO' },
                            { id: 'FORMULÁRIO', label: 'FORMULÁRIO' },
                            { id: 'DICOM', label: 'DICOM' },
                          ]}
                          placeholder={'Selecione um formato'}
                          className={
                            'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default InformacoesDeApoio
