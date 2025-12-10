'use server'

import { cookies } from 'next/headers'
import { TOKEN_KEY } from '../app/middleware'

import api from './api'

export async function CreateCabecalhoRodape(
  file,
  unidadeId,
  tipo = 'CABECALHO',
) {
  console.log(file)
  if (!file || !unidadeId) return null

  const cookieStore = await cookies()
  const token = cookieStore.get(TOKEN_KEY)?.value

  if (!token) {
    console.error('Token não encontrado nos cookies')
    return null
  }

  const formData = new FormData()
  // equivalentes ao que você mandou no exemplo do WebKitFormBoundary:
  formData.append('unidadeId', String(unidadeId)) // {{unidadeId}}
  formData.append('tipo', tipo) // CABECALHO (padrão)
  formData.append('arquivo', file) // logo-cabecalho.png

  try {
    const { data } = await api.post(
      '/configuracoes/documentacao/cabecalhos-rodapes',
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // axios se vira com o multipart boundary quando o body é FormData
        },
      },
    )

    // ajusta aqui conforme o backend responde (path, url, etc.)
    return {
      success: true,
      data,
    }
  } catch (error) {
    const fallback = {
      mensagem: 'Erro desconhecido ao tentar cabeçalho e rodapé',
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

export async function ListCabecalhoRodape(term = '', page = 1, limit = 10) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    // 1. Crie uma nova instância de URLSearchParams
    const params = new URLSearchParams()

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
    const url = `/configuracoes/documentacao/cabecalhos-rodapes${queryString ? '?' + queryString : ''}` // Adiciona '?' apenas se houver query string

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

export async function DeleteCabecalhoRodape(cabecalhoRodapeId) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const response = await api.delete(
      '/configuracoes/documentacao/cabecalhos-rodapes/' + cabecalhoRodapeId,
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
