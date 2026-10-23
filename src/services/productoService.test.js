import { describe, it, expect, beforeEach } from 'vitest'
import { listarProductos, obtenerProducto, crearProducto, actualizarProducto, eliminarProducto } from './productoService'

describe('productoService', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('ListarProductos carga y retorna la lista inicial desde datos por defecto', () => {
    const lista = listarProductos()
    expect(Array.isArray(lista)).toBe(true)
    expect(lista.length).toBeGreaterThan(0)
  })

  it('CrearProducto guarda un producto nuevo asignando un ID autoincremental', () => {
    const nuevo = crearProducto({ nombre: 'Casco de seguridad', precio: 8900 })
    expect(nuevo.id).toBeGreaterThan(0)
    expect(nuevo.nombre).toBe('Casco de seguridad')
  })

  it('ObtenerProducto retorna el producto correspondiente a un ID o null si no existe', () => {
    const creado = crearProducto({ nombre: 'Martillo Stanley', precio: 15000 })

    expect(obtenerProducto(creado.id)).toEqual(creado)
    expect(obtenerProducto(99999)).toBeNull()
  })

  it('ActualizarProducto modifica las propiedades de un producto existente', () => {
    const creado = crearProducto({ nombre: 'Cinta Métrica', precio: 3000 })
    const actualizado = actualizarProducto(creado.id, { precio: 3500 })

    expect(actualizado.precio).toBe(3500)
    expect(obtenerProducto(creado.id).precio).toBe(3500)
  })

  it('ActualizarProducto retorna null si el ID a modificar no existe', () => {
    const resultado = actualizarProducto(99999, { precio: 5000 })
    expect(resultado).toBeNull()
  })

  it('EliminarProducto remueve un producto de la lista en LocalStorage', () => {
    const creado = crearProducto({ nombre: 'Sartén de obra', precio: 5000 })
    eliminarProducto(creado.id)

    expect(obtenerProducto(creado.id)).toBeNull()
  })
})