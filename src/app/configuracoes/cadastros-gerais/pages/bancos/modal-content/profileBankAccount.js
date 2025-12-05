import { Outfit400, Outfit500 } from '@/fonts'
import dayjs from 'dayjs'

const ProfileBankAccount = ({ account }) => {
  console.log(account)
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex h-[62px] items-center justify-between rounded-xl bg-[#F9F9F9] px-4">
        <p
          className={`${Outfit500.className} text-[20px] text-[#057B64] uppercase`}
        >
          {account?.tipo_conta === 'corrente'
            ? 'CONTA CORRENTE'
            : 'CONTA POUPANÇA'}
        </p>
        <div className="flex gap-6">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(account?.createdAt).format('DD/MM/YYYY - hh:mm')}
              {/* {account?.nomeResponsavel} */}
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(account.updatedAt).format('DD/MM/YYYY - hh:mm')}
              {/* {account?.nomeResponsavel} */}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Financeiro
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 justify-between">
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Banco
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {account?.banco.nome}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Descrição
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {account?.observacoes}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Tipo de conta
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {account?.tipo_conta === 'poupanca' ? 'Poupança' : 'Corrente'}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Agência/Conta
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {account?.agencia}-{account?.digito_agencia} /{' '}
                {account?.numero_conta}-{account?.digito_conta}
              </label>
            </div>
            <div className="flex flex-col">
              <label
                className={`${Outfit400.className} text-[14px] text-[#494949]`}
              >
                Chave pix
              </label>
              <label
                className={`${Outfit400.className} text-[16px] text-[#222222]`}
              >
                {account?.chave_pix}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileBankAccount
