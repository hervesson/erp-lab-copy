import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'

const Financeiro = ({ formik, banks }) => {
  const handleAddLaboratorio = () => {
    formik.setFieldValue('financeiro', [
      ...formik.values.financeiro,
      {
        conta: null,
        valor: '',
      },
    ])
  }

  const getLabsOptions = (indexAtual) => {
    const selectedIds = formik.values.financeiro
      .map((item, index) => {
        if (index === indexAtual) return null // ignora o da própria linha
        return item.conta?.id || null
      })
      .filter(Boolean) // remove null/undefined

    // retorna só labs que ainda não foram escolhidos em outras linhas
    return banks.filter((lab) => !selectedIds.includes(lab.id))
  }

  return (
    <div className="flex flex-col gap-4">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Financeiro
      </span>
      {formik?.values?.financeiro?.map((item, index) => {
        return (
          <div className="flex gap-4" key={index.toString()}>
            <div className="flex w-full flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Selecione um banco
                <strong className="text-[#F23434]">*</strong>
              </label>

              <CustomSelect
                select={item.conta ?? null}
                setSelect={(e) =>
                  formik.setFieldValue(`financeiro[${index}].conta`, e)
                }
                options={getLabsOptions(index)}
                placeholder="Tipo de conta"
                className="border border-[#BBBBBB]"
              />
            </div>
          </div>
        )
      })}

      <button
        type="button"
        className={`${Outfit400.className} h-10 w-[150px] rounded-lg border border-[#0F9B7F] text-[#0F9B7F] uppercase`}
        onClick={handleAddLaboratorio}
        disabled={formik.values.financeiro.length === banks.length}
      >
        Novo banco
      </button>
    </div>
  )
}

export default Financeiro
