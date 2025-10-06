'use client'
import { Outfit400, Outfit700 } from '@/fonts'
import { SendEmailForgotPassword } from '@/helpers'
import { CloseSquare, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'

const SucessSendEmail = ({ onClose, emailForgotPassword, nextStep }) => {
  const [loading, setLoading] = useState(false)

  const handleCode = async () => {
    setLoading(true)

    await SendEmailForgotPassword({
      email: emailForgotPassword,
    })

    // if (responseLogin.success) {
    //   nextStep()
    // }

    setLoading(false)
  }

  return (
    <form className="h-[236px] w-[500px] rounded-[12px] bg-white p-[32px]">
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <span className={`${Outfit400.className}`}>RECUPERAR SENHA</span>
          <CloseSquare
            size="32"
            color="#BBBBBB"
            variant="Bulk"
            onClick={() => onClose()}
          />
        </div>

        <div className="flex items-center gap-2">
          <TickCircle size="40" color="#2CB04B" variant="Bulk" />
          <div>
            <p className={`${Outfit700.className} text-[16px]`}>
              Email enviado com sucesso.
            </p>
            <p className={`${Outfit400.className} text-[16px]`}>
              Confira seu e-mail para verificar o código enviado
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className={`h-[44px] w-full rounded-[8px] bg-[#E7E7E7] text-[#3E3E3E] transition duration-300 hover:bg-[#222222] hover:text-[#FFF]`}
            type="submit"
            disabled={loading}
            onClick={() => handleCode()}
          >
            <p className={`text-[16px] ${Outfit400.className}`}>
              REENVIAR LINK
            </p>
          </button>

          <button
            className={`h-[44px] w-full rounded-[8px] bg-[#0F9B7F] text-[#023D4F] transition duration-300 hover:bg-[#057B64]`}
            type="submit"
            disabled={loading}
            onClick={() => nextStep()}
          >
            <p className={`text-[16px] ${Outfit400.className} text-white`}>
              JÁ RECEBI O CÓDIGO
            </p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SucessSendEmail
