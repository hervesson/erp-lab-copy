import CustomMultiSelect from '@/components/CustomMultiSelect'
import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { CloseCircle, DocumentDownload, InfoCircle } from 'iconsax-reactjs'

const InformacoesInternas = ({ formik, fields, samples }) => {
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
              Metodologia utilizada
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.metodologiaUtilizada}
              setSelect={(e) => formik.setFieldValue('metodologiaUtilizada', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'metodologia')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma metodologia'}
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
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
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
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
          <div className="flex flex-col gap-1">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Altura
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
              Volume
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.volume ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() => formik.setFieldValue('volume', true)}
              >
                SIM
              </button>
              <button
                type="button"
                className={`flex h-10 w-[50px] items-center justify-center rounded-lg ${formik.values.volume ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                onClick={() => formik.setFieldValue('volume', false)}
              >
                NÃO
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Amostra biológica necessária
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.amostraBiologicaNecessaria}
              setSelect={(e) =>
                formik.setFieldValue('amostraBiologicaNecessaria', e)
              }
              options={samples}
              placeholder={'Selecione uma amostra'}
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Amostra a enviar<strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.amostraAEnviar}
              setSelect={(e) => formik.setFieldValue('amostraAEnviar', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'amostra')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma amostra'}
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Tipo de recipiente para coleta
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.tipoDeRecipiente}
              setSelect={(e) => formik.setFieldValue('tipoDeRecipiente', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'tipo_recipiente')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione um recipiente para coleta'}
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Região de coleta<strong className="text-[#F23434]">*</strong>
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
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
          </div>
          <div className="flex flex-col justify-end gap-1">
            <button
              type="button"
              className={`${Outfit400.className} flex h-10 w-28 items-center justify-center rounded-lg border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              onClick={() => {
                if (
                  !formik?.values?.regiao_coleta_ids?.includes(
                    formik?.values?.regiaoDeColeta,
                  ) &&
                  formik.values.regiaoDeColeta.id
                ) {
                  formik.setFieldValue('regiao_coleta_ids', [
                    ...formik.values.regiao_coleta_ids,
                    formik.values.regiaoDeColeta,
                  ])
                  formik.setFieldValue('regiaoDeColeta', {})
                }
              }}
            >
              ADICIONAR
            </button>
          </div>
          {formik?.values?.regiao_coleta_ids?.length > 0 ? (
            <div className="flex flex-2 gap-1">
              {formik?.values?.regiao_coleta_ids?.map((item, index) => {
                return (
                  <div
                    key={index.toString()}
                    className={`h-10 self-end bg-[#E0FFF9] ${Outfit400.className} flex items-center gap-3 rounded-[50px] px-3 text-[14px] text-[#0F9B7F]`}
                  >
                    {item.label}
                    <CloseCircle
                      size="22"
                      color="#F23434"
                      variant="Bold"
                      onClick={() =>
                        formik.setFieldValue(
                          'regiao_coleta_ids',
                          formik.values.regiao_coleta_ids.filter(
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
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Volume minímo requerido
              <strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.valorMinimoRequerido}
              setSelect={(e) => formik.setFieldValue('valorMinimoRequerido', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'volume_minimo')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione um volume minímo'}
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Estabilidade<strong className="text-[#F23434]">*</strong>
            </label>
            <CustomSelect
              select={formik.values.estabilidade}
              setSelect={(e) => formik.setFieldValue('estabilidade', e)}
              options={fields
                ?.find((element) => element?.nomeCampo === 'estabilidade')
                ?.alternativas.map((i) => {
                  return {
                    id: i.id,
                    label: i.textoAlternativa,
                  }
                })}
              placeholder={'Selecione uma estabilidade'}
              className={
                'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
              }
            />
          </div>
        </div>
      </div>

      {/* Formulário para atendimento */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Formulário para atendimento
        </span>
        <div className="flex gap-4">
          <div className="flex h-[52px] w-[557px] items-center justify-center gap-3 rounded-lg border-[#A9A9A9] bg-[#F9F9F9]">
            <DocumentDownload size="28" color="#737373" />
            <span className={`${Outfit300.className} text-[#222] uppercase`}>
              Anexar formulários de atendimento
            </span>
          </div>
        </div>
      </div>

      {/* Prepararo e coleta */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Prepararo e coleta
        </span>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Preparo - Público geral
              <strong className="text-[#F23434]">*</strong>
            </label>
            <textarea
              {...formik.getFieldProps('preparoPublicoGeral')}
              type="text"
              id="preparoPublicoGeral"
              name="preparoPublicoGeral"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de preparo"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Preparo - Feminino
            </label>
            <textarea
              {...formik.getFieldProps('preparoFeminino')}
              type="text"
              id="preparoFeminino"
              name="preparoFeminino"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de preparo"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Preparo - Infantil
            </label>
            <textarea
              {...formik.getFieldProps('preparoInfantil')}
              type="text"
              id="preparoInfantil"
              name="preparoInfantil"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de preparo"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Coleta - Público geral
              <strong className="text-[#F23434]">*</strong>
            </label>
            <textarea
              {...formik.getFieldProps('coletaPublicoGeral')}
              type="text"
              id="coletaPublicoGeral"
              name="coletaPublicoGeral"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de coleta"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Coleta - Feminino
            </label>
            <textarea
              {...formik.getFieldProps('coletaFeminino')}
              type="text"
              id="coletaFeminino"
              name="coletaFeminino"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de coleta"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Coleta - Infantil
            </label>
            <textarea
              {...formik.getFieldProps('coletaInfantil')}
              type="text"
              id="coletaInfantil"
              name="coletaInfantil"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de coleta"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Técnica de coleta
              <strong className="text-[#F23434]">*</strong>
            </label>
            <textarea
              {...formik.getFieldProps('tecnicaDeColeta')}
              type="text"
              id="tecnicaDeColeta"
              name="tecnicaDeColeta"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Preencha com as instruções de coleta"
            />
          </div>
        </div>
      </div>

      {/* Lembretes */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Lembretes
        </span>

        <div className="flex gap-4">
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Coletora
            </label>
            <textarea
              {...formik.getFieldProps('lembretesColetora')}
              type="text"
              id="lembretesColetora"
              name="lembretesColetora"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Caso necessário deixe um lembrete pra coletora"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Recepcionista - Agendamentos e Orçamentos
            </label>
            <textarea
              {...formik.getFieldProps('lembretesRecepcionistaAgendamentos')}
              type="text"
              id="lembretesRecepcionistaAgendamentos"
              name="lembretesRecepcionistaAgendamentos"
              className={`rounded-lg border border-[#A9A9A9] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F] ${Outfit400.className} p-2 text-[#222222]`}
              placeholder="Caso necessário deixe um lembrete para a recepcionista"
            />
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <label
              className={`${Outfit400.className} text-[14px] text-[#222222]`}
            >
              Recepcionista - Ordem de serviço
            </label>
            <textarea
              {...formik.getFieldProps('lembretesRecepcionistaOrdemDeServico')}
              type="text"
              id="lembretesRecepcionistaOrdemDeServico"
              name="lembretesRecepcionistaOrdemDeServico"
              className={`rounded-lg border border-[#A9A9A9] ${Outfit400.className} p-2 text-[#222222] outline-0 hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Caso necessário deixe um lembrete para recepcionista"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label
            className={`${Outfit400.className} text-[14px] text-[#222222]`}
          >
            Distribuição
          </label>
          <input
            {...formik.getFieldProps('lembretesDistribuicao')}
            type="text"
            id="lembretesDistribuicao"
            name="lembretesDistribuicao"
            className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
            placeholder="Preencha sobre a distribuição"
          />
        </div>
      </div>

      {/* Processamento e entrega de laudos */}
      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Processamento e entrega de Laudos
        </span>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Prazo de entrega dos resultados (em dias)
                <strong className="text-[#F23434]">*</strong>
              </label>
              <input
                {...formik.getFieldProps('prazoDeEntrega')}
                type="text"
                id="prazoDeEntrega"
                name="prazoDeEntrega"
                className={`${Outfit400.className} ring-none flex h-10 items-center justify-center rounded-lg border border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
                placeholder="Digite um prazo pra entrega dos resultados"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Formato do laudo
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomMultiSelect
                select={formik.values.formatoLaudo}
                setSelect={(e) => formik.setFieldValue('formatoLaudo', e)}
                options={[
                  { id: 'PDF', label: 'PDF' },
                  { id: 'XML', label: 'XML' },
                  { id: 'HTML', label: 'HTML' },
                  { id: 'TEXTO', label: 'TEXTO' },
                  { id: 'FORMULÁRIO', label: 'FORMULÁRIO' },
                  { id: 'DICOM', label: 'DICOM' },
                ]}
                placeholder={'Selecione um formato'}
                className={
                  'border border-[#BBBBBB] hover:border-[#0F9B7F] focus:border-[#0F9B7F]'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesInternas
