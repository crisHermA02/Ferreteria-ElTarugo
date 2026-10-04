import { useState } from 'react'
import './App.css'
import { ProductosProvider } from './context/ProductosContext'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'

function App() {
  const [pagina, setPagina] = useState('inicio')
  const [carrito, setCarrito] = useState([])

  function navegar(destino) {
    setPagina(destino)
    window.scrollTo(0, 0)
  }

  function agregarAlCarrito(producto) {
    setCarrito((actual) => {
      const existente = actual.find((item) => item.codigo === producto.codigo)
      if (!existente) return [...actual, { codigo: producto.codigo, cantidad: 1 }]
      if (existente.cantidad >= producto.stock) return actual
      return actual.map((item) =>
        item.codigo === producto.codigo ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    })
  }

  const cantidadCarrito = carrito.reduce((total, item) => total + item.cantidad, 0)

  return (
    <ProductosProvider>
      {pagina === 'catalogo' ? (
        <Catalogo
          onNavegar={navegar}
          onAgregar={agregarAlCarrito}
          cantidadCarrito={cantidadCarrito}
        />
      ) : (
        <Inicio onNavegar={navegar} cantidadCarrito={cantidadCarrito} />
      )}
    </ProductosProvider>
  )
}

export default App
