import { describe, it, expect } from 'vitest'
import { categoriasDe } from './categorias'

describe('categoriasDe', () => {
  it('Obtiene una lista de categorías eliminando elementos duplicados', () => {
    const productos = [
      { categoria: 'Obra Gruesa' },
      { categoria: 'Herramientas' },
      { categoria: 'Obra Gruesa' },
    ]
    expect(categoriasDe(productos)).toEqual(['Obra Gruesa', 'Herramientas'])
  })

  it('Retorna un arreglo vacío si el arreglo de productos de entrada está vacío', () => {
    expect(categoriasDe([])).toEqual([])
  })
})