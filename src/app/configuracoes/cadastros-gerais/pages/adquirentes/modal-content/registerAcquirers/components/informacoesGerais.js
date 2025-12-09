import CustomSelect from '@/components/CustomSelect'
import DecimalInputBR from '@/components/DecimalInputBR'
import { Outfit300, Outfit400 } from '@/fonts'
import { CloseCircle, InfoCircle } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik, units, fields, banks }) => {
  const getLabsOptions = (indexAtual) => {
    const selectedIds = formik.values.restricoes
      ?.map((item) => {
        return { unidade: item.unidade }
      })
      .map((item, index) => {
        if (index === indexAtual) return null // ignora o da própria linha
        return item.unidade?.id || null
      })

    // retorna só labs que ainda não foram escolhidos em outras linhas
    return units.filter((lab) => !selectedIds.includes(lab.id))
  }

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações iniciais
          </span>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={formik?.values?.codigoInterno}
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite o código interno"
                    readOnly
                    disabled
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Nome do adquirente
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('nomeDoAdquirente')}
                    type="text"
                    id="nomeDoAdquirente"
                    name="nomeDoAdquirente"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome do adquirente"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Descrição
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('descricao')}
                    type="text"
                    id="descricao"
                    name="descricao"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite uma descrição para o adquirente"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Contas associadas
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.contaAssociada}
                    setSelect={(option) => {
                      formik.setFieldValue('contaAssociada', option)
                      formik.setFieldTouched('contaAssociada', true, false)
                    }}
                    options={banks}
                    placeholder="Selecione a conta"
                    className="border border-[#BBBBBB]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* informaçoes da conta */}
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações especifícas
          </span>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Unidades associadas
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.unidadeAssociada}
                setSelect={(option) => {
                  formik.setFieldValue(`unidadeAssociada`, option)
                  formik.setFieldTouched(`unidadeAssociada`, true, false)
                }}
                options={units}
                placeholder="Selecione a unidade"
                className="border border-[#BBBBBB]"
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                type="button"
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                onClick={() => {
                  if (
                    !formik?.values?.unidadeAssociadasSelecionadas?.includes(
                      formik?.values?.unidadeAssociada,
                    ) &&
                    formik.values.unidadeAssociada.id
                  ) {
                    formik.setFieldValue('unidadeAssociadasSelecionadas', [
                      ...formik.values.unidadeAssociadasSelecionadas,
                      formik.values.unidadeAssociada,
                    ])
                    formik.setFieldValue('unidadeAssociada', {})
                  }
                }}
              >
                ADICIONAR
              </button>
            </div>

            {/* === CHIPS APENAS DO index ATUAL (mudança chave) === */}
            <div className="flex flex-1 flex-col justify-end gap-1">
              {formik?.values?.unidadeAssociadasSelecionadas?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {formik.values?.unidadeAssociadasSelecionadas?.map(
                    (item, index) => {
                      return (
                        <div
                          key={index.toString()}
                          className={`h-10 bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                        >
                          {item.label}
                          <CloseCircle
                            size="22"
                            color="#F23434"
                            variant="Bold"
                            onClick={() =>
                              formik.setFieldValue(
                                'unidadeAssociadasSelecionadas',
                                formik.values.unidadeAssociadasSelecionadas.filter(
                                  (code) => code !== item,
                                ),
                              )
                            }
                          />
                        </div>
                      )
                    },
                  )}
                </div>
              ) : (
                <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                  <InfoCircle size="20" color="#737373" variant="Bulk" />
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#737373]`}
                  >
                    Nenhuma opção adicionada
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações financeiras
          </span>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Tipos de cartão suportados
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.cartaoSuportado}
                setSelect={(option) => {
                  formik.setFieldValue(`cartaoSuportado`, option)
                  formik.setFieldTouched(`cartaoSuportado`, true, false)
                }}
                options={fields
                  ?.find((element) => element?.nomeCampo === 'tipo_cartao')
                  ?.alternativas.map((i) => {
                    return {
                      id: i.id,
                      label: i.textoAlternativa,
                    }
                  })}
                placeholder="Selecione o cartão"
                className="border border-[#BBBBBB]"
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                type="button"
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                onClick={() => {
                  const {
                    cartoesSuportadosSelecionados = [],
                    cartaoSuportado,
                  } = formik.values

                  // Se não tiver cartão selecionado ou sem id, não faz nada
                  if (!cartaoSuportado?.id) return

                  // Verifica se já existe um cartão com o mesmo id no array
                  const jaSelecionado = cartoesSuportadosSelecionados.some(
                    (cartao) => cartao.id === cartaoSuportado.id,
                  )

                  if (jaSelecionado) return

                  formik.setFieldValue('cartoesSuportadosSelecionados', [
                    ...cartoesSuportadosSelecionados,
                    cartaoSuportado,
                  ])

                  // Reseta o select
                  formik.setFieldValue('cartaoSuportado', null) // ou {} se for o padrão do seu form
                }}
              >
                ADICIONAR
              </button>
            </div>

            {/* === CHIPS APENAS DO index ATUAL (mudança chave) === */}
            <div className="flex flex-1 flex-col justify-end gap-1">
              {formik?.values?.cartoesSuportadosSelecionados?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {formik.values?.cartoesSuportadosSelecionados?.map(
                    (item, index) => {
                      return (
                        <div
                          key={index.toString()}
                          className={`h-10 bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                        >
                          {item.label}
                          <CloseCircle
                            size="22"
                            color="#F23434"
                            variant="Bold"
                            onClick={() =>
                              formik.setFieldValue(
                                'cartoesSuportadosSelecionados',
                                formik.values.cartoesSuportadosSelecionados.filter(
                                  (code) => code !== item,
                                ),
                              )
                            }
                          />
                        </div>
                      )
                    },
                  )}
                </div>
              ) : (
                <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                  <InfoCircle size="20" color="#737373" variant="Bulk" />
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#737373]`}
                  >
                    Nenhuma opção adicionada
                  </label>
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Opções de parcelamento
                <strong className="text-red-700">*</strong>
              </label>
              <CustomSelect
                select={formik.values.opcaoDeParcelamento}
                setSelect={(e) =>
                  formik.setFieldValue('opcaoDeParcelamento', e)
                }
                options={fields
                  ?.find(
                    (element) => element?.nomeCampo === 'opcao_parcelamento',
                  )
                  ?.alternativas.map((i) => {
                    return {
                      id: i.id,
                      label: i.textoAlternativa,
                    }
                  })}
                placeholder={'Selecione uma opção de parcelamento'}
                className={
                  'border border-[#BBBBBB] bg-white hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                }
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Taxa por transação
              </label>
              <DecimalInputBR
                name="taxaPorTransacao"
                id="taxaPorTransacao"
                value={formik.values.taxaPorTransacao}
                onChange={(num) =>
                  formik.setFieldValue('taxaPorTransacao', num)
                }
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a taxa de parcelamento"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Taxa por parcelamento
              </label>
              <DecimalInputBR
                name="taxaPorParcelamento"
                id="taxaPorParcelamento"
                value={formik.values.taxaPorParcelamento}
                onChange={(num) =>
                  formik.setFieldValue('taxaPorParcelamento', num)
                }
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a taxa de parcelamento"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Porcentagem de repasse
                <strong className="text-red-700">*</strong>
              </label>
              <DecimalInputBR
                name="porcentagemDeRepasse"
                id="porcentagemDeRepasse"
                value={formik.values.porcentagemDeRepasse}
                onChange={(num) =>
                  formik.setFieldValue('porcentagemDeRepasse', num)
                }
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite percentual de repasse"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Prazo de repasse
                <strong className="text-red-700">*</strong>
              </label>
              <input
                {...formik.getFieldProps('prazoDeRepasse')}
                name={`prazoDeRepasse`}
                id={'prazoDeRepasse'}
                type="text"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o prazo de repasse"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Restrições
          </span>
          {formik?.values?.restricoes?.map((item, index) => {
            return (
              <div className="flex gap-4" key={index.toString()}>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Unidade
                  </label>
                  <CustomSelect
                    select={item.unidade ?? null}
                    setSelect={(option) => {
                      formik.setFieldValue(
                        `restricoes[${index}].unidade`,
                        option,
                      )
                      formik.setFieldTouched(
                        `restricoes[${index}].unidade`,
                        true,
                        false,
                      )
                    }}
                    options={getLabsOptions(index)}
                    placeholder="Selecione a unidade"
                    className="border border-[#BBBBBB]"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Restrições
                  </label>
                  <CustomSelect
                    select={item.restricao ?? null}
                    setSelect={(option) => {
                      formik.setFieldValue(
                        `restricoes[${index}].restricao`,
                        option,
                      )
                      formik.setFieldTouched(
                        `restricoes[${index}].restricao`,
                        true,
                        false,
                      )
                    }}
                    options={fields
                      ?.find(
                        (element) =>
                          element?.nomeCampo === 'restricao_adquirente',
                      )
                      ?.alternativas.map((i) => {
                        return {
                          id: i.id,
                          label: i.textoAlternativa,
                        }
                      })}
                    placeholder={'Selecione uma restrição'}
                    className={
                      'border border-[#BBBBBB] bg-white hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                    }
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <button
        type="button"
        className={`${Outfit400.className} flex h-10 w-40 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
        onClick={() =>
          formik.setFieldValue('restricoes', [
            ...formik.values.restricoes,
            {
              unidadeId: '',
              restricaoId: '',
            },
          ])
        }
        disabled={formik.values.restricoes.length === units.length}
      >
        NOVA RESTRIÇÃO
      </button>
    </div>
  )
}

export default InformacoesGerais
