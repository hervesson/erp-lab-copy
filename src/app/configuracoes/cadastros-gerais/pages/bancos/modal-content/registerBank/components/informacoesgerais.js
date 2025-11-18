import CustomSelect from '@/components/CustomSelect'
import CustonSearchBanks from '@/components/CutomSearchBanks'
import Divider from '@/components/Divider'
import { Outfit300, Outfit400 } from '@/fonts'
import { FieldArray, getIn } from 'formik'
import { CloseCircle, InfoCircle } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik, units }) => {
  const p = (i, field) => `informations.${i}.${field}`

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <FieldArray name="informations">
        {({ push }) => (
          <>
            {formik.values.informations.map((info, index) => {
              return (
                <div
                  key={index.toString()}
                  className="flex flex-col gap-[32px]"
                >
                  <div className="flex flex-col gap-[16px]">
                    <span
                      className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                    >
                      Informações iniciais
                    </span>

                    <div className="flex gap-[16px]">
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex gap-[16px]">
                          <div className="flex flex-col gap-[4px]">
                            <label
                              className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                            >
                              Código interno
                              <strong className="text-[#F23434]">*</strong>
                            </label>
                            <input
                              value={'BAN001'}
                              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                              placeholder="Digite o código interno"
                              readOnly
                              disabled
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-[4px]">
                            <label
                              className={`${Outfit400.className} text-[14px] text-[#222222]`}
                            >
                              Banco
                              <strong className="text-[#F23434]">*</strong>
                            </label>

                            <CustonSearchBanks
                              setValue={(opt) => {
                                formik.setFieldValue(
                                  `informations.${index}.banco_id`,
                                  opt.id,
                                )
                                formik.setFieldTouched(
                                  `informations.${index}.banco_id`,
                                  true,
                                  false,
                                )
                              }}
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-[4px]">
                            <label
                              className={`${Outfit400.className} text-[14px] text-[#222222]`}
                            >
                              Descrição
                              <strong className="text-[#F23434]">*</strong>
                            </label>
                            <input
                              name={`informations.${index}.description`}
                              value={
                                formik.values.informations[index]
                                  ?.description ?? ''
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                              placeholder="Digite uma descrição para a conta"
                            />
                          </div>
                          <div className="flex flex-col gap-[4px]">
                            <label
                              className={`${Outfit400.className} text-[14px] text-[#222222]`}
                            >
                              Status do banco
                            </label>
                            <CustomSelect
                              select={
                                formik.values.informations[index]?.status ??
                                null
                              }
                              setSelect={(option) => {
                                formik.setFieldValue(
                                  `informations.${index}.status`,
                                  option,
                                )
                                formik.setFieldTouched(
                                  `informations.${index}.status`,
                                  true,
                                  false,
                                )
                              }}
                              options={[
                                { id: 'ativa', label: 'ATIVA' },
                                { id: 'inativa', label: 'INATIVA' },
                              ]}
                              placeholder="Selecione o status"
                              className="border border-[#BBBBBB]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* informaçoes da conta */}
                  <div className="flex flex-col gap-[16px]">
                    <span
                      className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
                    >
                      Informações da conta
                    </span>

                    <div className="flex gap-[16px]">
                      <div className="flex flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                        >
                          Agência
                          <strong className="text-red-700">*</strong>
                        </label>
                        <input
                          name={`informations.${index}.agencia`}
                          value={
                            formik.values.informations[index]?.agencia ?? ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                          placeholder="Agência"
                          inputMode="numeric"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                        >
                          Conta
                          <strong className="text-red-700">*</strong>
                        </label>
                        <input
                          name={`informations.${index}.numero_conta`}
                          value={
                            formik.values.informations[index]?.numero_conta ??
                            ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                          placeholder="Número da conta"
                          inputMode="numeric"
                        />
                      </div>
                      <div className="flex flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                        >
                          Dígito verificador
                          <strong className="text-red-700">*</strong>
                        </label>
                        <input
                          name={`informations.${index}.digito_conta`}
                          value={
                            formik.values.informations[index]?.digito_conta ??
                            ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                          placeholder="Dígito da conta"
                          inputMode="numeric"
                          maxLength={2}
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                        >
                          Tipo de conta
                          <strong className="text-red-700">*</strong>
                        </label>
                        <CustomSelect
                          select={
                            formik.values.informations[index]?.tipoConta ?? null
                          }
                          setSelect={(option) => {
                            formik.setFieldValue(
                              `informations.${index}.tipoConta`,
                              option,
                            )
                            formik.setFieldTouched(
                              `informations.${index}.tipoConta`,
                              true,
                              false,
                            )
                          }}
                          options={[
                            { id: 'corrente', label: 'CORRENTE' },
                            { id: 'poupanca', label: 'POUPANÇA' },
                          ]}
                          placeholder="Tipo de conta"
                          className="border border-[#BBBBBB]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                        >
                          Chave PIX
                          <strong className="text-red-700">*</strong>
                        </label>
                        <input
                          name={`informations.${index}.pix_chave`}
                          value={
                            formik.values.informations[index]?.pix_chave ?? ''
                          }
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                          placeholder="Chave PIX"
                        />
                      </div>
                    </div>

                    <div className="flex gap-[16px]">
                      <div className="flex flex-1 flex-col gap-[4px]">
                        <label
                          className={`${Outfit400.className} text-[14px] text-[#222222]`}
                        >
                          Unidades associadas
                          <strong className="text-[#F23434]">*</strong>
                        </label>
                        <CustomSelect
                          select={
                            formik.values.informations[index]
                              ?.unidadeSelecionada ?? null
                          }
                          setSelect={(option) => {
                            formik.setFieldValue(
                              `informations.${index}.unidadeSelecionada`,
                              option,
                            )
                            formik.setFieldTouched(
                              `informations.${index}.unidadeSelecionada`,
                              true,
                              false,
                            )
                          }}
                          options={units /* [{id, label}] */}
                          placeholder="Selecione a unidade"
                          className="border border-[#BBBBBB]"
                        />
                      </div>
                      <div className="flex flex-col justify-end gap-[4px]">
                        <button
                          type="button"
                          className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                          onClick={() => {
                            const pathSel = p(index, 'unidadeSelecionada')
                            const pathArr = p(index, 'unidades_associadas')

                            const selected = getIn(formik.values, pathSel)
                            const list = getIn(formik.values, pathArr) ?? []

                            if (selected && selected.id) {
                              const exists = list.some(
                                (item) => item.id === selected.id,
                              )
                              if (!exists) {
                                formik.setFieldValue(pathArr, [
                                  ...list,
                                  selected,
                                ])
                              }
                              // limpa o select
                              formik.setFieldValue(pathSel, null)
                              formik.setFieldTouched(pathSel, true, false)
                              formik.setFieldTouched(pathArr, true, false)
                            }
                          }}
                        >
                          ADICIONAR
                        </button>
                      </div>

                      {/* === CHIPS APENAS DO index ATUAL (mudança chave) === */}
                      <div className="flex flex-1 flex-col justify-end gap-[4px]">
                        {(() => {
                          const arrPath = p(index, 'unidades_associadas') // << trocado para o index atual
                          const list = getIn(formik.values, arrPath) ?? []

                          return (
                            <div>
                              {list.length > 0 ? (
                                <div className="flex flex-wrap gap-2">
                                  {list.map((item, chipIndex) => (
                                    <div
                                      key={`${item.id}-${chipIndex}`}
                                      className={`h-[40px] bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                                    >
                                      {item.label}
                                      <CloseCircle
                                        size="22"
                                        color="#F23434"
                                        variant="Bold"
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          const next = list.filter(
                                            (_, j) => j !== chipIndex,
                                          )
                                          formik.setFieldValue(arrPath, next)
                                          formik.setFieldTouched(
                                            arrPath,
                                            true,
                                            false,
                                          )
                                        }}
                                      />
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
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
                              )}
                            </div>
                          )
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}

            <Divider />
            <button
              type="button"
              className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              onClick={() =>
                push({
                  // ↓↓↓ coerente com selects como objetos e campos usados acima
                  banco_id: null,
                  description: '',
                  status: null,
                  agencia: '',
                  numero_conta: '',
                  digito_conta: '',
                  tipoConta: null,
                  pix_chave: '',
                  unidadeSelecionada: null,
                  unidades_associadas: [],
                })
              }
            >
              NOVA CONTA
            </button>
          </>
        )}
      </FieldArray>
    </div>
  )
}

export default InformacoesGerais
