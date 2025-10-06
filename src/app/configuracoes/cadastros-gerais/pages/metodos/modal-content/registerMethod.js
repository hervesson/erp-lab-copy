import CustomSelect from '@/components/CustomSelect'
import { Outfit400, Outfit500 } from '@/fonts'
import { useState } from 'react'

const RegisterExams = ({ onClose }) => {
  // Informações básicas
  const [examName, setExamName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('')
  const [labs, setLabs] = useState('')

  return (
    <div className="flex h-screen flex-col bg-[#F9F9F9]">
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
            MÉTODOS
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
            onClick={() => null}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9] hover:bg-[#E0FFF9]"
          >
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Finalizar
            </span>
          </button>
        </div>
      </div>
      <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col gap-[32px] rounded bg-[#fff] p-[48px]">
          {/* Informacoes */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Informações básicas
            </span>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Nome do método
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome da unidade"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#A9A9A9]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={'MET123'}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#A9A9A9] outline-none`}
                    placeholder="Digite o código interno"
                    disabled
                    readOnly
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Descrição
                  </label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite todos os sinônimos"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Status do método
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={status}
                    setSelect={(e) => setStatus(e)}
                    options={[{ id: 1, label: 'LABORATORIAL' }]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Laboratório de apoio associado
                  </label>

                  <CustomSelect
                    select={labs}
                    setSelect={(e) => setLabs(e)}
                    options={[{ id: 1, label: 'HEMATOLOGIA LABORATORIAL' }]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col justify-end gap-[4px]">
                  <button
                    type="button"
                    className={`flex h-[40px] w-[244px] items-center justify-center rounded-[8px] border border-[#0F9B7F] ${Outfit400.className} text-[14px] text-[#0F9B7F]`}
                    onClick={() => null}
                  >
                    VALIDAR COM LABORATÓRIO
                  </button>
                </div>
              </div>
              <button
                type="button"
                className={`flex h-[40px] w-[279px] items-center justify-center rounded-[8px] border border-[#0F9B7F] ${Outfit400.className} text-[14px] text-[#0F9B7F]`}
                onClick={() => null}
              >
                NOVO LABORATÓRIO ASSOCIADO
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterExams
