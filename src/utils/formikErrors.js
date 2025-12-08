export const getFlatErrors = (errors) => {
  const messages = []

  const walk = (err) => {
    if (!err) return

    if (typeof err === 'string') {
      messages.push(err)
    } else if (Array.isArray(err)) {
      err.forEach(walk)
    } else if (typeof err === 'object') {
      Object.values(err).forEach(walk)
    }
  }

  walk(errors)

  // remove duplicados, se houver
  return [...new Set(messages)]
}
