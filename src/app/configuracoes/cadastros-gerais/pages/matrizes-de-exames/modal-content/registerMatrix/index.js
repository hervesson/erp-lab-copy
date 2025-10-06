'use client'
import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { useState } from 'react'
// components
import CustomSelect from '@/components/CustomSelect'
import { DocumentDownload } from 'iconsax-reactjs'

const RegisterMatrix = ({ onClose }) => {
  const [labs, setLabs] = useState('')
  const [examName, setExamName] = useState('')

  return (
    <div className="flex h-screen w-full flex-col bg-[#F9F9F9]">
      <div className="flex h-[88px] items-center justify-between rounded border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Cadastrar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            MATRIZ DE EXAMES
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button className="flex h-[44px] w-[120px] items-center justify-evenly rounded-[8px] bg-[#F9F9F9] hover:bg-[#E0FFF9]">
            <span className={`${Outfit300.className} text-[#222222]`}>
              Baixar planilha
            </span>
          </button>
          <button className="flex h-[44px] w-[166px] items-center justify-evenly rounded-[8px] bg-[#F9F9F9] hover:bg-[#E0FFF9]">
            <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
            <span className={`${Outfit300.className} text-[#222222]`}>
              Importar arquivo
            </span>
          </button>
          <div className="border border-[#BBBBBB]" />
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
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#0F9B7F] hover:bg-[#E0FFF9]"
          >
            <span className={`${Outfit400.className} text-[#0F9B7F] uppercase`}>
              Visualizar
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

      <div className="flex h-full w-screen flex-col gap-x-3 overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-fit flex-col gap-[32px] rounded bg-[#fff] p-[48px]">
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
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Tipo de exame<strong className="text-red-500">*</strong>
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
                    className={`h-[40] w-[130] bg-[#A9A9A9] ${Outfit300.className} rounded-[8px] text-[#3E3E3E]`}
                  >
                    Baixar template
                  </button>
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Exame vinculado<strong className="text-red-500">*</strong>
                  </label>

                  <CustomSelect
                    select={labs}
                    setSelect={(e) => setLabs(e)}
                    options={[{ id: 1, label: 'HEMATOLOGIA LABORATORIAL' }]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Nome da matriz<strong className="text-red-500">*</strong>
                  </label>

                  <input
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome da unidade"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código interno<strong className="text-red-500">*</strong>
                  </label>

                  <input
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome da unidade"
                  />
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
        <div className="mx-[48px] my-[28px] flex h-[188px] flex-col gap-[32px] rounded bg-[#fff] p-[48px]">
          <div className="flex h-[92px] flex-col items-center justify-center rounded bg-[#F9F9F9]">
            <div className="flex gap-3">
              <DocumentDownload size="28" color="#737373" />
              <span className={`${Outfit400.className} text-[#737373]`}>
                IMPORTAR DADOS DO TEMPLATE
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterMatrix
