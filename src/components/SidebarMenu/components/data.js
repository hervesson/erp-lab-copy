import { Outfit400 } from '@/fonts'
import { Book1, Chart1, SecuritySafe } from 'iconsax-reactjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Data = () => {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-col gap-5 px-[12px]">
      <Link href="/dados/dashboard" className="w-ful">
        <div
          className={`${pathname === '/dados/dashboard' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <Chart1 size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Dashboard
          </p>
        </div>
      </Link>
      <Link href="/dados/relatorio" className="w-ful">
        <div
          className={`${pathname === '/dados/relatorio' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <Book1 size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Relatório
          </p>
        </div>
      </Link>
      <Link href="/dados/auditorias" className="w-ful">
        <div
          className={`${pathname === '/dados/auditorias' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <SecuritySafe size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Auditorias
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Data
