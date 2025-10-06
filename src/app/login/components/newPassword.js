'use client'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { ResetPassword } from '@/helpers'
import { useFormik } from 'formik'
import { CloseSquare, InfoCircle, Key, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'
import * as Yup from 'yup'

const NewPassword = ({ onClose, token, nextStep }) => {
  const [loading, setLoading] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const ForgotPasswordSchema = Yup.object().shape({
    newPasswordForgot: Yup.string()
      .required('A senha é obrigatória')
      .min(8, 'A senha deve ter pelo menos 8 caracteres')
      .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
      .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
      .matches(
        /[^A-Za-z0-9]/,
        'A senha deve conter pelo menos um caractere especial',
      ),

    newConfirmPasswordForgot: Yup.string()
      .required('A confirmação de senha é obrigatória')
      .oneOf(
        [Yup.ref('newPasswordForgot'), null],
        'As senhas devem ser iguais',
      ),
  })

  const formik = useFormik({
    validationSchema: ForgotPasswordSchema,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      newPasswordForgot: '',
      newConfirmPasswordForgot: '',
    },
    onSubmit: async (values) => {
      setLoading(true)

      const responseLogin = await ResetPassword({
        token,
        newPassword: values.newConfirmPasswordForgot,
      })

      if (responseLogin.success) {
        nextStep()
      }

      setLoading(false)
    },
  })

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev)
  }

  function hasUppercase(str) {
    return /[A-Z]/.test(str)
  }

  function hasUppercaseAndNumber(str) {
    return /[0-9]/.test(str)
  }

  function hasUppercaseNumberAndSpecial(str) {
    return /[^A-Za-z0-9]/.test(str) // qualquer coisa que NÃO seja letra ou número
  }

  return (
    <form
      className="h-[588px] w-[500px] rounded-[12px] bg-white p-[32px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <span className={`${Outfit400.className}`}>NOVA SENHA</span>
          <CloseSquare
            size="32"
            color="#BBBBBB"
            variant="Bulk"
            onClick={() => onClose()}
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[24px]">
            <TickCircle size="40" color="#2CB04B" variant="Bulk" />
            <div>
              <p className={`${Outfit700.className} text-[16px]`}>
                Código validado com sucesso.
              </p>
              <p className={`${Outfit400.className} text-[16px]`}>
                Digite sua nova senha
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="">
              <label
                className={`text-[14px] text-[#383838] ${Outfit400.className}`}
              >
                Senha<strong className="text-red-500">*</strong>
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
                    {...formik.getFieldProps('newPasswordForgot')}
                    type={showPassword ? 'text' : 'password'}
                    id="newPasswordForgot"
                    name="newPasswordForgot"
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
            <div className="">
              <label
                className={`text-[14px] text-[#383838] ${Outfit400.className}`}
              >
                Confirmar nova senha<strong className="text-red-500">*</strong>
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
                    {...formik.getFieldProps('newConfirmPasswordForgot')}
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="newConfirmPasswordForgot"
                    name="newConfirmPasswordForgot"
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
                  onClick={toggleConfirmPasswordVisibility}
                  disabled={loading}
                >
                  {showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className={`${Outfit300.className} text-[13px]`}>
              A senha deve conter:
            </p>

            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-2">
                {formik.values.newConfirmPasswordForgot.length >= 8 ? (
                  <TickCircle size="24" color="#2CB04B" variant="Bulk" />
                ) : (
                  <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                )}
                <p className={`${Outfit400.className} text-[13px]`}>
                  Minímo de <strong>8 caracteres</strong>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {hasUppercase(formik.values.newConfirmPasswordForgot) ? (
                  <TickCircle size="24" color="#2CB04B" variant="Bulk" />
                ) : (
                  <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                )}

                <p className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de <strong>1 caractere em letra maiúscula</strong>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {hasUppercaseAndNumber(
                  formik.values.newConfirmPasswordForgot,
                ) ? (
                  <TickCircle size="24" color="#2CB04B" variant="Bulk" />
                ) : (
                  <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                )}
                <p className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de <strong>1 caractere numérico</strong>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {hasUppercaseNumberAndSpecial(
                  formik.values.newConfirmPasswordForgot,
                ) ? (
                  <TickCircle size="24" color="#2CB04B" variant="Bulk" />
                ) : (
                  <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                )}
                <p className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de{' '}
                  <strong>1 caractere especial (*\-.,@#$%&=+!)</strong>
                </p>
              </div>
              <div className="flex items-center gap-2">
                {formik.values.newConfirmPasswordForgot.length > 1 &&
                formik.values.newConfirmPasswordForgot ===
                  formik.values.newPasswordForgot ? (
                  <TickCircle size="24" color="#2CB04B" variant="Bulk" />
                ) : (
                  <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                )}
                <p className={`${Outfit400.className} text-[13px]`}>
                  <strong>Senha</strong> deve ser <strong>diferente</strong> da
                  senha anterior
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
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
              ALTERAR SENHA
            </p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewPassword
