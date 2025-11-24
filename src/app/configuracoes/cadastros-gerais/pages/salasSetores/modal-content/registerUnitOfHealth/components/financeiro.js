import CustomSelect from '@/components/CustomSelect'
import CustomSearchBanks from '@/components/CutomSearchBanks'
import { Outfit400 } from '@/fonts'
import { Trash } from 'iconsax-reactjs'

const Financeiro = ({ formik }) => {
  const setFin = (index, key, value) => {
    formik.setFieldValue(`financeiro[${index}].${key}`, value)
  }

  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Financeiro
      </span>
      {formik?.values?.financeiro?.map((item, index) => {
        return (
          <div className="flex gap-[16px]" key={index.toString()}>
            <div className="flex w-full flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Selecione um banco
                <strong className="text-[#F23434]">*</strong>
              </label>

              <CustomSearchBanks
                setValue={(opt) => {
                  setFin(index, 'banco', opt?.label || '')
                  setFin(index, 'codigoBanco', opt?.id || '')
                  setFin(index, 'bancoId', opt?.id || '')
                }}
              />
            </div>

            <div className="flex w-full flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Agência
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={item.agencia}
                onChange={(e) => setFin(index, 'agencia', e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a agência"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Dígito agência
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={item.digitoAgencia}
                onChange={(e) => setFin(index, 'digitoAgencia', e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o dígito da agência"
              />
            </div>

            <div className="flex w-full flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Conta corrente
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={item.tipoDeConta ?? null}
                setSelect={(option) => setFin(index, 'tipoDeConta', option)}
                options={[
                  { id: 'corrente', label: 'CORRENTE' },
                  { id: 'poupanca', label: 'POUPANÇA' },
                ]}
                placeholder="Tipo de conta"
                className="border border-[#BBBBBB]"
              />
            </div>

            <div className="flex w-full flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Conta
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={item.conta}
                onChange={(e) => setFin(index, 'conta', e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a conta"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Dígito Conta
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={item.digitoConta}
                onChange={(e) => setFin(index, 'digitoConta', e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o dígito da agência"
              />
            </div>

            {formik.values.financeiro.length > 1 && (
              <div
                className="flex flex-col justify-end py-[8px]"
                onClick={() =>
                  formik.setFieldValue(
                    'financeiro',
                    formik.values.financeiro.filter((_, i) => i !== index),
                  )
                }
              >
                <Trash size="28" color="#737373" />
              </div>
            )}
          </div>
        )
      })}

      <button
        type="button"
        className={`${Outfit400.className} h-[40px] w-[150px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F] uppercase`}
        onClick={() =>
          formik.setFieldValue('financeiro', [
            ...formik.values.financeiro,
            {
              banco: '',
              codigoBanco: '',
              bancoId: '',
              agencia: '',
              digitoAgencia: '',
              contaCorrente: '',
              digitoConta: '',
            },
          ])
        }
      >
        Novo banco
      </button>
    </div>
  )
}

export default Financeiro
