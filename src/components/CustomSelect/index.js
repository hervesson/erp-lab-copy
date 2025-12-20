'use client'
import { Outfit400 } from '@/fonts'
import { ArrowDown2, ArrowUp2 } from 'iconsax-reactjs'
import { useEffect, useRef, useState } from 'react'

const CustomSelect = ({
  select,
  setSelect,
  options = [],
  placeholder = '',
  className,
  readOnly,
}) => {
  const [mostrarBandeja, setMostrarBandeja] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef(null) // Ref para o container principal que segura o foco
  const bandejaRef = useRef(null)

  // 1. Lógica de Scroll Automático
  useEffect(() => {
    if (focusedIndex >= 0 && bandejaRef.current) {
      const activeItem = bandejaRef.current.children[focusedIndex]
      if (activeItem) {
        activeItem.scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        })
      }
    }
  }, [focusedIndex])

  // Fecha ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setMostrarBandeja(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Reseta index ao fechar
  useEffect(() => {
    if (!mostrarBandeja) setFocusedIndex(-1)
  }, [mostrarBandeja])

  const handleSelect = (option) => {
    setSelect(option)
    setMostrarBandeja(false)
    // Devolve o foco para o container após selecionar para continuar navegando via Tab
    containerRef.current?.focus()
  }

  const handleKeyDown = (e) => {
    if (readOnly) return

    // Se apertar Tab, fecha a bandeja e deixa o navegador seguir para o próximo campo
    if (e.key === 'Tab') {
      setMostrarBandeja(false)
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!mostrarBandeja) {
        setMostrarBandeja(true)
        setFocusedIndex(0)
      } else {
        setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev))
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (mostrarBandeja) {
        setFocusedIndex((prev) => (prev > 0 ? prev - 1 : 0))
      }
    }

    if (e.key === 'Enter' || e.key === ' ') {
      // Adicionado Espaço para abrir/selecionar
      e.preventDefault()
      if (mostrarBandeja && focusedIndex >= 0) {
        handleSelect(options[focusedIndex])
      } else {
        setMostrarBandeja(true)
        setFocusedIndex(0)
      }
    }

    if (e.key === 'Escape') setMostrarBandeja(false)
  }

  return (
    <div
      ref={containerRef}
      style={{ position: 'relative', flex: 1 }}
      onKeyDown={handleKeyDown}
      tabIndex={readOnly ? -1 : 0}
      // Ao receber foco via TAB, abre a bandeja
      onFocus={() => {
        if (!readOnly) {
          setMostrarBandeja(true)
          setFocusedIndex(0)
        }
      }}
      className={`rounded-lg outline-none`}
    >
      <div
        className={`flex h-10 cursor-pointer items-center justify-between rounded-lg px-2 transition-all ${className}`}
        onClick={readOnly ? null : () => setMostrarBandeja(true)}
      >
        <p
          className={`${Outfit400.className} truncate ${select?.label ? 'text-[#565656]' : 'text-[#a9a9a9]'}`}
        >
          {select?.label || placeholder}
        </p>
        {mostrarBandeja ? (
          <ArrowUp2 size="20" color="#383838" />
        ) : (
          <ArrowDown2 size="20" color="#383838" />
        )}
      </div>

      {mostrarBandeja && options.length > 0 && (
        <div
          ref={bandejaRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 5px)',
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxHeight: '180px',
            overflowY: 'auto',
            zIndex: 100,
            borderRadius: '8px',
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation() // Evita conflitos de clique
                handleSelect(option)
              }}
              onMouseMove={() => setFocusedIndex(index)}
              style={{
                padding: '10px 12px',
                cursor: 'pointer',
                backgroundColor: focusedIndex === index ? '#E0FFF9' : '#fff',
              }}
              className="transition-colors"
            >
              <p
                className={`text-[14px] ${Outfit400.className} text-[#494949]`}
              >
                {option.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
