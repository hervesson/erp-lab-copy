import { SearchTuss } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { useEffect, useState } from 'react'
import OptiSelect from '../OptiSelect'

const CustomSearchTuss = ({ value = '', setValue }) => {
  const [tuss, setTuss] = useState([])
  const [selectedTuss, setSelectedTuss] = useState('')

  useEffect(() => {
    setSelectedTuss(value)
  }, [value])

  const handler = async (props = '') => {
    try {
      const result = await SearchTuss(props)

      if (result.success) {
        const cns = result?.data?.data?.map((item) => ({
          id: item.id,
          label: item.termo,
        }))
        setTuss(cns)
      } else {
        console.log('Deu erro')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const debounceChangeUnits = useDebounce(handler, 800)

  const handleChangeSearchTerm = (e) => {
    setSelectedTuss(e)
    debounceChangeUnits(e)
  }

  return (
    <OptiSelect
      onChange={handleChangeSearchTerm}
      placeholder={'Digite o código TUSS'}
      options={tuss}
      inputValue={selectedTuss}
      setSelect={(e) => setValue(e)}
      className={
        'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
      }
    />
  )
}

export default CustomSearchTuss
