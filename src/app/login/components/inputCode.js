'use client'
import { Outfit400 } from '@/fonts'
import { VerifyResetCode } from '@/helpers'
import { CloseSquare } from 'iconsax-reactjs'
import { useEffect, useRef, useState } from 'react'

const InputCode = ({
  onClose,
  nextStep,
  setToken,
  onCodeChange,
  length = 6,
}) => {
  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState(Array(length).fill(''))
  const inputRefs = useRef([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  const handleChange = (index, event) => {
    const { value } = event.target
    const newOtp = [...otp]

    if (/^[0-9]$/.test(value) || value === '') {
      newOtp[index] = value
      setOtp(newOtp)
      onCodeChange?.(newOtp.join(''))

      if (value && index < length - 1 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (index, event) => {
    if (
      event.key === 'Backspace' &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus()
    }
  }

  const handleCode = async () => {
    setLoading(true)
    const verifyCode = await VerifyResetCode(otp.join(''))
    if (verifyCode.success) {
      setToken(otp.join(''))
      nextStep()
    }
    setLoading(false)
  }

  return (
    <form className="h-[264px] w-[500px] rounded-[12px] bg-white p-[32px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <span className={`${Outfit400.className}`}>VALIDAR CÓDIGO</span>
          <CloseSquare
            size="32"
            color="#BBBBBB"
            variant="Bulk"
            onClick={() => onClose()}
          />
        </div>

        <div className="flex flex-col">
          <p className={`${Outfit400.className} text-[16px]`}>
            Digite o código de <strong>6 digitos</strong> recebido para
            continuar
          </p>
          <div className="flex justify-center gap-2">
            {Array.from({ length }).map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="focus:ring-none h-[40px] w-full rounded border border-gray-300 text-center font-mono text-[20px] hover:border hover:border-[#0F9B7F] focus:border-[#0F9B7F] focus:outline-none"
                value={otp[index]}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={(input) => (inputRefs.current[index] = input)}
                disabled={loading}
              />
            ))}
          </div>
        </div>

        <button
          className={`h-[48] w-[436px] ${
            otp.join('').length === 6
              ? 'bg-[#0F9B7F] text-[#FFF] hover:bg-[#057B64]'
              : 'bg-[#8C8C8C] text-[#494949]'
          } self-center rounded-[8px]`}
          type="submit"
          disabled={loading}
          onClick={() => handleCode()}
        >
          <p className={`text-[16px] ${Outfit400.className}`}>VALIDAR CÓDIGO</p>
        </button>
      </div>
    </form>
  )
}

export default InputCode
