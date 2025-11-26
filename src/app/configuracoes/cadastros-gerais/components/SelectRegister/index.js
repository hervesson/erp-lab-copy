'use cliente'
import { CloseSquare } from 'iconsax-reactjs'
import { useState } from 'react'

import { Outfit300, Outfit400 } from '@/fonts'

import Documentacao from './components/documentacao'
import Empresas from './components/empresas'
import Estrutura from './components/estrutura'
import Financeiro from './components/financeiro'
import Outros from './components/outros'
import Principais from './components/principais'

const SelectRegister = ({
  setModalRegisterUnits,
  setModalRegisterExams,
  setModalRegisterUser,
  setModalRegisterMethods,
  setModalRegisterAmostras,
  setModalRegisterExamMatrix,
  setModalRegisterCompanies,
  setModalRegisterBanks,
  setModalFormFiels,
  setOpenModalRegister,
  selectedCategorie,
}) => {
  const [category, setCategory] = useState(selectedCategorie)

  const steps = {
    principais: (
      <Principais
        setModalRegisterUnits={() => {
          setModalRegisterUnits(true)
        }}
        setModalRegisterExams={() => {
          setModalRegisterExams(true)
        }}
        setModalRegisterExamMatrix={() => {
          setModalRegisterExamMatrix(true)
        }}
        setModalRegisterUser={() => {
          setModalRegisterUser(true)
        }}
        setModalRegisterMethods={() => {
          setModalRegisterMethods(true)
        }}
        setModalRegisterAmostras={() => {
          setModalRegisterAmostras(true)
        }}
      />
    ),
    empresas: (
      <Empresas
        setModalRegisterCompanies={() => {
          setModalRegisterCompanies(true)
        }}
      />
    ),
    estrutura: <Estrutura />,
    documentacao: <Documentacao />,
    financeiro: (
      <Financeiro
        setModalRegisterBanks={() => {
          setModalRegisterBanks(true)
        }}
      />
    ),
    outros: <Outros setModalFormFiels={() => setModalFormFiels(true)} />,
  }

  return (
    <div className="flex w-[791px] flex-col gap-[24px] rounded-[12px] bg-[white] p-[32px]">
      <div className="flex items-center justify-between">
        <span className={`${Outfit400.className} text-[#222222] uppercase`}>
          Selecione o que Deseja cadastrar
        </span>
        <CloseSquare
          size="28"
          color="#BBBBBB"
          variant="Bulk"
          onClick={() => setOpenModalRegister(false)}
        />
      </div>
      <div className="flex h-[30px] justify-between gap-[4px] rounded-[8px] bg-[#F9F9F9] px-[4px]">
        <button
          className={`${Outfit300.className} ${category === 'principais' ? 'bg-black text-white' : 'text-[#636363]'} flex-1 rounded-[8px] text-center text-[14px]`}
          onClick={() => setCategory('principais')}
        >
          Principais
        </button>
        <button
          className={`${Outfit300.className} ${category === 'empresas' ? 'bg-black text-white' : 'text-[#636363]'} flex-1 rounded-[8px] text-center text-[14px]`}
          onClick={() => setCategory('empresas')}
        >
          Empresas
        </button>
        <button
          className={`${Outfit300.className} ${category === 'estrutura' ? 'bg-black text-white' : 'text-[#636363]'} flex-1 rounded-[8px] text-center text-[14px]`}
          onClick={() => setCategory('estrutura')}
        >
          Estrutura
        </button>
        <button
          className={`${Outfit300.className} ${category === 'documentacao' ? 'bg-black text-white' : 'text-[#636363]'} flex-1 rounded-[8px] text-center text-[14px]`}
          onClick={() => setCategory('documentacao')}
        >
          Documentação
        </button>
        <button
          className={`${Outfit300.className} ${category === 'financeiro' ? 'bg-black text-white' : 'text-[#636363]'} flex-1 rounded-[8px] text-center text-[14px]`}
          onClick={() => setCategory('financeiro')}
        >
          Financeiro
        </button>
        <button
          className={`${Outfit300.className} ${category === 'outros' ? 'bg-black text-white' : 'text-[#636363]'} flex-1 rounded-[8px] text-center text-[14px]`}
          onClick={() => setCategory('outros')}
        >
          Outros
        </button>
      </div>
      <div>{steps[category]}</div>
    </div>
  )
}

export default SelectRegister
