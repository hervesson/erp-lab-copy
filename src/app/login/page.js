'use client'
import ModalFramer from '@/components/ModalFramer'
import { useAuth } from '@/contexts/auth'
import { Outfit400 } from '@/fonts'
import { Login } from '@/helpers'
import { useFormik } from 'formik'
import { Key, Sms } from 'iconsax-reactjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as Yup from 'yup'
import Divider from '../../components/Divider'

// forgotPassword
import InputOtpCode from './components/inputCode'
import InputEmail from './components/inputEmail'
import NewPassword from './components/newPassword'
import SucessForgotPassword from './components/successForgotPassword'
import SucessSendEmail from './components/successSendEmail'

export default function Page() {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocusedEmail, setIsFocusedEmail] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openModalForgotPassword, setOpenModalForgotPassword] = useState(false)
  const [emailForgotPassword, setEmailForgotPassword] = useState('')
  const [token, setToken] = useState('')
  const [step, setStep] = useState('inputEmail')
  const router = useRouter()

  const { login, defineUser } = useAuth()

  const SignInSchema = Yup.object().shape({
    emailLogin: Yup.string()
      .email('Email inválido')
      .required('O email é obrigatório'),
    passwordLogin: Yup.string()
      .min(8, 'A senha deve ter no mínimo 8 caracteres')
      .required('A senha é obrigatória'),
  })

  const formik = useFormik({
    validationSchema: SignInSchema,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      emailLogin: '',
      passwordLogin: '',
    },
    onSubmit: async (values) => {
      setLoading(true)

      const responseLogin = await Login({
        email: values.emailLogin,
        password: values.passwordLogin,
      })

      if (responseLogin.success) {
        login(responseLogin.data.access_token)
        defineUser(responseLogin.data.user)
        router.push('/atendimento/pacientes')
      }

      setLoading(false)
    },
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const stepsForgotPassword = {
    inputEmail: (
      <InputEmail
        onClose={() => {
          setOpenModalForgotPassword(!openModalForgotPassword)
          setStep('inputEmail')
        }}
        setEmail={(email) => setEmailForgotPassword(email)}
        nextStep={() => setStep('sucessSendEmail')}
      />
    ),
    sucessSendEmail: (
      <SucessSendEmail
        onClose={() => {
          setOpenModalForgotPassword(!openModalForgotPassword)
          setStep('inputEmail')
        }}
        emailForgotPassword={emailForgotPassword}
        nextStep={() => setStep('inputOtpCode')}
      />
    ),
    inputOtpCode: (
      <InputOtpCode
        onClose={() => {
          setOpenModalForgotPassword(!openModalForgotPassword)
          setStep('inputEmail')
        }}
        setToken={(token) => setToken(token)}
        nextStep={() => setStep('newPassword')}
      />
    ),
    newPassword: (
      <NewPassword
        onClose={() => {
          setOpenModalForgotPassword(!openModalForgotPassword)
          setStep('inputEmail')
        }}
        token={token}
        nextStep={() => setStep('sucessForgotPassword')}
      />
    ),
    sucessForgotPassword: (
      <SucessForgotPassword
        onClose={() => {
          setOpenModalForgotPassword(!openModalForgotPassword)
          setStep('inputEmail')
        }}
      />
    ),
  }

  return (
    <div
      className="flex h-screen w-screen justify-end bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/image_login.png')" }}
    >
      <div className="flex w-[947px] items-center justify-center rounded-[20px] bg-white">
        <form
          className="flex h-[450px] w-[418px] flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <Image
            src="/assets/images/LOGO.png"
            alt="Logo"
            width={105}
            height={45}
          />
          <div className="mt-[46px] flex h-[144px] w-full flex-col justify-between">
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
                  {...formik.getFieldProps('emailLogin')}
                  type="email"
                  id="emailLogin"
                  name="emailLogin"
                  className={`${Outfit400.className} ml-3 w-auto text-[16px] outline-none`}
                  placeholder="Digite..."
                  onFocus={() => setIsFocusedEmail(true)}
                  onBlur={() => setIsFocusedEmail(false)}
                  disabled={loading}
                />
              </div>
            </div>
            <div className="">
              <label
                className={`text-[14px] text-[#383838] ${Outfit400.className}`}
              >
                Senha
              </label>
              <div
                className={`flex h-[40px] w-full flex-row items-center justify-between rounded-[8px] border-[1px] px-3 hover:border hover:border-[#00A59D] ${
                  isFocusedPassword ? 'border-[#057B64]' : 'border-[#ABABAB]'
                }`}
              >
                <div className="flex">
                  <Key
                    size="24"
                    color={isFocusedPassword ? '#383838' : '#ABABAB'}
                  />
                  <input
                    {...formik.getFieldProps('passwordLogin')}
                    type={showPassword ? 'text' : 'password'}
                    id="passwordLogin"
                    name="passwordLogin"
                    className={`${Outfit400.className} ml-3 w-[200px] text-[16px] outline-none`}
                    placeholder="Digite..."
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    disabled={loading}
                  />
                </div>
                <button
                  type="button"
                  className={`text-[16px] text-[#BBBBBB] ${Outfit400.className}`}
                  onClick={togglePasswordVisibility}
                  disabled={loading}
                >
                  {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[42px] flex w-full flex-col gap-[42px]">
            <button
              className={`${
                formik.isValid
                  ? 'bg-[#0F9B7F] text-white'
                  : 'bg-[#A9A9A9] text-[#494949]'
              } h-[44px] w-full rounded-[8px] transition duration-300 hover:bg-[#057B64]`}
              type="submit"
              disabled={loading}
            >
              <p className={`text-[16px] ${Outfit400.className} `}>
                {loading ? 'ACESSANDO...' : 'ACESSAR'}
              </p>
            </button>

            <Divider className={'w-full'} />

            <button
              type="button"
              className="h-[44] w-full rounded-[8px] border border-[#0F9B7F] hover:bg-[#E0FFF9]"
              onClick={() => setOpenModalForgotPassword(true)}
              disabled={loading}
            >
              <p
                className={`text-[16px] text-[#0F9B7F] ${Outfit400.className} `}
              >
                RECUPERAR SENHA
              </p>
            </button>
          </div>
        </form>
      </div>
      <ModalFramer
        open={openModalForgotPassword}
        setOpen={() => setOpenModalForgotPassword(!openModalForgotPassword)}
      >
        {stepsForgotPassword[step]}
      </ModalFramer>
    </div>
  )
}
