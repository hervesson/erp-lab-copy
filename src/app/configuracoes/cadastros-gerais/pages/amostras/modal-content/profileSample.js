import { IsActive } from '@/components/IsActive'
import { Outfit400, Outfit500 } from '@/fonts'
import dayjs from 'dayjs'
import { StatusLaboratorio } from '../components/statuslaboratorio'

const ProfileMethod = ({ unit }) => {
  console.log(unit)
  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex h-[62px] items-center justify-between rounded-xl bg-[#F9F9F9] px-[16px]">
        <p
          className={`${Outfit500.className} text-[20px] text-[#057B64] uppercase`}
        >
          {unit.nome}
        </p>
        <div className="flex gap-6">
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Cadastrado em
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(unit.createdAt).format('DD/MM/YYYY - hh:mm')}
            </p>
          </div>
          <div className="">
            <p className={`${Outfit400.className} text-[14px] text-[#494949]`}>
              Última edição
            </p>
            <p className={`${Outfit400.className} text-[16px] text-[#057B64]`}>
              {dayjs(unit.updatedAt).format('DD/MM/YYYY - hh:mm')}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className={`text-[16px] text-[#0F9B7F] ${Outfit400.className}`}>
          Informações gerais
        </p>

        <div className="flex h-[84px] flex-1 items-center justify-between">
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
              Descrição
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.descricao}
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
              <IsActive active={unit.status} />
            </label>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              laboratório de apoio associado
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            >
              {unit.inscricaoEstadual}
            </label>
          </div>
          <div className="flex flex-1 flex-col">
            <label
              className={`${Outfit400.className} text-[14px] text-[#494949]`}
            >
              observação
            </label>
            <label
              className={`${Outfit400.className} text-[16px] text-[#222222]`}
            ></label>
          </div>
        </div>
        {unit?.laboratorioMetodos.map((item, index) => {
          return (
            <div
              className="flex flex-1 items-center justify-between"
              key={index.toString()}
            >
              <div className="flex flex-1 flex-col">
                <label
                  className={`${Outfit400.className} text-[16px] text-[#222222]`}
                >
                  ***Aqui vai o nome do laboratório***
                </label>
              </div>
              <div className="flex flex-1 flex-col">
                <StatusLaboratorio active={true} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProfileMethod
