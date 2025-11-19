import { Outfit400 } from '@/fonts'
import { Clock, Trash } from 'iconsax-reactjs'

const Horarios = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Horários de atendimento
      </span>

      {openingHours?.map((item, index) => {
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
                        openingHours[index].days.includes('SEGUNDA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      SEG
                    </span>
                    <span
                      onClick={() => handleChange(index, 'days', 'TERCA', true)}
                      className={`${
                        openingHours[index].days.includes('TERCA')
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
                        openingHours[index].days.includes('QUARTA')
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
                        openingHours[index].days.includes('QUINTA')
                          ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                          : 'bg-[#F9F9F9] text-[#BBBBBB]'
                      } flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                    >
                      QUI
                    </span>
                    <span
                      onClick={() => handleChange(index, 'days', 'SEXTA', true)}
                      className={`${
                        openingHours[index].days.includes('SEXTA')
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
                        openingHours[index].days.includes('SABADO')
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
                        openingHours[index].days.includes('DOMINGO')
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
                        openingHours[index].days.includes('FERIADOS')
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
                      value={openingHours[index].of}
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
                      value={openingHours[index].until}
                      onChange={(e) =>
                        handleChange(index, 'until', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] outline-0`}
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
                    className={`flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] ${openingHours[index].enabled ? 'border border-dashed' : 'border'} border-[#A1A1A1] px-2`}
                  >
                    <input
                      value={openingHours[index].interval}
                      onChange={(e) =>
                        handleChange(index, 'interval', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                      disabled={openingHours[index].enabled}
                    />
                    <Clock size="28" color="#A1A1A1" />
                  </div>
                  <span className={`${Outfit400.className} text-[#222]`}>
                    às
                  </span>
                  <div
                    className={`flex h-[40px] w-[100px] items-center gap-2 rounded-[8px] ${openingHours[index].enabled ? 'border border-dashed' : 'border'} border-[#A1A1A1] px-2`}
                  >
                    <input
                      value={openingHours[index].returnInterval}
                      onChange={(e) =>
                        handleChange(index, 'returnInterval', e.target.value)
                      }
                      type="time"
                      className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                      disabled={openingHours[index].enabled}
                    />
                    <Clock size="28" color="#A1A1A1" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={openingHours[index].enabled}
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
                {openingHours[index].days.length > 0 ? (
                  <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E0FFF9] px-3">
                    <label
                      className={`${Outfit300.className} text-[14px] text-[#0F9B7F]`}
                    >
                      {openingHours[index].days.join(' - ')} - das{' '}
                      {openingHours[index].of} as {openingHours[index].until}{' '}
                      {!openingHours[index].enabled && 'e das '}
                      {openingHours[index].interval}{' '}
                      {!openingHours[index].enabled && 'as '}
                      {openingHours[index].returnInterval}
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
              {openingHours.length === 1 ? null : (
                <div
                  className="flex flex-col justify-end py-[8px]"
                  onClick={() =>
                    setOpeningHours((prev) =>
                      prev.filter((_, i) => i !== index),
                    )
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
          setOpeningHours([
            ...openingHours,
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
