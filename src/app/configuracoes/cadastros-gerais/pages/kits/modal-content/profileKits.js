import { Outfit400, Outfit500 } from '@/fonts'
import { formatCep } from '@/utils'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

const ProfileUnitHealth = ({ unit = {} }) => {
  console.log(unit)
  return (
    <div className="flex flex-col gap-6 bg-[#FFF] p-6">
      <div className="flex h-[62px] items-center justify-between rounded-xl bg-[#F9F9F9] px-4">
        <p
          className={`${Outfit500.className} text-[20px] text-[#057B64] uppercase`}
        >
          Nome do kit
        </p>
        <div className="flex gap-6">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(unit?.createdAt).format('DD/MM/YYYY - hh:mm')} /{' '}
              {unit?.nomeResponsavel}
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(unit?.updatedAt).format('DD/MM/YYYY - hh:mm')} /{' '}
              {unit?.nomeResponsavel}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Informacoes gerais
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              ID kit
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {formatCep(unit?.cep)}
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
              {formatCep(unit?.cep)}
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
              {unit?.rua}/{unit?.numero}/{unit?.bairro}
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
              {unit?.complemento}
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Configuração de uso
        </p>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Tipo de kit
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit?.nomeResponsavel}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              Prazo de entrega padrão
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit?.contatoResponsavel}
            </label>
          </div>
          <div className="flex flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              CNPJ associado
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit?.emailResponsavel}
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <label
            className={`${Outfit400.className} text-[14px] text-[#494949]`}
          >
            Tipo de kit
          </label>
          <label
            className={`${Outfit400.className} text-[16px] text-[#222222]`}
          >
            {unit?.nomeResponsavel}
          </label>
        </div>
      </div>
    </div>
  )
}

export default ProfileUnitHealth
