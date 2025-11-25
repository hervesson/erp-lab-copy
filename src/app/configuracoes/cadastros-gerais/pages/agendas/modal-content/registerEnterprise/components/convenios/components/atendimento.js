import { Outfit400 } from '@/fonts'
import { ArrowRight2 } from 'iconsax-reactjs'

const Atendimento = () => {
  // Informações básicas

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Configuração */}

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Cadastro de pacientes
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  CPF próprio
                </span>
              </div>
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  Acomodação
                </span>
              </div>
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  Altura
                </span>
              </div>
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  Cartão sus
                </span>
              </div>
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  Cep
                </span>
              </div>
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  Cid do paciente
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos obrigatórios
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Ordem de serviço
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          TISS
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Tratamemnto ambulatorial
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Internamento
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Atendimento
