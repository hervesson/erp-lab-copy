import { Outfit400 } from '@/fonts'
import { Book1, Chart1, SecuritySafe } from 'iconsax-reactjs'

const Data = () => {
  return (
    <div className="flex flex-col gap-5 px-[12px]">
      <div className="flex items-center gap-5">
        <Chart1 size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Dashboard
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Book1 size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Relatório
        </p>
      </div>
      <div className="flex items-center gap-5">
        <SecuritySafe size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Auditorias
        </p>
      </div>
    </div>
  )
}

export default Data
