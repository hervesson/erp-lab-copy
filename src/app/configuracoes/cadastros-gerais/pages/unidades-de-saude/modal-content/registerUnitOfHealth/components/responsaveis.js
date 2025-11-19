const Responsaveis = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Responsável
      </span>

      <div className="flex gap-[16px]">
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Nome do responsável
              <strong className="text-[#F23434]">*</strong>
            </label>
            <input
              value={responsibleName}
              onChange={(e) => setResponsibleName(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o nome do responsável"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Contato do responsável
              <strong className="text-[#F23434]">*</strong>
            </label>
            <input
              value={formatPhoneNumber(responsibleContact)}
              onChange={(e) => setResponsibleContact(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o contato do responsável"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Email
              <strong className="text-[#F23434]">*</strong>
            </label>
            <input
              value={responsibleEmail}
              onChange={(e) => setResponsibleEmail(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o email do responsável"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Responsaveis
