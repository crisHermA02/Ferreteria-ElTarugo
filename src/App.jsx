import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Producto from './pages/Producto'
import Login from './pages/login'
import NoEncontrada from './pages/NoEncontrada'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria/:nombre" element={<Catalogo />} />
        <Route path="/buscar/:texto" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}