import { describe, it, expect } from 'vitest'
import {
  validarObligatorio,
  validarEmail,
  validarClave,
  validarNumero,
  validarConfirmacion,
} from './validaciones'

describe('validarObligatorio', () => {
  it('retorna el mensaje de error por defecto si el valor está vacío', () => {
    expect(validarObligatorio('   ')).toBe('Este campo es obligatorio.')
  })

  it('retorna mensaje personalizado si se proporciona', () => {
    expect(validarObligatorio('', 'Nombre requerido')).toBe('Nombre requerido')
  })

  it('retorna cadena vacía si el campo tiene texto', () => {
    expect(validarObligatorio('Martillo')).toBe('')
  })
})

describe('validarEmail', () => {
  it('retorna mensaje específico si el correo está vacío', () => {
    expect(validarEmail('   ')).toBe('El correo es obligatorio.')
  })

  it('rechaza un formato sin @ o sin punto en el dominio', () => {
    expect(validarEmail('correoSinFormato')).toBe(
      'Escribe un correo válido, por ejemplo nombre@correo.cl.'
    )
  })

  it('acepta un correo electrónico válido', () => {
    expect(validarEmail('cliente@tarugo.cl')).toBe('')
  })
})

describe('validarClave', () => {
  it('exige un mínimo de 6 caracteres', () => {
    expect(validarClave('12345')).toBe('La clave debe tener al menos 6 caracteres.')
    expect(validarClave('123456')).toBe('')
  })
})

describe('validarNumero', () => {
  it('retorna error si el campo está vacío', () => {
    expect(validarNumero('   ', 'Precio')).toBe('Precio es obligatorio.')
  })

  it('rechaza entradas que no son números o que están por debajo del mínimo', () => {
    expect(validarNumero('abc', 'Stock', 0)).toBe('Stock debe ser un número desde 0.')
    expect(validarNumero('-5', 'Stock', 0)).toBe('Stock debe ser un número desde 0.')
  })

  it('retorna cadena vacía cuando el número es válido y cumple el mínimo', () => {
    expect(validarNumero('25', 'Stock', 0)).toBe('')
  })
})

describe('validarConfirmacion', () => {
  it('retorna error si las claves no coinciden', () => {
    expect(validarConfirmacion('clave123', 'claveDiferente')).toBe('Las claves no coinciden.')
  })

  it('retorna cadena vacía si ambas claves son iguales', () => {
    expect(validarConfirmacion('clave123', 'clave123')).toBe('')
  })
})