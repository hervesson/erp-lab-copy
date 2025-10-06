import { Outfit400, Outfit500 } from '@/fonts'
import { useState } from 'react'

import InformacoesGerais from './components/informacoesgerais'
import Integracao from './components/integracao'

const RegisterUser = ({ onClose }) => {
  const [tab, setTab] = useState('informacoesGerais')

  const handleSubmit = async () => {}

  const steps = {
    informacoesGerais: <InformacoesGerais />,
    integracao: <Integracao />,
  }

  return (
    <div className="flex h-screen w-full flex-col bg-[#F9F9F9]">
      <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Cadastrar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            BANCOS
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434] hover:bg-[#FFE6E6]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9] hover:bg-[#E0FFF9]"
          >
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Finalizar
            </span>
          </button>
        </div>
      </div>

      <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col rounded">
          <div className="flex h-[56px] items-center gap-8 px-[48px]">
            <button
              type="button"
              onClick={() => setTab('informacoesGerais')}
              className={`${Outfit400.className} ${tab === 'informacoesGerais' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px]`}
            >
              INFORMAÇÕES GERAIS
            </button>
            <button
              type="button"
              onClick={() => setTab('integracao')}
              className={`${Outfit400.className} ${tab === 'integracao' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px]`}
            >
              INTEGRAÇÃO
            </button>
          </div>
          {steps[tab]}
        </div>
      </div>
    </div>
  )
}

export default RegisterUser
