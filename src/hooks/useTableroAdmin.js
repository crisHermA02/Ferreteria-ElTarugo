import { useState, useEffect } from 'react'

export function useTableroAdmin() {
  const [metricas, setMetricas] = useState({
    totalSolicitudes: 0,
    totalProductos: 0,
    itemsCriticos: 0,
    totalUsuarios: 0,
  })

  useEffect(() => {
    const pedidos = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
    const productos = JSON.parse(localStorage.getItem('productos') || '[]')
    const usuarios = JSON.parse(localStorage.getItem('tienda_usuarios') || '[]')

    const criticos = productos.filter((p) => (p.stock ?? 10) <= 5).length

    setMetricas({
      totalSolicitudes: pedidos.length,
      totalProductos: productos.length,
      itemsCriticos: criticos,
      totalUsuarios: usuarios.length,
    })
  }, [])

  return { metricas }
}