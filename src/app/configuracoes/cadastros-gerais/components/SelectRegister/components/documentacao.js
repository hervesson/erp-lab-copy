import { Outfit400 } from '@/fonts'
import { ArchiveBook, NoteText } from 'iconsax-reactjs'

const Documentacao = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <NoteText size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Cabeçalhos/rodapés
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <ArchiveBook size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Formulários de atendimento
          </span>
        </div>
      </div>
    </div>
  )
}

export default Documentacao
