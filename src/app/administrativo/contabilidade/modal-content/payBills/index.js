import { Outfit400, Outfit500 } from '@/fonts'
import { useState } from 'react'
import PayAccounts from './payAccounts'
import SelectAccounts from './selectAccounts'

const PayBills = ({ onClose }) => {
  const [step, setStep] = useState('selectAccounts')

  const steps = {
    selectAccounts: <SelectAccounts />,
    payAccounts: <PayAccounts />,
  }

  return (
    <div className="flex h-screen w-full flex-col bg-[#F9F9F9]">
      <header className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Pagar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            CONTAS
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="button"
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9]"
            onClick={() => setStep('payAccounts')}
          >
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Próximo
            </span>
          </button>
        </div>
      </header>
      {steps[step]}
    </div>
  )
}

export default PayBills
