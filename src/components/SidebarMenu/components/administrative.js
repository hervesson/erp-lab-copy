import { Outfit400 } from '@/fonts'
import { Box1, DollarSquare } from 'iconsax-reactjs'

const Administrative = () => {
  return (
    <div className="flex flex-col gap-5 px-[12px]">
      <div className="flex items-center gap-5">
        <DollarSquare size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Contabilidade
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Box1 size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Estoque/Compras
        </p>
      </div>
    </div>
  )
}

export default Administrative
