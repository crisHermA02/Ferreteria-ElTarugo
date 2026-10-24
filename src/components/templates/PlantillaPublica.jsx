import { Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import { useProductos } from '../../context/ProductosContext'
import { useAuth } from '../../context/AuthContext'
import { categoriasDe } from '../../utils/categorias'
import { Navbar } from '../organism/nav'
import { Footer } from '../organism/footer'

export function PlantillaPublica(props) {

  const navigate = useNavigate()
  const ubicacion = useLocation()
  const productosCtx = useProductos()
  const carrito = useCarrito()
  const { usuario } = useAuth()

  const esAdmin = usuario?.rol === 'Administrador'

  return (
    <>
      {esAdmin && (
        <div className="bg-dark text-white py-2 px-3 d-flex justify-content-between align-items-center border-bottom border-warning">
          <div className="d-flex align-items-center gap-2 small">
            <span className="badge bg-warning text-dark fw-bold">Modo Admin</span>
            <span className="d-none d-sm-inline opacity-75">
              Estás navegando en la vista pública de la tienda.
            </span>
          </div>
          <button
            onClick={() => navigate('/admin')}
            className="btn btn-sm btn-warning fw-bold rounded-pill px-3 py-1 text-dark shadow-sm"
          >
            Volver al Panel Admin
          </button>
        </div>
      )}

      <Navbar
        categorias={categoriasDe(productosCtx.productos)}
        totalItems={carrito.totalItems}
        onNavegar={navigate}
        rutaActual={ubicacion.pathname}

        onBuscar={(texto) => navigate(`/buscar/${encodeURIComponent(texto)}`)}
      />
      <Container as="main" className="tienda-main">
        {props.children}
      </Container>
      <Footer/>
    </>
  )
}

export default PlantillaPublica