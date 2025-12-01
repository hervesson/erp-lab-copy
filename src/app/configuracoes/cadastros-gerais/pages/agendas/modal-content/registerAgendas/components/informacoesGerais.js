import CustomSelect from '@/components/CustomSelect'
import Divider from '@/components/Divider'
import { Outfit300, Outfit400 } from '@/fonts'
import { Clock, InfoCircle, Trash } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik, fields }) => {
  const handleChange = (index, field, value, isArrayToggle = false) => {
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
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações basicas
          </span>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código interno
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('codigoInterno')}
                  type="text"
                  id="codigoInterno"
                  name="codigoInterno"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código interno"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome da agenda
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeExame')}
                  type="text"
                  id="nomeExame"
                  name="nomeExame"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o nome do exame"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Unidade associada
                </label>
                <input
                  {...formik.getFieldProps('sinonimos')}
                  type="text"
                  id="sinonimos"
                  name="sinonimos"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite todos os sinônimos"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Setor<strong className="text-[#F23434]">*</strong>
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoTuss')}
                  type="text"
                  id="codigoTuss"
                  name="codigoTuss"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código TUSS"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Sala
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoAMB')}
                  type="text"
                  id="codigoAMB"
                  name="codigoAMB"
                  className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código AMB"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Profissional<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.tipoExame}
                  setSelect={(e) => formik.setFieldValue('tipoExame', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'tipo_exames')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione o tipo de exame'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Especialidade
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.especialidadeExame}
                  setSelect={(e) =>
                    formik.setFieldValue('especialidadeExame', e)
                  }
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'especialidade')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione uma especialidade'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Equipamento
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.grupo}
                  setSelect={(e) => formik.setFieldValue('grupo', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'grupo')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um grupo'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  Descrição<strong className="text-[#F23434]">*</strong>
                </label>

                <CustomSelect
                  select={formik.values.subGrupo}
                  setSelect={(e) => formik.setFieldValue('subGrupo', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'subgrupo')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um SubGrupo'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>
          </div>
        </div>

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
                        } flex h-[40px] w-[50px] items-center justify-center rounded-lg ${Outfit400.className} text-[14px]`}
                      >
                        SEG
                      </span>
                      <span
                        onClick={() =>
                          handleChange(index, 'days', 'TERCA', true)
                        }
                        className={`${
                          formik.values.horarios[index].days.includes('TERCA')
                            ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                            : 'bg-[#F9F9F9] text-[#BBBBBB]'
                        } flex h-10 w-[50px] items-center justify-center rounded-lg ${Outfit400.className} text-[14px]`}
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
                        } flex h-10 w-[50px] items-center justify-center rounded-lg ${Outfit400.className} text-[14px]`}
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
                        } flex h-10 w-[50px] items-center justify-center rounded-lg ${Outfit400.className} text-[14px]`}
                      >
                        QUI
                      </span>
                      <span
                        onClick={() =>
                          handleChange(index, 'days', 'SEXTA', true)
                        }
                        className={`${
                          formik.values.horarios[index].days.includes('SEXTA')
                            ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                            : 'bg-[#F9F9F9] text-[#BBBBBB]'
                        } flex h-10 w-[50px] items-center justify-center rounded-lg ${Outfit400.className} text-[14px]`}
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
                        } flex h-10 w-[50px] items-center justify-center rounded-lg ${Outfit400.className} text-[14px]`}
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
                        } flex h-10 w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                      >
                        DOM
                      </span>
                      <span
                        onClick={() =>
                          handleChange(index, 'days', 'FERIADOS', true)
                        }
                        className={`${
                          formik.values.horarios[index].days.includes(
                            'FERIADOS',
                          )
                            ? 'bg-[#E0FFF9] text-[#0F9B7F]'
                            : 'bg-[#F9F9F9] text-[#BBBBBB]'
                        } flex h-10 w-[90px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px]`}
                      >
                        FERIADOS
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Período de atendimento
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-[100px] items-center gap-2 rounded-[8px] border border-[#A1A1A1] px-2">
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

                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Intervalo entre agendamentos
                    <strong className="text-[#F23434]">*</strong>
                  </label>

                  <CustomSelect
                    select={formik.values.subGrupo}
                    setSelect={(e) => formik.setFieldValue('subGrupo', e)}
                    options={fields
                      ?.find((element) => element?.nomeCampo === 'subgrupo')
                      ?.alternativas.map((i) => {
                        return {
                          id: i.id,
                          label: i.textoAlternativa,
                        }
                      })}
                    placeholder={'Selecione'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>

                <div className="flex flex-1 flex-col justify-end">
                  {formik.values.horarios[index].days.length > 0 ? (
                    <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E0FFF9] px-3">
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
                    <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
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
                    className="flex flex-col justify-end py-2"
                    onClick={() =>
                      formik.setFieldValue(
                        'horarios',
                        formik.values.horarios.filter((_, i) => i !== index),
                      )
                    }
                  >
                    <Trash size="28" color="#737373" />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Capacidade por horário
                    <strong className="text-[#F23434]">*</strong>
                  </label>

                  <CustomSelect
                    select={formik.values.subGrupo}
                    setSelect={(e) => formik.setFieldValue('subGrupo', e)}
                    options={fields
                      ?.find((element) => element?.nomeCampo === 'subgrupo')
                      ?.alternativas.map((i) => {
                        return {
                          id: i.id,
                          label: i.textoAlternativa,
                        }
                      })}
                    placeholder={'Selecione'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Capacidade total
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('nomeExame')}
                    type="text"
                    id="nomeExame"
                    name="nomeExame"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite a capacidade total"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Data específica
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 items-center gap-2 rounded-lg border border-[#A1A1A1] px-2">
                      <input
                        value={formik.values.horarios[index].of}
                        onChange={(e) =>
                          handleChange(index, 'of', e.target.value)
                        }
                        type="date"
                        className={`${Outfit400.className} text-[#222222] outline-0`}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Horário específico
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-[100px] items-center gap-2 rounded-lg border border-[#A1A1A1] px-2">
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
                    <div className="flex h-10 w-[100px] items-center gap-2 rounded-lg border border-[#A1A1A1] px-2">
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

                <div className="flex flex-col justify-end gap-1">
                  <button
                    className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                  >
                    ADICIONAR
                  </button>
                </div>

                <div className="flex flex-1 flex-col justify-end">
                  {formik.values.horarios[index].days.length > 0 ? (
                    <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E0FFF9] px-3">
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
                    <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
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
                    className="flex flex-col justify-end py-2"
                    onClick={() =>
                      formik.setFieldValue(
                        'horarios',
                        formik.values.horarios.filter((_, i) => i !== index),
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

        <Divider />

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
          className={`${Outfit400.className} h-10 w-[150px] rounded-lg border border-[#0F9B7F] text-[#0F9B7F]`}
        >
          NOVO PERÍODO
        </button>

        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Bloqueio de horários
          </span>

          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Dia a bloquear
                <strong className="text-[#F23434]">*</strong>
              </label>
              <div className="flex items-center gap-4">
                <div className="flex h-10 items-center gap-2 rounded-lg border border-[#A1A1A1] px-2">
                  <input
                    // value={formik.values.horarios[index].of}
                    // onChange={(e) => handleChange(index, 'of', e.target.value)}
                    type="date"
                    className={`${Outfit400.className} text-[#222222] outline-0`}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Horário a bloquear
              </label>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-[100px] items-center gap-2 rounded-lg border border-[#A1A1A1] px-2">
                  <input
                    // value={formik.values.horarios[index].of}
                    // onChange={(e) => handleChange(index, 'of', e.target.value)}
                    type="time"
                    className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                  />
                  <Clock size="28" color="#A1A1A1" />
                </div>
                <span className={`${Outfit400.className} text-[#222]`}>às</span>
                <div className="flex h-10 w-[100px] items-center gap-2 rounded-lg border border-[#A1A1A1] px-2">
                  <input
                    // value={formik.values.horarios[index].until}
                    // onChange={(e) =>  handleChange(index, 'until', e.target.value)}
                    type="time"
                    className={`${Outfit400.className} w-[60px] text-[#222222] outline-0`}
                  />
                  <Clock size="28" color="#A1A1A1" />
                </div>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Observações
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('nomeExame')}
                type="text"
                id="nomeExame"
                name="nomeExame"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite a capacidade total"
              />
            </div>

            <div className="flex flex-col justify-end gap-1">
              <button
                className={`${Outfit400.className} flex h-10 w-[150px] items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR DIA
              </button>
            </div>

            <div className="flex flex-1 flex-col justify-end">
              {formik.values?.horarios?.days?.length > 0 ? (
                <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E0FFF9] px-3">
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#0F9B7F]`}
                  >
                    {formik.values.horarios.days.join(' - ')} - das{' '}
                    {formik.values.horarios.of} as{' '}
                    {formik.values.horarios.until}{' '}
                    {!formik.values.horarios.enabled && 'e das '}
                    {formik.values.horarios.interval}{' '}
                    {!formik.values.horarios.enabled && 'as '}
                    {formik.values.horarios.returnInterval}
                  </label>
                </div>
              ) : (
                <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
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
              <div className="flex flex-col justify-end py-2">
                <Trash size="28" color="#737373" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
