import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { getIn } from 'formik'

export const TypeFields = ({ item, formik }) => {
  const fieldName = `camposIntegracao.${item.chave}`
  const value = getIn(formik.values, fieldName) ?? ''

  const baseClass = `${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`

  const handleChange = (e) => {
    formik.setFieldValue(fieldName, e.target.value)
  }

  const handleBlur = () => {
    formik.setFieldTouched(fieldName, true)
  }

  // SELECT
  if (item.tipo === 'select') {
    return (
      <CustomSelect
        select={item.opcoes.find((element) => element.valor === value)}
        setSelect={(opt) => formik.setFieldValue(fieldName, opt.valor)}
        options={item.opcoes || []}
        placeholder={`Selecione ${item.label}`}
        className="border border-[#BBBBBB]"
      />
    )
  }

  // INPUT TYPE BY TIPO
  let inputType = 'text'
  if (item.tipo === 'password') inputType = 'password'
  if (item.tipo === 'url') inputType = 'url'
  if (item.tipo === 'number') inputType = 'number'

  return (
    <input
      id={item.chave}
      name={fieldName}
      type={inputType}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      className={baseClass}
      placeholder={`Digite o ${item.label}`}
      min={item.tipo === 'number' ? 5 : undefined}
      max={item.tipo === 'number' ? 300 : undefined}
    />
  )
}
