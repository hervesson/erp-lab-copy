import { Outfit400 } from '@/fonts'
import { Briefcase, Note } from 'iconsax-reactjs'

const Empresas = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Briefcase size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Empresas
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Note size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Tabela de preços
          </span>
        </div>
      </div>
    </div>
  )
}

export default Empresas
