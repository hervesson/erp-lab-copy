'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { listAllUnits } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import {
  Book,
  CloseCircle,
  Edit2,
  Gift,
  SearchStatus,
  TickCircle,
} from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { IsActive } from '../../../../../components/IsActive'

import EditUnityOfHealth from './modal-content/editKits'
import ProfileKits from './modal-content/profileKits'
import RegisterKits from './modal-content/registerKits'

import checkGreen from '../../../../../../public/assets/images/directions.png'

const Kits = ({ openModalRegisterKits, setModalRegisterKits }) => {
  const [units, setUnits] = useState([])
  const [openModalProfileKits, setOpenModalProfilekits] = useState(false)
  const [openModalEditUnit, setModalEditUnit] = useState(false)
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
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex h-[84px] items-center justify-between rounded-2xl bg-[#F9F9F9]">
        <div className="mx-2.5 flex h-16 w-full items-center rounded-lg bg-white">
          <div className="flex gap-3 rounded-lg px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#F9F9F9]">
              <Gift size="28" color="#A1A1A1" variant="TwoTone" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Kits
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex h-10 items-center rounded-lg px-2 ${
          isFocusedSearch
            ? 'border border-[#0F9B7F]'
            : 'border border-[#BBBBBB]'
        }`}
      >
        <input
          placeholder="Pesquisar"
          onChange={handleChangeUnit}
          className={`h-full w-full rounded-lg ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
          onFocus={() => setIsFocusedSearch(true)}
          onBlur={() => setIsFocusedSearch(false)}
        />
        <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-12 bg-[#D4D4D4]">
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
                Nome do kit
              </div>
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Descrição
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Status
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Excluir
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Editar
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Vizualizar
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {units?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item?.codigoInterno}
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-[#F7F7F2]" />
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
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setModalEditUnit(true)
                      setSelectedUnit(item)
                    }}
                  >
                    <Edit2 size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setOpenModalProfilekits(true)
                      setSelectedUnit(item)
                    }}
                  >
                    <Book size="28" color="#737373" />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex h-10 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-[61px] items-center rounded-lg bg-[#F9F9F9]">
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
        isOpen={openModalRegisterKits}
        onClose={() => setModalRegisterKits(false)}
      >
        <RegisterKits
          onClose={() => setModalRegisterKits(false)}
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
        isOpen={openModalProfileKits}
        onClose={() => setOpenModalProfilekits(false)}
      >
        <ProfileKits unit={selectedUnit} />
      </ModalLeft>
      <ToastContainer />
    </div>
  )
}

export default Kits
