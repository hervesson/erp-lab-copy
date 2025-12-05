import CustonSearchCnaes from '@/components/CutomSearchCnaes'
import { Outfit300, Outfit400 } from '@/fonts'
import { SearchCnpj } from '@/helpers'
import { formatCNAE, formatCnpj, formatPhoneNumber } from '@/utils'

import CustomSelect from '@/components/CustomSelect'
import { CloseCircle, InfoCircle } from 'iconsax-reactjs'

const InformacoesBasicas = ({ formik, services }) => {
  const safe = (value) => (value == null ? '' : value)

  const searchCNPJ = async () => {
    const result = await SearchCnpj(encodeURIComponent(formik.values.cnpj))
    if (result.success) {
      formik.setFieldValue('nomeFantasia', safe(result.data.nomeFantasia))
      formik.setFieldValue(
        'inscricaoEstadual',
        safe(result.data.inscricaoEstadual),
      )
      formik.setFieldValue('telefone', safe(result.data.telefoneFixo))
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
      formik.setFieldValue('numero', safe(result?.data?.numero))
      formik.setFieldValue('cep', safe(result?.data?.cep))
      formik.setFieldValue('rua', safe(result?.data?.rua))
      formik.setFieldValue(
        'cnaePrincipal',
        result?.data?.cnaePrincipal
          ? {
              id: result?.data?.cnaePrincipal.id,
              label: `${formatCNAE(result?.data?.cnaePrincipal.codigo)} - ${result?.data?.cnaePrincipal.descricao}`,
            }
          : {}, // ou '' / {} dependendo do que seu form espera
      )
      formik.setFieldValue(
        'cnaesSecundariosSelecionados',
        result?.data?.cnaesSecundarios?.map((e) => {
          return {
            id: e?.id,
            label: `${formatCNAE(e?.codigo)} -
            ${e?.descricao}`,
          }
        }),
      )
    }
    console.log(result.data)
  }

  return (
    <div className="flex flex-col gap-4">
      <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
        Informações básicas
      </span>

      <div className="flex h-36 gap-4">
        <div className="h-36 w-36 rounded border border-[#A9A9A9]"></div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Nome da unidade
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('nomeUnidade')}
                id="nomeUnidade"
                name="nomeUnidade"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o nome da unidade"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Código interno
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('codigoInterno')}
                id="codigoInterno"
                name="codigoInterno"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o código interno"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                CNPJ<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('cnpj')}
                value={formatCnpj(formik.values.cnpj)}
                onBlur={() => searchCNPJ()}
                type="text"
                id="cnpj"
                name="cnpj"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o CNPJ"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Razão social
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('razaoSocial')}
                type="text"
                id="razaoSocial"
                name="razaoSocial"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a Razão Social"
                maxLength={18}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Nome fantasia
              </label>
              <input
                {...formik.getFieldProps('nomeFantasia')}
                type="text"
                id="nomeFantasia"
                name="nomeFantasia"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o nome fantasia"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Inscrição municipal
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('inscricaoMunicipal')}
                type="text"
                id="inscricaoMunicipal"
                name="inscricaoMunicipal"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a inscrição Municipal"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Inscrição estadual
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('inscricaoEstadual')}
                type="text"
                id="inscricaoEstadual"
                name="inscricaoEstadual"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite a inscrição Estadual"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                CNES<strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('cnes')}
                type="text"
                id="cnes"
                name="cnes"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o CNES"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Contatos da unidade
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('telefone')}
                value={formatPhoneNumber(formik.values.telefone)}
                type="text"
                id="telefone"
                name="telefone"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o telefone"
                maxLength={15}
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Email
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('email')}
                type="email"
                id="email"
                name="email"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite o email"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <label className={`${Outfit400.className} text-[14px] text-[#222222]`}>
          Código do serviço principal
        </label>
        <CustomSelect
          select={formik.values.codigoServicoPrincipal}
          setSelect={(e) => formik.setFieldValue('codigoServicoPrincipal', e)}
          options={services}
          placeholder={'Selecione o código do serviço principal'}
          className={
            'border border-[#BBBBBB] hover:border-[#0F9B7F] active:border-[#0F9B7F]'
          }
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <label className={`${Outfit400.className} text-[14px] text-[#222222]`}>
          Código do serviço secundário
        </label>
        <div className="flex flex-1 gap-3">
          <CustomSelect
            select={formik.values.codigoServicoSecundario}
            setSelect={(e) =>
              formik.setFieldValue('codigoServicoSecundario', e)
            }
            options={services}
            placeholder={'Selecione o código do serviço secundário'}
            className={
              'border border-[#BBBBBB] hover:border-[#0F9B7F] active:border-[#0F9B7F]'
            }
          />
          <button
            type="button"
            onClick={() => {
              if (
                formik.values.codigoServicoSecundario &&
                !formik.values.codigoServicoSecundarioSelecionados.some(
                  (item) =>
                    item.id === formik.values.codigoServicoSecundario.id,
                )
              ) {
                formik.setFieldValue('codigoServicoSecundarioSelecionados', [
                  ...formik.values.codigoServicoSecundarioSelecionados,
                  formik.values.codigoServicoSecundario,
                ])
              }
              formik.setFieldValue('codigoServicoSecundario', {})
            }}
            className={`${Outfit400.className} h-10 rounded-lg border border-[#0F9B7F] px-2 text-[#0F9B7F]`}
            disabled={
              Object.keys(formik.values.codigoServicoSecundario || {})
                .length === 0
            }
          >
            ADICIONAR
          </button>
        </div>
      </div>
      {formik.values.codigoServicoSecundarioSelecionados.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {formik.values.codigoServicoSecundarioSelecionados?.map(
            (item, index) => {
              return (
                <div
                  key={index.toString()}
                  className={`h-10 bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                >
                  {item.label}
                  <CloseCircle
                    size="22"
                    color="#F23434"
                    variant="Bold"
                    onClick={() =>
                      formik.setFieldValue(
                        'codigoServicoSecundarioSelecionados',
                        formik.values.codigoServicoSecundarioSelecionados.filter(
                          (code) => code !== item,
                        ),
                      )
                    }
                  />
                </div>
              )
            },
          )}
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

      <div className="flex flex-1 flex-col gap-1">
        <label className={`${Outfit400.className} text-[14px] text-[#222222]`}>
          CNAE principal
        </label>
        <CustonSearchCnaes
          value={formik.values.cnaePrincipal.label}
          setValue={(opt) => {
            formik.setFieldValue(`cnaePrincipal`, opt)
            formik.setFieldTouched(`cnaePrincipal`, true, false)
          }}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <label className={`${Outfit400.className} text-[14px] text-[#222222]`}>
          CNAE(s) secundários
        </label>
        <div className="flex flex-1 gap-3">
          <CustonSearchCnaes
            setValue={(opt) => {
              formik.setFieldValue(`cnaeSecundario`, opt)
              formik.setFieldTouched(`cnaeSecundario`, true, false)
            }}
          />
          <button
            type="button"
            onClick={() => {
              if (
                formik.values.cnaeSecundario &&
                !formik.values.cnaesSecundariosSelecionados.some(
                  (item) => item.id === formik.values.cnaeSecundario.id,
                )
              ) {
                formik.setFieldValue('cnaesSecundariosSelecionados', [
                  ...formik.values.cnaesSecundariosSelecionados,
                  formik.values.cnaeSecundario,
                ])
              }
              formik.setFieldValue('cnaeSecundario', '')
            }}
            className={`${Outfit400.className} text-[] h-10 rounded-lg border border-[#0F9B7F] px-2 text-[#0F9B7F]`}
            disabled={
              Object.keys(formik.values.cnaeSecundario || {}).length === 0
            }
          >
            ADICIONAR
          </button>
        </div>
      </div>
      {formik.values.cnaesSecundariosSelecionados.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {formik.values.cnaesSecundariosSelecionados?.map((item, index) => {
            return (
              <div
                key={index.toString()}
                className={`h-10 bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
              >
                {item.codigo} {item.label}
                <CloseCircle
                  size="22"
                  color="#F23434"
                  variant="Bold"
                  onClick={() =>
                    formik.setFieldValue(
                      'cnaesSecundariosSelecionados',
                      formik.values.cnaesSecundariosSelecionados.filter(
                        (code) => code !== item,
                      ),
                    )
                  }
                />
              </div>
            )
          })}
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
  )
}

export default InformacoesBasicas
