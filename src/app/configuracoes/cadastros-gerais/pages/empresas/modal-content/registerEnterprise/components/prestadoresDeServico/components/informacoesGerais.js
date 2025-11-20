import CustomSelect from '@/components/CustomSelect'
import CustomSearchBanks from '@/components/CutomSearchBanks'
import DecimalInputBR from '@/components/DecimalInputBR'
import { Outfit400 } from '@/fonts'
import { SearchCep, SearchCities, SearchCnpj } from '@/helpers'
import { formatCep, formatCnpj, formatPhoneNumber } from '@/utils'
import { InfoCircle, Trash } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'

const InformacoesGerais = ({ formik, states }) => {
  const safe = (value) => (value == null ? '' : value)
  const setFin = (index, key, value) => {
    formik.setFieldValue(`financeiro[${index}].${key}`, value)
  }

  const [cities, setCities] = useState()

  useEffect(() => {
    const findData = async () => {
      const states = await SearchCities(formik?.values?.estado?.label)
      const stt = states.data.map((item) => {
        return {
          id: item.id,
          label: item.nome,
          item,
        }
      })
      setCities(stt)
    }

    findData()
  }, [formik.values.estado])

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

  const searchCNPJ = async () => {
    const result = await SearchCnpj(encodeURIComponent(formik.values.cnpj))
    if (result.success) {
      formik.setFieldValue('nomeFantasia', safe(result.data.nomeFantasia))
      formik.setFieldValue(
        'inscricaoEstadual',
        safe(result.data.inscricaoEstadual),
      )
      formik.setFieldValue('telefoneFixo', safe(result.data.telefoneFixo))
      formik.setFieldValue('optantePeloSimples', result.data.company.simples)
      formik.setFieldValue('razaoSocial', safe(result.data.razaoSocial))
      formik.setFieldValue('bairro', safe(result.data.bairro))
      formik.setFieldValue('cidade', {
        id: '',
        label: safe(result.data.cidade),
      })
      formik.setFieldValue('complemento', safe(result.data.complemento))
      formik.setFieldValue('emailComercial', safe(result.data.emailComercial))
      formik.setFieldValue('estado', {
        id: '',
        label: safe(result.data.estado),
      })
      formik.setFieldValue('numero', safe(result.data.numero))
      formik.setFieldValue('cep', safe(result.data.cep))
      formik.setFieldValue('rua', safe(result.data.rua))
    }
  }

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Informações básicas */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações básicas
        </span>
        <div className="flex h-[144px] gap-[16px]">
          <div className="h-[144px] w-[144px] rounded border border-[#A9A9A9]"></div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-[16px]">
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
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o codigo interno"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  CNPJ
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('cnpj')}
                  value={formatCnpj(formik.values.cnpj)}
                  onBlur={() => searchCNPJ()}
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o CNPJ"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Razão Social<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('razaoSocial')}
                  type="text"
                  id="razaoSocial"
                  name="razaoSocial"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a Razão Social"
                  maxLength={18}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome fantasia
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeFantasia')}
                  type="text"
                  id="nomeFantasia"
                  name="nomeFantasia"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o nome fantasia"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Inscrição municipal
                </label>
                <input
                  {...formik.getFieldProps('inscricaoMunicipal')}
                  type="text"
                  id="inscricaoMunicipal"
                  name="inscricaoMunicipal"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a inscrição Municipal"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Inscrição estadual
                </label>
                <input
                  {...formik.getFieldProps('inscricaoEstadual')}
                  type="text"
                  id="inscricaoEstadual"
                  name="inscricaoEstadual"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a inscrição Estadual"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Telefone fixo<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('telefoneFixo')}
                  value={formatPhoneNumber(formik.values.telefoneFixo)}
                  type="text"
                  id="telefoneFixo"
                  name="telefoneFixo"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o telefone fixo"
                  maxLength={15}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Celular<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('celular')}
                  value={formatPhoneNumber(formik.values.celular)}
                  type="text"
                  id="celular"
                  name="celular"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o celular"
                  maxLength={15}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  E-mail comercial
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('emailComercial')}
                  type="text"
                  id="emailComercial"
                  name="emailComercial"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o email comercial"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Site da empresa
                </label>
                <input
                  {...formik.getFieldProps('siteDaEmpresa')}
                  type="text"
                  id="siteDaEmpresa"
                  name="siteDaEmpresa"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o site da empresa"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Endereço */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Endereço
        </span>

        <div className="flex h-[144px] gap-[16px]">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
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
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o cep"
                  onBlur={() => searchCEP()}
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Rua<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('rua')}
                  type="text"
                  id="rua"
                  name="rua"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a rua"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
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
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o número"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
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
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o bairro"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Complemento
                </label>
                <input
                  {...formik.getFieldProps('complemento')}
                  type="text"
                  id="complemento"
                  name="complemento"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite um complemento"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Estado<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.estado}
                  setSelect={(option) => formik.setFieldValue('estado', option)}
                  options={states}
                  placeholder="Digite o estado"
                  className="border border-[#BBBBBB]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Cidade<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.cidade}
                  setSelect={(option) => formik.setFieldValue('cidade', option)}
                  options={cities}
                  placeholder="Digite a cidade"
                  className="border border-[#BBBBBB]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* responsável */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Responsável
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Nome do responsável
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('nomeDoResponsavel')}
                type="text"
                id="nomeDoResponsavel"
                name="nomeDoResponsavel"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o nome do responsável"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Cargo do responsável
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('cargoResponsavel')}
                type="text"
                id="cargoResponsavel"
                name="cargoResponsavel"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o cargo do responsável"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Contato do responsável
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('contatoResponsavel')}
                value={formatPhoneNumber(formik.values.contatoResponsavel)}
                type="text"
                id="contatoResponsavel"
                name="contatoResponsavel"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o contato do responsável"
                maxLength={15}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Email
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('email')}
                type="text"
                id="email"
                name="email"
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o email de contato do responsável"
              />
            </div>
          </div>
        </div>
      </div>
      {/* impostos */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Impostos
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              IRRF (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <DecimalInputBR
              name="irrf"
              id="irrf"
              value={formik.values.irrf} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('irrf', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              PIS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <DecimalInputBR
              name="pis"
              id="pis"
              value={formik.values.pis} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('pis', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              COFINS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <DecimalInputBR
              name="cofins"
              id="cofins"
              value={formik.values.cofins} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('cofins', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              CSLL (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>

            <DecimalInputBR
              name="csll"
              id="csll"
              value={formik.values.csll} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('csll', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              ISS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>

            <DecimalInputBR
              name="iss"
              id="iss"
              value={formik.values.iss} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('iss', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              IBS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>

            <DecimalInputBR
              name="ibs"
              id="ibs"
              value={formik.values.ibs} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('ibs', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              CBS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>

            <DecimalInputBR
              name="cbs"
              id="cbs"
              value={formik.values.cbs} // <-- NUMBER (ex: 12.9)
              onChange={(num) => formik.setFieldValue('cbs', num)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite percentual"
            />
          </div>
        </div>
        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter ISS
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!formik.values.reterISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterISS', !formik.values.reterISS)
                }
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${formik.values.reterISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterISS', !formik.values.reterISS)
                }
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter IR
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!formik.values.reterIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterIR', !formik.values.reterIR)
                }
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${formik.values.reterIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterIR', !formik.values.reterIR)
                }
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter PCC
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!formik.values.reterPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterPCC', !formik.values.reterPCC)
                }
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${formik.values.reterPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterPCC', !formik.values.reterPCC)
                }
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter IBS
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!formik.values.reterIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterIBS', !formik.values.reterIBS)
                }
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${formik.values.reterIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterIBS', !formik.values.reterIBS)
                }
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter CBS
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!formik.values.reterCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterCBS', !formik.values.reterCBS)
                }
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${formik.values.reterCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue('reterCBS', !formik.values.reterCBS)
                }
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Optante pelo simples nacional
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`${!formik.values.optantePeloSimples ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue(
                    'optantePeloSimples',
                    !formik.values.optantePeloSimples,
                  )
                }
              >
                NÃO
              </button>
              <button
                type="button"
                className={`${formik.values.optantePeloSimples ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() =>
                  formik.setFieldValue(
                    'optantePeloSimples',
                    !formik.values.optantePeloSimples,
                  )
                }
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]" />
        </div>
      </div>
      {/* financeiro */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Financeiro e Pagamento
        </span>
        {formik?.values?.financeiro?.map((item, index) => {
          return (
            <div className="flex gap-[16px]" key={index.toString()}>
              <div className="flex w-full flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Selecione um banco
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSearchBanks
                  setValue={(opt) => {
                    setFin(index, 'banco', opt?.label || '')
                    setFin(index, 'codigoBanco', opt?.id || '')
                    setFin(index, 'bancoId', opt?.id || '')
                  }}
                />
              </div>

              <div className="flex w-full flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Agência
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.agencia}
                  onChange={(e) => setFin(index, 'agencia', e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a agência"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Dígito agência
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.digitoAgencia}
                  onChange={(e) =>
                    setFin(index, 'digitoAgencia', e.target.value)
                  }
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o dígito da agência"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  Tipo de conta
                  <strong className="text-red-700">*</strong>
                </label>
                <CustomSelect
                  select={item.tipoDeConta ?? null}
                  setSelect={(option) => setFin(index, 'tipoDeConta', option)}
                  options={[
                    { id: 'corrente', label: 'CORRENTE' },
                    { id: 'poupanca', label: 'POUPANÇA' },
                  ]}
                  placeholder="Tipo de conta"
                  className="w-[250px] border border-[#BBBBBB]"
                />
              </div>
              <div className="flex w-full flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Conta
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.conta}
                  onChange={(e) => setFin(index, 'conta', e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite a conta"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Dígito Conta
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.digitoConta}
                  onChange={(e) => setFin(index, 'digitoConta', e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o dígito da agência"
                />
              </div>
              {formik.values.financeiro.length > 1 && (
                <div
                  className="flex flex-col justify-end py-[8px]"
                  onClick={() =>
                    formik.setFieldValue(
                      'financeiro',
                      formik.values.financeiro.filter((_, i) => i !== index),
                    )
                  }
                >
                  <Trash size="28" color="#737373" />
                </div>
              )}
            </div>
          )
        })}

        <button
          type="button"
          className={`${Outfit400.className} h-[40px] w-[150px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F] uppercase`}
          onClick={() =>
            formik.setFieldValue('financeiro', [
              ...formik.values.financeiro,
              {
                banco: '',
                codigoBanco: '',
                bancoId: '',
                agencia: '',
                digitoAgencia: '',
                contaCorrente: '',
                digitoConta: '',
              },
            ])
          }
        >
          Novo banco
        </button>

        <div className="flex gap-[16px]">
          <div className="flex w-full flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Forma de pagamento
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.formaDePagamento}
              setSelect={(opt) => {
                formik.setFieldValue('formaDePagamento', opt)
              }}
              options={[
                {
                  id: 'Transferência Bancária',
                  label: 'Transferência Bancária',
                },
                {
                  id: 'Pix',
                  label: 'Pix',
                },
              ]}
              placeholder={'Forma de pagamento'}
              className={'border border-[#BBBBBB]'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
