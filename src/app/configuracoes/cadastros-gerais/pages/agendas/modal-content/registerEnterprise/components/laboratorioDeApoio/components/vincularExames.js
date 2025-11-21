import { Outfit300, Outfit400 } from '@/fonts'
import {
  DocumentDownload,
  ProgrammingArrows,
  SearchStatus,
} from 'iconsax-reactjs'
import { useState } from 'react'

const VincularExames = () => {
  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Endereço */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Exames
        </span>

        <div className="flex gap-[16px]">
          <button
            className={`${Outfit400.className} flex h-[52px] w-[301px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] bg-[#f9f9f9] text-[16px] text-[#737373]`}
          >
            BAIXAR PLANILHA DE EXEMPLO
          </button>
          <button
            className={`${Outfit400.className} flex h-[52px] w-[301px] items-center justify-center gap-2 rounded-[8px] border-1 border-[#A9A9A9] bg-[#f9f9f9] text-[16px] text-[#737373]`}
          >
            <DocumentDownload size="28" color="#737373" />
            IMPORTAR DADOS
          </button>
        </div>
      </div>
      {/* responsável */}
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center gap-[16px]">
          <div className="flex flex-1 flex-col justify-between">
            <span className={`${Outfit400.className} text-[#222222]`}>
              <strong>0</strong> de 0 registros
            </span>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-1 flex-row gap-[4px]">
              <input type="checkbox" />
              <p className={`${Outfit300.className} text-[#222222]`}>
                Somente registros sem vínculo
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 flex-row gap-[4px]">
              <div
                className={`flex h-[40px] flex-2 items-center rounded-[8px] px-2 ${
                  isFocusedSearch
                    ? 'border-[1px] border-[#0F9B7F]'
                    : 'border border-[#BBBBBB]'
                }`}
              >
                <input
                  placeholder="Pesquisar"
                  // onChange={handleChangeEnterprise}
                  className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
                  onFocus={() => setIsFocusedSearch(true)}
                  onBlur={() => setIsFocusedSearch(false)}
                />
                <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <button
              className={`${Outfit400.className} flex h-[44px] items-center justify-center rounded-[8px] bg-[#C9C9C9] text-[16px] text-[#737373]`}
            >
              <ProgrammingArrows size="28" color="#737373" variant="TwoTone" />
              VÍNCULAR AUTOMATICAMENTE
            </button>
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
                Código interno
              </th>
              <th
                className={`text-start text-[13px] ${Outfit400.className} px-2 text-[#717171]`}
              >
                Nome do exame interno
              </th>
              <th
                className={`text-start text-[13px] ${Outfit400.className} px-2 text-[#717171]`}
              >
                Código laboratório
              </th>
              <th
                className={`text-start text-[13px] ${Outfit400.className} px-2 text-[#717171]`}
              >
                Nome do exame do laboratório
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-start text-[#717171]`}
              >
                Vínculo
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Excluir
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-end text-[#717171]`}
              >
                Editar
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            <tr className="h-[64px] bg-white py-[5px]">
              <td
                className={`px-2 ${Outfit300.className} text-start text-[#737373]`}
              ></td>
              <td
                className={`px-2 ${Outfit300.className} text-start text-[#737373]`}
              ></td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#737373] uppercase`}
              ></td>
              <td
                className={`text-[14px] ${Outfit300.className} px-2 text-end text-[#737373]`}
              ></td>
              <td
                className={`text-[14px] ${Outfit300.className} px-2 text-end text-[#737373]`}
              ></td>
              <td
                className={`text-[14px] ${Outfit300.className} px-2 text-end text-[#737373]`}
              ></td>
              <td
                className={`text-[14px] ${Outfit300.className} px-2 text-end text-[#737373]`}
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default VincularExames
