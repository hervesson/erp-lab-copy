import { Outfit400 } from '@/fonts'
import { AddSquare, DocumentText, FolderMinus } from 'iconsax-reactjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Configs = () => {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-col gap-5 px-[12px]">
      <Link href="/atendimento/cadastros-gerais" className="w-ful">
        <div
          className={`${pathname === '/atendimento/cadastros-gerais' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <AddSquare size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Cadastros gerais
          </p>
        </div>
      </Link>
      <Link href="/atendimento/ged" className="w-ful">
        <div
          className={`${pathname === '/atendimento/ged' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <DocumentText size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            GED
          </p>
        </div>
      </Link>
      <Link href="/atendimento/gerenciar-aulas" className="w-ful">
        <div
          className={`${pathname === '/atendimento/gerenciar-aulas' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <FolderMinus size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Gerenciar Aulas
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Configs
