import { Outfit400 } from '@/fonts'
import { ClipboardImport, Data, PasswordCheck } from 'iconsax-reactjs'

const Outros = ({ setModalFormFiels }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <ClipboardImport size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Importação de tabelas
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Data size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Integrações
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalFormFiels(true)}
        >
          <PasswordCheck size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Campos do formulário
          </span>
        </div>
      </div>
    </div>
  )
}

export default Outros
