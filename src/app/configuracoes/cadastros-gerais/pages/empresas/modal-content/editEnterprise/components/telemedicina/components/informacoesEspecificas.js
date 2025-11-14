import CustomSelect from '@/components/CustomSelect'
import { Outfit400 } from '@/fonts'
import { InfoCircle, Trash } from 'iconsax-reactjs'
import { useState } from 'react'

const InformacoesGerais = () => {
  const [financial] = useState([])

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      {/* Informações básicas */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Informações básicas
        </span>
        <div className="flex h-[144px] gap-[16px]">
          <div className="h-[144px] w-[144px] rounded border border-[#A9A9A9]"></div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Código interno
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o nome da unidade"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  CNPJ
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={internalCode}
                  // onChange={(e) => setInternalCode(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o código interno"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Razão Social<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={formatCnpj(cnpj)}
                  // onChange={(e) => setCnpj(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o CNPJ"
                  maxLength={18}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Nome fantasia
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={corporateReason}
                  // onChange={(e) => setCorporateReason(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a razão social"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Inscrição municipal
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={fantasyName}
                  // onChange={(e) => setFantasyName(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o nome fantasia"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Inscrição estadual
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={municipalRegistration}
                  // onChange={(e) => setMunicipalRegistration(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a inscrição municipal"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Telefone fixo<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={stateRegistration}
                  // onChange={(e) => setStateRegistration(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a inscrição estadual"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Celular<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={CNES}
                  // onChange={(e) => setCNES(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o CNES"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  E-mail comercial
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={formatPhoneNumber(contacts)}
                  // onChange={(e) => setContacts(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o contato da unidade"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Site da empresa
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o e-mail de contato da unidade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Endereço */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Endereço
        </span>

        <div className="flex h-[144px] gap-[16px]">
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  CEP<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={formatCep(cep)}
                  // onChange={(e) => setCep(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o cep"
                  // onBlur={() => searchCEP()}
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Rua
                </label>
                <input
                  // value={street}
                  // onChange={(e) => setStreet(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a rua"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Número<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={number}
                  // onChange={(e) => setNumber(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o número"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Bairro
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={district}
                  // onChange={(e) => setDistrict(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o bairro"
                />
              </div>
            </div>
            <div className="flex gap-[16px]">
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Complemento<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={complement}
                  // onChange={(e) => setComplement(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite um complemento"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Estado<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={state}
                  // onChange={(e) => setState(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o estado"
                />
              </div>
              <div className="flex flex-1 flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Cidade<strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  // value={city}
                  // onChange={(e) => setCity(e.target.value)}
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o estado"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* responsável */}
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
                // value={responsibleName}
                // onChange={(e) => setResponsibleName(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
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
                // value={formatPhoneNumber(responsibleContact)}
                // onChange={(e) => setResponsibleContact(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o contato do responsável"
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
                // value={responsibleEmail}
                // onChange={(e) => setResponsibleEmail(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite o email do responsável"
              />
            </div>
          </div>
        </div>
      </div>
      {/* impostos */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Impostos
        </span>

        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              IRRF (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={IRRF}
              // onChange={(e) => setIRRF(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              PIS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={PIS}
              // onChange={(e) => setPIS(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              COFINS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={COFINS}
              // onChange={(e) => setCOFINS(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              CSLL (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={CSLL}
              // onChange={(e) => setCSLL(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              ISS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={ISS}
              // onChange={(e) => setISS(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              IBS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={IBS}
              // onChange={(e) => setIBS(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              CBS (% ou R$)
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <input
              // value={CBS}
              // onChange={(e) => setCBS(e.target.value)}
              className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
              placeholder="Digite percentual"
            />
          </div>
        </div>
        <div className="flex gap-[16px]">
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter ISS
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                // className={`${!retainISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainISS(!retainISS)}
              >
                NÃO
              </button>
              <button
                type="button"
                // className={`${retainISS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainISS(!retainISS)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter IR
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                // className={`${!retainIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainIR(!retainIR)}
              >
                NÃO
              </button>
              <button
                type="button"
                // className={`${retainIR ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainIR(!retainIR)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter PCC
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                // className={`${!retainPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainPCC(!retainPCC)}
              >
                NÃO
              </button>
              <button
                type="button"
                // className={`${retainPCC ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainPCC(!retainPCC)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter IBS
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                // className={`${!retainIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainIBS(!retainIBS)}
              >
                NÃO
              </button>
              <button
                type="button"
                // className={`${retainIBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainIBS(!retainIBS)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Reter CBS
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                // className={`${!retainCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainCBS(!retainCBS)}
              >
                NÃO
              </button>
              <button
                type="button"
                // className={`${retainCBS ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setRetainCBS(!retainCBS)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]">
            <label
              className={`${Outfit400.className} flex justify-between text-[14px] text-[#222222]`}
            >
              Optante pelo simples nacional
              <InfoCircle size="20" color="#A1A1A1" />
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                // className={`${!nationalSimpleOptant ? 'bg-[#E0FFF9]' : 'bg-[#F9F9F9]'} flex h-[40px] w-[50px] items-center justify-center rounded-[8px] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setNationalSimpleOptant(!nationalSimpleOptant)}
              >
                NÃO
              </button>
              <button
                type="button"
                className={`flex h-[40px] w-[50px] items-center justify-center rounded-[8px] bg-[#F9F9F9] ${Outfit400.className} text-[14px] text-[#BBBBBB]`}
                // onClick={() => setNationalSimpleOptant(!nationalSimpleOptant)}
              >
                SIM
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[4px]" />
        </div>
      </div>
      {/* financeiro */}
      <div className="flex flex-col gap-[16px]">
        <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
          Financeiro e Pagamento
        </span>
        {financial?.map((item, index) => {
          return (
            <div className="flex gap-[16px]" key={index.toString()}>
              <div className="flex w-full flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Selecione um banco
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <CustomSelect
                  select={{ id: item.codigoBanco, label: item.banco }}
                  // setSelect={(e) => {
                  //   handleChangeFinancial(index, 'banco', e.label)
                  //   handleChangeFinancial(index, 'codigoBanco', e.id)
                  //   handleChangeFinancial(index, 'bancoId', e.id)
                  // }}
                  options={[]}
                  placeholder={'Selecione o banco'}
                  className={'border border-[#BBBBBB]'}
                />
              </div>

              <div className="flex w-full flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Agência
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.agencia}
                  // onChange={(e) =>
                  //   handleChangeFinancial(index, 'agencia', e.target.value)
                  // }
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a agência"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Dígito agência
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.digitoAgencia}
                  // onChange={(e) =>
                  //   handleChangeFinancial(
                  //     index,
                  //     'digitoAgencia',
                  //     e.target.value,
                  //   )
                  // }
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o dígito da agência"
                />
              </div>

              <div className="flex w-full flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Conta corrente
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.contaCorrente}
                  // onChange={(e) =>
                  //   handleChangeFinancial(
                  //     index,
                  //     'contaCorrente',
                  //     e.target.value,
                  //   )
                  // }
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite a conta corrente"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <label
                  className={`${Outfit400.className} text-[14px] text-[#222222]`}
                >
                  Dígito Conta
                  <strong className="text-[#F23434]">*</strong>
                </label>
                <input
                  value={item.digitoConta}
                  // onChange={(e) =>
                  //   handleChangeFinancial(index, 'digitoConta', e.target.value)
                  // }
                  className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                  placeholder="Digite o dígito da agência"
                />
              </div>

              <div
                className="flex flex-col justify-end py-[8px]"
                // onClick={() =>
                //   setFinancial((prev) => prev.filter((_, i) => i !== index))
                // }
              >
                <Trash size="28" color="#737373" />
              </div>
            </div>
          )
        })}

        <button
          type="button"
          className={`${Outfit400.className} h-[40px] w-[235px] rounded-[8px] border border-[#0F9B7F] text-[#0F9B7F] uppercase`}
          // onClick={() =>
          //   setFinancial([
          //     ...financial,
          //     {
          //       banco: '',
          //       codigoBanco: '0',
          //       bancoId: '',
          //       agencia: '',
          //       digitoAgencia: '',
          //       contaCorrente: '',
          //       digitoConta: '',
          //       tipoConta: '',
          //       principal: false,
          //       observacoes: '',
          //     },
          //   ])
          // }
        >
          Novo banco
        </button>
      </div>
    </div>
  )
}

export default InformacoesGerais
