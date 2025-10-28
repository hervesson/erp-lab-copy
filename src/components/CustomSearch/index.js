'use client'
import { Outfit400, Outfit500 } from '@/fonts'
import { useEffect, useRef, useState } from 'react'

const CustomSearch = ({
  inputValue,
  onChange,
  placeholder,
  options = [],
  setSelect,
}) => {
  const [mostrarBandeja, setMostrarBandeja] = useState(false)
  const inputRef = useRef(null)
  const bandejaRef = useRef(null)

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
    if (options.length > 0) {
      setMostrarBandeja(true)
    }
  }, [options.length])

  const handleInputChange = (e) => {
    onChange(e.target.value)
  }

  const handleOptionClick = (option) => {
    setMostrarBandeja(false) // Esconde a bandeja após selecionar
    setSelect(option)
  }

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <input
        placeholder={placeholder}
        className={`${Outfit400.className} ring-none flex h-[40px] w-full items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
        ref={inputRef}
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => {
          // Se houver algo no input, mostra a bandeja ao focar
          if (inputValue) {
            setMostrarBandeja(true)
          }
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
            maxHeight: '200px',
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
                className="flex"
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = '#f0f0f0')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = '#fff')
                }
              >
                <p
                  className={`text-[14px] ${Outfit400.className} text-[#494949]`}
                >
                  {option.codigo} - {option.descricao}
                </p>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center p-[8px]">
              <p className={`${Outfit500.className} text-[16px]`}>
                Nenhum resultado encontrato
              </p>
              {/* Mostra o botão adicionar apenas se houver algo digitado */}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CustomSearch
