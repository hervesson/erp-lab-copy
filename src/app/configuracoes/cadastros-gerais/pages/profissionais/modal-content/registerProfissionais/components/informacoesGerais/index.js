import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { SearchCep, SearchCities, SearchStates } from '@/helpers'
import { formatCep, safe } from '@/utils'
import { DocumentDownload, InfoCircle } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import AssinaturaDigital from './components/assinaturaDigital'

const InformacoesGerais = ({ formik, fields }) => {
  const [states, setStates] = useState([])
  const [cities, setCities] = useState({})

  useEffect(() => {
    const estado = formik.values.estado

    // Se ainda não tiver nada selecionado, não faz nada
    if (!estado || !estado.label) {
      return
    }

    const findData = async () => {
      try {
        const states = await SearchCities(estado.label)

        const stt = states.data.map((item) => ({
          id: item.id,
          label: item.nome,
          item,
        }))

        setCities(stt)
      } catch (error) {
        console.error('Erro ao buscar cidades:', error)
      }
    }

    findData()
  }, [formik.values.estado])

  useEffect(() => {
    const findData = async () => {
      const states = await SearchStates()
      const stt = states?.data?.map((item) => {
        return {
          id: item.id,
          label: item.nome,
          item,
        }
      })
      setStates(stt)
    }

    findData()
  }, [])

  const searchCEP = async () => {
    if (formik.values.cep.length === 9) {
      const result = await SearchCep(formik.values.cep)
      formik.setFieldValue('rua', result?.data?.rua)
      formik.setFieldValue('bairro', result?.data?.bairro)
      formik.setFieldValue('cidade', {
        id: '',
        label: safe(result.data.cidade),
      })
      formik.setFieldValue('estado', {
        id: '',
        label: safe(result.data.estado),
      })
    }
  }

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações pessoais
          </span>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Pronome pessoal
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
                  Nome completo
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
                  CPF
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
                    Data de nascimento
                    <strong className="text-[#F23434]">*</strong>
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
                    Sexo
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
                  Celular<strong className="text-[#F23434]">*</strong>
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
                  E-mail
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
            </div>
          </div>

          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações profissionais
          </span>

          <div className="flex gap-4">
            <div className="flex flex-col gap-1">
              <label
                className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
              >
                Tipo de contratação
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.volume ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() => formik.setFieldValue('volume', true)}
                >
                  CLT
                </button>
                <button
                  type="button"
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${formik.values.volume ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() => formik.setFieldValue('volume', false)}
                >
                  PJ
                </button>
                <button
                  type="button"
                  className={`flex h-10 w-[110px] items-center justify-center rounded-lg ${formik.values.volume ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() => formik.setFieldValue('volume', false)}
                >
                  AUTÔNOMO
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Metodologia utilizada
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.metodologiaUtilizada}
                setSelect={(e) =>
                  formik.setFieldValue('metodologiaUtilizada', e)
                }
                options={fields
                  ?.find((element) => element?.nomeCampo === 'metodologia')
                  ?.alternativas.map((i) => {
                    return {
                      id: i.id,
                      label: i.textoAlternativa,
                    }
                  })}
                placeholder={'Selecione uma metodologia'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Unidade de medida<strong className="text-[#F23434]">*</strong>
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
            <div className="flex flex-col gap-1">
              <label
                className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
              >
                Peso
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  className={`flex h-10 w-[150px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() => formik.setFieldValue('peso', true)}
                >
                  REALIZANTE
                </button>
                <button
                  type="button"
                  className={`flex h-10 w-[115px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() => formik.setFieldValue('peso', false)}
                >
                  SOLICITANTE
                </button>
                <button
                  type="button"
                  className={`flex h-10 w-[70px] items-center justify-center rounded-lg ${formik.values.peso ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                  onClick={() => formik.setFieldValue('peso', false)}
                >
                  AMBOS
                </button>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Nome do conselho<strong className="text-[#F23434]">*</strong>
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

          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <div className="flex justify-between">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  Estado do conselho
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
                Numero do conselho
                <strong className="text-[#F23434]">*</strong>
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
                Código CBO
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.especialidadeExame}
                setSelect={(e) => formik.setFieldValue('especialidadeExame', e)}
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
                RQE
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.especialidadeExame}
                setSelect={(e) => formik.setFieldValue('especialidadeExame', e)}
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
                Epecialidade principal
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={formik.values.especialidadeExame}
                setSelect={(e) => formik.setFieldValue('especialidadeExame', e)}
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
          </div>
          <AssinaturaDigital formik={formik} />

          {/* Documentação e credenciamento */}

          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Documentação e credenciamento
          </span>

          <div className="flex gap-4">
            <button className="flex h-11 flex-1 items-center justify-evenly rounded-lg border border-[#A9A9A9] bg-[#F9F9F9]">
              <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
              <span className={`${Outfit300.className} text-[#222222]`}>
                DOCUMENTOS(DIPLOMAS, CERTIFICADOS, CRM...)
              </span>
            </button>
            <button className="flex h-11 flex-1 items-center justify-evenly rounded-lg border border-[#A9A9A9] bg-[#F9F9F9]">
              <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
              <span className={`${Outfit300.className} text-[#222222]`}>
                COMPROVANTE DE RESIDÊNCIA
              </span>
            </button>
            <button className="flex h-11 flex-1 items-center justify-evenly rounded-lg border border-[#A9A9A9] bg-[#F9F9F9]">
              <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
              <span className={`${Outfit300.className} text-[#222222]`}>
                COMPROVANTE BANCÁRIO
              </span>
            </button>
          </div>

          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações do realizante
          </span>

          <div className="flex gap-4">
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Especialidade que realizada
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={{}}
                  // setSelect={(e) => setCollectionRegion(e)}
                  options={[{ id: 1, label: 'NÃO SE APLICA' }]}
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
            </div>
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Exames que não realiza especialidades
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={{}}
                  // setSelect={(e) => setCollectionRegion(e)}
                  options={[{ id: 1, label: 'NÃO SE APLICA' }]}
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
            </div>
            <div className="flex flex-1 gap-4">
              <div className="flex flex-1 flex-col gap-1">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Exames que realiza além da especialidade
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={{}}
                  // setSelect={(e) => setCollectionRegion(e)}
                  options={[{ id: 1, label: 'NÃO SE APLICA' }]}
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
            </div>
          </div>

          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Endereço
          </span>

          <div className="flex h-36 gap-4">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    CEP<strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={formatCep(formik.values.cep)}
                    onChange={formik.handleChange}
                    type="text"
                    id="cep"
                    name="cep"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite o cep"
                    onBlur={() => searchCEP()}
                    autoComplete="off"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Rua
                  </label>
                  <input
                    {...formik.getFieldProps('rua')}
                    type="text"
                    id="rua"
                    name="rua"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite a rua"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Número<strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('numero')}
                    type="text"
                    id="numero"
                    name="numero"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite o número"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Bairro
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('bairro')}
                    type="text"
                    id="bairro"
                    name="bairro"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite o bairro"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Complemento<strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    {...formik.getFieldProps('complemento')}
                    type="text"
                    id="complemento"
                    name="complemento"
                    className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                    placeholder="Digite um complemento"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Estado<strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.estado}
                    setSelect={(option) =>
                      formik.setFieldValue('estado', option)
                    }
                    options={states}
                    placeholder="Digite o estado"
                    className="border border-[#BBBBBB]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Cidade<strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={formik.values.cidade}
                    setSelect={(option) =>
                      formik.setFieldValue('cidade', option)
                    }
                    options={cities}
                    placeholder="Digite a cidade"
                    className="border border-[#BBBBBB]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
