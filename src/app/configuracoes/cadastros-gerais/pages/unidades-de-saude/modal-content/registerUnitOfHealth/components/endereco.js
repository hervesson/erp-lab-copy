import { Outfit400 } from '@/fonts'

const Endereco = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Endereço
      </span>

      <div className="flex h-[144px] gap-[16px]">
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                CEP<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={formatCep(cep)}
                onChange={(e) => setCep(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o cep"
                onBlur={() => searchCEP()}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Rua
              </label>
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite a rua"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Número<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o número"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Bairro
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o bairro"
              />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Complemento<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite um complemento"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Estado<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o estado"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Cidade<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o estado"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Endereco
