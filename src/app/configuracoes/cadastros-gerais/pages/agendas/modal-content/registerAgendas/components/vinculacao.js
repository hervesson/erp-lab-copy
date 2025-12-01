import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const InformacoesInternas = ({ formik, fields }) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      {/* Configuração */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Requisitos para realização do exame
        </span>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Espacialidade associada
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.regiaoDeColeta}
              setSelect={(e) => formik.setFieldValue('regiaoDeColeta', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'regiao_coleta')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma ou mais regioões de coleta'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-col justify-end gap-1">
            <button
              className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
            >
              ADICIONAR
            </button>
          </div>
          <div className="flex flex-2 flex-col justify-end gap-1">
            <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Nenhuma opção adicionada
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Setor associado<strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.regiaoDeColeta}
              setSelect={(e) => formik.setFieldValue('regiaoDeColeta', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'regiao_coleta')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma ou mais regioões de coleta'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-col justify-end gap-1">
            <button
              className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
            >
              ADICIONAR
            </button>
          </div>
          <div className="flex flex-2 flex-col justify-end gap-1">
            <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Nenhuma opção adicionada
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Profissional associado
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.regiaoDeColeta}
              setSelect={(e) => formik.setFieldValue('regiaoDeColeta', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'regiao_coleta')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma ou mais regioões de coleta'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-col justify-end gap-1">
            <button
              className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
            >
              ADICIONAR
            </button>
          </div>
          <div className="flex flex-2 flex-col justify-end gap-1">
            <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Nenhuma opção adicionada
              </label>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Equipamento associado<strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.regiaoDeColeta}
              setSelect={(e) => formik.setFieldValue('regiaoDeColeta', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'regiao_coleta')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma ou mais regioões de coleta'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
          <div className="flex flex-col justify-end gap-1">
            <button
              className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
            >
              ADICIONAR
            </button>
          </div>
          <div className="flex flex-2 flex-col justify-end gap-1">
            <div className="flex h-10 items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Nenhuma opção adicionada
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesInternas
