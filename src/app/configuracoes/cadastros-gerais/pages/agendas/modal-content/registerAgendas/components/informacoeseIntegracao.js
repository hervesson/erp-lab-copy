import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const InformacoeseIntegracao = ({ formik, fields }) => {
  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Notificacões
      </span>

      <div className="flex gap-4">
        <div className="flex flex-col gap-1">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Notificar via WhatApp
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.altura ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => formik.setFieldValue('altura', true)}
            >
              SIM
            </button>
            <button
              type="button"
              className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.altura ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => formik.setFieldValue('altura', false)}
            >
              NÃO
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Notificar via e-mail
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => formik.setFieldValue('peso', true)}
            >
              SIM
            </button>
            <button
              type="button"
              className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => formik.setFieldValue('peso', false)}
            >
              NÃO
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label
            className={`${Outfit400.className} text-[14px] text-[#222222]`}
          >
            Prazo para lembrar<strong className="text-[#F23434]">*</strong>
          </label>
          <CustomSelect
            select={formik.values.unidadeDeMedida}
            setSelect={(e) => formik.setFieldValue('unidadeDeMedida', e)}
            options={fields
              ?.find((element) => element?.nomeCampo === 'unidade_medida')
              ?.alternativas.map((i) => {
                return {
                  id: i.id,
                  label: i.textoAlternativa,
                }
              })}
            placeholder={'Selecione uma unidade de medida'}
            className={'border border-[#BBBBBB]'}
          />
        </div>
      </div>
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Canais de integração
      </span>

      <div className="flex gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <label
            className={`${Outfit400.className} text-[14px] text-[#222222]`}
          >
            Canais de integração
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
        <div className="flex flex-col gap-1">
          <label
            className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
          >
            Integração com convênios
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => formik.setFieldValue('peso', true)}
            >
              SIM
            </button>
            <button
              type="button"
              className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
              onClick={() => formik.setFieldValue('peso', false)}
            >
              NÃO
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoeseIntegracao
