import CustomSelect from '@/components/CustomSelect'
import CustonSearchBanks from '@/components/CutomSearchBanks'
import { Outfit400 } from '@/fonts'

const InformacoesGerais = ({ formik }) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações iniciais
        </span>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-4">
              <div className="flex flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código interno
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={'BAN01'}
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-dashed border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código interno"
                  readOnly
                  disabled
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Banco
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustonSearchBanks
                  value={formik.values.banco_id.label}
                  setValue={(opt) => {
                    formik.setFieldValue(`banco_id`, opt.id)
                    formik.setFieldTouched(`banco_id`, true, false)
                  }}
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
                  {...formik.getFieldProps('description')}
                  type="text"
                  id="description"
                  name="description"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite uma descrição para a conta"
                />
              </div>
              <div className="flex flex-col gap-1">
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
                    { id: 'ativo', label: 'ATIVA' },
                    { id: 'inativo', label: 'INATIVA' },
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
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações da conta
        </span>

        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
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
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Número da agência"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
            >
              Digíto da agência
              <strong className="text-red-700">*</strong>
            </label>
            <input
              {...formik.getFieldProps('digito_agencia')}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digíto agência"
              inputMode="numeric"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
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
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Número da conta"
            />
          </div>
          <div className="flex flex-col gap-1">
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
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Informe o dígito"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
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
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
            >
              Chave PIX
              <strong className="text-red-700">*</strong>
            </label>
            <input
              {...formik.getFieldProps('chave_pix')}
              type="text"
              id="chave_pix"
              name="chave_pix"
              className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite uma chave PIX"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
