import { SearchCNAE } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { formatCNAE } from '@/utils'
import { useEffect, useState } from 'react'
import OptiSelect from '../OptiSelect'

const CustomSearchCnaes = ({ value = '', setValue }) => {
  const [cnaes, setCnaes] = useState([])
  const [selectedCnae, setSelectedCnae] = useState('')

  useEffect(() => {
    setSelectedCnae(value)
  }, [value])

  const handler = async (props = '') => {
    try {
      const result = await SearchCNAE(props)

      if (result.success) {
        const cns = result?.data?.data?.map((item) => {
          return {
            id: item.id,
            label: `${formatCNAE(item.codigo)} - ${item.descricao}`,
          }
        })
        setCnaes(cns)
      } else {
        console.log('Deu erro')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const debounceChangeUnits = useDebounce(handler, 800)

  const handleChangeSearchTerm = (e) => {
    setSelectedCnae(e)
    debounceChangeUnits(e)
  }

  return (
    <OptiSelect
      onChange={handleChangeSearchTerm}
      placeholder={'Digite a descrição do cnae'}
      options={cnaes}
      inputValue={selectedCnae}
      setSelect={(e) => setValue(e)}
      className={'border border-[#BBBBBB]'}
    />
  )
}

export default CustomSearchCnaes
