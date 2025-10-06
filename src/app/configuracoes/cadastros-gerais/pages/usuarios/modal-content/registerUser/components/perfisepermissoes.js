import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'
import { useState } from 'react'

const PerfisePermissoes = () => {
  // Informações básicas

  const [CNES, setCNES] = useState('')

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Configuração */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Configuração de perfil e módulos de acesso
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
            >
              Perfil<strong className="text-red-700">*</strong>
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[{ id: 1, label: 'FINANCEIRO' }]}
              placeholder={'Selecione uma opção'}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-[48px] bg-[#D4D4D4]">
              <th
                className={`text-start text-[13px] ${Outfit400.className} px-2 text-[#717171]`}
              >
                Módulo
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-start text-[#717171]`}
              >
                Unidades
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Cadastrar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Visualizar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Editar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Excluir
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-start text-[#717171]`}
              >
                Restrição de acesso
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-start text-[#717171]`}
              >
                Horário permitido
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            <tr className="h-[64px] bg-white py-[5px]">
              <td
                className={`px-2 ${Outfit300.className} text-center text-[#383838]`}
              >
                <CustomSelect
                  select={CNES}
                  setSelect={(e) => setCNES(e)}
                  options={[{ id: 1, label: 'FINANCEIRO' }]}
                  placeholder={'Selecione uma opção'}
                />
              </td>
              <td
                className={`px-2 ${Outfit300.className} text-center text-[#383838]`}
              >
                <CustomSelect
                  select={CNES}
                  setSelect={(e) => setCNES(e)}
                  options={[{ id: 1, label: 'FINANCEIRO' }]}
                  placeholder={'Selecione uma opção'}
                />
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} items-center text-[#383838]`}
              >
                <div className="flex h-full items-center justify-center">
                  <input type="checkbox" />
                </div>
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} px-2 text-center text-[#383838]`}
              >
                <CustomSelect
                  select={CNES}
                  setSelect={(e) => setCNES(e)}
                  options={[{ id: 1, label: 'FINANCEIRO' }]}
                  placeholder={'Selecione uma opção'}
                />
              </td>
              <td>
                <input className="mx-2 flex h-[40px] items-center justify-between rounded-[8px] border-1 border-[#A9A9A9]" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span className={`${Outfit400.className} pl-2 text-[16px]`}>
              01
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px]`}>
            de 01 registros
          </span>
        </div>

        <div className="flex items-center">
          <ArrowLeft2 size="28" color="#D9D9D9" />
          <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#E0FFF9]">
            <span className={`${Outfit400.className} flex px-4 text-[#0F9B7F]`}>
              01
            </span>
          </div>
          <ArrowRight2 size="28" color="#D9D9D9" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Permissões específicas
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <spam className={`${Outfit400.className} text-[#494949]`}>
                PERMISSOES DISPONÍVEIS
              </spam>
              <spam
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Remover todos
              </spam>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <spam className={`${Outfit400.className} text-[#494949]`}>
                PERMISSOES SELECIONADAS
              </spam>
              <spam
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Remover todos
              </spam>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Restrições específicas
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <spam className={`${Outfit400.className} text-[#494949]`}>
                PERMISSOES DISPONÍVEIS
              </spam>
              <spam
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Remover todos
              </spam>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <spam className={`${Outfit400.className} text-[#494949]`}>
                PERMISSOES SELECIONADAS
              </spam>
              <spam
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Remover todos
              </spam>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfisePermissoes
