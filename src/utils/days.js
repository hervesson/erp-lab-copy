export const gerarDias = () => {
  return Array.from({ length: 31 }, (_, i) => ({
    id: i + 1,
    label: String(i + 1),
  }))
}
