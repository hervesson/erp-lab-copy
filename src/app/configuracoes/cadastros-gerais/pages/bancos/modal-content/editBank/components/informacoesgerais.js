import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { CloseCircle, InfoCircle } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik, activeBanks, units }) => {
  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div>
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações iniciais
          </span>

          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={'BAN01'}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#494949] outline-none`}
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
                  <CustomSelect
                    select={formik.values.banco_id}
                    setSelect={(option) => {
                      formik.setFieldValue(`banco_id`, option)
                      formik.setFieldTouched(`banco_id`, true, false)
                    }}
                    options={activeBanks}
                    placeholder={'Selecione o banco'}
                    className={'border border-[#BBBBBB]'}
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
                    {...formik.getFieldProps('description')}
                    type="text"
                    id="description"
                    name="description"
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
                    select={formik.values.status}
                    setSelect={(option) => {
                      formik.setFieldValue(`status`, option)
                      formik.setFieldTouched(`status`, true, false)
                    }}
                    options={[
                      { id: 'ativa', label: 'Ativa' },
                      { id: 'inativa', label: 'Inativa' },
                    ]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* informaçoes da conta */}
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
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
                {...formik.getFieldProps('agencia')}
                type="text"
                id="agencia"
                name="agencia"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Número da agência"
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
                {...formik.getFieldProps('numero_conta')}
                type="text"
                id="numero_conta"
                name="numero_conta"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Número da conta"
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
                {...formik.getFieldProps('digito_conta')}
                type="text"
                id="digito_conta"
                name="digito_conta"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Informe o dígito"
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
                select={formik.values.tipoConta}
                setSelect={(option) => {
                  formik.setFieldValue(`tipoConta`, option)
                  formik.setFieldTouched(`tipoConta`, true, false)
                }}
                options={[
                  { id: 'corrente', label: 'CORRRENTE' },
                  { id: 'poupanca', label: 'POUPANÇA' },
                ]}
                placeholder={'Selecione uma opção'}
                className={'border border-[#BBBBBB]'}
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
                {...formik.getFieldProps('pix_chave')}
                type="text"
                id="pix_chave"
                name="pix_chave"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite uma chave PIX"
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
                select={formik.values.unidadeSelecionada}
                setSelect={(option) => {
                  formik.setFieldValue(`unidadeSelecionada`, option)
                  formik.setFieldTouched(`unidadeSelecionada`, true, false)
                }}
                options={units /* [{id, label}] */}
                placeholder={'Selecione uma ou mais unidades'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-[4px]">
              <button
                type="button"
                className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                onClick={() => {
                  const selected = formik.values.unidadeSelecionada
                  const list = formik.values.unidades_associadas ?? []

                  // id do item pode vir como u.id ou u.unidade_saude.id
                  const getId = (u) => u?.id ?? u?.unidade_saude?.id

                  if (selected && getId(selected)) {
                    const exists = list.some(
                      (it) => getId(it) === getId(selected),
                    )
                    if (!exists) {
                      formik.setFieldValue('unidades_associadas', [
                        ...list,
                        selected,
                      ])
                    }
                    // limpa o select e marca touched
                    formik.setFieldValue('unidadeSelecionada', null)
                    formik.setFieldTouched('unidadeSelecionada', true, false)
                    formik.setFieldTouched('unidades_associadas', true, false)
                  }
                }}
              >
                ADICIONAR
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-[4px]">
              {formik.values.unidades_associadas?.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {formik.values.unidades_associadas.map((item, chipIndex) => {
                    const label =
                      item?.label ??
                      item?.unidade_saude?.nomeUnidade ??
                      item?.nomeUnidade ??
                      '—'
                    return (
                      <div
                        key={`${item?.id ?? item?.unidade_saude?.id ?? chipIndex}-${chipIndex}`}
                        className={`h-[40px] bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                      >
                        {label}
                        <CloseCircle
                          size="22"
                          color="#F23434"
                          variant="Bold"
                          onClick={(e) => {
                            e.stopPropagation()
                            const next =
                              formik.values.unidades_associadas.filter(
                                (_, j) => j !== chipIndex,
                              )
                            formik.setFieldValue('unidades_associadas', next)
                            formik.setFieldTouched(
                              'unidades_associadas',
                              true,
                              false,
                            )
                          }}
                        />
                      </div>
                    )
                  })}
                </div>
              ) : (
                <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
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
      </div>
    </div>
  )
}

export default InformacoesGerais
