import { describe, it, expect } from 'vitest'
import { filtrarProductos } from './filtrarDatos'

describe('filtrarProductos', () => {
  const productosMock = [
    { id: 1, nombre: 'Ladrillo Prensado', categoria: 'Obra Gruesa' },
    { id: 2, nombre: 'Mortero Nivelador', categoria: 'Obra Gruesa' },
    { id: 3, nombre: 'Martillo Stanley', categoria: 'Herramientas' },
  ]

  it('7. Filtra la lista por texto de búsqueda y por categoría', () => {
    const filtroTexto = filtrarProductos(productosMock, { texto: 'ladrillo' })
    expect(filtroTexto).toHaveLength(1)
    expect(filtroTexto[0].id).toBe(1)

    const filtroCategoria = filtrarProductos(productosMock, { categoria: 'Herramientas' })
    expect(filtroCategoria).toHaveLength(1)
    expect(filtroCategoria[0].nombre).toBe('Martillo Stanley')
  })
})