import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'

const Financeiro = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Financeiro
      </span>
      {financial?.map((item, index) => {
        return (
          <div className="flex gap-[16px]" key={index.toString()}>
            <div className="flex w-full flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Selecione um banco
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={{ id: item.codigoBanco, label: item.banco }}
                setSelect={(e) => {
                  handleChangeFinancial(index, 'banco', e.label)
                  handleChangeFinancial(index, 'codigoBanco', e.id)
                  handleChangeFinancial(index, 'bancoId', e.id)
                }}
                options={activeBanks}
                placeholder={'Selecione o banco'}
                className={'border border-[#BBBBBB]'}
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
                onChange={(e) =>
                  handleChangeFinancial(index, 'agencia', e.target.value)
                }
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
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
                onChange={(e) =>
                  handleChangeFinancial(index, 'digitoAgencia', e.target.value)
                }
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
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
              <input
                value={item.contaCorrente}
                onChange={(e) =>
                  handleChangeFinancial(index, 'contaCorrente', e.target.value)
                }
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite a conta corrente"
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
                onChange={(e) =>
                  handleChangeFinancial(index, 'digitoConta', e.target.value)
                }
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o dígito da agência"
              />
            </div>

            <div
              className="flex flex-col justify-end py-[8px]"
              onClick={() =>
                setFinancial((prev) => prev.filter((_, i) => i !== index))
              }
            >
              <Trash size="28" color="#737373" />
            </div>
          </div>
        )
      })}

      <button
        type="button"
        className={`${Outfit400.className} h-[40px] w-[235px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F]`}
        onClick={() =>
          setFinancial([
            ...financial,
            {
              banco: '',
              codigoBanco: '0',
              bancoId: '',
              agencia: '',
              digitoAgencia: '',
              contaCorrente: '',
              digitoConta: '',
              tipoConta: '',
              principal: false,
              observacoes: '',
            },
          ])
        }
      >
        ADICIONAR NOVO BANCO
      </button>
    </div>
  )
}

export default Financeiro
