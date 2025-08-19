import { Outfit400 } from '@/fonts'
import { AddSquare, DocumentText, FolderMinus } from 'iconsax-reactjs'

const Configs = () => {
  return (
    <div className="flex flex-col gap-5 px-[12px]">
      <div className="flex items-center gap-5">
        <AddSquare size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Cadastros gerais
        </p>
      </div>
      <div className="flex items-center gap-5">
        <DocumentText size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          GED
        </p>
      </div>
      <div className="flex items-center gap-5">
        <FolderMinus size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Gerenciar Aulas
        </p>
      </div>
    </div>
  )
}

export default Configs
