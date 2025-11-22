import { Outfit400 } from '@/fonts'

const InformacoesDeApoio = () => {
  // Informações básicas

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Configuração */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
          Utilize essa área para incluir informações sobre o exame cadastrado
          para cada laboratório de apoio.
        </span>

        <div className="flex gap-[16px]">
          <button
            className={`${Outfit400.className} h-[40px] rounded-[8px] border border-[#0F9B7F] px-2 text-[#0F9B7F]`}
          >
            ADICIONAR APOIO
          </button>
        </div>
      </div>
    </div>
  )
}

export default InformacoesDeApoio
