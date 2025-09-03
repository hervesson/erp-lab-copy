import { Outfit400, Outfit500 } from '@/fonts'

const ProfilePatient = () => {
  return (
    <div className="p-[24px]">
      <div className="flex h-[62px] items-center justify-between rounded-[12px] bg-[#F9F9F9] px-[24px]">
        <p className={`${Outfit500.className} text-[20px] text-[#057B64]`}>
          Gabriela Campos Gouveia
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
      <div className="mt-[24px] flex h-[236px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#057B64] ${Outfit400.className}`}>
          Informações básicas
        </p>
        <div className="flex h-[84px]">
          <div className="h-[84px] w-[84px] rounded border" />
          <div className="flex h-[84px] flex-1 items-center justify-between px-[16px]">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Nome social
              </label>
              <label
                className={`${Outfit400.className} text-[15px] text-[#222222]`}
              >
                ----
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Chamar pelo nome social
              </label>
              <label
                className={`${Outfit400.className} text-[15px] text-[#222222]`}
              >
                Não se aplica
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Sexo
              </label>
              <label
                className={`${Outfit400.className} text-[15px] text-[#222222]`}
              >
                Feminino
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Data de nascimento
              </label>
              <label
                className={`${Outfit400.className} text-[15px] text-[#222222]`}
              >
                19/04/1991
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Nome social
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              ----
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Chamar pelo nome social
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Não se aplica
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Sexo
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Feminino
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Data de nascimento
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              19/04/1991
            </label>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Nome social
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              ----
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Chamar pelo nome social
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Não se aplica
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Sexo
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Feminino
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Data de nascimento
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              19/04/1991
            </label>
          </div>
        </div>
      </div>

      <div className="mt-[24px] flex h-[140px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#057B64] ${Outfit400.className}`}>
          Informações de convênio
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Convenio
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Bradesco
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Plano
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Plus
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Validade
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              13/07/2028
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Matrícula
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              111222333444
            </label>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Nome do titular
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Gabriela Santos Gouveia
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Cartão sus
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              ----
            </label>
          </div>
        </div>
      </div>
      <div className="mt-[24px] flex h-[82px] flex-col gap-[12px]">
        <p className={`text-[16px] text-[#057B64] ${Outfit400.className}`}>
          Endereço
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              CEP
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              99999-999
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Cep/Rua/Número/Bairro
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              Passos livres, n 1800 - Assunção
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Complemento
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              ----
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Cidade/Estado
            </label>
            <label
              className={`${Outfit400.className} text-[15px] text-[#222222]`}
            >
              São Paulo/SP
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePatient
