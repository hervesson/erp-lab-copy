// components/Modal.js
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

const ModalLeft = ({ isOpen, onClose, children }) => {
  // Efeito para prevenir o scroll do body quando a modal estiver aberta
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset' // Limpa ao desmontar
    }
  }, [isOpen])

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }, // Ajustei a duração para ser mais rápida
  }

  const modalVariants = {
    hidden: {
      x: '100%', // Começa fora da tela, na direita
      opacity: 0,
    },
    visible: {
      x: '0%', // Desliza para a posição visível
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 30,
      },
    },
    exit: {
      x: '100%', // Desliza para fora da tela, para a direita
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 30,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-49 flex justify-end" // Adicionado justify-end para alinhar à direita
        >
          {/* Overlay */}
          <motion.div
            className="bg-opacity-50 absolute inset-0"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose} // Fecha a modal ao clicar no overlay
          ></motion.div>

          {/* Conteúdo da Modal */}
          <motion.div
            className="relative min-h-screen w-full bg-white shadow-lg" // Ajustado width para dispositivos maiores
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ overflowY: 'auto' }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalLeft
