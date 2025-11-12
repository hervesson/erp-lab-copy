'use client'
import ModalFramer from '@/components/ModalFramer'
import { Outfit400 } from '@/fonts'
import { AddSquare } from 'iconsax-reactjs'

import { useState } from 'react'
import SelectCategory from './components/SelectCategory'
import SelectRegister from './components/SelectRegister'
import SideMenu from './components/SideMenu'

// principais
import Agendas from './pages/agendas'
import Amostras from './pages/amostras'
import Exams from './pages/exames'
import Kits from './pages/kits'
import ExamMatrix from './pages/matrizes-de-exames'
import Methods from './pages/metodos'
import Profissionais from './pages/profissionais/page'
import UnitOfHealth from './pages/unidades-de-saude'
import Users from './pages/usuarios'

// Empresas
import Empresas from './pages/empresas'
import TabelaDePrecos from './pages/tabelaDePrecos'

// Estrutura
import EquipamentosImobilizados from './pages/equipamentosImobilizados'
import EtiquetaParaAmostra from './pages/etiquetasParaAmostra'
import SalasSetores from './pages/salasSetores'

// Financeiro
import Banks from './pages/bancos'

// Outros
import Adquirentes from './pages/adquirentes'
import CabecalhoRodapes from './pages/cabecalhoRodapes'
import CamposDeFormulario from './pages/campos-de-formulario'
import FormularioDeAtendimento from './pages/formularioDeAtendimento'
import HierarquiaCFO from './pages/hierarquiaCFO'
import ImportacaoDeTabelas from './pages/importacaoDeTabelas'
import Integracoes from './pages/integracoes'

