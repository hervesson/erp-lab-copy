'use client'
import { Outfit400 } from '@/fonts'
import { useEffect, useRef, useState } from 'react'

const OptiSelect = ({
  onChange,
  placeholder,
  options = [],
  inputValue,
  setSelect,
  className,
}) => {
  const [mostrarBandeja, setMostrarBandeja] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const inputRef = useRef(null)
  const bandejaRef = useRef(null)
  const optionsRefs = useRef([]) // Array de refs para cada item da lista

  // Sincroniza o array de refs com a quantidade de opções
  useEffect(() => {
    optionsRefs.current = optionsRefs.current.slice(0, options.length)
  }, [options])

  // Efeito para controlar o Scroll Automático
  useEffect(() => {
    if (focusedIndex >= 0 && optionsRefs.current[focusedIndex]) {
      const elementoFocado = optionsRefs.current[focusedIndex]
      const container = bandejaRef.current

      if (container) {
        const itemTop = elementoFocado.offsetTop
        const itemBottom = itemTop + elementoFocado.offsetHeight
        const containerTop = container.scrollTop
        const containerBottom = containerTop + container.offsetHeight

        if (itemTop < containerTop) {
          // Scroll para cima
          container.scrollTop = itemTop
        } else if (itemBottom > containerBottom) {
          // Scroll para baixo
          container.scrollTop = itemBottom - container.offsetHeight
        }
      }
    }
  }, [focusedIndex])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        bandejaRef.current &&
        !bandejaRef.current.contains(event.target)
      ) {
        setMostrarBandeja(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setFocusedIndex(-1)
  }, [mostrarBandeja, options.length])

  const handleInputChange = (e) => {
    onChange(e.target.value)
    if (!mostrarBandeja) setMostrarBandeja(true)
  }

  const handleOptionClick = (option) => {
    setMostrarBandeja(false)
    onChange(`${option.label}`)
    setSelect(option)
  }

  const handleKeyDown = (e) => {
    if (!mostrarBandeja && options.length > 0) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') setMostrarBandeja(true)
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (focusedIndex >= 0 && options[focusedIndex]) {
        handleOptionClick(options[focusedIndex])
      }
    } else if (e.key === 'Escape') {
      setMostrarBandeja(false)
    }
  }

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <input
        placeholder={placeholder}
        className={`focus:ring-none flex h-10 w-full items-center gap-1 rounded-lg bg-[#FFF] px-2 text-[16px] text-[#222] outline-none ${className} ${Outfit400.className}`}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setMostrarBandeja(true)}
        onKeyDown={handleKeyDown}
      />

      {mostrarBandeja && (
        <div
          ref={bandejaRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 5px)',
            left: 0,
            width: '100%',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxHeight: '250px', // Reduzi um pouco para testar o scroll mais fácil
            overflowY: 'auto',
            zIndex: 100,
            scrollBehavior: 'smooth', // Suaviza o movimento
          }}
        >
          {options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index.toString()}
                ref={(el) => (optionsRefs.current[index] = el)} // Atribui a ref individual
                onClick={() => handleOptionClick(option)}
                onMouseEnter={() => setFocusedIndex(index)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  backgroundColor: focusedIndex === index ? '#E0FFF9' : '#fff',
                }}
                className="flex justify-between"
              >
                <p
                  className={`text-[14px] ${Outfit400.className} text-[#494949]`}
                >
                  {option.label}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center p-2">
              <p className={`${Outfit400.className} text-[16px] text-[#222]`}>
                Nenhum resultado encontrado
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default OptiSelect
