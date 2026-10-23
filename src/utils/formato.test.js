import { describe, it, expect } from 'vitest'
import { formatoPrecio } from './formato'

describe('formatoPrecio', () => {
  it('Asigna el formato de moneda en pesos chilenos a un número válido', () => {
    expect(formatoPrecio(1800)).toBe('$1.800')
  })

  it('Retorna "$0" cuando recibe un valor que no se puede convertir a número', () => {
    expect(formatoPrecio('texto_invalido')).toBe('$0')
    expect(formatoPrecio(NaN)).toBe('$0')
  })
})