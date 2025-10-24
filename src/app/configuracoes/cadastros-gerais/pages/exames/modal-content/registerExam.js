import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import { DocumentDownload, InfoCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const RegisterExams = ({ onClose }) => {
  // Informações básicas
  const [examName, setExamName] = useState('')
  const [internalCode, setInternalCode] = useState('')
  const [synonyms, setSynonyms] = useState('')
  const [TUSSCode, setTUSSCode] = useState('')
  const [LOINCCOde, setLOINCCOde] = useState('')
  const [SUSCode, setSUSCode] = useState('')
  const [AMBCode, setAMBCode] = useState('')
  const [examType, setExamType] = useState('')
  const [specialty, setSpecialty] = useState('')
  const [group, setGroup] = useState('')
  const [subGroup, setSubGroup] = useState('')
  const [sector, setSector] = useState('')
  const [methodologyUsed, setMethodologyUsed] = useState('')
  const [unitOfMeasure, setUnitOfMeasure] = useState('')

  // Requisitos
  const [biologicalSampleRequired, setBiologicalSampleRequired] = useState('')
  const [sampleWhenSending, setSampleWhenSending] = useState('')
  const [collectionRegion, setCollectionRegion] = useState('')
  const [minimumRequiredVolume, setMinimumRequiredVolume] = useState('')
  const [estability, setEstability] = useState('')

  /* Integração e regulação */
  const [unitsPerformExamination, setUnitsPerformExamination] = useState('')
  const [examDestination, setExamDestination] = useState('')
  const [supportLaboratory, setSupportLaboratory] = useState('')
  const [telemedicine, setTelemedicine] = useState('')
  const [consentForm, setConsentForm] = useState(true)
  const [requirementsStandards, setRequirementsStandards] = useState('')

  // Formulários
  // const [serviceForm, setServiceForm] = useState('')

  // Preparo e coleta
  const [generalPreparation, setGeneralPreparation] = useState('')
  const [femalePreparation, setFemalePreparation] = useState('')
  const [childPreparation, setChildPreparation] = useState('')
  const [generalCollection, setGeneralCollection] = useState('')
  const [femaleCollection, setFemaleCollection] = useState('')
  const [childCollection, setChildCollection] = useState('')
  const [collectionTechnique, setCollectionTechnique] = useState('')

  // Lembretes

  const [collector, setCollector] = useState('')
  const [schedulingReceptionist, setChedulingReceptionist] = useState('')
  const [orderReceptionist, setOrderReceptionist] = useState('')
  const [distribution, setDistribution] = useState('')

  // Processamento e Entrega de Laudos
  const [deliveryTime, setDeliveryTime] = useState('')
  const [reportFormat, setReportFormat] = useState('')
  // const [normalValueReferences, setNormalValueReferences] = useState('')
  const [recipientType, setRecipientType] = useState('')

  const handleSubmit = () => {
    const payload = {
      codigo_interno: internalCode,
      nome: examName,
      sinonimos: synonyms,
      codigo_tuss: TUSSCode,
      codigo_amb: AMBCode,
      codigo_sus: SUSCode,
      tipo_exame_id: examType,
      categoria: 'laboratorio',
      subgrupo_id: subGroup,
      setor_id: sector,
      metodologia: methodologyUsed,
      especialidade_requerida: specialty,
      grupo: group,
      peso: 100,
      volume_min: 2.5,
      volume_ideal: 5.0,
      unidade_medida: unitOfMeasure,
      amostra_biologica: biologicalSampleRequired,
      tipo_recipiente: recipientType,
      necessita_preparo: 'sim',
      requisitos: requirementsStandards,
      tipo_realizacao: 'interno',
      prazo_entrega_dias: deliveryTime,
      formato_prazo: '1 dia útil',
      tem_valores_referencia: 'sim',
      valores_referencia: {
        adulto_masculino: {
          hemoglobina: { min: 13.5, max: 17.5, unidade: 'g/dL' },
          hematocrito: { min: 39, max: 50, unidade: '%' },
        },
        adulto_feminino: {
          hemoglobina: { min: 12.0, max: 15.5, unidade: 'g/dL' },
          hematocrito: { min: 35, max: 45, unidade: '%' },
        },
      },
      tecnica_coleta: collectionTechnique,
      preparo_coleta: {
        geral: 'Jejum de 4 horas',
        feminino: 'Informar se está menstruada',
        infantil: 'Jejum de 2 horas para crianças',
      },
      lembretes: {
        coletores: 'Homogeneizar suavemente o tubo após coleta',
        recepcionistas: 'Verificar jejum do paciente',
        ordem_servico: 'Coletar em tubo EDTA (roxo)',
      },
      status: 'ativo',
      empresa_id: '1',
    }
  }

  return (
    <form className="flex h-screen flex-col bg-[#F9F9F9]" onSubmit={() => null}>
      <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
        <div className="flex flex-col">
          <span
            className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
          >
            Cadastrar
          </span>
          <span
            className={` ${Outfit500.className} text-[16px] text-[#222222]`}
          >
            Exames
          </span>
        </div>
        <div className="flex gap-[16px]">
          <button className="flex h-[44px] w-[120px] items-center justify-evenly rounded-[8px] bg-[#F9F9F9] hover:bg-[#E0FFF9]">
            <span className={`${Outfit300.className} text-[#222222]`}>
              Baixar planilha
            </span>
          </button>
          <button className="flex h-[44px] w-[166px] items-center justify-evenly rounded-[8px] bg-[#F9F9F9] hover:bg-[#E0FFF9]">
            <DocumentDownload size="28" color="#A9A9A9" variant="Bold" />
            <span className={`${Outfit300.className} text-[#222222]`}>
              Importar arquivo
            </span>
          </button>
          <div className="border border-[#BBBBBB]" />
          <button
            type="button"
            onClick={() => onClose()}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434] hover:bg-[#FFE6E6]"
          >
            <span className={`${Outfit400.className} text-[#F23434] uppercase`}>
              Cancelar
            </span>
          </button>
          <button
            type="button"
            onClick={() => null}
            className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] bg-[#A9A9A9] hover:bg-[#E0FFF9]"
          >
            <span className={`${Outfit400.className} text-[#494949] uppercase`}>
              Finalizar
            </span>
          </button>
        </div>
      </div>
      <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
        <div className="mx-[48px] my-[28px] flex h-fit flex-1 flex-col gap-[32px] rounded bg-[#fff] p-[48px]">
          {/* Informacoes */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Informações básicas
            </span>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Nome do exame
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o nome do exame"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={internalCode}
                    onChange={(e) => setInternalCode(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o código interno"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Sinônimos para o exame
                  </label>
                  <input
                    value={synonyms}
                    onChange={(e) => setSynonyms(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite todos os sinônimos"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <div className="flex justify-between">
                    <label
                      className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                    >
                      Código TUSS<strong className="text-[#F23434]">*</strong>
                    </label>
                    <InfoCircle size="20" color="#A1A1A1" />
                  </div>
                  <input
                    value={TUSSCode}
                    onChange={(e) => setTUSSCode(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o código TUSS"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <div className="flex flex-col gap-[4px]">
                    <label
                      className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                    >
                      Código LOINC
                      <InfoCircle size="20" color="#A1A1A1" />
                    </label>
                    <input
                      value={LOINCCOde}
                      onChange={(e) => setLOINCCOde(e.target.value)}
                      className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                      placeholder="Digite o código LOINC"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <div className="flex justify-between">
                    <label
                      className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                    >
                      Código SUS
                    </label>
                    <InfoCircle size="20" color="#A1A1A1" />
                  </div>
                  <input
                    value={SUSCode}
                    onChange={(e) => setSUSCode(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o codigo SUS"
                  />
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <div className="flex justify-between">
                    <label
                      className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                    >
                      Código AMB
                    </label>
                    <InfoCircle size="20" color="#A1A1A1" />
                  </div>
                  <input
                    value={AMBCode}
                    onChange={(e) => setAMBCode(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o código AMB"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Tipo de exame<strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={examType}
                    setSelect={(e) => setExamType(e)}
                    options={[{ id: 1, label: 'LABORATORIAL' }]}
                    placeholder={'Selecione o tipo de exame'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Especialidade do exame
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={specialty}
                    setSelect={(e) => setSpecialty(e)}
                    options={[
                      { id: 1, label: 'HEMATOLOGIA' },
                      { id: 2, label: '2' },
                    ]}
                    placeholder={'Selecione uma especialidade'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Grupo
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={group}
                    setSelect={(e) => setGroup(e)}
                    options={[{ id: 1, label: 'PROCEDIMENTOS LABORATORIAIS' }]}
                    placeholder={'Selecione um grupo'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex text-[14px] text-[##222222]`}
                  >
                    SubGrupo<strong className="text-[#F23434]">*</strong>
                  </label>

                  <CustomSelect
                    select={subGroup}
                    setSelect={(e) => setSubGroup(e)}
                    options={[{ id: 1, label: 'HEMATOLOGIA LABORATORIAL' }]}
                    placeholder={'Selecione um SubGrupo'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Setor<strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={sector}
                    setSelect={(e) => setSector(e)}
                    options={[{ id: 1, label: 'ANALISES CLÍNICAS' }]}
                    placeholder={'Selecione um setor'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Metodologia utilizada
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={methodologyUsed}
                    setSelect={(e) => setMethodologyUsed(e)}
                    options={[{ id: 1, label: 'ENZIMAIMUNOENSAIO' }]}
                    placeholder={'Selecione uma metodologia'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Unidade de medida
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={unitOfMeasure}
                    setSelect={(e) => setUnitOfMeasure(e)}
                    options={[{ id: 1, label: 'mg/dL' }]}
                    placeholder={'Selecione uma unidade de medida'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                  >
                    Peso
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#F9F9F9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => null}
                    >
                      SIM
                    </button>
                    <button
                      type="button"
                      className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#E0FFF9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => null}
                    >
                      NÃO
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                  >
                    Altura
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#F9F9F9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => null}
                    >
                      SIM
                    </button>
                    <button
                      type="button"
                      className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#E0FFF9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => null}
                    >
                      NÃO
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                  >
                    Volume
                  </label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#F9F9F9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => null}
                    >
                      SIM
                    </button>
                    <button
                      type="button"
                      className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#E0FFF9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                      onClick={() => null}
                    >
                      NÃO
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Requisitos */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Requisitos para realização do exame
            </span>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Amostra biológica necessária
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={biologicalSampleRequired}
                  setSelect={(e) => setBiologicalSampleRequired(e)}
                  options={[{ id: 1, label: 'SANGUE' }]}
                  placeholder={'Selecione uma amostra'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Amostra a enviar<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={sampleWhenSending}
                  setSelect={(e) => setSampleWhenSending(e)}
                  options={[{ id: 1, label: 'SORO' }]}
                  placeholder={'Selecione uma amostra'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Tipo de recipiente para coleta
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={recipientType}
                  setSelect={(e) => setRecipientType(e)}
                  options={[{ id: 1, label: 'TUBO COM EDTA' }]}
                  placeholder={'Selecione um recipiente para coleta'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Região de coleta<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={collectionRegion}
                  setSelect={(e) => setCollectionRegion(e)}
                  options={[{ id: 1, label: 'NÃO SE APLICA' }]}
                  placeholder={'Selecione uma ou mais regioões de coleta'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-col justify-end gap-[4px]">
                <button
                  className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                >
                  ADICIONAR
                </button>
              </div>
              <div className="flex flex-2 flex-col justify-end gap-[4px]">
                <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                  <InfoCircle size="20" color="#737373" variant="Bulk" />
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#737373]`}
                  >
                    Nenhuma opção adicionada
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Volume minímo requerido
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={minimumRequiredVolume}
                  setSelect={(e) => setMinimumRequiredVolume(e)}
                  options={[{ id: 1, label: '2ML' }]}
                  placeholder={'Selecione um volume minímo'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[##222222]`}
                >
                  Estabilidade<strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={estability}
                  setSelect={(e) => setEstability(e)}
                  options={[{ id: 1, label: 'ATÉ 1 DIA ENTRE 2 E 8*C' }]}
                  placeholder={'Selecione uma estabilidade'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>
          </div>

          {/* Integração e regulação */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Integração e Regulação
            </span>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Unidades que realizam o exame
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={unitsPerformExamination}
                  setSelect={(e) => setUnitsPerformExamination(e)}
                  options={[
                    { id: 1, label: '1' },
                    { id: 2, label: '2' },
                  ]}
                  placeholder={'Selecione uma ou mais unidades'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-col justify-end gap-[4px]">
                <button
                  className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
                >
                  ADICIONAR
                </button>
              </div>
              <div className="flex flex-2 flex-col justify-end gap-[4px]">
                <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                  <InfoCircle size="20" color="#737373" variant="Bulk" />
                  <label
                    className={`${Outfit300.className} text-[14px] text-[#737373]`}
                  >
                    Nenhuma opção adicionada
                  </label>
                </div>
              </div>
            </div>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Destino do exame
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={examDestination}
                  setSelect={(e) => setExamDestination(e)}
                  options={[{ id: 1, label: 'INTERNO' }]}
                  placeholder={'Selecione o destino'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Laboratório de apoio
                </label>
                <CustomSelect
                  select={supportLaboratory}
                  setSelect={(e) => setSupportLaboratory(e)}
                  options={[
                    { id: 1, label: '1' },
                    { id: 2, label: '2' },
                  ]}
                  placeholder={'Selecione o laboratório de apoio'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Telemedicina
                </label>
                <CustomSelect
                  select={telemedicine}
                  setSelect={(e) => setTelemedicine(e)}
                  options={[
                    { id: 1, label: '1' },
                    { id: 2, label: '2' },
                  ]}
                  placeholder={'Selecione uma opção'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} flex justify-between text-[14px] text-[##222222]`}
                >
                  Termo de consentimento
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className={`${consentForm ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() => setConsentForm(true)}
                  >
                    SIM
                  </button>
                  <button
                    type="button"
                    className={`${consentForm ? 'bg-[#F9F9F9]' : 'bg-[#E0FFF9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#E0FFF9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                    onClick={() => setConsentForm(false)}
                  >
                    NÃO
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Requisitos da ANVISA/Normas Técnicas
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={requirementsStandards}
                  setSelect={(e) => setRequirementsStandards(e)}
                  options={[
                    {
                      id: 1,
                      label:
                        'RDC 20/2014 - REQUISITOS PARA TESTES RÁPIDOS DE HIV, SÍFILIS, HEPATITES B E C',
                    },
                  ]}
                  placeholder={'Selecione os requisitos'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>
            </div>
          </div>
          {/* Formulário para atendimento */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Formulário de atendimento
            </span>
            <div className="flex gap-[16px]">
              <div className="flex h-[52px] w-[557px] items-center justify-center gap-3 rounded-[8px] border-[#A9A9A9] bg-[#F9F9F9]">
                <DocumentDownload size="28" color="#737373" />
                <span className={`${Outfit300.className} uppercase`}>
                  Anexar formulários de atendimento
                </span>
              </div>
            </div>
          </div>

          {/* Prepararo e coleta */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Prepararo e coleta
            </span>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Preparo - Público geral
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <textarea
                  value={generalPreparation}
                  onChange={(e) => setGeneralPreparation(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de preparo"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Preparo - Feminino
                </label>
                <textarea
                  value={femalePreparation}
                  onChange={(e) => setFemalePreparation(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de preparo"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Preparo - Infantil
                </label>
                <textarea
                  value={childPreparation}
                  onChange={(e) => setChildPreparation(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de preparo"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Coleta - Público geral
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <textarea
                  value={generalCollection}
                  onChange={(e) => setGeneralCollection(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de coleta"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Coleta - Feminino
                </label>
                <textarea
                  value={femaleCollection}
                  onChange={(e) => setFemaleCollection(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de coleta"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Coleta - Infantil
                </label>
                <textarea
                  value={childCollection}
                  onChange={(e) => setChildCollection(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de coleta"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Técnica de coleta
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <textarea
                  value={collectionTechnique}
                  onChange={(e) => setCollectionTechnique(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Preencha com as instruções de coleta"
                />
              </div>
            </div>
          </div>

          {/* Lembretes */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Lembretes
            </span>

            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Coletora
                </label>
                <textarea
                  value={collector}
                  onChange={(e) => setCollector(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Caso necessário deixe um lembrete pra coletora"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Recepcionista - Agendamentos e Orçamentos
                </label>
                <textarea
                  value={schedulingReceptionist}
                  onChange={(e) => setChedulingReceptionist(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Caso necessário deixe um lembrete para a recepcionista"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Recepcionista - Ordem de serviço
                </label>
                <textarea
                  value={orderReceptionist}
                  onChange={(e) => setOrderReceptionist(e.target.value)}
                  className={`rounded-[8px] border border-[#A9A9A9] ${Outfit400.className} p-2`}
                  placeholder="Caso necessário deixe um lembrete para recepcionista"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[##222222]`}
              >
                Distribuição
              </label>
              <input
                value={distribution}
                onChange={(e) => setDistribution(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Preencha sobre a distribuição"
              />
            </div>
          </div>

          {/* Processamento e entrega de laudos */}
          <div className="flex flex-col gap-[16px]">
            <span
              className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}
            >
              Processamento e entrega de Laudos
            </span>

            <div className="flex flex-col gap-[16px]">
              <div className="flex gap-[16px]">
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Prazo de entrega dos resultados (em dias)
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite um prazo pra entrega dos resultados"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[##222222]`}
                  >
                    Formato do laudo
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={reportFormat}
                    setSelect={(e) => setReportFormat(e)}
                    options={[
                      { id: 1, label: 'PDF' },
                      { id: 2, label: 'XML' },
                      { id: 3, label: 'HTML' },
                      { id: 4, label: 'TEXTO' },
                      { id: 5, label: 'FORMULÁRIO' },
                      { id: 6, label: 'DICOM' },
                    ]}
                    placeholder={'Selecione um formato'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default RegisterExams
