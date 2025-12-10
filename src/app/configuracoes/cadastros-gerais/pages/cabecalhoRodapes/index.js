'use client'
import CustomSelect from '@/components/CustomSelect'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import {
  CreateCabecalhoRodape,
  DeleteCabecalhoRodape,
  listAllUnits,
  ListCabecalhoRodape,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { getFlatErrors } from '@/utils'
import { useFormik } from 'formik'
import {
  AddSquare,
  CloseCircle,
  DocumentDownload,
  SearchStatus,
  Trash,
} from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaCabecalhosRodapes } from './components/schema'

import checkGreen from '../../../../../../public/assets/images/directions.png'

const CabecalhosRodapes = () => {
  const fileInputRef = useRef(null)
  const [units, setUnits] = useState([])

  const [cabecalhoRodape, setCabecalhoRodape] = useState([])
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const findData = async () => {
      try {
        const [unts, cabRodp] = await Promise.all([
          listAllUnits(1, '', 100000),
          ListCabecalhoRodape(),
        ])

        if (unts.success) {
          const valuesUnits = unts?.data?.data?.map((item) => {
            return {
              id: item.id,
              label: item.nomeUnidade,
            }
          })
          setUnits(valuesUnits)
        }
        if (cabRodp.success) {
          setCabecalhoRodape(cabRodp?.data?.data)
          setTotal(cabRodp?.data?.meta?.total)
        }
      } catch (error) {
        console.log('erro', error)
      }
    }
    findData()
  }, [])

  const formik = useFormik({
    validationSchema: validationSchemaCabecalhosRodapes,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      unidade: null,
      tipo: 'CABECALHO',
      imagem: null,
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await CreateCabecalhoRodape(
          values.imagem,
          values.unidade.id,
          values.tipo,
        )

        if (response.success) {
          findData(searchTerm, currentPage, 10)
          formik.resetForm()
        } else {
          response?.error?.erros?.forEach((element) => {
            toast.error(element, {
              position: 'top-right',
            })
          })
          toast.error(response.error.mensagem, {
            position: 'top-right',
          })
        }
      } catch {
        setSubmitting(false)
      }
    },
  })

  const handleValidateAndSubmit = async (e) => {
    e.preventDefault()

    const errors = await formik.validateForm()

    if (Object.keys(errors).length > 0) {
      const messages = getFlatErrors(errors)

      toast.error(
        <div>
          <p className="font-semibold">Corrija os campos obrigatórios:</p>
          <ul className="mt-2 list-disc pl-5">
            {messages.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </div>,
        {
          autoClose: 6000,
        },
      )

      return
    }

    // se não tiver erro, segue o fluxo normal do formik
    formik.handleSubmit()
  }

  const findData = async (term, pg, lim) => {
    try {
      const cabRodp = await ListCabecalhoRodape(term, pg, lim)

      if (cabRodp.success) {
        setCabecalhoRodape(cabRodp?.data?.data)
        setTotal(cabRodp?.data?.meta?.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const unts = await ListCabecalhoRodape(searchTerm, props, 10)

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
      const unts = await ListCabecalhoRodape(props, currentPage, 10)

      if (unts.success) {
        setUnits(unts.data.data)
        setTotal(unts.data.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Deletar vinculo
  const deleteCabecalhoRodape = async (item) => {
    const resp = await DeleteCabecalhoRodape(item.id)

    if (resp.success) {
      findData(searchTerm, currentPage, 10)
    } else {
      toast.error('Erro ao deletar Cabeçalho/Rodapé', {
        position: 'top-right',
      })
    }
  }

  const handleClick = () => {
    fileInputRef.current.click() // abre o seletor de arquivos
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      formik.setFieldValue('imagem', file)
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <div className="flex h-[76px] items-center justify-between rounded-2xl bg-[#F9F9F9]">
        <form
          className="flex flex-1 gap-3 rounded-lg px-4"
          onSubmit={handleValidateAndSubmit}
        >
          <div className="flex flex-1 items-center justify-around gap-4">
            <CustomSelect
              select={formik.values.unidade}
              setSelect={(e) => formik.setFieldValue('unidade', e)}
              options={units}
              placeholder={'Selecione uma unidade'}
              className={
                'flex-1 border border-[#BBBBBB] bg-white hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
            <div className="flex h-11 w-[209px] items-center justify-evenly rounded-[50px] bg-white">
              <button
                type="button"
                className={`${Outfit400.className} h-10 w-[109px] rounded-[50px] text-[16px] ${formik.values.tipo === 'CABECALHO' ? 'bg-[#057B64] text-white' : 'bg-[#F9F9F9] text-[#494949]'}`}
                onClick={() => formik.setFieldValue('tipo', 'CABECALHO')}
              >
                Cabeçalho
              </button>

              <button
                type="button"
                className={`${Outfit400.className} h-10 w-[88px] rounded-[50px] text-[16px] ${formik.values.tipo === 'RODAPE' ? 'bg-[#057B64] text-white' : 'bg-[#F9F9F9] text-[#494949]'}`}
                onClick={() => formik.setFieldValue('tipo', 'RODAPE')}
              >
                Rodapé
              </button>
            </div>
            <button type="button" className="flex flex-1 gap-4">
              {formik.values.imagem ? (
                <div className="flex h-11 flex-1 items-center justify-evenly rounded-lg border border-[#A9A9A9] bg-[#FFF]">
                  <span
                    className={`${Outfit300.className} text-[12px] text-[#222]`}
                  >
                    {formik.values.imagem.name}
                  </span>
                  <CloseCircle
                    size="22"
                    color="#F23434"
                    onClick={() => formik.setFieldValue('imagem', null)}
                  />
                </div>
              ) : (
                <div
                  className="flex h-11 flex-1 items-center justify-center gap-3 rounded-lg border border-[#A9A9A9] bg-[#FFF]"
                  onClick={() => handleClick()}
                >
                  <DocumentDownload size="28" color="#737373" />
                  <span
                    className={`${Outfit300.className} text-[#222] uppercase`}
                  >
                    Importar imagem
                  </span>
                </div>
              )}
            </button>
            <button
              type="submit"
              className={`flex h-11 w-[154px] items-center justify-center gap-2 rounded-lg bg-[#0F9B7F]`}
            >
              <AddSquare size="32" color="#ffffff" variant="Bulk" />
              <span className={`${Outfit400.className} text-[16px] text-white`}>
                ADICIONAR
              </span>
            </button>
          </div>
        </form>
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
              className={`text-[14px] ${Outfit400.className} px-2 text-start text-[#3E3E3E]`}
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
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
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
          {cabecalhoRodape?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} px-2 text-start text-[#383838]`}
                >
                  {item?.unidade?.nomeUnidade}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.tipo}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.nomeArquivo}
                </td>
                <td>
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => deleteCabecalhoRodape(item)}
                  >
                    <Trash color="#737373" size={28} />
                  </div>
                </td>
                <td>
                  <div className="flex h-full items-center justify-center">
                    <DocumentDownload size="28" color="#737373" />
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
              {cabecalhoRodape.length > 10 ? 10 : cabecalhoRodape.length}
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
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".png,.jpeg,.jpg" // opcional: tipos permitidos
      />
      <ToastContainer />
    </div>
  )
}

export default CabecalhosRodapes
