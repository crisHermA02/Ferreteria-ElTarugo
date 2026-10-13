export function formatoPrecio(precio) {
  const numero = Number(precio)

  if (typeof precio !== 'number' || Number.isNaN(numero)) {
    return '$0' // O un texto por defecto como 'N/A' o '-'
  }

  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(numero)
}