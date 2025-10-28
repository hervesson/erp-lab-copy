'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { listAllUnits } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import {
  Book,
  Buildings,
  CloseCircle,
  Edit2,
  More,
  SearchStatus,
  TickCircle,
} from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IsActive } from '../../../../../components/IsActive'
import ProfileUnitHealth from './modal-content/profileUnitOfHealth'
import RegisterUnitOfHealth from './modal-content/registerUnitOfHealth'

import checkGreen from '../../../../../../public/assets/images/directions.png'

const UnitOfHealth = ({ openModalRegisteUnits, setModalRegisterUnits }) => {
  const [units, setUnits] = useState([])
  const [openModalProfileuUnit, setOpenModalProfileuUnit] = useState(false)
  const [selectedUnit, setSelectedUnit] = useState({})
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
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

    findData()
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
    <div className="flex w-full flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <Buildings size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Unidades
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex h-[40px] items-center rounded-[8px] px-2 ${
          isFocusedSearch
            ? 'border-[1px] border-[#0F9B7F]'
            : 'border border-[#BBBBBB]'
        }`}
      >
        <input
          placeholder="Pesquisar"
          onChange={handleChangeUnit}
          className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] outline-0`}
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
              Codigo interno
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              <div className="flex gap-2">
                <Image src={checkGreen} alt="bgfooter" />
                Nome da unidade
              </div>
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              CNPJ
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Responsável
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Cidade
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Ativo
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Certificado
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Editar
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Visualizar
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Opçoes
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
                >
                  {item?.codigoInterno}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-[40px] w-[40px] rounded-[8px] bg-[#F7F7F2]" />
                    <span
                      className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                    >
                      {item?.nomeUnidade}
                    </span>
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.cnpj}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.nomeResponsavel}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.cidade}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <IsActive active={item?.ativo} />
                  </div>
                </td>
                <td>
                  <div className="flex h-full items-center justify-center">
                    {item?.certificadoDigitalVinculado ? (
                      <TickCircle size="28" color="#2CB04B" variant="Bulk" />
                    ) : (
                      <CloseCircle size="28" color="#F23434" variant="Bulk" />
                    )}
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Edit2 size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setOpenModalProfileuUnit(true)
                      setSelectedUnit(item)
                    }}
                  >
                    <Book size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <More size="28" color="#737373" />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span className={`${Outfit400.className} pl-2 text-[16px]`}>
              {units.length > 10 ? 10 : units.length}
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px]`}>
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
      <ModalLeft
        isOpen={openModalProfileuUnit}
        onClose={() => setOpenModalProfileuUnit(false)}
      >
        <ProfileUnitHealth unit={selectedUnit} />
      </ModalLeft>
    </div>
  )
}

export default UnitOfHealth
