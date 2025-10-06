import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight2,
  DocumentDownload,
  InfoCircle,
  SearchStatus,
  Trash,
} from 'iconsax-reactjs'

const RegisterAccountPayable = ({ onClose }) => {
  return (
    <div className="flex h-screen w-full flex-col bg-[#F9F9F9]">
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
            CONTAS A PAGAR
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button className="flex h-[44px] w-[166px] items-center justify-evenly rounded-[8px] bg-[#F9F9F9]">
            <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
            <span className={`${Outfit300.className} text-[#222222]`}>
              Importar arquivo
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
          <button className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9]">
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Finalizar
            </span>
          </button>
        </div>
      </header>
      <div className="flex h-full w-full overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-[1338px] flex-1 flex-col gap-[32px] rounded bg-[#FFFFFF] p-[48px]">
          <div className="flex h-[40px] items-center rounded-[8px] border border-[#BBBBBB] px-2">
            <input
              placeholder="Pesquisar por empresa, CNPJ..."
              className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] outline-0`}
            />
            <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
          </div>
          <div className="flex h-[268px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Dados principais
            </span>

            <div className="flex flex-1 flex-col justify-between">
              <div className="flex gap-[16px]">
                <div className="flex w-[130px] flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                  >
                    Código interno<strong className="text-red">*</strong>
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9]">
                    <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                      PAC123123
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Usar nome social
                  </label>
                  <div className="flex gap-[8px]">
                    <button
                      className={`h-[40px] w-[149px] ${Outfit400.className} rounded-[8px] bg-[#E0FFF9] text-[14px] text-[#0F9B7F]`}
                    >
                      CREDOR EXISTENTE
                    </button>
                    <button
                      className={`h-[40px] w-[57px] ${Outfit400.className} rounded-[8px] bg-[#F9F9F9] text-[14px] text-[#BBBBBB]`}
                    >
                      NOVO
                    </button>
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Credor<strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex h-[40px] items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                    <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                      Selecione um credor
                    </span>
                    <ArrowDown2 size="22" color="#A9A9A9" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    CNPJ ou CPF<strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex h-[40px] items-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2">
                    <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                      PAC123123
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Unidade devedora
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex h-[40px] items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                    <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                      Selecione a unidade devedora
                    </span>
                    <ArrowDown2 size="22" color="#A9A9A9" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Tipo de documento
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex h-[40px] items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                    <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                      NOTA FISCAL
                    </span>
                    <ArrowDown2 size="22" color="#A9A9A9" />
                  </div>
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Numero do documento
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite o número do documento"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Descrição
                  </label>
                  <input
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite uma descrição"
                  />
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Valor bruto da nota
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite o valor bruto da nota"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Competência<strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="--/--"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Data de emissão<strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="--/--/---"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[272px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Composição de classes financeiras
            </span>

            <div className="flex flex-col">
              <div className="flex h-[56px] items-center justify-end gap-[16px] bg-[#F9F9F9] px-[12px]">
                <p className={`${Outfit300.className} text-[14px]`}>
                  Valor bruto
                </p>
                <div className="flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9]">
                  <span
                    className={`${Outfit400.className} px-2 text-[#A9A9A9]`}
                  >
                    PAC123123
                  </span>
                </div>
              </div>
              <div className="flex h-[48px] items-center justify-between bg-[#D4D4D4] px-[12px]">
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Classe financeira
                </p>
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Centro de custo
                </p>
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Valor
                </p>
                <p className={`${Outfit300.className} text-[14px]`}>Excluir</p>
              </div>
              <div className="flex h-[64px] items-center justify-between gap-[24px] bg-[#FFFFFF] px-[12px]">
                <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                    Selecione um credor
                  </span>
                  <ArrowDown2 size="22" color="#A9A9A9" />
                </div>
                <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                    Selecione um credor
                  </span>
                  <ArrowDown2 size="22" color="#A9A9A9" />
                </div>
                <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <span className={`${Outfit400.className} text-[#A9A9A9]`}>
                    Selecione um credor
                  </span>
                  <ArrowDown2 size="22" color="#A9A9A9" />
                </div>
                <div className="flex h-[40px] items-center justify-between rounded-[8px] border-1 border-[#A9A9A9] px-2">
                  <Trash size="22" color="#A9A9A9" />
                </div>
              </div>
            </div>
            <div className="flex h-[64px] items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
                  <span className={`${Outfit400.className} pl-2 text-[16px]`}>
                    01
                  </span>
                </div>
                <span className={`${Outfit300.className} text-[16px]`}>
                  de 01 registros
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  className={`${Outfit400.className} h-[40px] rounded-[8px] border border-[#0F9B7F] px-2 text-[16px] text-[#0F9B7F] uppercase`}
                >
                  Adicionar Linha
                </button>
                <div className="flex items-center">
                  <ArrowLeft2 size="28" color="#0F9B7F" />
                  <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#E0FFF9]">
                    <span
                      className={`${Outfit400.className} flex px-4 text-[#0F9B7F]`}
                    >
                      01
                    </span>
                  </div>
                  <ArrowRight2 size="28" color="#0F9B7F" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-[108px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Impostos retidos
            </span>

            <div className="flex gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  ISS (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  IRRF (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  CSLL (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  PIS (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  COFINS (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  IBS (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  CBS (% ou R$)
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  Total de retenções
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="0,00"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  Valor líquido a pagar
                  <InfoCircle size="20" color="#A1A1A1" />
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="0,00"
                />
              </div>
            </div>
          </div>

          <div className="flex h-[238px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} h-[28px] text-[16px] text-[#0F9B7F]`}
            >
              Parcelamento
            </span>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Números de parcelas
                  <strong className="text-red-500">*</strong>
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  Total de retenções
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="0,00"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  Total de retenções
                </label>
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="0,00"
                />
              </div>
            </div>

            <div>
              <div className="flex h-[48px] items-center justify-between bg-[#D4D4D4] px-[12px]">
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Parcela
                </p>
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Valor
                </p>
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Data de pagamento
                </p>
                <p className={`${Outfit300.className} flex-1 text-[14px]`}>
                  Forma de pagamento
                </p>
              </div>
              <div className="flex h-[64px] items-center justify-between gap-[24px] bg-[#FFFFFF] px-[12px]">
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] flex-1 items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="0,00"
                />
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] flex-1 items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite o valor"
                />
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] flex-1 items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite a data de pagamento"
                />
                <input
                  className={`${Outfit400.className} ring-none flex h-[40px] flex-1 items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                  placeholder="Digite a forma de pagamento"
                />
              </div>
            </div>
          </div>
          <div className="flex h-[156px] flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} h-[28px] text-[16px] text-[#0F9B7F]`}
            >
              Anexos
            </span>

            <div className="flex gap-[16px]">
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] border-1 border-[#A9A9A9]">
                <DocumentDownload size="32" color="#737373" variant="Bulk" />
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  BOLETO
                </span>
              </div>
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#E7E7E7]">
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  Nenhum anexo disponível
                </span>
              </div>
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] border-1 border-[#A9A9A9]">
                <DocumentDownload size="32" color="#737373" variant="Bulk" />
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  NOTA FISCAL
                </span>
              </div>
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#E7E7E7]">
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  Nenhum anexo disponível
                </span>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] border-1 border-[#A9A9A9]">
                <DocumentDownload size="32" color="#737373" variant="Bulk" />
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  BOLETO
                </span>
              </div>
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#E7E7E7]">
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  Nenhum anexo disponível
                </span>
              </div>
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] border-1 border-[#A9A9A9]">
                <DocumentDownload size="32" color="#737373" variant="Bulk" />
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  COMPROVANTE DE PAGAMENTO
                </span>
              </div>
              <div className="flex h-[48px] flex-1 items-center justify-center gap-2 rounded-[8px] bg-[#E7E7E7]">
                <span
                  className={`${Outfit400.className} text-[16px] text-[#737373]`}
                >
                  Nenhum anexo disponível
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterAccountPayable
