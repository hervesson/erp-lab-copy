'use client'
import ModalFramer from '@/components/ModalFramer'
import { Outfit400 } from '@/fonts'
import { AddSquare } from 'iconsax-reactjs'

import { useState } from 'react'
import SelectCategory from './components/SelectCategory'
import SelectRegister from './components/SelectRegister'
import SideMenu from './components/SideMenu'

// components de cadastro
import Exams from './pages/exames'
import ExamMatrix from './pages/matrizes-de-exames'
import Methods from './pages/metodos'
import UnitOfHealth from './pages/unidades-de-saude'
import Users from './pages/usuarios'

// Financeiro
import Banks from './pages/bancos'

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

  // Modal Financeiro
  const [modalRegisterBanks, setModalRegisterBanks] = useState(false)

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
    usuarios: (
      <Users
        modalRegisterUser={modalRegisterUser}
        setModalRegisterUser={(e) => setModalRegisterUser(e)}
      />
    ),
    metodos: (
      <Methods
        modalRegisterMethods={modalRegisterMethods}
        setModalRegisterMethods={(e) => setModalRegisterMethods(e)}
      />
    ),
    'matriz-de-exames': (
      <ExamMatrix
        modalRegisterExamMatrix={modalRegisterExamMatrix}
        setModalRegisterExamMatrix={(e) => setModalRegisterExamMatrix(e)}
      />
    ),
    bancos: (
      <Banks
        modalRegisterBanks={modalRegisterBanks}
        setModalRegisterBanks={(e) => setModalRegisterBanks(e)}
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
      <div className="mx-[32px] my-[16px] flex gap-3">
        <SideMenu page={page} setPage={(a) => setPage(a)} />
        {pages[page]}
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
            modalRegisterBanks={() => {
              setPage('bancos')
              setOpenModalRegister(false)
              setModalRegisterBanks(true)
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
