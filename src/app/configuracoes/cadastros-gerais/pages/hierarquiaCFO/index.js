'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { listAllUnits } from '@/helpers'
import { Bank, Book, CloseCircle, Edit2, TickCircle } from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { IsActive } from '../../../../../components/IsActive'
import EditUnityOfHealth from './modal-content/editUnitOfHealth'
import ProfileUnitHealth from './modal-content/profileUnitOfHealth'
import RegisterUnitOfHealth from './modal-content/registerUnitOfHealth'

import checkGreen from '../../../../../../public/assets/images/directions.png'

const HierarquiaCFO = ({ openModalRegisteUnits, setModalRegisterUnits }) => {
  const [units, setUnits] = useState([])
  const [openModalProfileUnit, setOpenModalProfileUnit] = useState(false)
  const [openModalEditUnit, setModalEditUnit] = useState(false)
  const [selectedUnit, setSelectedUnit] = useState({})
  const [total, setTotal] = useState(0)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm] = useState('')

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

  return (
    <div className="flex flex-1 flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <Bank size="28" color="#A1A1A1" variant="TwoTone" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Hierarquia CFO
              </span>
            </div>
          </div>
        </div>
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
                Descrição da hierarquia
              </div>
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Cadastrado em
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Ultima edição
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
              Ativar
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
                      setOpenModalProfileUnit(true)
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

export default HierarquiaCFO
