// components/Modal.js
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

const ModalUp = ({ isOpen, onClose, children }) => {
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
    visible: { opacity: 1, transition: { duration: 5.0 } },
  }

  const modalVariants = {
    hidden: {
      y: '100%', // Começa fora da tela, na parte inferior
      opacity: 0,
    },
    visible: {
      y: '0%', // Desliza para a posição visível
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120, // Diminua
        damping: 30,
      },
    },
    exit: {
      y: '100%', // Desliza para fora da tela, para baixo
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 120, // Diminua
        damping: 30,
      },
    },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex" // Tailwind CSS para posicionamento e alinhamento
        >
          {/* Overlay */}
          <motion.div
            className="bg-opacity-50 absolute inset-0 bg-black"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose} // Fecha a modal ao clicar no overlay
          ></motion.div>

          {/* Conteúdo da Modal */}
          <motion.div
            className="relative min-h-screen w-full bg-white shadow-lg"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // Se precisar de altura fixa para o conteúdo, adicione aqui
            //style={{ overflowY: 'auto' }} // Exemplo
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ModalUp
