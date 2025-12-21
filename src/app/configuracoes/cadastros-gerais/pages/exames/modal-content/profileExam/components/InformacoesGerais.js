import { Outfit400 } from '@/fonts'

const InformacoesGerais = ({ selectedExam }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
        Informações básicas
      </p>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Código interno
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.codigo_interno}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Sinônimo para o exame
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {Array.isArray(selectedExam?.sinonimos)
                ? selectedExam.sinonimos.filter(Boolean).join(', ')
                : selectedExam?.sinonimos || ''}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Código TUSS
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.tuss?.termo}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Código LOINC
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.codigo_loinc}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Código SUS
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.codigo_sus}
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Código AMB
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.amb?.descricao}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Tipo de exame
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.tipoExameAlternativa?.textoAlternativa}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Especialidade do exame
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              * faltando na API *
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Setor
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {selectedExam?.setorAlternativa?.textoAlternativa}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformacoesGerais
