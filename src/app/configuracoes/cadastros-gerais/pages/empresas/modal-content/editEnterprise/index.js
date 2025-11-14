import CustomSelect from '@/components/CustomSelect'
import { Outfit400, Outfit500 } from '@/fonts'
import { listAllActiveBanks } from '@/helpers'
import { useEffect, useRef, useState } from 'react'
import Convenios from './components/convenios'
import Fornecedores from './components/fornecedores'
import LaboratorioDeApoio from './components/laboratorioDeApoio'
import PrestadoresDeServico from './components/prestadoresDeServico'
import Telemedicina from './components/telemedicina'

const EditEnterprise = ({ onClose, selectedEnterprise, findData }) => {
  const screens = {
    CONVENIOS: {
      id: 'convenios',
      label: 'CONVÊNIOS',
    },
    LABORATORIO_APOIO: {
      id: 'laboratorioDeApoio',
      label: 'LABORATÓRIO DE APOIO',
    },
    TELEMEDICINA: {
      id: 'telemedicina',
      label: 'TELEMEDICINA',
    },
    FORNECEDORES: {
      id: 'fornecedores',
      label: 'FORNECEDORES',
    },
    PRESTADORES_SERVICOS: {
      id: 'prestadoresDeServico',
      label: 'PRESTADORES DE SERVIÇO',
    },
  }
  const [tab, setTab] = useState(screens[selectedEnterprise.tipoEmpresa])
  const [activeBanks, setActiveBanks] = useState([])
  const [isFormValid, setIsFormValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const childFormConveniosRef = useRef()
  const childFormTelemedicinaRef = useRef()
  const childFormLaboratorioDeApoioRef = useRef()
  const childFormFornecedoresDeApoioRef = useRef()
  const childFormPrestadoresDeServicoRef = useRef()

  useEffect(() => {
    const findBanks = async () => {
      try {
        const [allBanks] = await Promise.all([listAllActiveBanks()])

        const banks = allBanks.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.nome}`,
          }
        })

        setActiveBanks(banks)
      } catch (error) {
        console.error(error)
      }
    }

    findBanks()
  }, [])

  const handleValidationChange = (isValid) => {
    setIsFormValid(isValid)
  }

  const steps = {
    CONVÊNIOS: (
      <Convenios
        formRegister={selectedEnterprise}
        activeBanks={activeBanks}
        onClose={() => onClose()}
        onValidationChange={handleValidationChange}
        setLoading={(value) => setLoading(value)}
        findData={() => findData()}
        ref={childFormConveniosRef}
      />
    ),
    'LABORATÓRIO DE APOIO': (
      <LaboratorioDeApoio
        formRegister={selectedEnterprise}
        activeBanks={activeBanks}
        onClose={() => onClose()}
        onValidationChange={handleValidationChange}
        setLoading={(value) => setLoading(value)}
        findData={() => findData()}
        ref={childFormLaboratorioDeApoioRef}
      />
    ),
    TELEMEDICINA: (
      <Telemedicina
        formRegister={selectedEnterprise}
        activeBanks={activeBanks}
        onClose={() => onClose()}
        onValidationChange={handleValidationChange}
        setLoading={(value) => setLoading(value)}
        findData={() => findData()}
        ref={childFormTelemedicinaRef}
      />
    ),
    'PRESTADORES DE SERVIÇO': (
      <PrestadoresDeServico
        formRegister={selectedEnterprise}
        activeBanks={activeBanks}
        onClose={() => onClose()}
        onValidationChange={handleValidationChange}
        setLoading={(value) => setLoading(value)}
        findData={() => findData()}
        ref={childFormPrestadoresDeServicoRef}
      />
    ),
    FORNECEDORES: (
      <Fornecedores
        formRegister={selectedEnterprise}
        activeBanks={activeBanks}
        onClose={() => onClose()}
        onValidationChange={handleValidationChange}
        setLoading={(value) => setLoading(value)}
        findData={() => findData()}
        ref={childFormFornecedoresDeApoioRef}
      />
    ),
  }

  const handleParentSubmit = () => {
    if (tab.id === 'convenios') {
      if (childFormConveniosRef.current) {
        // Chama o método submitForm que o filho expôs
        childFormConveniosRef.current.submitForm()
      }
    } else if (tab.id === 'laboratorioDeApoio') {
      if (childFormLaboratorioDeApoioRef.current) {
        // Chama o método submitForm que o filho expôs
        childFormLaboratorioDeApoioRef.current.submitForm()
      }
    } else if (tab.id === 'telemedicina') {
      if (childFormTelemedicinaRef.current) {
        // Chama o método submitForm que o filho expôs
        childFormTelemedicinaRef.current.submitForm()
      }
    } else if (tab.id === 'fornecedores') {
      if (childFormFornecedoresDeApoioRef.current) {
        // Chama o método submitForm que o filho expôs
        childFormFornecedoresDeApoioRef.current.submitForm()
      }
    } else if (tab.id === 'prestadoresDeServico') {
      if (childFormPrestadoresDeServicoRef.current) {
        // Chama o método submitForm que o filho expôs
        childFormPrestadoresDeServicoRef.current.submitForm()
      }
    }
  }

  return (
    <>
      <form
        // onSubmit={formik.handleSubmit}
        className="flex h-screen flex-1 flex-col bg-[#F9F9F9]"
      >
        <div className="flex h-[88px] items-center justify-between border-b border-[#E7E7E7] bg-[#fff] px-[48px]">
          <div className="flex items-end gap-5">
            <div className="flex flex-col">
              <span
                className={` ${Outfit400.className} text-[16px] text-[#0F9B7F]`}
              >
                Cadastrar
              </span>

              <span
                className={` ${Outfit500.className} text-[16px] text-[#222222]`}
              >
                EMPRESAS
              </span>
            </div>
            <CustomSelect
              select={tab}
              setSelect={(e) => {
                setTab(e)
                // setPage(e.id)
              }}
              options={[
                {
                  id: 'convenios',
                  label: 'CONVÊNIOS',
                },
                {
                  id: 'laboratorioDeApoio',
                  label: 'LABORATÓRIO DE APOIO',
                },
                {
                  id: 'telemedicina',
                  label: 'TELEMEDICINA',
                },
                {
                  id: 'fornecedores',
                  label: 'FORNECEDORES',
                },
                {
                  id: 'prestadoresDeServico',
                  label: 'PRESTADORES DE SERVIÇO',
                },
              ]}
              placeholder={'Selecione um tipo de empresa'}
              className={'w-[270px] border border-[#BBBBBB]'}
              readOnly={true}
            />
          </div>

          <div className="flex gap-[16px]">
            <button
              type="button"
              onClick={() => {
                onClose()
              }}
              className="flex h-[44px] w-[108px] items-center justify-evenly rounded-[8px] border border-[#F23434] hover:bg-[#FFE6E6]"
            >
              <span
                className={`${Outfit400.className} text-[#F23434] uppercase`}
              >
                Cancelar
              </span>
            </button>
            <button
              type="button"
              onClick={handleParentSubmit}
              className={`flex h-[44px] w-[128px] items-center justify-evenly rounded-[8px] ${
                isFormValid
                  ? 'bg-[#0F9B7F] text-white hover:from-[#3BC1E2] hover:to-[#1D6F87]'
                  : 'bg-[#A9A9A9] text-[#494949]'
              } ${Outfit400.className}`}
              disabled={loading}
            >
              {loading ? 'FINALIZANDO' : 'FINALIZAR'}
            </button>
          </div>
        </div>

        <div className="flex h-full w-screen gap-x-3 overflow-x-auto">
          {steps[tab.label]}
        </div>
      </form>
    </>
  )
}

export default EditEnterprise
