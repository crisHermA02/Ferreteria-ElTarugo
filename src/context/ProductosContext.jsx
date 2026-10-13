import { createContext, useContext, useState } from 'react'
import * as productoService from '../services/productoService'

const ProductosContext = createContext(null)

function normalizarProductos(lista) {
  return lista.map((p) => ({
    ...p,
    nombre: p.nombre ?? p.nombreDelProducto ?? '',
    precio: p.precio ?? p.pVentaClp ?? 0,
    precioAnterior: p.precioAnterior ?? null
  }))
}

export function ProductosProvider(props) {
  const [productos, setProductos] = useState(() =>
    normalizarProductos(productoService.listarProductos())
  )

  function crear(datos) {
    productoService.crearProducto(datos)
    setProductos(normalizarProductos(productoService.listarProductos()))
  }

  function actualizar(id, cambios) {
    productoService.actualizarProducto(id, cambios)
    setProductos(normalizarProductos(productoService.listarProductos()))
  }

  function eliminar(id) {
    productoService.eliminarProducto(id)
    setProductos(normalizarProductos(productoService.listarProductos()))
  }

  return (
    <ProductosContext.Provider value={{ productos, crear, actualizar, eliminar }}>
      {props.children}
    </ProductosContext.Provider>
  )
}

export function useProductos() {
  const contexto = useContext(ProductosContext)
  if (!contexto) {
    throw new Error('useProductos debe usarse dentro de un ProductosProvider')
  }
  return contexto
}