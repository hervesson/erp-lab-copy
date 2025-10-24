export function formatCpf(cpf = '') {
  // 1. Remove qualquer caractere que não seja dígito
  const numerosCpf = cpf.replace(/\D/g, '')

  // 2. Aplica a máscara usando regex
  // (\\d{3}) - Captura 3 dígitos
  // .?      - Opcionalmente aceita um ponto (para CPFs já formatados)
  // -?      - Opcionalmente aceita um hífen (para CPFs já formatados)
  // $1.$2.$3-$4 - Formata os grupos capturados
  return numerosCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

export function formatCnpj(cnpjString) {
  if (!cnpjString) {
    return ''
  }

  // Remove tudo que não for dígito e limita a 14 caracteres
  let value = String(cnpjString).replace(/\D/g, '')
  if (value.length > 14) {
    value = value.slice(0, 14)
  }

  // Aplica a máscara: XX.XXX.XXX/XXXX-XX
  value = value.replace(/^(\d{2})(\d)/, '$1.$2') // 00.123...
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3') // 00.123.456...
  value = value.replace(/\.(\d{3})(\d)/, '.$1/$2') // 00.123.456/7890... (aqui o terceiro ponto vira barra)
  value = value.replace(/(\d{4})(\d)/, '$1-$2') // 00.123.456/7890-12

  return value
}

/**
 * Aplica uma máscara de telefone a uma string numérica.
 * Suporta formatos como (XX) XXXX-XXXX (8 dígitos) ou (XX) XXXXX-XXXX (9 dígitos).
 * @param {string} phoneNumberString - A string contendo apenas os dígitos do telefone.
 * @returns {string} O telefone formatado.
 */
export function formatPhoneNumber(phoneNumberString) {
  if (!phoneNumberString) {
    return ''
  }

  // Remove tudo que não for dígito e limita a 11 caracteres (para DDD + 9 dígitos)
  let value = String(phoneNumberString).replace(/\D/g, '')
  if (value.length > 11) {
    value = value.slice(0, 11)
  }

  // Aplica a máscara: (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
  value = value.replace(/^(\d{2})(\d)/, '($1) $2') // (00) 123...

  // Se tiver 9 dígitos (ex: celular), aplica a máscara de 5-4
  if (value.length > 9) {
    // 9 ou mais caracteres após o DDD
    value = value.replace(/(\d{5})(\d)/, '$1-$2') // (00) 12345-6789
  } else {
    // Se tiver 8 dígitos (ex: fixo), aplica a máscara de 4-4
    value = value.replace(/(\d{4})(\d)/, '$1-$2') // (00) 1234-5678
  }

  return value
}

/**
 * Aplica uma máscara de CEP a uma string numérica.
 * @param {string} cepString - A string contendo apenas os dígitos do CEP.
 * @returns {string} O CEP formatado como "XXXXX-XXX".
 */
export function formatCep(cepString) {
  if (!cepString) {
    return ''
  }

  // Remove tudo que não for dígito e limita a 8 caracteres
  let value = String(cepString).replace(/\D/g, '')
  if (value.length > 8) {
    value = value.slice(0, 8)
  }

  // Aplica a máscara: XXXXX-XXX
  value = value.replace(/^(\d{5})(\d)/, '$1-$2') // 00000-123

  return value
}
