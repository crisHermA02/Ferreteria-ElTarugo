import { describe, it, expect, beforeEach } from 'vitest'
import { crearProducto, obtenerProducto } from './productoService'

describe('productoService', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('9. Asigna un ID autoincremental al registrar un nuevo producto', () => {
    const nuevo = crearProducto({
      nombre: 'Casco de seguridad 3M',
      precio: 8900,
      categoria: 'Seguridad',
    })
    expect(nuevo.id).toBeGreaterThan(0)
    expect(nuevo.nombre).toBe('Casco de seguridad 3M')
  })

  it('10. Recupera un producto específico mediante su ID', () => {
    const productoCreado = crearProducto({
      nombre: 'Manguera Tigre',
      precio: 12000,
    })
    const encontrado = obtenerProducto(productoCreado.id)
    expect(encontrado).toEqual(productoCreado)
  })
})