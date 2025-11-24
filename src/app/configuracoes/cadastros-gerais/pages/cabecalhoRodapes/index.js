'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import { listAllUnits } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { AddSquare, DocumentDownload, SearchStatus } from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import EditUnityOfHealth from './modal-content/editUnitOfHealth'
import ProfileUnitHealth from './modal-content/profileUnitOfHealth'
import RegisterUnitOfHealth from './modal-content/registerUnitOfHealth'

import checkGreen from '../../../../../../public/assets/images/directions.png'

const CabecalhosRodapes = ({
  openModalRegisteUnits,
  setModalRegisterUnits,
}) => {
  const [units, setUnits] = useState([])
  const [openModalProfileUnit, setOpenModalProfileUnit] = useState(false)
  const [openModalEditUnit, setModalEditUnit] = useState(false)
  const [selectedUnit] = useState({})
  const [total, setTotal] = useState(0)

  const [selectButton, setSelectButton] = useState('cabecalho')

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // const findData = async () => {
    //   try {
    //     const unts = await listAllUnits()
    //     if (unts.success) {
    //       setUnits(unts.data.data)
    //       setTotal(unts.data.total)
    //     }
    //   } catch (error) {
    //     console.log('erro', error)
    //   }
    // }
    // findData()
  }, [])

  const findData = async () => {
    try {
      const unts = await listAllUnits()

      if (unts.success) {
        setUnits(unts.data.data)
        setTotal(unts.data.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const unts = await listAllUnits(props, searchTerm, 10)

      if (unts.success) {
        setUnits(unts.data.data)
        setTotal(unts.data.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Filtrar por termo pesquisado
  const handleChangeUnit = (e) => {
    setSearchTerm(e.target.value)
    debounceChange(e.target.value)
  }

  const debounceChange = useDebounce(handler, 800)

  async function handler(props) {
    setCurrentPage(1)

    try {
      const unts = await listAllUnits(1, props, 10)

      if (unts.success) {
        setUnits(unts.data.data)
        setTotal(unts.data.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-[32px]">
      <div className="flex h-[76px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="flex flex-1 gap-3 rounded-[8px] px-[16px]">
          <div className="flex flex-1 items-center justify-around gap-[16px]">
            <CustomSelect
              select={{ id: 'todas', label: 'Status: Todas' }}
              // setSelect={(e) => findDataPerStatus(e)}
              options={[
                { id: '', label: 'Todas' },
                { id: 'ativas', label: 'Ativas' },
                { id: 'inativas', label: 'Inativas' },
              ]}
              placeholder={'Selecione uma unidade'}
              className={'h-[44px] border border-[#BBBBBB] bg-[#FFF]'}
            />
            <div className="flex h-[44px] w-[209px] items-center justify-evenly rounded-[50px] bg-white">
              <button
                className={`${Outfit400.className} h-[40px] w-[109px] rounded-[50px] text-[16px] ${selectButton === 'cabecalho' ? 'bg-[#057B64] text-white' : 'bg-[#F9F9F9] text-[#494949]'}`}
                onClick={() => setSelectButton('cabecalho')}
              >
                Cabeçalho
              </button>

              <button
                className={`${Outfit400.className} h-[40px] w-[88px] rounded-[50px] text-[16px] ${selectButton === 'rodapé' ? 'bg-[#057B64] text-white' : 'bg-[#F9F9F9] text-[#494949]'}`}
                onClick={() => setSelectButton('rodapé')}
              >
                Rodapé
              </button>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex h-[44px] w-[497px] items-center justify-center gap-3 rounded-[8px] border border-[#A9A9A9] bg-[#FFF]">
                <DocumentDownload size="28" color="#737373" />
                <span
                  className={`${Outfit300.className} text-[#222] uppercase`}
                >
                  Importar imagem
                </span>
              </div>
            </div>
            <button
              type="botton"
              // onClick={() => setOpenModalCategorie(true)}
              className={`flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
            >
              <AddSquare size="32" color="#ffffff" variant="Bulk" />
              <span className={`${Outfit400.className} text-[16px] text-white`}>
                ADICIONAR
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`flex h-[40px] items-center rounded-lg px-2 ${
          isFocusedSearch
            ? 'border-[1px] border-[#0F9B7F]'
            : 'border border-[#BBBBBB]'
        }`}
      >
        <input
          placeholder="Pesquisar"
          onChange={handleChangeUnit}
          className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
          onFocus={() => setIsFocusedSearch(true)}
          onBlur={() => setIsFocusedSearch(false)}
        />
        <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-[48px] bg-[#D4D4D4]">
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Unidade
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              <div className="flex gap-2">
                <Image src={checkGreen} alt="bgfooter" />
                Tipo
              </div>
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Imagem
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Excluir
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Baixar
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {units?.map((item, index) => {
            return (
              <tr
                className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
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
                <td></td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                ></td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                ></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span
              className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
            >
              {units.length > 10 ? 10 : units.length}
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px] text-[#222]`}>
            de {total} registros
          </span>
        </div>

        <Pagination
          totalRecords={total}
          recordsPerPage={10}
          onPageChange={(value) => findDataPerPage(value)}
          currentPage={currentPage} // Pass the current page state
        />
      </div>
      <ModalUp
        isOpen={openModalRegisteUnits}
        onClose={() => setModalRegisterUnits(false)}
      >
        <RegisterUnitOfHealth
          onClose={() => setModalRegisterUnits(false)}
          findData={() => findData()}
        />
      </ModalUp>
      <ModalUp
        isOpen={openModalEditUnit}
        onClose={() => setModalEditUnit(false)}
      >
        <EditUnityOfHealth
          onClose={() => setModalEditUnit(false)}
          findData={() => findData()}
          unit={selectedUnit}
        />
      </ModalUp>
      <ModalLeft
        isOpen={openModalProfileUnit}
        onClose={() => setOpenModalProfileUnit(false)}
      >
        <ProfileUnitHealth unit={selectedUnit} />
      </ModalLeft>
      <ToastContainer />
    </div>
  )
}

export default CabecalhosRodapes
