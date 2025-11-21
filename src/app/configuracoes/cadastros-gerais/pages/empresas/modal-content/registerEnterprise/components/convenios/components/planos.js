import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { Trash } from 'iconsax-reactjs'

const Planos = ({ formik, fields }) => {
  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Planos
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome do plano
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeExame')}
                  type="text"
                  id="nomeExame"
                  name="nomeExame"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o nome do convênio"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tabela de preços
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
                  placeholder={'Selecione um tipo de convênio'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Valor CH<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('sinonimos')}
                  type="text"
                  id="sinonimos"
                  name="sinonimos"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a matrícula"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Valor filme<strong className="text-[#F23434]">*</strong>
                </label>
                <div className="flex w-full items-center gap-2">
                  <input
                    {...formik.getFieldProps('sinonimos')}
                    type="text"
                    id="sinonimos"
                    name="sinonimos"
                    className={`${Outfit400.className} ring-none flex h-[40px] flex-1 items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite a matrícula"
                  />
                  <Trash size="28" color="#737373" />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Instruções
              </label>
              <textarea
                {...formik.getFieldProps('preparoFeminino')}
                type="text"
                id="preparoFeminino"
                name="preparoFeminino"
                className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2 text-[#222222]`}
                placeholder="Digite as instruções"
              />
            </div>
          </div>
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
            Novo plano
          </button>
        </div>
      </div>
    </div>
  )
}

export default Planos
