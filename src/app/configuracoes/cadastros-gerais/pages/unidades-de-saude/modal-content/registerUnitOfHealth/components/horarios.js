import { Outfit300, Outfit400 } from '@/fonts'
import { Clock, InfoCircle, Trash } from 'iconsax-reactjs'

const Horarios = ({ formik }) => {
  const handleChange = (index, field, value, isArrayToggle = false) => {
    // setOpeningHours((prev) =>
    //   prev.map((item, i) => {
    //     if (isArrayToggle && field === 'days') {
    //       const exists = item[field].includes(value)

    //       // Se for o item selecionado
    //       if (i === index) {
    //         return {
    //           ...item,
    //           [field]: exists
    //             ? item[field].filter((v) => v !== value) // remove se já existe
    //             : [...item[field], value], // adiciona se não existe
    //         }
    //       }

    //       // Para os outros itens, removemos o dia caso exista
    //       return {
    //         ...item,
    //         [field]: item[field].filter((v) => v !== value),
    //       }
    //     }

    //     // Se for input "normal"
    //     if (i === index) {
    //       return { ...item, [field]: value }
    //     }

    //     return item
    //   }),
    // )

    formik.setFieldValue(
      'horarios',
      formik.values.horarios.map((item, i) => {
        if (isArrayToggle && field === 'days') {
          const exists = item[field].includes(value)

          // Se for o item selecionado
          if (i === index) {
            return {
              ...item,
              [field]: exists
                ? item[field].filter((v) => v !== value) // remove se já existe
                : [...item[field], value], // adiciona se não existe
            }
          }

          // Para os outros itens, removemos o dia caso exista
          return {
            ...item,
            [field]: item[field].filter((v) => v !== value),
          }
        }

        // Se for input "normal"
        if (i === index) {
          return { ...item, [field]: value }
        }

        return item
      }),
    )
  }

  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Horários de atendimento
      </span>

      {formik.values.horarios?.map((item, index) => {
        return (
          <div className="flex flex-col gap-[16px]" key={index.toString()}>
            <div className="flex gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Dias de atendimento
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <div className="w-full">
                  <div className="flex gap-2">
                    <span
                      onClick={() =>
                        handleChange(index, 'days', 'SEGUNDA', true)
                      }
                      className={`${
                        formik.values.horarios[index].days.includes('SEGUNDA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      SEG
                    </span>
                    <span
                      onClick={() => handleChange(index, 'days', 'TERCA', true)}
                      className={`${
                        formik.values.horarios[index].days.includes('TERCA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      TER
                    </span>
                    <span
                      onClick={() =>
                        handleChange(index, 'days', 'QUARTA', true)
                      }
                      className={`${
                        formik.values.horarios[index].days.includes('QUARTA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      QUA
                    </span>
                    <span
                      onClick={() =>
                        handleChange(index, 'days', 'QUINTA', true)
                      }
                      className={`${
                        formik.values.horarios[index].days.includes('QUINTA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      QUI
                    </span>
                    <span
                      onClick={() => handleChange(index, 'days', 'SEXTA', true)}
                      className={`${
                        formik.values.horarios[index].days.includes('SEXTA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      SEX
                    </span>
                    <span
                      onClick={() =>
                        handleChange(index, 'days', 'SABADO', true)
                      }
                      className={`${
                        formik.values.horarios[index].days.includes('SABADO')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      SAB
                    </span>
                    <span
                      onClick={() =>
                        handleChange(index, 'days', 'DOMINGO', true)
                      }
                      className={`${
                        formik.values.horarios[index].days.includes('DOMINGO')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      DOM
                    </span>
                    <span
                      onClick={() =>
                        handleChange(index, 'days', 'FERIADOS', true)
                      }
                      className={`${
                        formik.values.horarios[index].days.includes('FERIADOS')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[90px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      FERIADOS
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Período de atendimento
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <div className="flex items-center gap-[16px]">
                  <div className="flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] border border-[#A1A1A1] px-2">
                    <input
                      value={formik.values.horarios[index].of}
                      onChange={(e) =>
                        handleChange(index, 'of', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                    />
                    <Clock size="28" color="#A1A1A1" />
                  </div>
                  <span className={`${Outfit400.className} text-[#222]`}>
                    às
                  </span>
                  <div className="flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] border border-[#A1A1A1] px-2">
                    <input
                      value={formik.values.horarios[index].until}
                      onChange={(e) =>
                        handleChange(index, 'until', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                    />
                    <Clock size="28" color="#A1A1A1" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Período de intervalo
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <div className="flex items-center gap-[16px]">
                  <div
                    className={`flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] ${formik.values.horarios[index].enabled ? 'border border-dashed' : 'border'} border-[#A1A1A1] px-2`}
                  >
                    <input
                      value={formik.values.horarios[index].interval}
                      onChange={(e) =>
                        handleChange(index, 'interval', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                      disabled={formik.values.horarios[index].enabled}
                    />
                    <Clock size="28" color="#A1A1A1" />
                  </div>
                  <span className={`${Outfit400.className} text-[#222]`}>
                    às
                  </span>
                  <div
                    className={`flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] ${formik.values.horarios[index].enabled ? 'border border-dashed' : 'border'} border-[#A1A1A1] px-2`}
                  >
                    <input
                      value={formik.values.horarios[index].returnInterval}
                      onChange={(e) =>
                        handleChange(index, 'returnInterval', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                      disabled={formik.values.horarios[index].enabled}
                    />
                    <Clock size="28" color="#A1A1A1" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formik.values.horarios[index].enabled}
                      onChange={(e) => {
                        handleChange(index, 'enabled', e.target.checked)
                        if (e.target.checked) {
                          handleChange(index, 'returnInterval', '')
                          handleChange(index, 'interval', '')
                        }
                      }}
                      className={`${Outfit400.className} text-[#222222] outline-0`}
                    />
                    <span className={`${Outfit300.className} text-[#222]`}>
                      Sem intervalo
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-end">
                {formik.values.horarios[index].days.length > 0 ? (
                  <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E0FFF9] px-3">
                    <label
                      className={`${Outfit300.className} text-[14px] text-[#0F9B7F]`}
                    >
                      {formik.values.horarios[index].days.join(' - ')} - das{' '}
                      {formik.values.horarios[index].of} as{' '}
                      {formik.values.horarios[index].until}{' '}
                      {!formik.values.horarios[index].enabled && 'e das '}
                      {formik.values.horarios[index].interval}{' '}
                      {!formik.values.horarios[index].enabled && 'as '}
                      {formik.values.horarios[index].returnInterval}
                    </label>
                  </div>
                ) : (
                  <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                    <InfoCircle size="20" color="#737373" variant="Bulk" />
                    <label
                      className={`${Outfit300.className} text-[14px] text-[#737373]`}
                    >
                      Nenhuma opção adicionada
                    </label>
                  </div>
                )}
              </div>
              {formik.values.horarios.length === 1 ? null : (
                <div
                  className="flex flex-col justify-end py-[8px]"
                  onClick={() =>
                    formik.setFieldValue('horarios', [
                      formik.values.horarios.filter((_, i) => i !== index),
                    ])
                  }
                >
                  <Trash size="28" color="#737373" />
                </div>
              )}
            </div>
          </div>
        )
      })}

      <button
        type="button"
        onClick={() =>
          formik.setFieldValue('horarios', [
            ...formik.values.horarios,
            {
              days: [],
              of: '',
              until: '',
              interval: '',
              returnInterval: '',
              enabled: true,
            },
          ])
        }
        className={`${Outfit400.className} h-[40px] w-[235px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F]`}
      >
        ADICIONAR NOVO PERÍODO
      </button>
    </div>
  )
}

export default Horarios
