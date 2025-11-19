import { Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const Impostos = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Impostos
      </span>

      <div className="flex gap-[16px]">
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            IRRF (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={IRRF}
            onChange={(e) => setIRRF(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            PIS (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={PIS}
            onChange={(e) => setPIS(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            COFINS (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={COFINS}
            onChange={(e) => setCOFINS(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            CSLL (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={CSLL}
            onChange={(e) => setCSLL(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            ISS (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={ISS}
            onChange={(e) => setISS(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            IBS (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={IBS}
            onChange={(e) => setIBS(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            CBS (% ou R$)
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <input
            value={CBS}
            onChange={(e) => setCBS(e.target.value)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
            placeholder="Digite percentual"
          />
        </div>
      </div>
      <div className="flex gap-[16px]">
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Reter ISS
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`${!retainISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainISS(!retainISS)}
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${retainISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainISS(!retainISS)}
            >
              SIM
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Reter IR
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`${!retainIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainIR(!retainIR)}
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${retainIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainIR(!retainIR)}
            >
              SIM
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Reter PCC
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`${!retainPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainPCC(!retainPCC)}
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${retainPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainPCC(!retainPCC)}
            >
              SIM
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Reter IBS
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`${!retainIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainIBS(!retainIBS)}
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${retainIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainIBS(!retainIBS)}
            >
              SIM
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Reter CBS
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`${!retainCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainCBS(!retainCBS)}
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${retainCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setRetainCBS(!retainCBS)}
            >
              SIM
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px]">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Optante pelo simples nacional
            <InfoCircle size="20" color="#A1A1A1" />
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`${!nationalSimpleOptant ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setNationalSimpleOptant(!nationalSimpleOptant)}
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${nationalSimpleOptant ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => setNationalSimpleOptant(!nationalSimpleOptant)}
            >
              SIM
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[4px]" />
      </div>
    </div>
  )
}
export default Impostos
