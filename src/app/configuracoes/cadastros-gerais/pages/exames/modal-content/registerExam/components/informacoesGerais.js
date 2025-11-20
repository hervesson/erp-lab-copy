import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'

const InformacoesGerais = ({ formik, fields }) => {
  console.log(fields)
  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações iniciais
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome do exame
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeExame')}
                  type="text"
                  id="nomeExame"
                  name="nomeExame"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o nome do exame"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
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
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código interno"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Sinônimos para o exame
                </label>
                <input
                  {...formik.getFieldProps('sinonimos')}
                  type="text"
                  id="sinonimos"
                  name="sinonimos"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite todos os sinônimos"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código TUSS<strong className="text-[#F23434]">*</strong>
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoTuss')}
                  type="text"
                  id="codigoTuss"
                  name="codigoTuss"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código TUSS"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                  >
                    Código LOINC
                    <InfoCircle size="20" color="#A1A1A1" />
                  </label>
                  <input
                    {...formik.getFieldProps('codigoLoinc')}
                    type="text"
                    id="codigoLoinc"
                    name="codigoLoinc"
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o código LOINC"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código SUS
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoSUS')}
                  type="text"
                  id="codigoSUS"
                  name="codigoSUS"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o codigo SUS"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                  >
                    Código AMB
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <input
                  {...formik.getFieldProps('codigoAMB')}
                  type="text"
                  id="codigoAMB"
                  name="codigoAMB"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código AMB"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tipo de exame<strong className="text-[#F23434]">*</strong>
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
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Especialidade do exame
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
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Grupo
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
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  SubGrupo<strong className="text-[#F23434]">*</strong>
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
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Setor<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.setor}
                  setSelect={(e) => formik.setFieldValue('setor', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'setor')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um setor'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
