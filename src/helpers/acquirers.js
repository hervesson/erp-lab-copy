'use server'

import { cookies } from 'next/headers'
import { TOKEN_KEY } from '../app/middleware'

import api from './api'

export async function CreateAcquire(payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.post('/financeiro/adquirentes', payload, {
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

export async function UpdateAcquire(payload, id) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch('/financeiro/adquirentes/' + id, payload, {
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

export async function ListAcquirers(
  term = '',
  unit = '',
  status = '',
  page = 1,
  limit = 10,
) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    // 1. Crie uma nova instância de URLSearchParams
    const params = new URLSearchParams()

    if (term !== '') {
      params.append('pesquisar', term)
    }
    if (page !== '') {
      params.append('unidade', unit)
    }
    if (page !== '') {
      params.append('status', status)
    }
    if (page !== '') {
      params.append('page', page)
    }
    if (limit !== '') {
      params.append('limit', limit)
    }

    // 3. Concatene a query string à base da URL
    const queryString = params.toString() // Gera 'param1=value1&param2=value2'
    const url = `/financeiro/adquirentes${queryString ? '?' + queryString : ''}` // Adiciona '?' apenas se houver query string

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
      message: 'Erro desconhecido ao tentar buscar métodos',
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

export async function DeleteAcquirers(id) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.delete('/financeiro/adquirentes/' + id, {
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

export async function ToggleStatusAcquirers(enterpriseId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/financeiro/adquirentes/' + enterpriseId + '/toggle-status',
      {},
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
