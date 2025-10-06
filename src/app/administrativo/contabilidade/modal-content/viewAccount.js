import { Outfit300, Outfit400, Outfit500 } from '@/fonts'

const ViewAccount = () => {
  return (
    <div className="flex flex-col gap-[24px] p-[24px]">
      <div className="flex h-[62px] items-center justify-between rounded-[12px] bg-[#F9F9F9] px-[24px]">
        <p
          className={`${Outfit500.className} text-[20px] text-[#0F9B7F] uppercase`}
        >
          Conta cap1234 - 1/3
        </p>
        <div className="flex gap-[24px]">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              01/02/2025 - 12:15 / Rafael Bitencurt
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              01/02/2025 - 12:15 / Giovana Ferreira
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-[198px] flex-col gap-[12px]">
        <p
          className={`text-[16px] text-[#0F9B7F] ${Outfit400.className} h-[28px]`}
        >
          Informações básicas
        </p>
        <div className="flex">
          <div className="flex flex-1">
            <div className="flex flex-1 flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Empresa credora
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                Lorem LTDA
              </label>
            </div>
            <div className="flex flex-1 flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                CNPJ
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                44553073000106
              </label>
            </div>
            <div className="flex flex-1 flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Unidade devedora
              </label>
              <label
                className={`${Outfit400.className} text-[15px] text-[#222222]`}
              >
                São Roque
              </label>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Número do documento
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              21651816168 1681619161191 616198461 6516 9169161618
            </label>
          </div>
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Descrição
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              -----
            </label>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              valor bruto da nota
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 6.000,00
            </label>
          </div>
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Competência
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              04/2025
            </label>
          </div>
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Data da emissão
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              10/04/2025
            </label>
          </div>
        </div>
      </div>

      <div className="flex h-[150px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Composição de classes financeiras
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Classe financeira
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Classe ABC
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Classe ABC
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Classe ABC
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Centro de custo
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Centro ABC
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Centro ABC
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Centro ABC
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Valor
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 500,00
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 600,00
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 800,00
            </span>
          </div>
        </div>
      </div>

      <div className="mt-[24px] flex h-[82px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#057B64] ${Outfit400.className}`}>
          Impostos retidos
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              ISS (% ou R$)
            </label>
            <span
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </span>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              IRRF (% ou R$)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              CSLL (% ou R$)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              PIS (% ou R$)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              COFINS (% ou R$)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              IBS (% ou R$)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              CBS (% ou R$)
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              1%
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Total de retenções
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              500,00
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Total líquido a pagar
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              R$ 5.500,00
            </label>
          </div>
        </div>
      </div>

      <div className="flex h-[150px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Parcelamento
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Parcela
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              1#
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              2#
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              3#
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Valor
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 2.000
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 2.000
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              R$ 2.000
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Data de pagamento
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              05/05/2025
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              05/05/2025
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              05/05/2025
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Código de barras do boleto
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              123456789 123456789 123456789 123456987
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              123456789 123456789 123456789 123456987
            </span>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              123456789 123456789 123456789 123456987
            </span>
          </div>
        </div>
      </div>

      <div className="flex h-[80px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Anexos
        </p>
        <div className="flex h-[48px] w-[210px] items-center justify-between rounded-[8px] bg-[#F9F9F9]">
          <span className={`${Outfit300.className} px-2 text-[#737373]`}>
            Boletos.pdf
          </span>
        </div>
      </div>

      <div className="flex h-[82px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Pagamento
        </p>
        <div className="flex flex-1 items-center gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Forma de pagamento
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              -----
            </span>
          </div>
          <div className="flex flex-col gap-[8px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Informações de pagamento
            </label>
            <span
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              -----
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAccount
