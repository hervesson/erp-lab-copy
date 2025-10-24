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
  readOnly = false,
}) => {
  const [mostrarBandeja, setMostrarBandeja] = useState(false)
  const inputRef = useRef(null)
  const bandejaRef = useRef(null)

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

  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <div
        className={`flex h-[40px] items-center justify-between rounded-[8px] px-2 ${className}`}
        onClick={readOnly ? null : () => setMostrarBandeja(true)}
        ref={inputRef}
      >
        {select?.label ? (
          <p className={`${Outfit400.className} text-[#565656]`}>
            {select?.label}
          </p>
        ) : (
          <p className={`${Outfit400.className} text-[#a9a9a9]`}>
            {placeholder}
          </p>
        )}

        {mostrarBandeja ? (
          <ArrowUp2
            size="24"
            color="#383838"
            variant="broken"
            onClick={() => setMostrarBandeja(false)}
          />
        ) : (
          <ArrowDown2
            size="24"
            color="#383838"
            variant="broken"
            onClick={() => setMostrarBandeja(true)}
          />
        )}
      </div>
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
            borderRadius: '8px',
          }}
        >
          {options.map((option, index) => (
            <div
              key={index.toString()}
              onClick={() => {
                setSelect(option)
                setMostrarBandeja(false)
              }}
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
          ))}
        </div>
      )}
    </div>
  )
}

export default CustomSelect
