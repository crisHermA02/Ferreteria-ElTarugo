import { describe, it, expect } from 'vitest'
import { filtrarProductos } from './filtrarDatos'

describe('filtrarProductos', () => {
  const productosMock = [
    { id: 1, nombre: 'Cemento Melón 25kg', categoria: 'Obra Gruesa' },
    { id: 2, nombre: 'Taladro Makita', categoria: 'Herramientas' },
  ]

  it('Filtra por coincidencia de texto ignorando mayúsculas y minúsculas', () => {
    const resultado = filtrarProductos(productosMock, { texto: 'CEMENTO' })
    expect(resultado).toHaveLength(1)
    expect(resultado[0].nombre).toBe('Cemento Melón 25kg')
  })

  it('Filtra exactamente por la categoría indicada en los parámetros', () => {
    const resultado = filtrarProductos(productosMock, { categoria: 'Herramientas' })
    expect(resultado).toHaveLength(1)
    expect(resultado[0].nombre).toBe('Taladro Makita')
  })
})