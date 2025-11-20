import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { SearchCep, SearchCities, SearchStates } from '@/helpers'
import { formatCep, safe } from '@/utils'
import { useEffect, useState } from 'react'

const Endereco = ({ formik }) => {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState({})

  useEffect(() => {
    const findData = async () => {
      const states = await SearchCities(formik?.values?.estado?.label)
      const stt = states.data.map((item) => {
        return {
          id: item.id,
          label: item.nome,
          item,
        }
      })
      setCities(stt)
    }

    findData()
  }, [formik.values.estado])

  useEffect(() => {
    const findData = async () => {
      const states = await SearchStates()
      const stt = states.data.map((item) => {
        return {
          id: item.id,
          label: item.nome,
          item,
        }
      })
      setStates(stt)
    }

    findData()
  }, [])

  useEffect(() => {
    const findData = async () => {
      const states = await SearchStates()
      const stt = states.data.map((item) => {
        return {
          id: item.id,
          label: item.nome,
          item,
        }
      })
      setStates(stt)
    }

    findData()
  }, [])
  const searchCEP = async () => {
    if (formik.values.cep.length === 9) {
      const result = await SearchCep(formik.values.cep)
      formik.setFieldValue('rua', result?.data?.rua)
      formik.setFieldValue('bairro', result?.data?.bairro)
      formik.setFieldValue('cidade', {
        id: '',
        label: safe(result.data.cidade),
      })
      formik.setFieldValue('estado', {
        id: '',
        label: safe(result.data.estado),
      })
    }
  }

  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Endereço
      </span>

      <div className="flex h-[144px] gap-[16px]">
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                CEP<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                value={formatCep(formik.values.cep)}
                onChange={formik.handleChange}
                type="text"
                id="cep"
                name="cep"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o cep"
                onBlur={() => searchCEP()}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Rua
              </label>
              <input
                {...formik.getFieldProps('rua')}
                type="text"
                id="rua"
                name="rua"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a rua"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Número<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('numero')}
                type="text"
                id="numero"
                name="numero"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o número"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Bairro
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('bairro')}
                type="text"
                id="bairro"
                name="bairro"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o bairro"
              />
            </div>
          </div>
          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Complemento
              </label>
              <input
                {...formik.getFieldProps('complemento')}
                type="text"
                id="complemento"
                name="complemento"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite um complemento"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Estado<strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.estado}
                setSelect={(option) => formik.setFieldValue('estado', option)}
                options={states}
                placeholder="Digite o estado"
                className="border border-[#BBBBBB]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Cidade<strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.cidade}
                setSelect={(option) => formik.setFieldValue('cidade', option)}
                options={cities}
                placeholder="Digite a cidade"
                className="border border-[#BBBBBB]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Endereco
