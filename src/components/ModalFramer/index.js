'use client'
import { AnimatePresence, motion } from 'framer-motion'

export default function ModalFramer({ open, setOpen, children }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <AnimatePresence>
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="shadow-lg"
            >
              {children}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
