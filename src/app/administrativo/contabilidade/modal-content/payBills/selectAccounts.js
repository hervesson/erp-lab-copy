import { Outfit300, Outfit400 } from '@/fonts'
import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight2,
  Calendar,
  SearchStatus,
} from 'iconsax-reactjs'

const SelectAccounts = () => {
  return (
    <div className="flex h-full w-full overflow-x-auto">
      <div className="mx-[48px] my-[28px] flex h-[856px] flex-1 flex-col gap-[32px] rounded bg-[#FFFFFF] p-[48px]">
        <div className="flex h-[84px] flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Dados principais
          </span>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex items-center gap-[16px]">
              <div className="rounded-[8px] border-1 border-[#A9A9A9]">
                <div className="flex h-[40px] items-center justify-center px-2">
                  <input
                    className=""
                    placeholder="Pesquisar por conta, unidade..."
                  />
                  <SearchStatus size="22" color="#A1A1A1" variant="Bulk" />
                </div>
              </div>

              <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] bg-[#F9F9F9] px-2">
                <span
                  className={`${Outfit400.className} truncate text-[16px] text-[#494949]`}
                >
                  Unidade: São Roque
                </span>
                <ArrowDown2 size="22" color="#A9A9A9" />
              </div>

              <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] bg-[#F9F9F9] px-2">
                <span
                  className={`${Outfit400.className} truncate text-[16px] text-[#494949]`}
                >
                  Status: Todos
                </span>
                <ArrowDown2 size="22" color="#A9A9A9" />
              </div>

              <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] bg-[#F9F9F9] px-2">
                <span
                  className={`${Outfit400.className} truncate text-[16px] text-[#494949]`}
                >
                  Tipo de documentos: Todos
                </span>
                <ArrowDown2 size="22" color="#A9A9A9" />
              </div>

              <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] bg-[#F9F9F9] px-2">
                <span
                  className={`${Outfit400.className} truncate text-[16px] text-[#494949]`}
                >
                  31/04/2025
                </span>
                <Calendar size="22" color="#A9A9A9" variant="TwoTone" />
              </div>
              <span
                className={`${Outfit400.className} text-[16px] text-[#494949]`}
              >
                A
              </span>
              <div className="flex h-[40px] flex-1 items-center justify-between rounded-[8px] bg-[#F9F9F9] px-2">
                <span
                  className={`${Outfit400.className} truncate text-[16px] text-[#494949]`}
                >
                  06/05/2025
                </span>
                <Calendar size="22" color="#A9A9A9" variant="TwoTone" />
              </div>
            </div>
          </div>
        </div>

        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-[48px] bg-[#D4D4D4]">
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Selecionar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Vencimento
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Cod. interno
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Empresa credora
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Unidade
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Tipo de documento
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Numero de documento
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Valor líquido
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Parcela
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            <tr className="h-[64px] bg-white py-[5px]">
              <td
                className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
              >
                <input type="checkbox" />
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
              >
                31/04/2025
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                CAP124
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                Nome da empresa credora
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                Nome da unidade
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                Tipo de documento
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                Número do documento
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                R$ 1833,00
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                1/3
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#383838]`}
              >
                status
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex h-[64px] items-center justify-between">
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
            <ArrowLeft2 size="28" color="#0F9B7F" />
            <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#E0FFF9]">
              <span
                className={`${Outfit400.className} flex px-4 text-[#0F9B7F]`}
              >
                01
              </span>
            </div>
            <ArrowRight2 size="28" color="#0F9B7F" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectAccounts
