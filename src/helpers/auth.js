'use server'

import { cookies } from 'next/headers'

import { redirect } from 'next/navigation'
import api from './api'

export async function Login(payload) {
  try {
    const auth = await api.post('/auth/login', payload, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })

    const cookiesData = await cookies()
    cookiesData.set('token', auth.data.access_token)

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    console.log(error)
    const fallback = {
      message: 'Erro ao tentar logar',
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

export async function ChangePassword(payload) {
  try {
    const response = await api.post('/auth/change-password', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar mudar a senha.',
      statusCode: 500,
      error: 'UnknownError',
    }

    const errData = error?.response?.data || fallback

    return {
      success: false,
      error: errData,
    }
  }
}

export async function SendEmailForgotPassword(payload) {
  try {
    const forgotPassword = await api.post('/auth/forgot-password', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return {
      success: true,
      data: forgotPassword.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar mudar a senha.',
      statusCode: 500,
      error: 'UnknownError',
    }

    const errData = error?.response?.data || fallback

    return {
      success: false,
      error: errData,
    }
  }
}

export async function VerifyResetCode(resetCode) {
  try {
    const code = await api.get('/auth/validate-reset-token/' + resetCode, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })

    return {
      success: true,
      data: code.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar verificar o código',
      statusCode: 500,
      error: 'UnknownError',
    }

    const errData = error?.response?.data || fallback

    return {
      success: false,
      error: errData,
    }
  }
}

export async function ResetPassword(payload) {
  try {
    const response = await api.post('/auth/reset-password', payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar mudar a senha.',
      statusCode: 500,
      error: 'UnknownError',
    }

    const errData = error?.response?.data || fallback

    return {
      success: false,
      error: errData,
    }
  }
}

export async function Exit() {
  const cookiesData = await cookies()
  cookiesData.delete('token')
  redirect('/login')
}
