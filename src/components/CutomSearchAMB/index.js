import { SearchAMB } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'
import OptiSelect from '../OptiSelect'

const CustomSearchAMB = ({ value = '', setValue }) => {
  const [amb, setAmb] = useState([])
  const [selectedAmb, setSelectedAmb] = useState('')

  useEffect(() => {
    setSelectedAmb(value)
  }, [value])

  const handler = async (props = '') => {
    try {
      const result = await SearchAMB(props)

      if (result.success) {
        const cns = result?.data?.data?.map((item) => ({
          id: item.id,
          label: item.descricao,
        }))
        setAmb(cns)
      } else {
        console.log('Deu erro')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const debounceChangeUnits = useDebounce(handler, 800)

  const handleChangeSearchTerm = (e) => {
    setSelectedAmb(e)
    debounceChangeUnits(e)
  }

  return (
    <OptiSelect
      onChange={handleChangeSearchTerm}
      placeholder={'Digite o código AMB'}
      options={amb}
      inputValue={selectedAmb}
      setSelect={(e) => setValue(e)}
      className={
        'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
      }
    />
  )
}

export default CustomSearchAMB
