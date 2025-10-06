import {
  ArchiveBox,
  Arrow,
  Buildings,
  Calendar,
  ChemicalGlass,
  Gift,
  Grid1,
  Heart,
  Profile2User,
} from 'iconsax-reactjs'

import { Outfit400 } from '@/fonts'

const Principais = ({
  setModalRegisterUnits,
  setModalRegisterExams,
  setModalRegisterUser,
  setModalRegisterMethods,
  setModalRegisterExamMatrix,
}) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterUnits(true)}
        >
          <Buildings size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Unidades
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterExams(true)}
        >
          <Heart size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Exames
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterExamMatrix(true)}
        >
          <Grid1 size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Matrizes
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <Profile2User size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Profissionais
          </span>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterUser(true)}
        >
          <Profile2User size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Usuários
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <Calendar size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Agendas
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <ArchiveBox size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Materias/Insulmos
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterMethods(true)}
        >
          <Arrow size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Métodos
          </span>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <ChemicalGlass size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Amostras
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <Gift size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Kits
          </span>
        </div>
      </div>
    </div>
  )
}

export default Principais
