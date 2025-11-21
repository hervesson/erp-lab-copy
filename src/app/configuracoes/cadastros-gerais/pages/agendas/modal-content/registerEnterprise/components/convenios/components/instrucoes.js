import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { useState } from 'react'

const Instrucoes = ({ formik }) => {
  // Informações básicas

  const [CNES, setCNES] = useState('')

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Configuração */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Hostórico de instruções do convênio
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
            >
              Perfil<strong className="text-red-700">*</strong>
            </label>
            <CustomSelect
              select={CNES}
              setSelect={(e) => setCNES(e)}
              options={[{ id: 1, label: 'FINANCEIRO' }]}
              placeholder={'Selecione uma opção'}
              className={'border border-[#BBBBBB]'}
            />
          </div>

          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Prazo da instrução
              <strong className="text-[#F23434]">*</strong>
            </label>
            <input
              {...formik.getFieldProps('nomeExame')}
              type="text"
              id="nomeExame"
              name="nomeExame"
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite o nome do convênio"
            />
          </div>

          <div className="flex flex-col justify-end gap-[4px]">
            <button
              type="button"
              className={`${Outfit400.className} h-[40px] w-[150px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F] uppercase`}
              onClick={() =>
                formik.setFieldValue('financeiro', [
                  ...formik.values.financeiro,
                  {
                    banco: '',
                    codigoBanco: '',
                    bancoId: '',
                    agencia: '',
                    digitoAgencia: '',
                    contaCorrente: '',
                    digitoConta: '',
                  },
                ])
              }
            >
              Adicionar
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
                Data do registro
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-start text-[#717171]`}
              >
                Usuário
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Instrução
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} px-2 text-end text-[#717171]`}
              >
                Prazo de instrução
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            <tr className="h-[64px] bg-white py-[5px]">
              <td
                className={`px-2 ${Outfit300.className} text-start text-[#737373]`}
              >
                10/02/2025
              </td>
              <td
                className={`px-2 ${Outfit300.className} text-start text-[#737373]`}
              >
                Rafael Bitencurt
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} text-[#737373] uppercase`}
              >
                necessária guia autorizada para todos os procedimentos
              </td>
              <td
                className={`text-[14px] ${Outfit300.className} px-2 text-end text-[#737373]`}
              >
                25/02/2025 - 12:00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Instrucoes
