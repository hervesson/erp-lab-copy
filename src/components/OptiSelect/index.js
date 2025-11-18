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
  const inputRef = useRef(null) // Ref para o input
  const bandejaRef = useRef(null) // Ref para a bandeja

  // Efeito para fechar a bandeja ao clicar fora
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
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (options.length > 0 && inputValue.length > 0) {
      setMostrarBandeja(true)
    }
  }, [options.length, inputValue])

  const handleInputChange = (e) => {
    onChange(e.target.value)
  }

  const handleOptionClick = (option) => {
    setMostrarBandeja(false)
    onChange(`${option.label}`)
    setSelect(option)
  }

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <input
        placeholder={placeholder}
        className={`focus:ring-none flex h-[40px] w-full items-center gap-1 rounded-[8px] bg-[#FFF] px-[8px] text-[16px] text-[#222] outline-none ${className} ${Outfit400.className}`}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => {
          // Se houver algo no input, mostra a bandeja ao focar
          setMostrarBandeja(true)
        }}
        // style={{ width: '100%', padding: '8px', fontSize: '16px' }}
      />

      {mostrarBandeja && (
        <div
          ref={bandejaRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 5px)', // Abaixo do input
            left: 0,
            width: '100%',
            // border: '1px solid #ccc',
            backgroundColor: '#fff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            maxHeight: '450px',
            overflowY: 'auto',
            zIndex: 100, // Garante que fique por cima de outros elementos
          }}
        >
          {options.length > 0 ? (
            options.map((option, index) => (
              <div
                key={index.toString()}
                onClick={() => handleOptionClick(option)}
                style={{
                  padding: '8px',
                  cursor: 'pointer',
                  borderBottom: '1px none #ccc',
                }}
                className="flex justify-between"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#E0FFF9'
                  // Encontra o parágrafo dentro da div e muda a cor do texto
                  const paragraph = e.currentTarget.querySelector('p')
                  if (paragraph) {
                    paragraph.style.color = '#494949'
                  }
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff'
                  // Encontra o parágrafo dentro da div e restaura a cor do texto
                  const paragraph = e.currentTarget.querySelector('p')
                  if (paragraph) {
                    paragraph.style.color = '#494949' // Cor original do texto
                  }
                }}
              >
                <p
                  className={`text-[14px] ${Outfit400.className} text-[#494949]`}
                >
                  {option.label}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center p-[8px]">
              <p className={`${Outfit400.className} text-[16px] text-[#222]`}>
                Nenhum resultado encontrato
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default OptiSelect
