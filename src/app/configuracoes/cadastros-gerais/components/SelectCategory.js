import {
  Briefcase,
  Category2,
  CloseSquare,
  DirectboxNotif,
  DollarSquare,
  I3Square,
  More2,
} from 'iconsax-reactjs'

import { Outfit300, Outfit400 } from '@/fonts'

const SelectCategory = ({ setOpenModalCategorie, setSelectCategorie }) => {
  return (
    <div className="flex w-[791px] flex-col gap-[24px] rounded-[12px] bg-[white] p-[32px]">
      <div className="flex items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222] uppercase`}>
          Selecione uma categor
        </span>
        <CloseSquare
          size="28"
          color="#BBBBBB"
          variant="Bulk"
          onClick={() => setOpenModalCategorie(false)}
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        <div className="flex justify-between">
          <div
            className="flex h-[142px] w-[237px] flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
            onClick={() => setSelectCategorie('principais')}
          >
            <Category2 size="28" color="#A1A1A1" />
            <span
              className={`${Outfit400.className} text-[16px] text-[#494949]`}
            >
              Principais
            </span>
            <p className={`${Outfit300.className} text-[14px] text-[#8A8A8A]`}>
              Unidades, exames, matrizes, profissionais, agendas, materiais,
              métodos, amostras
            </p>
          </div>
          <div
            className="flex h-[142px] w-[237px] flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
            onClick={() => setSelectCategorie('empresas')}
          >
            <Briefcase size="28" color="#A1A1A1" />
            <span
              className={`${Outfit400.className} text-[16px] text-[#494949]`}
            >
              Empresas
            </span>
            <p className={`${Outfit300.className} text-[14px] text-[#8A8A8A]`}>
              Convênios, labs de apoio/telemedicina, fornecedores, tabela de
              preços
            </p>
          </div>
          <div
            className="flex h-[142px] w-[237px] flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
            onClick={() => setSelectCategorie('estrutura')}
          >
            <I3Square size="28" color="#A1A1A1" />
            <span
              className={`${Outfit400.className} text-[16px] text-[#494949]`}
            >
              Estrutura
            </span>
            <p className={`${Outfit300.className} text-[14px] text-[#8A8A8A]`}>
              Salas/setores, equipamentos, etiquetas para amostra
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div
            className="flex h-[142px] w-[237px] flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
            onClick={() => setSelectCategorie('documentacao')}
          >
            <DirectboxNotif size="28" color="#A1A1A1" />
            <span
              className={`${Outfit400.className} text-[16px] text-[#494949]`}
            >
              Documentação
            </span>
            <p className={`${Outfit300.className} text-[14px] text-[#8A8A8A]`}>
              Cabeçalhos/rodapés, formulários de atendimento
            </p>
          </div>
          <div
            className="flex h-[142px] w-[237px] flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
            onClick={() => setSelectCategorie('financeiro')}
          >
            <DollarSquare size="28" color="#A1A1A1" />
            <span
              className={`${Outfit400.className} text-[16px] text-[#494949]`}
            >
              Financeiro
            </span>
            <p className={`${Outfit300.className} text-[14px] text-[#8A8A8A]`}>
              Bancos, cartão de créditos, adquirente, hierarquia CFO
            </p>
          </div>
          <div
            className="flex h-[142px] w-[237px] flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px] hover:bg-[#E0FFF9]"
            onClick={() => setSelectCategorie('outros')}
          >
            <More2 size="28" color="#A1A1A1" />
            <span
              className={`${Outfit400.className} text-[16px] text-[#494949]`}
            >
              Outros
            </span>
            <p className={`${Outfit300.className} text-[14px] text-[#8A8A8A]`}>
              Kits, importação de tabelas, integrações
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectCategory
