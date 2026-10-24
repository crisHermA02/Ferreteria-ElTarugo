import { Container, Nav, Navbar as BarraBootstrap } from 'react-bootstrap'
import { Badge } from '../atoms/badge'
import logo from '../../assets/img/logo-2.png'
import { decodificarRuta } from '../../utils/navegacion'
import { useNavbar } from '../../hooks/useNavbar'
import { useAuth } from '../../context/AuthContext'
import { NavBuscador } from '../molecules/NavBuscador'
import { NavMenuUsuario } from '../molecules/NavMenuUsuario'
import { NavCategorias } from '../molecules/NavCategorias'

export function Navbar(props) {
  const { texto, setTexto, ir, buscar } = useNavbar(props)
  const { usuario, logout } = useAuth()
  
  const categorias = props.categorias ?? []
  const rutaActual = decodificarRuta(props.rutaActual ?? '')

  return (
    <header className="sticky-top border-bottom border-3 border-warning">
      <BarraBootstrap expand="lg" className="tienda-topbar bg-dark navbar-dark py-2">
        <Container className="flex-wrap">
          <BarraBootstrap.Brand href="/" onClick={(e) => ir(e, '/')} className="d-flex align-items-center">
            <img 
              src={logo} 
              alt="Ferretería El Tarugo" 
              height="100" 
              className="hero"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <h1 className="tienda-logo h4 m-0 text-white fw-bold d-none d-sm-block">
              Ferretería <span className="text-warning">El Tarugo</span>
            </h1>
          </BarraBootstrap.Brand>

          <NavBuscador texto={texto} setTexto={setTexto} buscar={buscar} />

          <a
            href="/carrito"
            data-carrito
            onClick={(e) => ir(e, '/carrito')}
            className="btn btn-outline-warning text-white d-flex align-items-center gap-2"
            aria-label={`Carrito: ${props.totalItems ?? 0} artículos`}
          >
            <svg className="d-lg-none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="d-none d-lg-inline">Carrito</span>
            <Badge tone="marca">{props.totalItems ?? 0}</Badge>
          </a>
          
          <BarraBootstrap.Toggle aria-controls="menu-principal" />

          <BarraBootstrap.Collapse id="menu-principal">
            <Nav className="gap-2 align-items-lg-center mt-3 mt-lg-0 ms-lg-auto">
              <Nav.Link href="/" onClick={(e) => ir(e, '/')}>Nosotros</Nav.Link>
              <Nav.Link href="/contacto" onClick={(e) => ir(e, '/contacto')}>Contacto</Nav.Link>
              
              <NavMenuUsuario usuario={usuario} ir={ir} logout={logout} />
            </Nav>
          </BarraBootstrap.Collapse>
        </Container>
      </BarraBootstrap>

      <NavCategorias categorias={categorias} rutaActual={rutaActual} ir={ir} />
    </header>
  )
}

export default Navbar