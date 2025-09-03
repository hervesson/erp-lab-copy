import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { Barcode } from 'iconsax-reactjs'

const NovoPaciente = ({ onClose }) => {
  return (
    <div className="flex h-screen flex-col bg-[#F9F9F9]">
      <header className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Cadastrar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            PACIENTE
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button className="flex h-[44px] w-[166px] items-center justify-evenly rounded-[8px] bg-[#F9F9F9]">
            <Barcode size="28" color="#737373" />
            <span className={`${Outfit300.className} text-[#222222]`}>
              Ler documentos
            </span>
          </button>
          <div className="border border-[#BBBBBB]" />
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#A9A9A9]">
            <span className={`${Outfit400.className} text-[#A9A9A9] uppercase`}>
              Finalizar
            </span>
          </button>
          <button className="flex h-[44px] w-[165px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9]">
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Finalizar + novo
            </span>
          </button>
        </div>
      </header>

      <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-[884px] flex-col gap-[32px] rounded bg-[#FFFFFF] p-[48px]">
          <div className="flex h-[348px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Informações básicas
            </span>

            <div className="flex h-[144px] gap-[16px]">
              <div className="h-[144px] w-[144px] rounded border border-[#A9A9A9]"></div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex gap-[16px]">
                  <div className="flex w-[130px] flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                    >
                      Código interno
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9]">
                      <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                        PAC123123
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Nome<strong className="text-[#F23434]">*</strong>
                    </label>
                    <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9]">
                      <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                        PAC123123
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Nome social
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome do paciente"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Usar nome social
                    </label>
                    <div className="flex gap-[8px]">
                      <button
                        className={`h-[40px] w-[117px] ${Outfit400.className} rounded-[8px] bg-[#E0FFF9] text-[14px] text-[#0F9B7F]`}
                      >
                        NÃO SE APLICA
                      </button>
                      <button
                        className={`h-[40px] w-[40px] ${Outfit400.className} rounded-[8px] bg-[#F9F9F9] text-[14px] text-[#BBBBBB]`}
                      >
                        SIM
                      </button>
                      <button
                        className={`h-[40px] w-[40px] ${Outfit400.className} rounded-[8px] bg-[#F9F9F9] text-[14px] text-[#BBBBBB]`}
                      >
                        NÃO
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Sexo<strong className="text-[#F23434]">*</strong>
                    </label>
                    <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9]">
                      <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                        PAC123123
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Data de nascimento
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite a data de nascimento"
                    />
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Nome da mãe<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome da mãe"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Prontuário
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o prontuário"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      RG<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o RG"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      CPF<strong className="text-[#F23434]">*</strong>
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o CPF"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Estado civil<strong className="text-[#F23434]">*</strong>
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o CPF"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex h-[144px] gap-[16px]">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Email<strong className="text-[#F23434]">*</strong>
                    </label>
                    <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9]">
                      <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                        PAC123123
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Contatos<strong className="text-[#F23434]">*</strong>
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome do paciente"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      WhatsApp
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome do paciente"
                    />
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Profissão<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome da mãe"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Observação
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o prontuário"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[188px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Informações de convênio
            </span>

            <div className="flex h-[144px] gap-[16px]">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Convênio<strong className="text-[#F23434]">*</strong>
                    </label>
                    <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9]">
                      <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                        PAC123123
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Plano<strong className="text-[#F23434]">*</strong>
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome do paciente"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Validade<strong className="text-[#F23434]">*</strong>
                    </label>
                    <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9]">
                      <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                        PAC123123
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Matrícula
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite a data de nascimento"
                    />
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Nome do titular
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome da mãe"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Cartão SUS
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o prontuário"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[188px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Endereço
            </span>

            <div className="flex h-[144px] gap-[16px]">
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Cep<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o nome do paciente"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Rua
                    </label>

                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite a rua"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Número<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o numero"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Bairro
                      <strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite o bairro"
                    />
                  </div>
                </div>
                <div className="flex gap-[16px]">
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Complemento<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite um complemento"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Estado
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Selecione o estado"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <label
                      className={`${Outfit400.className} text-[14px] text-[##222222]`}
                    >
                      Cidade<strong className="text-[#F23434]">*</strong>
                    </label>
                    <input
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                      placeholder="Digite a cidade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NovoPaciente
