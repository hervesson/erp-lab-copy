import { Outfit400 } from '@/fonts'
import { Layer, Profile2User } from 'iconsax-reactjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Service = () => {
  const pathname = usePathname()

  return (
    <div className="flex w-full flex-col gap-5 px-[12px]">
      <Link href="/atendimento/fila" className="w-full">
        <div
          className={`${pathname === '/atendimento/fila' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <Layer size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Fila de Atendimento
          </p>
          <div className="text-whites flex h-[32px] w-[27px] items-center justify-center rounded bg-[#F9852E]">
            <p className={`${Outfit400.className}`}>15</p>
          </div>
        </div>
      </Link>
      <Link href="/atendimento/pacientes" className="w-full">
        <div
          className={`${pathname === '/atendimento/pacientes' ? 'bg-[#2B2B2B]' : ''} flex h-[44px] w-full items-center gap-5 rounded-[4px] px-2 hover:bg-[#2B2B2B]`}
        >
          <Profile2User size="28" color="#A1A1A1" />
          <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
            Pacientes
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Service