const RootLayout = () => {
  const [openModalCategorie, setOpenModalCategorie] = useState(false)
  const [openModalRegister, setOpenModalRegister] = useState(false)
  const [selectedCategorie, setSelectCategorie] = useState(null)
  const [page, setPage] = useState('unidades-de-saude')

  // Modal Pricipais
  const [openModalRegisteUnits, setModalRegisterUnits] = useState(false)
  const [openModalRegisterExams, setModalRegisterExams] = useState(false)
  const [modalRegisterExamMatrix, setModalRegisterExamMatrix] = useState(false)
  const [modalRegisterUser, setModalRegisterUser] = useState(false)
  const [modalRegisterMethods, setModalRegisterMethods] = useState(false)

  // Modal Emporesas
  const [openModalRegisterCompanies, setModalRegisterCompanies] =
    useState(false)

  // Modal Financeiro
  const [modalRegisterBanks, setModalRegisterBanks] = useState(false)

  // Modal outros
  const [openModalFormFiels, setOpenModalFormFiels] = useState(false)

  const ALLOWED_PAGES = [
    'convenios',
    'laboratorioDeApoio',
    'telemedicina',
    'fornecedores',
    'prestadoresDeServico',
  ]

  const pages = {
    'unidades-de-saude': (
      <UnitOfHealth
        openModalRegisteUnits={openModalRegisteUnits}
        setModalRegisterUnits={(e) => setModalRegisterUnits(e)}
      />
    ),
    exames: (
      <Exams
        openModalRegisterExams={openModalRegisterExams}
        setModalRegisterExams={(e) => setModalRegisterExams(e)}
      />
    ),
    'matriz-de-exames': (
      <ExamMatrix
        modalRegisterExamMatrix={modalRegisterExamMatrix}
        setModalRegisterExamMatrix={(e) => setModalRegisterExamMatrix(e)}
      />
    ),
    profissionais: <Profissionais />,
    usuarios: (
      <Users
        modalRegisterUser={modalRegisterUser}
        setModalRegisterUser={(e) => setModalRegisterUser(e)}
      />
    ),
    agendas: <Agendas />,
    metodos: (
      <Methods
        modalRegisterMethods={modalRegisterMethods}
        setModalRegisterMethods={(e) => setModalRegisterMethods(e)}
      />
    ),
    amostras: <Amostras />,
    kits: <Kits />,
    tabelaDePrecos: <TabelaDePrecos />,
    salasSetores: <SalasSetores />,
    equipamentosImobilizados: <EquipamentosImobilizados />,
    etiquetasParaAmostras: <EtiquetaParaAmostra />,
    cabecalhoRodapes: <CabecalhoRodapes />,
    formulariosDeAtendimento: <FormularioDeAtendimento />,
    bancos: (
      <Banks
        modalRegisterBanks={modalRegisterBanks}
        setModalRegisterBanks={(e) => setModalRegisterBanks(e)}
      />
    ),
    adquirentes: <Adquirentes />,
    hieraquiaCFO: <HierarquiaCFO />,
    importacaoDeTabelas: <ImportacaoDeTabelas />,
    integracoes: <Integracoes />,
    'campos-de-fomulario': (
      <CamposDeFormulario
        modalRegisterFormField={openModalFormFiels}
        setModalRegisterFormField={(e) => setOpenModalFormFiels(e)}
      />
    ),
  }

  return (
    <div className="m-[8px] flex flex-1 flex-col rounded-[20px] bg-white">
      <div className="flex h-[84px] w-full items-center justify-between border-b-1 border-[#E7E7E7]">
        <span
          className={`${Outfit400.className} ml-[32px] text-[20px] text-[#000] uppercase`}
        >
          CADASTROS GERAIS
        </span>
        <button
          type="botton"
          onClick={() => setOpenModalCategorie(true)}
          className={`mr-[32px] flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
        >
          <AddSquare size="32" color="#ffffff" variant="Bulk" />
          <span className={`${Outfit400.className} text-[16px] text-white`}>
            CADASTRAR
          </span>
        </button>
      </div>
      <div className="flex w-full flex-1 gap-3 px-[32px] py-[16px]">
        <SideMenu page={page} setPage={(a) => setPage(a)} />
        {pages[page]}
        {ALLOWED_PAGES.includes(page) && (
          <Empresas
            openModalRegisterCompanies={openModalRegisterCompanies}
            setModalRegisterCompanies={(e) => setModalRegisterCompanies(e)}
            page={page}
            setPage={(e) => setPage(e)}
          />
        )}
      </div>
      {openModalCategorie && (
        <ModalFramer
          open={openModalCategorie}
          setOpen={() => setOpenModalCategorie(!openModalCategorie)}
        >
          <SelectCategory
            setOpenModalCategorie={() => setOpenModalCategorie(false)}
            setSelectCategorie={(e) => {
              setSelectCategorie(e)
              setOpenModalCategorie(false)
              setOpenModalRegister(true)
            }}
          />
        </ModalFramer>
      )}
      {openModalRegister && (
        <ModalFramer
          open={openModalRegister}
          setOpen={() => setOpenModalRegister(!openModalRegister)}
        >
          <SelectRegister
            setModalRegisterUnits={() => {
              setPage('unidades-de-saude')
              setOpenModalRegister(false)
              setModalRegisterUnits(true)
            }}
            setModalRegisterExams={() => {
              setPage('exames')
              setOpenModalRegister(false)
              setModalRegisterExams(true)
            }}
            setModalRegisterUser={() => {
              setPage('usuarios')
              setOpenModalRegister(false)
              setModalRegisterUser(true)
            }}
            setModalRegisterMethods={() => {
              setPage('metodos')
              setOpenModalRegister(false)
              setModalRegisterMethods(true)
            }}
            setModalRegisterExamMatrix={(e) => {
              setPage('matriz-de-exames')
              setOpenModalRegister(false)
              setModalRegisterExamMatrix(e)
            }}
            setModalRegisterCompanies={(open) => {
              // Se a página atual NÃO está entre as permitidas, força para 'convenios'
              setPage((prev) =>
                ALLOWED_PAGES.includes(prev) ? prev : 'convenios',
              )

              setOpenModalRegister(false)
              setModalRegisterCompanies(Boolean(open))
            }}
            setModalRegisterBanks={() => {
              setPage('bancos')
              setOpenModalRegister(false)
              setModalRegisterBanks(true)
            }}
            setModalFormFiels={() => {
              setPage('campos-de-fomulario')
              setOpenModalRegister(false)
              setOpenModalFormFiels(true)
            }}
            setOpenModalRegister={() =>
              setOpenModalRegister(!openModalRegister)
            }
            selectedCategorie={selectedCategorie}
          />
        </ModalFramer>
      )}
    </div>
  )
}
export default RootLayout
