'use server'

import { cookies } from 'next/headers'
import { TOKEN_KEY } from '../app/middleware'

import api from './api'

export async function CreateEnterprise(payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.post('/cadastros/empresas', payload, {
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

export async function ListEnterprises(
  term = '',
  type = '',
  status = '',
  page = '',
  limit = '',
) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    // 1. Crie uma nova instância de URLSearchParams
    const params = new URLSearchParams()

    if (type !== '') {
      params.append('tipoEmpresa', type)
    }
    if (status !== '') {
      params.append('ativo', status)
    }
    if (term !== '') {
      params.append('termo', term)
    }
    if (page !== '') {
      params.append('page', page)
    }
    if (limit !== '') {
      params.append('limit', limit)
    }

    // 3. Concatene a query string à base da URL
    const queryString = params.toString() // Gera 'param1=value1&param2=value2'
    const url = `/cadastros/empresas/search${queryString ? '?' + queryString : ''}` // Adiciona '?' apenas se houver query string

    console.log(url)

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

export async function ListAllEnterprises() {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.get('/cadastros/empresas', {
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

export async function ListAllEnterprisesPerType(type) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.get('/cadastros/empresas/tipo/' + type, {
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

export async function ActiveStatusEnterprise(enterpriseId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/cadastros/empresas/' + enterpriseId + '/ativar',
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

export async function InactiveStatusEnterprise(enterpriseId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/cadastros/empresas/' + enterpriseId + '/desativar',
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

export async function DeleteEnterprise(enterpriseId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.delete('/cadastros/empresas/' + enterpriseId, {
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

export async function UpdateEnterprise(enterpriseId, payload) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/cadastros/empresas/' + enterpriseId,
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

export async function UpdateConvenio(convenioId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.patch(
      '/relacionamento/convenios/' + convenioId,
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
