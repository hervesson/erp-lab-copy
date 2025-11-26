import { Outfit400 } from '@/fonts'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-reactjs'
import { useState } from 'react'

const Atendimento = ({
  cadPacientesOpcionais,
  setCadPacientesOpcionais,
  cadPacientesObrigatorio,
  setCadPacientesObrigatorio,
  cadOrdemServicoOpcionais,
  setCadOrdemServicoOpcionais,
  cadOrdemServicoObrigatorio,
  setCadOrdemServicoObrigatorio,
  cadTissOpcionais,
  setCadTissOpcionais,
  cadTissObrigatorios,
  setCadTissObrigatorios,
}) => {
  // Cadastro de pacientes

  const [selectItemCadPaciente, setSelectItemCadPaciente] = useState(null)

  // Ordem de serviço

  const [selectItemCadOrdemServico, setSelectItemCadOrdemServico] =
    useState(null)

  // Tiss

  const [selectItemCadTiss, setSelectItemCadTiss] = useState(null)

  return (
    <div className="flex w-full flex-col gap-8 rounded bg-[#FFF] p-12">
      {/* Configuração */}

      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Cadastro de pacientes
        </span>

        <div className="flex gap-8">
          <div className="flex flex-1 flex-col">
            <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-1 overflow-auto bg-[#F9F9F9]">
              {cadPacientesOpcionais?.map((item, index) => {
                return (
                  <div
                    className={`mx-2 flex h-10 items-center rounded-lg p-2 ${item === selectItemCadPaciente ? 'bg-[#0F9B7F]' : 'bg-white'}`}
                    key={index.toString()}
                    onClick={() => setSelectItemCadPaciente(item)}
                  >
                    <span
                      className={`${Outfit400.className} text-[#737373] uppercase ${item === selectItemCadPaciente ? 'text-white' : 'text-[#737373]'}`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <button
              type="button"
              className="flex h-11 w-[52px] items-center justify-center rounded-lg bg-[#E7E7E7]"
              onClick={() => {
                setCadPacientesOpcionais(
                  cadPacientesOpcionais.filter(
                    (item) => item !== selectItemCadPaciente,
                  ),
                )

                const inc = cadPacientesObrigatorio.includes(
                  selectItemCadPaciente,
                )
                if (!inc) {
                  setCadPacientesObrigatorio((prev) => [
                    ...prev,
                    selectItemCadPaciente,
                  ])
                  setSelectItemCadPaciente(null)
                }
              }}
              disabled={selectItemCadPaciente === null}
            >
              <ArrowRight2 size="28" color="#3E3E3E" />
            </button>
            <button
              type="button"
              className="flex h-11 w-[52px] items-center justify-center rounded-lg bg-[#E7E7E7]"
              onClick={() => {
                setCadPacientesObrigatorio(
                  cadPacientesObrigatorio.filter(
                    (item) => item !== selectItemCadPaciente,
                  ),
                )
                const inc = cadPacientesOpcionais.includes(
                  selectItemCadPaciente,
                )
                if (!inc) {
                  setCadPacientesOpcionais((prev) => [
                    ...prev,
                    selectItemCadPaciente,
                  ])
                  setSelectItemCadPaciente(null)
                }
              }}
              disabled={selectItemCadPaciente === null}
            >
              <ArrowLeft2 size="28" color="#3E3E3E" />
            </button>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos obrigatórios
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-1 overflow-auto bg-[#F9F9F9]">
              {cadPacientesObrigatorio?.map((item, index) => {
                return (
                  <div
                    className={`mx-2 flex h-10 items-center rounded-lg p-2 ${item === selectItemCadPaciente ? 'bg-[#0F9B7F]' : 'bg-white'}`}
                    key={index.toString()}
                    onClick={() => setSelectItemCadPaciente(item)}
                  >
                    <span
                      className={`${Outfit400.className} text-[#737373] uppercase ${item === selectItemCadPaciente ? 'text-white' : 'text-[#737373]'}`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Ordem de serviço
        </span>

        <div className="flex gap-8">
          <div className="flex flex-1 flex-col">
            <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-1 overflow-auto bg-[#F9F9F9]">
              {cadOrdemServicoOpcionais?.map((item, index) => {
                return (
                  <div
                    className={`mx-2 flex h-10 items-center rounded-lg p-2 ${item === selectItemCadOrdemServico ? 'bg-[#0F9B7F]' : 'bg-white'}`}
                    key={index.toString()}
                    onClick={() => setSelectItemCadOrdemServico(item)}
                  >
                    <span
                      className={`${Outfit400.className} text-[#737373] uppercase ${item === selectItemCadOrdemServico ? 'text-white' : 'text-[#737373]'}`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <button
              type="button"
              className="flex h-11 w-[52px] items-center justify-center rounded-lg bg-[#E7E7E7]"
              onClick={() => {
                setCadOrdemServicoOpcionais(
                  cadOrdemServicoOpcionais.filter(
                    (item) => item !== selectItemCadOrdemServico,
                  ),
                )

                const inc = cadOrdemServicoObrigatorio.includes(
                  selectItemCadOrdemServico,
                )

                if (!inc) {
                  setCadOrdemServicoObrigatorio((prev) => [
                    ...prev,
                    selectItemCadOrdemServico,
                  ])
                  setSelectItemCadOrdemServico(null)
                }
              }}
              disabled={selectItemCadOrdemServico === null}
            >
              <ArrowRight2 size="28" color="#3E3E3E" />
            </button>
            <button
              type="button"
              className="flex h-11 w-[52px] items-center justify-center rounded-lg bg-[#E7E7E7]"
              onClick={() => {
                setCadOrdemServicoObrigatorio(
                  cadOrdemServicoObrigatorio.filter(
                    (item) => item !== selectItemCadOrdemServico,
                  ),
                )
                const inc = cadOrdemServicoOpcionais.includes(
                  selectItemCadOrdemServico,
                )

                if (!inc) {
                  setCadOrdemServicoOpcionais((prev) => [
                    ...prev,
                    selectItemCadOrdemServico,
                  ])
                  setSelectItemCadOrdemServico(null)
                }
              }}
              disabled={selectItemCadOrdemServico === null}
            >
              <ArrowLeft2 size="28" color="#3E3E3E" />
            </button>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-1 overflow-auto bg-[#F9F9F9]">
              {cadOrdemServicoObrigatorio?.map((item, index) => {
                return (
                  <div
                    className={`mx-2 flex h-10 items-center rounded-lg p-2 ${item === selectItemCadOrdemServico ? 'bg-[#0F9B7F]' : 'bg-white'}`}
                    key={index.toString()}
                    onClick={() => setSelectItemCadOrdemServico(item)}
                  >
                    <span
                      className={`${Outfit400.className} text-[#737373] uppercase ${item === selectItemCadOrdemServico ? 'text-white' : 'text-[#737373]'}`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          TISS
        </span>

        <div className="flex gap-8">
          <div className="flex flex-1 flex-col">
            <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-1 overflow-auto bg-[#F9F9F9]">
              {cadTissOpcionais?.map((item, index) => {
                return (
                  <div
                    className={`mx-2 flex h-10 items-center rounded-lg p-2 ${item === selectItemCadTiss ? 'bg-[#0F9B7F]' : 'bg-white'}`}
                    key={index.toString()}
                    onClick={() => setSelectItemCadTiss(item)}
                  >
                    <span
                      className={`${Outfit400.className} text-[#737373] uppercase ${item === selectItemCadTiss ? 'text-white' : 'text-[#737373]'}`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1">
            <button
              type="button"
              className="flex h-11 w-[52px] items-center justify-center rounded-lg bg-[#E7E7E7]"
              onClick={() => {
                setCadTissOpcionais(
                  cadTissOpcionais.filter((item) => item !== selectItemCadTiss),
                )

                const inc = cadTissObrigatorios.includes(selectItemCadTiss)
                if (!inc) {
                  setCadTissObrigatorios((prev) => [...prev, selectItemCadTiss])
                  setSelectItemCadTiss(null)
                }
              }}
              disabled={selectItemCadTiss === null}
            >
              <ArrowRight2 size="28" color="#3E3E3E" />
            </button>
            <button
              type="button"
              className="flex h-11 w-[52px] items-center justify-center rounded-lg bg-[#E7E7E7]"
              onClick={() => {
                setCadTissObrigatorios(
                  cadTissObrigatorios.filter(
                    (item) => item !== selectItemCadTiss,
                  ),
                )

                const inc = cadTissOpcionais.includes(selectItemCadTiss)

                if (!inc) {
                  setCadTissOpcionais((prev) => [...prev, selectItemCadTiss])
                  setSelectItemCadTiss(null)
                }
              }}
              disabled={selectItemCadTiss === null}
            >
              <ArrowLeft2 size="28" color="#3E3E3E" />
            </button>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-10 items-center justify-between rounded-tl-lg rounded-tr-lg bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-1 overflow-auto bg-[#F9F9F9]">
              {cadTissObrigatorios?.map((item, index) => {
                return (
                  <div
                    className={`mx-2 flex h-10 items-center rounded-lg p-2 ${item === selectItemCadTiss ? 'bg-[#0F9B7F]' : 'bg-white'}`}
                    key={index.toString()}
                    onClick={() => setSelectItemCadTiss(item)}
                  >
                    <span
                      className={`${Outfit400.className} text-[#737373] uppercase ${item === selectItemCadTiss ? 'text-white' : 'text-[#737373]'}`}
                    >
                      {item}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Tratamemnto ambulatorial
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Internamento
        </span>

        <div className="flex gap-[32px]">
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OPCIONAIS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-[4px]">
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
            <div className="flex h-[44px] w-[52px] items-center justify-center rounded-[8px] bg-[#E7E7E7]">
              <ArrowRight2 size="28" color="#3E3E3E" />
            </div>
          </div>
          <div className="flex flex-1 flex-col">
            <div className="flex h-[40px] items-center justify-between rounded-tl-[8px] rounded-tr-[8px] bg-[#F9F9F9] px-2">
              <span className={`${Outfit400.className} text-[#494949]`}>
                CAMPOS <strong>OBRIGATÓRIOS</strong>
              </span>
              <span
                className={`${Outfit400.className} text-[#057B64] underline`}
              >
                Todos opcionais
              </span>
            </div>
            <div className="flex h-[300px] flex-col gap-[4px] overflow-auto bg-[#F9F9F9]">
              <div className="mx-2 flex h-[40px] items-center rounded-[8px] bg-white p-2">
                <span
                  className={`${Outfit400.className} text-[#737373] uppercase`}
                >
                  ipsun loren
                </span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Atendimento
