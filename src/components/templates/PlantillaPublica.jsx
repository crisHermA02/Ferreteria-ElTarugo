import { Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import { useProductos } from '../../context/ProductosContext'
import { categoriasDe } from '../../utils/categorias'
import { Navbar } from '../organism/nav'
import { Footer } from '../organism/footer'

export function PlantillaPublica(props) {

  const navigate = useNavigate()
  const ubicacion = useLocation()
  const productosCtx = useProductos()
  const carrito = useCarrito()

  return (
    <>
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