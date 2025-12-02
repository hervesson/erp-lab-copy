import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const InformacoesInternas = () => {
  const [exams] = useState([])

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      {/* Configuração */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Agendas vinculadas
        </span>

        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-12 bg-[#D4D4D4]">
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Nome da agenda
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Dias e horário da agenda
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Unidade associada
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Status
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Excluir vínculo
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            {exams?.map((item, index) => {
              return (
                <tr
                  className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                  key={index.toString()}
                >
                  <td
                    className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                  ></td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                  ></td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  ></td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  ></td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  ></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Cadastrar agenda
      </span>
      <div className="flex h-7 items-center gap-2 rounded bg-[#FFECDE] px-2">
        <InfoCircle size="16" color="#F9852E" variant="Bulk" />
        <p className={`${Outfit300.className} text-[14px] text-[#F9852E]`}>
          <strong>Atenção</strong> Ao clicar em cadastrar agenda, voce será
          direcionado a uma outra tela para fazer esse cadastro, porém ao
          retornar, voce continuará daqui
        </p>
      </div>

      <button className="flex h-[88px] items-center justify-evenly rounded-lg border border-[#A9A9A9] bg-[#F9F9F9]">
        <span className={`${Outfit300.className} text-[#222222]`}>
          Clique aqui para cadastrar uma agenda
        </span>
      </button>
    </div>
  )
}

export default InformacoesInternas
