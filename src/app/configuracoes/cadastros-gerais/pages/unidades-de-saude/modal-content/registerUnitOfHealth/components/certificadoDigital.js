import { Outfit300, Outfit400 } from '@/fonts'

const CertificadoDigital = () => {
  return (
    <div className="flex flex-col gap-[16px]">
      <span
        className={`${Outfit400.className} h-[28px] text-[16px] text-[#0F9B7F]`}
      >
        Certificado digital
      </span>

      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-1 gap-2">
          <button
            onClick={cert ? () => setCert(null) : () => handleClick()}
            type="button"
            className={`${Outfit400.className} ${cert ? 'border border-[#F23434] text-[#F23434]' : 'border border-[#0F9B7F] text-[#0F9B7F]'} flex h-[40px] w-[235px] items-center justify-evenly rounded-[8px]`}
          >
            <Link
              size="28"
              color={cert ? '#F23434' : '#0F9B7F'}
              variant="TwoTone"
            />
            {cert ? 'REMOVER CERTIFICADO' : 'VINCULAR CERTIFICADO'}
          </button>
          {cert ? (
            <div className="flex h-[40px] items-center gap-2 rounded-[8px] bg-[#E9FDEE] px-3">
              <InfoCircle size="20" color="#2CB04B" variant="Bulk" />
              <label
                className={`${Outfit300.className} text-[14px] text-[#2CB04B]`}
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

export default CertificadoDigital
