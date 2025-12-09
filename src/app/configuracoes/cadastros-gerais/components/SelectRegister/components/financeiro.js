import { Outfit400 } from '@/fonts'
import { Bank, Hierarchy, Profile2User } from 'iconsax-reactjs'

const Financeiro = ({ setModalRegisterBanks, setModalRegisterAcquirers }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-lg bg-[#F9F9F9] p-3 hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterBanks(true)}
        >
          <Bank size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Bancos
          </span>
        </div>
        <div
          className="flex h-[84px] flex-1 flex-col justify-between rounded-lg bg-[#F9F9F9] p-3 hover:bg-[#E0FFF9]"
          onClick={() => setModalRegisterAcquirers(true)}
        >
          <Profile2User size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Adquirentes
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-lg bg-[#F9F9F9] p-3 hover:bg-[#E0FFF9]">
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
