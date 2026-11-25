import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

export function RutaProtegida({ children, soloAdmin = false }) {
  const { usuario, cargando } = useAuth()

  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    )
  }

  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  const esAdmin =
    Number(usuario?.rol) === 1 ||
    Number(usuario?.id_rol) === 1 ||
    usuario?.rol === 'Administrador'

  if (soloAdmin && !esAdmin) {
    return <Navigate to="/" replace />
  }

  return children
}

export default RutaProtegida