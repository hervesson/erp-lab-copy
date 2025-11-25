import CustomSelect from '@/components/CustomSelect'
import DecimalInputBR from '@/components/DecimalInputBR'
import { Outfit400 } from '@/fonts'
import { gerarDias } from '@/utils'
import { InfoCircle } from 'iconsax-reactjs'

const InformacoesEspecificas = ({ formik, fields }) => {
  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações do convênio
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome do convênio
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('nomeConvenio')}
                  type="text"
                  id="nomeConvenio"
                  name="nomeConvenio"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o nome do convênio"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Registro ANS
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('registroAns')}
                  type="text"
                  id="registroAns"
                  name="registroAns"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o registro ANS"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Matrícula<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('matricula')}
                  type="text"
                  id="matricula"
                  name="matricula"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a matrícula"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  Tipo de convênio
                  <strong className="text-[#F23434]">*</strong>
                </label>

                <CustomSelect
                  select={formik.values.tipoConvenio}
                  setSelect={(e) => formik.setFieldValue('tipoConvenio', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'tipo_convenio')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione um tipo de convênio'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Forma de liquidação
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.formaLiquidacao}
                  setSelect={(e) => formik.setFieldValue('formaLiquidacao', e)}
                  options={fields
                    ?.find(
                      (element) => element?.nomeCampo === 'forma_liquidacao',
                    )
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione uma forma de liquidação'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Valor do CH
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <DecimalInputBR
                  id="valorCH"
                  name="valorCH"
                  value={formik.values.valorCH} // <-- NUMBER (ex: 12.9)
                  onChange={(num) => formik.setFieldValue('valorCH', num)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o valor do CH"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Valor do filme
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <DecimalInputBR
                  id="valorFilme"
                  name="valorFilme"
                  value={formik.values.valorFilme} // <-- NUMBER (ex: 12.9)
                  onChange={(num) => formik.setFieldValue('valorFilme', num)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                  placeholder="Digite o valor do filme"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
                >
                  Dia de vencimento<strong className="text-[#F23434]">*</strong>
                </label>

                <input
                  {...formik.getFieldProps('diaVencimento')}
                  type="text"
                  id="diaVencimento"
                  name="diaVencimento"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o dia de vencimento"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
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
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o CNES"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="flex justify-between">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    TISS
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <InfoCircle size="20" color="#A1A1A1" />
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${formik.values.tiss ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() => formik.setFieldValue('tiss', true)}
                  >
                    SIM
                  </button>
                  <button
                    type="button"
                    className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${formik.values.tiss ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() => formik.setFieldValue('tiss', false)}
                  >
                    NÃO
                  </button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Versão do TISS<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('versaoTiss')}
                  type="text"
                  id="versaoTiss"
                  name="versaoTiss"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a versão do TISS"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  TISS - Código na operadora
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('tissCodigoOperadora')}
                  type="text"
                  id="tissCodigoOperadora"
                  name="tissCodigoOperadora"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o codigo da operadora TISS"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código operadora (Autorização)
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('codigoOperadora')}
                  type="text"
                  id="codigoOperadora"
                  name="codigoOperadora"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código da operadora (autorização)"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código do prestador
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('codigoPrestador')}
                  type="text"
                  id="codigoPrestador"
                  name="codigoPrestador"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o codigo do prestador"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Faturamento
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Envio
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.envio}
                  setSelect={(e) => formik.setFieldValue('envio', e)}
                  options={fields
                    ?.find(
                      (element) => element?.nomeCampo === 'envio_faturamento',
                    )
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione uma opção de envio'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Fatura até
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.faturaAte}
                  setSelect={(e) => formik.setFieldValue('faturaAte', e)}
                  options={gerarDias()}
                  placeholder={'Selecione o dia limite da fatura'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Vencimento
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.vencimento}
                  setSelect={(e) => formik.setFieldValue('vencimento', e)}
                  options={gerarDias()}
                  placeholder={'Selecione o dia de vencimento'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Contrato
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('contrato')}
                  type="text"
                  id="contrato"
                  name="contrato"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Data de assinatura do contrato"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Último ajuste <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('ultimoAjuste')}
                  type="text"
                  id="ultimoAjuste"
                  name="ultimoAjuste"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Data do último ajuste"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Instruções para faturamento
              </label>
              <textarea
                {...formik.getFieldProps('instrucoesParaFaturmento')}
                type="text"
                id="instrucoesParaFaturmento"
                name="instrucoesParaFaturmento"
                className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2 text-[#222222]`}
                placeholder="Digite as instruções"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Outras informações
          </span>

          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tabela de serviço
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.tabelaDeServico}
                  setSelect={(e) => formik.setFieldValue('tabelaDeServico', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'tabela_servico')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione a tabela de serviço'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tabela base
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.tabelaBase}
                  setSelect={(e) => formik.setFieldValue('tabelaBase', e)}
                  options={fields
                    ?.find((element) => element?.nomeCampo === 'tabela_base')
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione a tabela base'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Tabela material<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={formik.values.tabelaMaterial}
                  setSelect={(e) => formik.setFieldValue('tabelaMaterial', e)}
                  options={fields
                    ?.find(
                      (element) => element?.nomeCampo === 'tabela_material',
                    )
                    ?.alternativas.map((i) => {
                      return {
                        id: i.id,
                        label: i.textoAlternativa,
                      }
                    })}
                  placeholder={'Selecione a tabela material'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                >
                  Co-Participação
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${formik.values.coParticipacao ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() => formik.setFieldValue('coParticipacao', true)}
                  >
                    SIM
                  </button>
                  <button
                    type="button"
                    className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${formik.values.coParticipacao ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() =>
                      formik.setFieldValue('coParticipacao', false)
                    }
                  >
                    NÃO
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
                >
                  Nota fiscal exige na fatura
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${formik.values.notaFiscalfatura ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() =>
                      formik.setFieldValue('notaFiscalfatura', true)
                    }
                  >
                    SIM
                  </button>
                  <button
                    type="button"
                    className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${formik.values.notaFiscalfatura ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() =>
                      formik.setFieldValue('notaFiscalfatura', false)
                    }
                  >
                    NÃO
                  </button>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Contato<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  {...formik.getFieldProps('contato')}
                  type="text"
                  id="contato"
                  name="contato"
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite as informações do contato"
                />
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Instruções
                </label>
                <textarea
                  {...formik.getFieldProps('instrucoes')}
                  type="text"
                  id="instrucoes"
                  name="instrucoes"
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2 text-[#222222]`}
                  placeholder="Digite as insntruções"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Observações gerais
                </label>
                <textarea
                  {...formik.getFieldProps('observacoes')}
                  type="text"
                  id="observacoes"
                  name="observacoes"
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2 text-[#222222]`}
                  placeholder="Digite as observações gerais"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesEspecificas
