import { describe, it, expect } from 'vitest'
import { formatoPrecio } from './formato'

describe('formatoPrecio', () => {
  it('1. Retorna "$0" si el precio no es un número válido', () => {
    expect(formatoPrecio('invalid_number')).toBe('$0')
  })

  it('2. Formatea un número correctamente a formato de moneda CLP', () => {
    const resultado = formatoPrecio(25000)
    expect(resultado).toContain('25')
  })
})