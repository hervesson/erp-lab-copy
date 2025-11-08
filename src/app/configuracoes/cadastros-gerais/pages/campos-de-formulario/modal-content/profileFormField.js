import { Outfit400, Outfit500 } from '@/fonts'
import dayjs from 'dayjs'
import { Status } from '../components/status'

const ProfileBankAccount = ({ formField }) => {
  console.log(formField)
  return (
    <div className="flex flex-col gap-[24px] p-[24px]">
      <div className="flex h-[62px] items-center justify-between rounded-[12px] bg-[#F9F9F9] px-[16px]">
        <p
          className={`${Outfit500.className} text-[20px] text-[#057B64] uppercase`}
        >
          UNIDADE DE MEDIDA
        </p>
        <div className="flex gap-[24px]">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(formField?.createdAt).format('DD/MM/YYYY - hh:mm')}
              {/* {account?.nomeResponsavel} */}
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(formField.updatedAt).format('DD/MM/YYYY - hh:mm')}
              {/* {account?.nomeResponsavel} */}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Informações iniciais
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 justify-between">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Descrição
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {formField.descricao}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Status
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                <Status active={formField?.ativo} />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[12px]">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Alternativas
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 flex-col gap-[12px]">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Alternativas ATIVAS
              </label>
              <div className="flex gap-3">
                {formField.alternativas
                  .filter((e) => e.ativo)
                  .map((item, index) => {
                    return (
                      <button
                        className={`${Outfit400.className} h-[36px] rounded-[50px] bg-[#E0FFF9] px-2 text-[#0F9B7F]`}
                        key={index.toString()}
                      >
                        {item.textoAlternativa}
                      </button>
                    )
                  })}
              </div>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Alternativas Inativas
              </label>
              <div className="flex gap-3">
                {formField.alternativas
                  .filter((e) => !e.ativo)
                  .map((item, index) => {
                    return (
                      <button
                        className={`${Outfit400.className} h-[36px] rounded-[50px] bg-[#E0FFF9] px-2 text-[#0F9B7F]`}
                        key={index.toString()}
                      >
                        {item.textoAlternativa}
                      </button>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBankAccount
