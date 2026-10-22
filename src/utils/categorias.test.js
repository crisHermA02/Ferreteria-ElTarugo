import { describe, it, expect } from 'vitest'
import { categoriasDe } from './categorias'

describe('categoriasDe', () => {
  it('8. Extrae categorías únicas eliminando duplicados', () => {
    const productos = [
      { categoria: 'Obra Gruesa' },
      { categoria: 'Herramientas' },
      { categoria: 'Obra Gruesa' },
    ]
    expect(categoriasDe(productos)).toEqual(['Obra Gruesa', 'Herramientas'])
  })
})