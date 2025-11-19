import { Outfit400 } from '@/fonts'
import { formatPhoneNumber } from '@/utils'

const Responsaveis = ({ formik }) => {
  return (
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
              {...formik.getFieldProps('nomeResponsavel')}
              type="text"
              id="nomeResponsavel"
              name="nomeResponsavel"
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
              {...formik.getFieldProps('emailResponsavel')}
              type="email"
              id="emailResponsavel"
              name="emailResponsavel"
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none hover:border-[#0F9B7F] focus:border-[#0F9B7F]`}
              placeholder="Digite o email de contato do responsável"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Responsaveis
