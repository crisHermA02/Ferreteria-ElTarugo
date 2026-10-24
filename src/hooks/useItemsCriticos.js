import { useState, useEffect } from 'react'

export function useItemsCriticos(umbralInicial = 5) {
  const [productos, setProductos] = useState([])
  const [umbral, setUmbral] = useState(umbralInicial)
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const productosGuardados = JSON.parse(localStorage.getItem('productos') || '[]')
    setProductos(productosGuardados)
  }, [])

  const itemsCriticos = productos.filter((p) => {
    const stockActual = p.stock ?? 0
    const esCritico = stockActual <= umbral
    const coincideBusqueda =
      p.nombreDelProducto?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.categoria?.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.id?.toString().includes(busqueda)
    return esCritico && coincideBusqueda
  })

  function actualizarStock(id, nuevoStock) {
    const stockNumerico = Math.max(0, parseInt(nuevoStock, 10) || 0)
    const actualizados = productos.map((p) =>
      p.id === id ? { ...p, stock: stockNumerico } : p
    )
    setProductos(actualizados)
    localStorage.setItem('productos', JSON.stringify(actualizados))
  }

  return {
    itemsCriticos,
    totalCriticos: itemsCriticos.length,
    umbral,
    setUmbral,
    busqueda,
    setBusqueda,
    actualizarStock
  }
}