import CustomSelect from '@/components/CustomSelect'
import DecimalInputBR from '@/components/DecimalInputBR'
import { Outfit300, Outfit400 } from '@/fonts'
import { CloseCircle, InfoCircle } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik }) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações básicas
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
                    value={formik.values.codigoInterno}
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
                    Nome do kit
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('nomeKit')}
                    name="nomeKit"
                    id="nomeKit"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite uma descrição para a conta"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Status do kit
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.metodologiaUtilizada}
                    setSelect={(e) =>
                      formik.setFieldValue('metodologiaUtilizada', e)
                    }
                    options={[
                      {
                        id: true,
                        label: 'ATIVO',
                      },
                      {
                        id: false,
                        label: 'INATIVO',
                      },
                    ]}
                    placeholder={'Selecione um status'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Preço do kit
                  </label>
                  <DecimalInputBR
                    name="precoKit"
                    id="precoKit"
                    value={formik.values.precoKit} // <-- NUMBER (ex: 12.9)
                    onChange={(num) => formik.setFieldValue('precoKit', num)}
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite o preço do kit"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Descrição
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <textarea
                    value={formik.values.descricao}
                    onChange={(e) =>
                      formik.setFieldValue('descricao', e.target.value)
                    }
                    className={`${Outfit400.className} ring-none flex items-center justify-center rounded-lg border border-[#A9A9A9] px-2 py-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite algum detalhe"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* informaçoes da conta */}
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Configurações de uso
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
                select={formik.values.regiaoDeColeta}
                setSelect={(e) => formik.setFieldValue('regiaoDeColeta', e)}
                options={[]}
                placeholder={'Selecione uma ou mais unidades'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
            {formik.values.unidades.length > 0 ? (
              <div className="flex flex-2 gap-1">
                {formik.values.unidades.map((item, index) => {
                  return (
                    <div
                      key={index.toString()}
                      className={`h-10 self-end bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                    >
                      {item.unidadeId}
                      <CloseCircle
                        size="22"
                        color="#F23434"
                        variant="Bold"
                        onClick={() =>
                          formik.setFieldValue(
                            'unidades',
                            formik.values.unidades.filter(
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

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Convênio associado
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.regiaoDeColeta}
                setSelect={(e) => formik.setFieldValue('regiaoDeColeta', e)}
                options={[]}
                placeholder={'Selecione uma ou mais convênios'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
            {formik.values.convenios.length > 0 ? (
              <div className="flex flex-2 gap-1">
                {formik.values.convenios.map((item, index) => {
                  return (
                    <div
                      key={index.toString()}
                      className={`h-10 self-end bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                    >
                      {item.convenioId}
                      <CloseCircle
                        size="22"
                        color="#F23434"
                        variant="Bold"
                        onClick={() =>
                          formik.setFieldValue(
                            'convenios',
                            formik.values.convenios.filter(
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
      </div>
    </div>
  )
}

export default InformacoesGerais
