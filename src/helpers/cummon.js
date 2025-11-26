'use server'

import { cookies } from 'next/headers'
import { TOKEN_KEY } from '../app/middleware'

import api from './api'

export async function SearchCep(cep) {
  try {
    const auth = await api.get('/infraestrutura/cep/' + cep, {
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
    const fallback = {
      message: error.response.data,
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
    const auth = await api.get('/infraestrutura/cnae/search?q=' + term, {
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
      message: 'Erro ao tentar buscar CNAEs',
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

export async function ListAllCNAEs() {
  try {
    const auth = await api.get('/infraestrutura/cnae/saude', {
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

export async function SearchCnpj(CNPJ) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const auth = await api.get('/cadastros/empresas/cnpj/' + CNPJ, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.value,
      },
    })

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    const fallback = {
      message: error.response.data,
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

export async function SearchStates() {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const auth = await api.get('/infraestrutura/estados', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.value,
      },
    })

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    const fallback = {
      message: error.response.data,
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

export async function SearchCities(UF) {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const auth = await api.get('/infraestrutura/cidades?uf=' + UF, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token.value,
      },
    })

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    const fallback = {
      message: error.response.data,
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

//

export async function SearchCadastroPaciente() {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const auth = await api.get(
      '/api/v1/configuracoes-campos/campos-disponiveis/cadastro_paciente',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value,
        },
      },
    )

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    const fallback = {
      message: error.response.data,
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

export async function SearchOrdemDeServico() {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const auth = await api.get(
      '/api/v1/configuracoes-campos/campos-disponiveis/ordem_servico',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value,
        },
      },
    )

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    const fallback = {
      message: error.response.data,
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}

export async function SearchTiss() {
  try {
    const cookie = await cookies()
    const token = cookie.get(TOKEN_KEY)

    const auth = await api.get(
      '/api/v1/configuracoes-campos/campos-disponiveis/tiss',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token.value,
        },
      },
    )

    return {
      success: true,
      data: auth.data,
    }
  } catch (error) {
    const fallback = {
      message: error.response.data,
      statusCode: 500,
      error: 'UnknownError',
    }

    return {
      success: false,
      error: fallback,
    }
  }
}
