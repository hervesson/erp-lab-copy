'use server'

import api from './api'

export async function SearchCep(cep) {
  try {
    const auth = await api.get('/cep/' + cep, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })

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

export async function SearchCNAE(term) {
  try {
    const auth = await api.get('/cnae/search?q=' + term, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })

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
