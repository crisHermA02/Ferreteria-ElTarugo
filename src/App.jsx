import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RutaProtegida from './components/molecules/RutaProtegida'
import Inicio from './pages/Inicio'
import Catalogo from './pages/Catalogo'
import Producto from './pages/Producto'
import Carrito from './pages/Carrito'
import Login from './pages/login'
import Registro from './pages/Registro'
import NoEncontrada from './pages/NoEncontrada'
import Contacto from './pages/Contacto'
import Blog from './pages/Blog'
import Ofertas from './pages/Ofertas'
import Checkout from './pages/Checkout'
import Resultado from './pages/Resultado'
import MisPedidos from './pages/MisPedidos'
import TableroAdmin from './pages/admin/TableroAdmin'
import SolicitudesAdmin from './pages/admin/SolicitudesAdmin'
import AdminProductos from './pages/admin/AdminProductos'
import ItemCriticosAdmin from './pages/admin/ItemCriticosAdmin'
import CategoriasAdmin from './pages/admin/CategoriasAdmin'
import UsuariosAdmin from './pages/admin/UsuariosAdmin'
import HistorialUsuarioAdmin from './pages/admin/HistorialUsuarioAdmin'
import ReportesPerfilAdmin from './pages/admin/ReportesPerfilAdmin'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/categoria/:nombre" element={<Catalogo />} />
        <Route path="/buscar/:texto" element={<Catalogo />} />
        <Route path="/producto/:id" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/ofertas" element={<Ofertas />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/resultado" element={<Resultado />} />
        <Route path="/mis-pedidos" element={<RutaProtegida><MisPedidos /></RutaProtegida>} />

        <Route path="/admin" element={<RutaProtegida soloAdmin><TableroAdmin /></RutaProtegida>} />
        <Route path="/admin/solicitudes" element={<RutaProtegida soloAdmin><SolicitudesAdmin /></RutaProtegida>} />
        <Route path="/admin/catalogo" element={<RutaProtegida soloAdmin><AdminProductos /></RutaProtegida>} />
        <Route path="/admin/items-criticos" element={<RutaProtegida soloAdmin><ItemCriticosAdmin /></RutaProtegida>} />
        <Route path="/admin/categorias" element={<RutaProtegida soloAdmin><CategoriasAdmin /></RutaProtegida>} />
        <Route path="/admin/usuarios" element={<RutaProtegida soloAdmin><UsuariosAdmin /></RutaProtegida>} />
        <Route path="/admin/usuarios/:email/pedidos" element={<RutaProtegida soloAdmin><HistorialUsuarioAdmin /></RutaProtegida>} />
        <Route path="/admin/reportes" element={<RutaProtegida soloAdmin><ReportesPerfilAdmin /></RutaProtegida>} />

        <Route path="*" element={<NoEncontrada />} />
      </Routes>
    </BrowserRouter>
  )
}