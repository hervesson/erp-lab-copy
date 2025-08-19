import { Outfit400 } from '@/fonts'
import { Layer, Profile2User } from 'iconsax-reactjs'

const Service = () => {
  return (
    <div className="flex flex-col gap-5 px-[12px]">
      <div className="flex items-center gap-5">
        <Layer size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Fila de Atendimento
        </p>
        <div className="flex h-[32px] w-[27px] items-center justify-center rounded bg-[#F9852E] text-white">
          <p className={`${Outfit400.className}`}>15</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <Profile2User size="28" color="#A1A1A1" />
        <p className={`${Outfit400.className} text-[16px] text-[#A1A1A1]`}>
          Pacientes
        </p>
      </div>
    </div>
  )
}

export default Service
