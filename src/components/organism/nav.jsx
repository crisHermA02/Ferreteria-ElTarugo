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
    <header className="sticky-lg-top border-bottom border-3 border-warning">
      <BarraBootstrap expand="lg" className="tienda-topbar bg-dark navbar-dark py-2">
        <Container className="flex-wrap">
          <BarraBootstrap.Brand href="/" onClick={(e) => ir(e, '/')} className="me-lg-4 d-flex align-items-center">
            <img 
              src={logo} 
              alt="Ferretería El Tarugo" 
              height="100" 
              className="hero"
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <h1 className="tienda-logo h4 m-0 text-white fw-bold">
              Ferretería <span className="text-warning">El Tarugo</span>
            </h1>
          </BarraBootstrap.Brand>

          <a
            href="/carrito"
            data-carrito
            onClick={(e) => ir(e, '/carrito')}
            className="btn btn-outline-warning text-white ms-auto me-2 ms-lg-3 d-flex align-items-center gap-2"
            aria-label={`Carrito: ${props.totalItems ?? 0} artículos`}
          >
            <span>Carrito</span>
            <Badge tone="marca">{props.totalItems ?? 0}</Badge>
          </a>
          <BarraBootstrap.Toggle aria-controls="menu-principal" />

          <BarraBootstrap.Collapse id="menu-principal" className="w-100">
            <Form className="buscador flex-grow-1 my-3 my-lg-0 mx-lg-3" role="search" onSubmit={buscar}>
              <div className="input-group">
                <Form.Control
                  type="search"
                  placeholder="¿Qué herramienta o insumo buscas?"
                  aria-label="Buscar productos"
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                />
                <button type="submit" className="btn btn-warning fw-bold">
                  Buscar
                </button>
              </div>
            </Form>

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