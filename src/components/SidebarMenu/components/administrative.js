import { Outfit400 } from '@/fonts'
import { Box1, DollarSquare } from 'iconsax-reactjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Administrative = () => {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-col gap-5 px-[12px]">
      <Link href="/atendimento/contabilidade" className="w-ful">
        <div
          className={`${pathname === '/atendimento/contabilidade' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <DollarSquare size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Contabilidade
          </p>
        </div>
      </Link>
      <Link href="/atendimento/pacientes" className="w-full">
        <div
          className={`${pathname === '/atendimento/pacientes' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <Box1 size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Estoque/Compras
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Administrative
