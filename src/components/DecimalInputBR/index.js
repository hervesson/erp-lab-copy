// components/DecimalInputBR.jsx
import { useEffect, useState } from 'react'

function DecimalInputBR({
  value, // Number (ex: 12.9)
  onChange, // (numberValue) => void
  fractionDigits = 2, // 2 casas decimais
  ...rest // name, id, className, placeholder, etc.
}) {
  const [display, setDisplay] = useState('')

  // quando o value externo mudar, atualiza o texto exibido
  useEffect(() => {
    if (value === null || value === undefined || value === '') {
      setDisplay('')
      return
    }

    const num = Number(value)
    if (Number.isNaN(num)) {
      setDisplay('')
      return
    }

    const formatted = num.toLocaleString('pt-BR', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    })

    setDisplay(formatted) // ex: 12,90
  }, [value, fractionDigits])

  const handleChange = (e) => {
    const raw = e.target.value || ''

    // Mantém apenas números
    const numbers = raw.replace(/\D/g, '')

    if (!numbers) {
      setDisplay('')
      onChange?.(0)
      return
    }

    // MESMA LÓGICA DA SUA maskDecimal
    const num = Number(numbers) / Math.pow(10, fractionDigits)

    const formatted = num.toLocaleString('pt-BR', {
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    })

    setDisplay(formatted)
    onChange?.(num) // aqui você recebe o número prontinho
  }

  return (
    <input
      {...rest}
      value={display}
      onChange={handleChange}
      inputMode="decimal"
    />
  )
}

export default DecimalInputBR
