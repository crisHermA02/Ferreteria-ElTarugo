import { NavDropdown } from 'react-bootstrap'

export function NavMenuUsuario({ usuario, ir, logout }) {
  function manejarCerrarSesion(e) {
    e.preventDefault()
    logout()
    ir(e, '/login')
  }

  if (usuario) {
    return (
      <NavDropdown
        title={
          <span className="d-inline-flex align-items-center gap-2 text-warning fw-bold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>{usuario.nombre || 'Mi Cuenta'}</span>
          </span>
        }
        id="menu-usuario"
        align="end"
        className="ms-lg-2"
      >
        <NavDropdown.Item href="/mis-pedidos" onClick={(e) => ir(e, '/mis-pedidos')}>
          Mis Pedidos
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={manejarCerrarSesion} className="text-danger fw-semibold">
          Cerrar Sesión
        </NavDropdown.Item>
      </NavDropdown>
    )
  }

  return (
    <>
      <a href="/login" onClick={(e) => ir(e, '/login')} className="btn btn-sm btn-outline-light px-3 ms-lg-2 mt-2 mt-lg-0">
        Ingresar
      </a>
      <a href="/registro" onClick={(e) => ir(e, '/registro')} className="btn btn-sm btn-warning fw-bold px-3 mt-2 mt-lg-0">
        Registrarse
      </a>
    </>
  )
}