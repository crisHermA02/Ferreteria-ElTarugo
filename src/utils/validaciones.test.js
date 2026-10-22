import { describe, it, expect } from 'vitest'
import {
  validarEmail,
  validarClave,
  validarNumero,
  validarConfirmacion,
} from './validaciones'

describe('Validaciones de formularios', () => {
  it('3. Rechaza correos mal construidos y acepta formatos válidos', () => {
    expect(validarEmail('correo-invalido')).toBe(
      'Escribe un correo válido, por ejemplo nombre@correo.cl.'
    )
    expect(validarEmail('cliente@tarugo.cl')).toBe('')
  })

  it('4. Exige una clave de al menos 6 caracteres', () => {
    expect(validarClave('12345')).toBe('La clave debe tener al menos 6 caracteres.')
    expect(validarClave('123456')).toBe('')
  })

  it('5. Valida campos numéricos y el mínimo requerido', () => {
    expect(validarNumero('-5', 'Stock', 0)).toBe('Stock debe ser un número desde 0.')
    expect(validarNumero('10', 'Stock', 0)).toBe('')
  })

  it('6. Comprueba que las contraseñas coincidan', () => {
    expect(validarConfirmacion('clave123', 'claveDiferente')).toBe('Las claves no coinciden.')
    expect(validarConfirmacion('clave123', 'clave123')).toBe('')
  })
})