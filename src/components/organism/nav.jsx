import { useState } from 'react'
import { Container, Form, Nav, Navbar as BarraBootstrap } from 'react-bootstrap'
import { Badge } from '../atoms/badge'
import logo from '../../assets/img/logo-2.png'

export function Navbar(props) {
  const [texto, setTexto] = useState('')
  const categorias = props.categorias ?? []
  const rutaActual = decodificar(props.rutaActual ?? '')

  function decodificar(ruta) {
    try {
      return decodeURIComponent(ruta)
    } catch {
      return ruta
    }
  }

  // Categoría activa en negro, el resto en gris
  function claseCategoria(activa) {
    return `nav-link ${activa ? 'text-dark fw-semibold' : 'text-secondary'}`
  }

  function ir(evento, ruta) {
    evento.preventDefault()
    if (props.onNavegar) {
      props.onNavegar(ruta)
    }
  }

  function buscar(evento) {
    evento.preventDefault()
    if (texto.trim() !== '' && props.onBuscar) {
      props.onBuscar(texto.trim())
    }
  }

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

          <Form className="buscador tienda-buscador" role="search" onSubmit={buscar}>
            <div className="input-group">
              <Form.Control
                type="search"
                placeholder="Buscar productos…"
                aria-label="Buscar productos"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              />
              <button type="submit" className="btn btn-warning fw-bold" aria-label="Buscar">
                <span className="d-none d-lg-inline">Buscar</span>
                <svg className="d-lg-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </Form>

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
            <Nav className="gap-2 align-items-lg-center">
              <Nav.Link href="/mis-pedidos" onClick={(e) => ir(e, '/mis-pedidos')}>
                Mis Pedidos
              </Nav.Link>
              <Nav.Link href="/cuenta" onClick={(e) => ir(e, '/cuenta')}>
                Cuenta
              </Nav.Link>
              <a href="/login" onClick={(e) => ir(e, '/login')} className="btn btn-sm btn-outline-light px-3 ms-lg-2">
                Ingresar
              </a>
              <a href="/registro" onClick={(e) => ir(e, '/registro')} className="btn btn-sm btn-warning fw-bold px-3">
                Registrarse
              </a>
            </Nav>
          </BarraBootstrap.Collapse>
        </Container>
      </BarraBootstrap>

      <nav className="tienda-categorias bg-light border-bottom py-1" aria-label="Categorías">
        <Container>
          <ul className="nav flex-nowrap overflow-auto">
            <li className="nav-item">
              <a
                className={claseCategoria(rutaActual === '/catalogo')}
                aria-current={rutaActual === '/catalogo' ? 'page' : undefined}
                href="/catalogo"
                onClick={(e) => ir(e, '/catalogo')}
              >
                Ver Todo el Catálogo
              </a>
            </li>
            {categorias.map((c) => (
              <li key={c} className="nav-item">
                <a
                  className={claseCategoria(rutaActual === `/categoria/${c}`)}
                  aria-current={rutaActual === `/categoria/${c}` ? 'page' : undefined}
                  href={`/categoria/${c}`}
                  onClick={(e) => ir(e, `/categoria/${c}`)}
                >
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  )
}