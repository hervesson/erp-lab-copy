'use client'
import CustomSelect from '@/components/CustomSelect'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import {
  CreateSalasSetores,
  DeleteSalasSetores,
  listAllFields,
  listAllUnits,
  ListSalasSetores,
  ToggleStatusSalas,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { getFlatErrors } from '@/utils'
import { useFormik } from 'formik'
import { AddSquare, SearchStatus, Trash } from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaSalasSetores } from './components/schema'

import checkGreen from '../../../../../../public/assets/images/directions.png'
import { Status } from './components/status'

const SalasSetores = () => {
  const [units, setUnits] = useState([])

  const [salasSetores, setSalasSetores] = useState([])
  const [total, setTotal] = useState(0)

  const [fields, setFields] = useState([])

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const [codigoInterno, setCodigoInterno] = useState(() => gerarCodigoInterno())

  useEffect(() => {
    const findData = async () => {
      try {
        const [fields, unts, sls] = await Promise.all([
          listAllFields(),
          listAllUnits(1, '', 100000),
          ListSalasSetores('', 1, 10),
        ])

        const valuesUnits = unts.data.data.map((item) => {
          return {
            id: item.id,
            label: item.nomeUnidade,
          }
        })

        if (unts.success) {
          setUnits(valuesUnits)
        }
        if (sls.success) {
          setSalasSetores(sls.data.data)
          setTotal(sls.data.meta.total)
        }
        if (fields.success) {
          setFields(fields?.data?.data)
        }
      } catch (error) {
        console.log('erro', error)
      }
    }
    findData()
  }, [])

  const formik = useFormik({
    validationSchema: validationSchemaSalasSetores,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      unidade: '',
      setor: '',
      nomeDaSala: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload = {
          codigoInterno,
          unidadeId: values.unidade.id,
          setorId: values.setor.id,
          nome: values.nomeDaSala,
        }
        const response = await CreateSalasSetores(payload)

        if (response.success) {
          findData(searchTerm, currentPage, 10)
          regenerarCodigoInterno()
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
      } finally {
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

  function gerarCodigoInterno() {
    const prefixo = 'SALA'
    const numero = Math.floor(Math.random() * 1000) // 0 até 999
    const numeroFormatado = String(numero).padStart(3, '0') // sempre 3 dígitos

    return `${prefixo}${numeroFormatado}`
  }

  const regenerarCodigoInterno = () => {
    const novoCodigo = gerarCodigoInterno()
    setCodigoInterno(novoCodigo)
    // se tiver Formik, mantém sincronizado:
    formik.setFieldValue('codigo', novoCodigo)
  }

  const findData = async (trm = '', page = 1, limit = 10) => {
    try {
      const sls = await ListSalasSetores(trm, page, limit)

      if (sls.success) {
        setSalasSetores(sls.data.data)
        setTotal(sls.data.meta.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const sls = await ListSalasSetores(currentPage, props, 10)

      if (sls.success) {
        setSalasSetores(sls.data.data)
        setTotal(sls.data.meta.total)
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
      const sls = await ListSalasSetores(props, 1, 10)

      if (sls.success) {
        setSalasSetores(sls.data.data)
        setTotal(sls.data.meta.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  const deleteSalas = async (id) => {
    const resp = await DeleteSalasSetores(id)
    if (resp.success) {
      findData(searchTerm, currentPage, 10)
    }
  }

  const handleChangeBox = async (id) => {
    const resp = await ToggleStatusSalas(id)
    if (resp.success) {
      findData(searchTerm, currentPage, 10)
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
                'border border-[#BBBBBB] bg-white hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
            <CustomSelect
              select={formik.values.setor}
              setSelect={(e) => formik.setFieldValue('setor', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'setor')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione um setor'}
              className={
                'border border-[#BBBBBB] bg-white hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
            <input
              {...formik.getFieldProps('nomeDaSala')}
              type="text"
              id="nomeDaSala"
              name="nomeDaSala"
              placeholder="Digite o nome da sala"
              className={`h-10 rounded-lg ${Outfit400.className} border border-[#BBBBBB] bg-[#FFF] px-2 text-[16px] text-[#222] outline-0`}
            />
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
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Codigo interno
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              <div className="flex gap-2">
                <Image src={checkGreen} alt="bgfooter" />
                Unidades
              </div>
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Setor
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Nome da sala
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
              Inativar
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {salasSetores?.map((item, index) => {
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
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.unidade?.nomeUnidade}
                </td>

                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.setor?.textoAlternativa}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.nome}
                </td>
                <td>
                  <Status active={item.ativo} />
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => deleteSalas(item.id)}
                  >
                    <Trash size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <Switch
                    checked={!item.ativo}
                    onChange={() => handleChangeBox(item.id)}
                    onColor="#0F9B7F"
                    onHandleColor="#FFF"
                    handleDiameter={20}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={18}
                    width={40}
                    className="react-switch"
                    id="material-switch"
                  />
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
              {salasSetores.length > 10 ? 10 : salasSetores.length}
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
      <ToastContainer />
    </div>
  )
}

export default SalasSetores
