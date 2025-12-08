'use client'
import CustomSelect from '@/components/CustomSelect'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import {
  CreateEquipaments,
  listAllUnits,
  ListEquipaments,
  ListSalasSetores,
} from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { getFlatErrors } from '@/utils'
import { useFormik } from 'formik'
import { AddSquare, Bill, SearchStatus, Trash } from 'iconsax-reactjs'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import checkGreen from '../../../../../../public/assets/images/directions.png'
import { validationSchemaSalasSetores } from './components/schema'

const EquipamentosImobilizados = () => {
  const [equipaments, setEquipaments] = useState([])
  const [units, setUnits] = useState([])

  const [salasSetores, setSalasSetores] = useState([])
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const [codigoInterno, setCodigoInterno] = useState(() => gerarCodigoInterno())

  useEffect(() => {
    const findData = async () => {
      try {
        const [unts, sls, equipaments] = await Promise.all([
          listAllUnits(1, '', 100000),
          ListSalasSetores('', 1, 100000),
          ListEquipaments('', 1, 10),
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
        if (sls.success) {
          const valuesSalas = sls?.data?.data?.map((item) => {
            return {
              id: item.id,
              label: item.nome,
            }
          })
          setSalasSetores(valuesSalas)
        }
        if (equipaments.success) {
          setEquipaments(equipaments.data.data)
          setTotal(equipaments.data.meta.total)
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
      sala: '',
      nomeDoEquipamento: '',
      numeracao: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const payload = {
          codigoInterno,
          unidadeId: values.unidade.id,
          salaId: values.sala.id,
          nome: values.nomeDoEquipamento,
          numeracao: values.numeracao,
        }
        const response = await CreateEquipaments(payload)

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
    const prefixo = 'EQ'
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

  const findData = async (term, page, limit) => {
    try {
      const equipaments = await ListEquipaments(term, page, limit)

      if (equipaments.success) {
        setEquipaments(equipaments.data.data)
        setTotal(equipaments.data.meta.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const equipaments = await ListEquipaments(searchTerm, props, 10)

      if (equipaments.success) {
        setEquipaments(equipaments.data.data)
        setTotal(equipaments.data.meta.total)
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
      const equipaments = await ListEquipaments(props, currentPage, 10)

      if (equipaments.success) {
        setEquipaments(equipaments.data.data)
        setTotal(equipaments.data.meta.total)
      }
    } catch (error) {
      console.log('erro', error)
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

            <input
              {...formik.getFieldProps('nomeDoEquipamento')}
              type="text"
              id="nomeDoEquipamento"
              name="nomeDoEquipamento"
              placeholder="Digite o nome do equipamento"
              className={`h-10 rounded-lg ${Outfit400.className} border border-[#BBBBBB] bg-[#FFF] px-2 text-[16px] text-[#222] outline-0`}
            />

            <input
              {...formik.getFieldProps('numeracao')}
              type="text"
              id="numeracao"
              name="numeracao"
              placeholder="Numeração"
              className={`h-10 rounded-lg ${Outfit400.className} border border-[#BBBBBB] bg-[#FFF] px-2 text-[16px] text-[#222] outline-0`}
            />

            <CustomSelect
              select={formik.values.sala}
              setSelect={(e) => formik.setFieldValue('sala', e)}
              options={salasSetores}
              placeholder={'Localização'}
              className={
                'flex-1 border border-[#BBBBBB] bg-white hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />

            <button
              type="botton"
              // onClick={() => setOpenModalCategorie(true)}
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
                Unidade
              </div>
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Nome do equipamento
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Numeração
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Localização
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Excluir
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-center text-[#3E3E3E]`}
            >
              Gerar etiqueta
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {equipaments?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item.codigoInterno}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.unidade.nomeUnidade}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.nome}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.numeracao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item.sala.nome}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    // onClick={() => deleteSalas(item.id)}
                  >
                    <Trash size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    // onClick={() => deleteSalas(item.id)}
                  >
                    <Bill size="28" color="#737373" />
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
              {equipaments.length > 10 ? 10 : equipaments.length}
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

export default EquipamentosImobilizados
