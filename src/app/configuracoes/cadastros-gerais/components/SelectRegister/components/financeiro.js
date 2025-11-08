import { Outfit400 } from '@/fonts'
import { Bank, Hierarchy, Profile2User } from 'iconsax-reactjs'

const Financeiro = ({ setModalRegisterBanks }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterBanks(true)}
        >
          <Bank size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Bancos
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <Profile2User size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Adquirentes
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]">
          <Hierarchy size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Hierarquia CFO
          </span>
        </div>
      </div>
    </div>
  )
}

export default Financeiro
