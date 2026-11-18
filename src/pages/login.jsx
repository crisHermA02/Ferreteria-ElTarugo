import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioLogin } from '../components/organism/formularioLogin'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { useAuth } from '../context/AuthContext'
import { autenticarUsuario } from '../services/AuthService'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  useTituloPagina('Ingresar')

  const [error, setError] = useState('')
  async function manejarIngreso({ email, clave }) {
    setError('')

    if (!email || !clave) {
      setError('Por favor, ingresa tu correo y contraseña.')
      return
    }
    const resultado = await autenticarUsuario(email, clave)
    if (!resultado.ok) {
      setError(resultado.mensaje || 'Correo electrónico o contraseña incorrectos.')
      return
    }
    login(resultado.usuario)
    if (resultado.usuario.rol === 1) {
      navigate('/admin')
    } else {
      navigate('/catalogo')
    }
  }

  return (
    <PlantillaPublica>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <h2 className="display-6 text-center fw-bold text-dark mb-4">Ingresar</h2>

            <div className="card shadow-sm border-0 p-4 rounded-4">
              <p className="text-muted mb-3 text-center">
                Ingresa con tu correo y tu clave para hacer pedidos y revisar tu historial de compras.
              </p>

              {error && (
                <Alert
                  variant="danger"
                  className="d-flex align-items-center justify-content-between rounded-3 py-2 px-3 mb-3 small"
                  dismissible
                  onClose={() => setError('')}
                >
                  <div>
                    <strong className="me-1">Error:</strong> {error}
                  </div>
                </Alert>
              )}

              <FormularioLogin onEnviar={manejarIngreso} />

              <p className="text-muted small mt-4 mb-0 text-center">
                ¿No tienes cuenta?{' '}
                <Link to="/registro" className="text-warning fw-bold text-decoration-none">
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}