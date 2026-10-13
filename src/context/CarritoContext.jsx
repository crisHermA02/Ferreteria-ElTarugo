import { createContext, useContext, useState } from 'react'

const CarritoContext = createContext(null)

export function CarritoProvider(props) {
  const [items, setItems] = useState([])

  function add(producto) {
    setItems((actual) => {
      const existente = actual.find((i) => i.producto.id === producto.id)
      if (existente) {
        return actual.map((i) =>
          i.producto.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i,
        )
      }
      return [...actual, { producto, cantidad: 1 }]
    })
  }

  function remove(id) {
    setItems((actual) => actual.filter((i) => i.producto.id !== id))
  }

  function increment(id) {
    setItems((actual) =>
      actual.map((i) => (i.producto.id === id ? { ...i, cantidad: i.cantidad + 1 } : i)),
    )
  }

  const totalItems = items.reduce((suma, i) => suma + i.cantidad, 0)
  const totalPrecio = items.reduce((suma, i) => suma + i.producto.precio * i.cantidad, 0)

  const valor = { items, add, remove, increment, totalItems, totalPrecio }

  return <CarritoContext.Provider value={valor}>{props.children}</CarritoContext.Provider>
}

export function useCarrito() {
  const contexto = useContext(CarritoContext)
  if (!contexto) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider')
  }
  return contexto
}