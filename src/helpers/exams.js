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

    console.log(error?.response)

    return {
      success: false,
      error: errData,
    }
  }
}

export async function CreateVinculoExam(payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.post(
      '/exames/exames-laboratorios-apoio/batch',
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value,
        },
      },
    )

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

    console.log(error?.response)

    return {
      success: false,
      error: errData,
    }
  }
}

export async function listAllExams(
  term = '',
  status,
  tipoExameId,
  especialidadeId = '',
  page = '',
  limit = '',
) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    // 1. Crie uma nova instância de URLSearchParams
    const params = new URLSearchParams()

    if (term !== '') {
      params.append('search', term)
    }

    if (status !== '') {
      params.append('status', status)
    }

    if (tipoExameId !== '') {
      params.append('tipo_exame_id', tipoExameId)
    }

    if (especialidadeId !== '') {
      params.append('especialidade_id', especialidadeId)
    }

    if (page !== '') {
      params.append('page', page)
    }

    if (limit !== '') {
      params.append('limit', limit)
    }

    // 3. Concatene a query string à base da URL
    const queryString = params.toString() // Gera 'param1=value1&param2=value2'
    const url = `/exames/exames${queryString ? '?' + queryString : ''}` // Adiciona '?' apenas se houver query string

    const response = await api.get(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? 'Bearer ' + token.value : undefined,
      },
    })

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar buscar unidades.',
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

export async function UpdateStatusExam(enterpriseId, payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/exames/exames/' + enterpriseId,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value,
        },
      },
    )

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

export async function UpdateExam(enterpriseId, payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/exames/exames/' + enterpriseId,
      payload,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value,
        },
      },
    )

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

export async function DeleteExam(examId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.delete('/exames/exames/' + examId, {
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
      message: 'Erro desconhecido ao tentar deletar unidade',
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

export async function GetHelpInformations(examId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.get(
      `/exames/exames-laboratorios-apoio?exameId=${examId}&page=1&limit=10000`,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? 'Bearer ' + token.value : undefined,
        },
      },
    )

    return {
      success: true,
      data: response.data,
    }
  } catch (error) {
    const fallback = {
      message: 'Erro desconhecido ao tentar buscar unidades.',
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
