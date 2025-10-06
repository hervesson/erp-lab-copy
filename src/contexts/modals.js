'use client'

import { createContext, useContext, useState } from 'react'

const ModalContext = createContext(undefined)

export function ModalsProvider({ children }) {
  const [modalRegister, setModalRegister] = useState(null)
  const [modalRegisterUser, setModalRegisterUser] = useState(null)

  return (
    <ModalContext.Provider
      value={{
        modalRegister,
        setModalRegister,
        modalRegisterUser,
        setModalRegisterUser,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}
