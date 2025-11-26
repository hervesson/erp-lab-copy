import { Outfit400 } from '@/fonts'
import { ClipboardImport, Data, PasswordCheck } from 'iconsax-reactjs'

const Outros = ({ setModalFormFiels, setModalIntegrations }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-lg bg-[#F9F9F9] p-3">
          <ClipboardImport size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Importação de tabelas
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-lg bg-[#F9F9F9] p-3 hover:bg-[#E0FFF9]"
          onClick={() => setModalIntegrations(true)}
        >
          <Data size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Integrações
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-lg bg-[#F9F9F9] p-3 hover:bg-[#E0FFF9]"
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
