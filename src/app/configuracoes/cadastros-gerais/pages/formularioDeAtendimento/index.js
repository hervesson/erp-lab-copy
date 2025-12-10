'use client'
import CustomSelect from '@/components/CustomSelect'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import {
  CreateServicesForms,
  DeleteFormularioDeAtendimento,
  listAllUnits,
  ListFormularioDeAtendimento,
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
import { useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { validationSchemaForms } from './components/schema'

const FormularioDeAtendimento = () => {
  const fileInputRef = useRef(null)
  const [units, setUnits] = useState([])
  const [formularioAtendimento, setFormularioAtendimento] = useState([])
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const findData = async () => {
      try {
        const [unts, formsAtd] = await Promise.all([
          listAllUnits(1, '', 100000),
          ListFormularioDeAtendimento(),
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
        if (formsAtd.success) {
          setFormularioAtendimento(formsAtd.data.data)
          setTotal(formsAtd.data.meta.total)
        }
      } catch (error) {
        console.log('erro', error)
      }
    }
    findData()
  }, [])

  const formik = useFormik({
    validationSchema: validationSchemaForms,
    validateOnBlur: false,
    validateOnChange: true,
    initialValues: {
      file: null,
      unidade: null,
      observacao: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const response = await CreateServicesForms(
          values.file,
          values.unidade.id,
          values.observacao,
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
      const formsAtd = await ListFormularioDeAtendimento(term, pg, lim)

      if (formsAtd.success) {
        setFormularioAtendimento(formsAtd.data.data)
        setTotal(formsAtd.data.meta.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const formsAtd = await ListFormularioDeAtendimento(searchTerm, props, 10)

      if (formsAtd.success) {
        setFormularioAtendimento(formsAtd.data.data)
        setTotal(formsAtd.data.meta.total)
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
      const formsAtd = await ListFormularioDeAtendimento(props, currentPage, 10)

      if (formsAtd.success) {
        setFormularioAtendimento(formsAtd.data.data)
        setTotal(formsAtd.data.meta.total)
      }
    } catch (error) {
      console.log('erro', error)
    }
  }

  // Deletar vinculo
  const deleteForms = async (item) => {
    const resp = await DeleteFormularioDeAtendimento(item.id)

    if (resp.success) {
      findData(searchTerm, currentPage, 10)
    } else {
      toast.error('Erro ao deletar formulário de atendimento', {
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
      formik.setFieldValue('file', file)
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
            <button type="button" className="flex flex-1 gap-4">
              {formik.values.file ? (
                <div className="flex h-11 flex-1 items-center justify-evenly rounded-lg border border-[#A9A9A9] bg-[#FFF]">
                  <span
                    className={`${Outfit300.className} text-[12px] text-[#222]`}
                  >
                    {formik.values.file.name}
                  </span>
                  <CloseCircle
                    size="22"
                    color="#F23434"
                    onClick={() => formik.setFieldValue('file', null)}
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
                    Importar Formulário
                  </span>
                </div>
              )}
            </button>
            <input
              id="observacao"
              name="observacao"
              value={formik.values.observacao ?? ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${Outfit400.className} ring-none flex h-11 flex-1 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite uma observação"
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
              Unidade
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Documento
            </th>
            <th
              className={`text-[14px] ${Outfit400.className} text-start text-[#3E3E3E]`}
            >
              Observação
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
          {formularioAtendimento?.map((item, index) => {
            return (
              <tr
                className="h-16 border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item?.unidade?.nomeUnidade}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.nomeDocumento}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item?.observacao}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => deleteForms(item)}
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
              {formularioAtendimento.length > 10
                ? 10
                : formularioAtendimento.length}
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
        accept=".pdf" // opcional: tipos permitidos
      />
      <ToastContainer />
    </div>
  )
}

export default FormularioDeAtendimento
