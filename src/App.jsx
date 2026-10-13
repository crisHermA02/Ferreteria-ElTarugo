import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductosProvider } from './context/ProductosContext'
import { CarritoProvider } from './context/CarritoContext'
import Catalogo from './pages/Catalogo'
import Carrito from './pages/Carrito'
import Login from './pages/login'
import AdminProductos from './pages/AdminProductos'
import NoEncontrada from './pages/NoEncontrada'

export default function App() {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/categoria/:nombre" element={<Catalogo />} />
            <Route path="/buscar/:texto" element={<Catalogo />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/productos" element={<AdminProductos />} />
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
    </ProductosProvider>
  )
}