export function validarObligatorio(valor, mensaje = 'Este campo es obligatorio.') {
  return valor.trim() === '' ? mensaje : ''
}

export function validarEmail(valor) {
  if (valor.trim() === '') {
    return 'El correo es obligatorio.'
  }
  const partes = valor.trim().split('@')

  const valido = partes.length === 2 && partes[0] !== '' && partes[1].includes('.')
  return valido ? '' : 'Escribe un correo válido, por ejemplo nombre@correo.cl.'
}

export function validarClave(valor) {
  return valor.length < 6 ? 'La clave debe tener al menos 6 caracteres.' : ''
}

export function validarNumero(valor, nombreCampo, minimo = 0) {
  if (valor.trim() === '') {
    return `${nombreCampo} es obligatorio.`
  }
  const numero = Number(valor)
  if (Number.isNaN(numero) || numero < minimo) {
    return `${nombreCampo} debe ser un número desde ${minimo}.`
  }
  return ''
}

export function validarConfirmacion(clave, confirmacion) {
  return clave === confirmacion ? '' : 'Las claves no coinciden.'
}