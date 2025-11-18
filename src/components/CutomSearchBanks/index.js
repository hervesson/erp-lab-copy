import { SearchAccount } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { useState } from 'react'
import OptiSelect from '../OptiSelect'

const CustomSearchBanks = ({ value, setValue }) => {
  const [banks, setBanks] = useState([])
  const [selectedBank, setSelectedBank] = useState(value || '')

  const handler = async (props = '') => {
    try {
      const result = await SearchAccount(props)

      if (result.success) {
        const banks = result.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.nome}`,
          }
        })
        setBanks(banks)
      } else {
        console.log('Deu erro')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const debounceChangeUnits = useDebounce(handler, 800)

  const handleChangeSearchTerm = (e) => {
    setSelectedBank(e)
    debounceChangeUnits(e)
  }

  return (
    <OptiSelect
      onChange={handleChangeSearchTerm}
      placeholder={'Digite o nome do banco'}
      options={banks}
      inputValue={selectedBank}
      setSelect={(e) => setValue(e)}
      className={'border border-[#BBBBBB]'}
    />
  )
}

export default CustomSearchBanks
