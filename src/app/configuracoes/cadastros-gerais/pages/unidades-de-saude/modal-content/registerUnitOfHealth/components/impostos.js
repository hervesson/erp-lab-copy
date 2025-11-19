import DecimalInputBR from '@/components/DecimalInputBR'
import { Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const Impostos = ({ formik }) => {
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
          <DecimalInputBR
            name="irrf"
            id="irrf"
            value={formik.values.irrf} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('irrf', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
          <DecimalInputBR
            name="pis"
            id="pis"
            value={formik.values.pis} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('pis', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
          <DecimalInputBR
            name="cofins"
            id="cofins"
            value={formik.values.cofins} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('cofins', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
          <DecimalInputBR
            name="csll"
            id="csll"
            value={formik.values.csll} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('csll', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
          <DecimalInputBR
            name="iss"
            id="iss"
            value={formik.values.iss} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('iss', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
          <DecimalInputBR
            name="ibs"
            id="ibs"
            value={formik.values.ibs} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('ibs', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
          <DecimalInputBR
            name="cbs"
            id="cbs"
            value={formik.values.cbs} // <-- NUMBER (ex: 12.9)
            onChange={(num) => formik.setFieldValue('cbs', num)}
            className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
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
              className={`${!formik.values.reterISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterISS', !formik.values.reterISS)
              }
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${formik.values.reterISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterISS', !formik.values.reterISS)
              }
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
              className={`${!formik.values.reterIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterIR', !formik.values.reterIR)
              }
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${formik.values.reterIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterIR', !formik.values.reterIR)
              }
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
              className={`${!formik.values.reterPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterPCC', !formik.values.reterPCC)
              }
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${formik.values.reterPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterPCC', !formik.values.reterPCC)
              }
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
              className={`${!formik.values.reterIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterIBS', !formik.values.reterIBS)
              }
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${formik.values.reterIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterIBS', !formik.values.reterIBS)
              }
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
              className={`${!formik.values.reterCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterCBS', !formik.values.reterCBS)
              }
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${formik.values.reterCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue('reterCBS', !formik.values.reterCBS)
              }
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
              className={`${!formik.values.optantePeloSimples ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue(
                  'optantePeloSimples',
                  !formik.values.optantePeloSimples,
                )
              }
            >
              NÃO
            </button>
            <button
              type="button"
              className={`${formik.values.optantePeloSimples ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() =>
                formik.setFieldValue(
                  'optantePeloSimples',
                  !formik.values.optantePeloSimples,
                )
              }
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
