import { Outfit400 } from '@/fonts'
import { LocationTick, Monitor, Tag2 } from 'iconsax-reactjs'

const Estrutura = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <LocationTick size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Salas/Setores
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Monitor size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Equipamentos/Imobilizados
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Tag2 size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Etiquetas para amostras
          </span>
        </div>
      </div>
    </div>
  )
}

export default Estrutura
