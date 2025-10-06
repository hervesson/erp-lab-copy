import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { Calendar2, InfoCircle } from 'iconsax-reactjs'

const PassOn = ({ onClose }) => {
  return (
    <div className="flex h-screen w-full flex-col bg-[#F9F9F9]">
      <header className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Pagar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            CONTAS
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9]">
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Próximo
            </span>
          </button>
        </div>
      </header>
      <div className="flex h-full w-full overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-[500px] flex-1 flex-col gap-[32px] rounded bg-[#FFFFFF] p-[48px]">
          <div className="flex h-[84px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Dados do repasse
            </span>
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <input
                    className={`${Outfit400.className}`}
                    placeholder="Data inicial do atendimento"
                  />
                  <Calendar2 size="22" color="#A1A1A1" variant="Bulk" />
                </div>

                <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <input
                    className={`${Outfit400.className}`}
                    placeholder="Data final do atendimento"
                  />
                  <Calendar2 size="22" color="#A1A1A1" variant="Bulk" />
                </div>

                <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <input
                    className={`${Outfit400.className}`}
                    placeholder="Data inicial do atendimento"
                  />
                  <Calendar2 size="22" color="#A1A1A1" variant="Bulk" />
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                >
                  Médico<strong className="text-red-500">*</strong>
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <button
                type="button"
                className="flex h-[40px] items-center justify-evenly self-end rounded-[8px] border border-[#0F9B7F] px-2"
              >
                <span
                  className={`${Outfit400.className} text-[#0F9B7F] uppercase`}
                >
                  Adicionar
                </span>
              </button>
              <div className="flex h-[40px] flex-2 items-center gap-[4px] self-end rounded-[50px] bg-[#E7E7E7] px-2">
                <InfoCircle size="22" color="#737373" variant="TwoTone" />
                <span
                  className={`${Outfit300.className} text-[14px] text-[#737373]`}
                >
                  Nenhuma opção adicionada
                </span>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                >
                  Especialista<strong className="text-red-500">*</strong>
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <button
                type="button"
                className="flex h-[40px] items-center justify-evenly self-end rounded-[8px] border border-[#0F9B7F] px-2"
              >
                <span
                  className={`${Outfit400.className} text-[#0F9B7F] uppercase`}
                >
                  Adicionar
                </span>
              </button>
              <div className="flex h-[40px] flex-2 items-center gap-[4px] self-end rounded-[50px] bg-[#E7E7E7] px-2">
                <InfoCircle size="22" color="#737373" variant="TwoTone" />
                <span
                  className={`${Outfit300.className} text-[14px] text-[#737373]`}
                >
                  Nenhuma opção adicionada
                </span>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                >
                  Setor<strong className="text-red-500">*</strong>
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <button
                type="button"
                className="flex h-[40px] items-center justify-evenly self-end rounded-[8px] border border-[#0F9B7F] px-2"
              >
                <span
                  className={`${Outfit400.className} text-[#0F9B7F] uppercase`}
                >
                  Adicionar
                </span>
              </button>
              <div className="flex h-[40px] flex-2 items-center gap-[4px] self-end rounded-[50px] bg-[#E7E7E7] px-2">
                <InfoCircle size="22" color="#737373" variant="TwoTone" />
                <span
                  className={`${Outfit300.className} text-[14px] text-[#737373]`}
                >
                  Nenhuma opção adicionada
                </span>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                >
                  Exame<strong className="text-red-500">*</strong>
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <button
                type="button"
                className="flex h-[40px] items-center justify-evenly self-end rounded-[8px] border border-[#0F9B7F] px-2"
              >
                <span
                  className={`${Outfit400.className} text-[#0F9B7F] uppercase`}
                >
                  Adicionar
                </span>
              </button>
              <div className="flex h-[40px] flex-2 items-center gap-[4px] self-end rounded-[50px] bg-[#E7E7E7] px-2">
                <InfoCircle size="22" color="#737373" variant="TwoTone" />
                <span
                  className={`${Outfit300.className} text-[14px] text-[#737373]`}
                >
                  Nenhuma opção adicionada
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PassOn
