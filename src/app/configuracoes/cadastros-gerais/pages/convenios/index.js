'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalUp from '@/components/ModalUp'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  ArrowLeft2,
  ArrowRight2,
  Book,
  Briefcase,
  Edit2,
  More,
  SearchStatus,
  TickCircle,
} from 'iconsax-reactjs'
import { useState } from 'react'
import { IsActive } from '../../../../../components/IsActive'

// Components
// import RegisterExams from './modal-content/registerExam'

const Convenios = ({
  openModalRegisterExams,
  setModalRegisterExams,
  setPage,
}) => {
  const [exams] = useState([])
  const [setSelectedUnit] = useState({})
  const [tab] = useState('convenios')

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  return (
    <div className="flex flex-1 flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <Briefcase size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                160
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Convênios
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                160
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Laboratórios de apoio
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                160
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Telemedicina
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                160
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Fornecedores
              </span>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-[8px] px-[8px]">
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                160
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Prestadores de seviços
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <CustomSelect
          select={{ id: 1, label: 'Status: Todos' }}
          setSelect={() => null}
          options={[
            { id: 1, label: 'Status: Todos' },
            { id: 2, label: '2' },
          ]}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <div
          className={`flex h-[40px] flex-2 items-center rounded-[8px] px-2 ${
            isFocusedSearch
              ? 'border-[1px] border-[#0F9B7F]'
              : 'border border-[#BBBBBB]'
          }`}
        >
          <input
            placeholder="Pesquisar"
            className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] outline-0`}
            onFocus={() => setIsFocusedSearch(true)}
            onBlur={() => setIsFocusedSearch(false)}
          />
          <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
        </div>
      </div>

      <div>
        <div className="flex h-[64px] items-end gap-8 bg-[#F9F9F9] px-[48px]">
          <button
            type="button"
            onClick={() => setPage('convenios')}
            className={`${Outfit400.className} ${tab === 'convenios' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            convênios
          </button>
          <button
            type="button"
            onClick={() => {
              setPage('laboratorioDeApoio')
            }}
            className={`${Outfit400.className} ${tab === 'laboratorioDeApoio' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Laboratórios de apoio
          </button>
          <button
            type="button"
            onClick={() => setPage('telemedicina')}
            className={`${Outfit400.className} ${tab === 'telemedicina' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Telemedicina
          </button>
          <button
            type="button"
            onClick={() => setPage('fornecedores')}
            className={`${Outfit400.className} ${tab === 'fornecedores' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Fornecedores
          </button>
          <button
            type="button"
            onClick={() => setPage('prestadoresDeServico')}
            className={`${Outfit400.className} ${tab === 'prestadoresDeServico' && 'border-b-2 border-[#0F9B7F] bg-white'} h-[56px] rounded-tl-[8px] rounded-tr-[8px] px-2 text-[16px] text-[#222] uppercase`}
          >
            Prestadores de serviço
          </button>
        </div>
        <table className="w-full">
          <thead className="sticky top-0">
            <tr className="h-[48px] bg-[#D4D4D4]">
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Codigo interno
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Nome fantasia
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                CNPJ
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                E-mail comercial
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Cidade/Estado
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
              >
                Ativo
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Editar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Visualizar
              </th>
              <th
                className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
              >
                Opçoes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 overflow-y-hidden">
            {exams?.map((item, index) => {
              return (
                <tr
                  className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]"
                  key={index.toString()}
                >
                  <td
                    className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                  >
                    {item.codigoInterno}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                  >
                    {item.nomeUnidade}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    {item.cnpj}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    {item.nomeResponsavel}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    {item.cidade}
                  </td>
                  <td
                    className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <IsActive active={item.ativo} />
                    </div>
                  </td>
                  <td>
                    <div className="flex h-full items-center justify-center">
                      <TickCircle size="28" color="#2CB04B" variant="Bulk" />
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
                        // setOpenModalProfileuUnit(true)
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
      </div>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span
              className={`${Outfit400.className} pl-2 text-[16px] text-[#494949]`}
            >
              01
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px] text-[#494949]`}>
            de 01 registros
          </span>
        </div>

        <div className="flex items-center">
          <ArrowLeft2 size="28" color="#D9D9D9" />
          <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#E0FFF9]">
            <span className={`${Outfit400.className} flex px-4 text-[#0F9B7F]`}>
              01
            </span>
          </div>
          <ArrowRight2 size="28" color="#D9D9D9" />
        </div>
      </div>
      <ModalUp
        isOpen={openModalRegisterExams}
        onClose={() => setModalRegisterExams(false)}
      >
        {/* <RegisterExams onClose={() => setModalRegisterExams(false)} /> */}
      </ModalUp>
      {/* <ModalLeft
        isOpen={openModalProfileuUnit}
        onClose={() => setOpenModalProfileuUnit(false)}
      >
        <ProfileUnitHealth unit={selectedUnit} />
      </ModalLeft> */}
    </div>
  )
}

export default Convenios
