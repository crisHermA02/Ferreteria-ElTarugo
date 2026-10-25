import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'

export function PlantillaAdmin({ children }) {
  const { usuario, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  function manejarCerrarSesion(e) {
    e.preventDefault()
    logout()
    navigate('/login')
  }

  const enlaces = [
    { ruta: '/admin', texto: 'Dashboard'},
    { ruta: '/admin/solicitudes', texto: 'Solicitudes'},
    { ruta: '/admin/catalogo', texto: 'Catálogo (CRUD)'},
    { ruta: '/admin/items-criticos', texto: 'Ítems Críticos'},
    { ruta: '/admin/categorias', texto: 'Categorías'},
    { ruta: '/admin/usuarios', texto: 'Usuarios' },
    { ruta: '/admin/reportes', texto: 'Reportes y Perfil' },
  ]

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <header className="navbar navbar-dark bg-dark sticky-top px-3 py-2 border-bottom border-3 border-warning">
        <Link to="/admin" className="navbar-brand fw-bold text-warning m-0">
          <img src="/src/assets/img/logo-2.png" alt="Logo" className="me-2" height="100" />
          El Tarugo <span className="badge bg-secondary fs-6 ms-2">Admin</span>
        </Link>
        <div className="d-flex align-items-center gap-3">
          <span className="text-white small d-none d-sm-inline">
            Hola, <strong>{usuario?.nombre || 'Administrador'}</strong>
          </span>
          <button onClick={manejarCerrarSesion} className="btn btn-sm btn-outline-danger">
            Salir
          </button>
        </div>
      </header>

      <Container fluid className="flex-grow-1">
        <Row className="h-100">
          <Col md={3} lg={2} className="bg-white border-end p-0">
            <div className="p-3">
              <span className="text-muted small fw-bold text-uppercase d-block mb-2 px-2">
                Navegación
              </span>
              <Nav className="flex-column gap-1">
                {enlaces.map((item) => {
                  const activo = location.pathname === item.ruta
                  return (
                    <Nav.Link
                      key={item.ruta}
                      as={Link}
                      to={item.ruta}
                      className={`rounded-3 px-3 py-2 d-flex align-items-center gap-2 fw-medium ${
                        activo ? 'bg-warning text-dark fw-bold' : 'text-dark hover-bg-light'
                      }`}
                    >
                      <span>{item.icono}</span>
                      <span>{item.texto}</span>
                    </Nav.Link>
                  )
                })}
              </Nav>
              <hr className="my-3" />
              <Link to="/catalogo" className="btn btn-outline-secondary w-100 btn-sm">
                ← Ver Tienda
              </Link>
            </div>
          </Col>
          <Col md={9} lg={10} className="p-4">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PlantillaAdmin