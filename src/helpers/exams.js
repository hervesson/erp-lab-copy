'use server'

import { cookies } from 'next/headers'
import { TOKEN_KEY } from '../app/middleware'

import api from './api'

export async function CreateExam(payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.post('/exames/exames', payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.value,
      },
    })

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar criar unidade',
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
