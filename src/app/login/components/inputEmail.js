'use client'
import { Outfit400 } from '@/fonts'
import { SendEmailForgotPassword } from '@/helpers'
import { useFormik } from 'formik'
import { CloseSquare, Sms } from 'iconsax-reactjs'
import { useState } from 'react'
import * as Yup from 'yup'

const InputEmail = ({ onClose, setEmail, nextStep }) => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [loading, setLoading] = useState(false)

  const SignInSchema = Yup.object().shape({
    emailForgotPassword: Yup.string()
      .email('Email inválido')
      .required('O email é obrigatório'),
  })

  const formik = useFormik({
    validationSchema: SignInSchema,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      emailForgotPassword: '',
    },
    onSubmit: async (values) => {
      setLoading(true)

      const responseLogin = await SendEmailForgotPassword({
        email: values.emailForgotPassword,
      })

      if (responseLogin.success) {
        setEmail(values.emailForgotPassword)
        nextStep()
      }

      setLoading(false)
    },
  })

  return (
    <form
      className="h-[324px] w-[500px] rounded-[12px] bg-white p-[32px]"
      onSubmit={formik.handleSubmit}
    >
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
        <p className={`${Outfit400.className} text-[16px]`}>
          Digite seu e-mail para enviarmos um código para recuperação de sua
          senha.
        </p>
        <div className="w-full">
          <label
            className={`text-[14px] text-[#383838] ${Outfit400.className}`}
          >
            E-mail
          </label>
          <div
            className={`flex h-[40px] w-full flex-row items-center rounded-[8px] border-[1px] px-3 hover:border hover:border-[#00A59D] ${
              isFocusedEmail ? 'border-[#057B64]' : 'border-[#ABABAB]'
            }`}
          >
            <Sms size="24" color={isFocusedEmail ? '#383838' : '#ABABAB'} />
            <input
              {...formik.getFieldProps('emailForgotPassword')}
              type="email"
              id="emailForgotPassword"
              name="emailForgotPassword"
              className={`${Outfit400.className} ml-3 w-auto text-[16px] outline-none`}
              placeholder="Digite o email de login"
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
              disabled={loading}
            />
          </div>
        </div>
        <button
          className={`${
            formik.isValid
              ? 'bg-[#0F9B7F] text-[#023D4F] hover:bg-[#057B64]'
              : 'bg-[#A9A9A9]'
          } h-[44px] w-full rounded-[8px] transition duration-300`}
          type="submit"
          disabled={loading}
        >
          <p
            className={`text-[16px] ${Outfit400.className} ${
              formik.isValid ? 'text-white' : 'text-[#383838]'
            }`}
          >
            {loading ? 'ENVIANDO LINK...' : 'ENVIAR LINK'}
          </p>
        </button>
      </div>
    </form>
  )
}

export default InputEmail
