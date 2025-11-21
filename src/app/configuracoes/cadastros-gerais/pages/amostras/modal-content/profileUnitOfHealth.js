import { Outfit300, Outfit400, Outfit500 } from '@/fonts'
import dayjs from 'dayjs'
import { InfoCircle } from 'iconsax-reactjs'

const ProfileUnitHealth = ({ unit }) => {
  return (
    <div className="flex flex-col gap-[24px] p-[24px]">
      <div className="flex h-[62px] items-center justify-between rounded-[12px] bg-[#F9F9F9] px-[16px]">
        <p
          className={`${Outfit500.className} text-[20px] text-[#057B64] uppercase`}
        >
          {unit.nomeUnidade}
        </p>
        <div className="flex gap-[24px]">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(unit.createdAt).format('DD/MM/YYYY - hh:mm')} /{' '}
              {unit.nomeResponsavel}
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(unit.updatedAt).format('DD/MM/YYYY - hh:mm')} /{' '}
              {unit.nomeResponsavel}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Informações básicas
        </p>
        <div className="flex">
          <div className="h-[84px] w-[84px] rounded border" />
          <div className="flex h-[84px] flex-1 items-center justify-between px-[16px]">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                CNPJ
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.cnpj}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Código interno
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.codigoInterno}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Razão social
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.razaoSocial}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Nome fantasia
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.nomeFantasia}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Inscrição municipal
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.inscricaoMunicipal}
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Inscrição estadual
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.inscricaoEstadual}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              CNES
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.cnes}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Contatos da unidade
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.contatosUnidade}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Email
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.email}
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Endereço
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Responsável
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.nomeResponsavel}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Contato
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.contatoResponsavel}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Email
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.emailResponsavel}
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Responsável
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Responsável
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.nomeResponsavel}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Contato
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.contatoResponsavel}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Email
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.emailResponsavel}
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Impostos
        </p>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                IRRF(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.irrfPercentual}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                PIS(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.pisPercentual}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                COFINS(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.cofinsPercentual}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                CSLL(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.csllPercentual}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                ISS(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.issPercentual}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                IBS(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.ibsPercentual}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                CBS(%)
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.cbsPercentual}
              </label>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Reter ISS
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.reterIss ? 'SIM' : 'NÃO'}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Reter IR
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.reterIr ? 'SIM' : 'NÃO'}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Reter PCC
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.reterPcc ? 'SIM' : 'NÃO'}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Reter IBS
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.reterIbs ? 'SIM' : 'NÃO'}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Reter CBS
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.reterCbs ? 'SIM' : 'NÃO'}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Optante pelo simples nacional
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {unit.optanteSimplesNacional ? 'SIM' : 'NÃO'}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Financeiro
        </p>
        <div className="flex flex-1 items-center justify-between">
          {unit.dadosBancarios.map((item, index) => {
            return (
              <div
                key={index.toString()}
                className="flex flex-1 justify-between"
              >
                <div className="flex flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#494949]`}
                  >
                    Banco
                  </label>
                  <label
                    className={`${Outfit400.className} text-[16px] text-[#222222]`}
                  >
                    {item.banco}
                  </label>
                </div>
                <div className="flex flex-col">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#494949]`}
                  >
                    Agência/CC
                  </label>
                  <label
                    className={`${Outfit400.className} text-[16px] text-[#222222]`}
                  >
                    {unit.contatoResponsavel}
                  </label>
                </div>
                {index !== unit.dadosBancarios.length - 1 && (
                  <div className="mx-3 border border-[#D4D4D4]" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Certificado Digital
        </p>
        <div className="flex flex-1 items-center justify-between">
          {unit.certificadoDigitalVinculado ? (
            <div className="flex h-[44px] items-center gap-3 rounded-[8px] bg-[#E9FDEE] px-2">
              <InfoCircle size="22" color="#2CB04B" variant="TwoTone" />
              <label
                className={`${Outfit300.className} text-[16px] text-[#2CB04B]`}
              >
                Certificado vinculado com sucesso
              </label>
            </div>
          ) : (
            <div className="flex h-[40px] items-center gap-2 rounded-[8px] bg-[#E7E7E7] px-3">
              <InfoCircle size="20" color="#737373" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#737373]`}
              >
                Certificado pendente
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfileUnitHealth
