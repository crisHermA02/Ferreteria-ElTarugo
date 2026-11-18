import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioRegistro } from '../components/organism/formularioRegistro'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { registrarUsuario } from '../services/AuthService'

export default function Registro() {
  const navigate = useNavigate()
  useTituloPagina('Crear cuenta')

  const [error, setError] = useState('')
  const [exito, setExito] = useState(false)

  async function manejarRegistro({ nombre, email, clave }) {
    setError('')
    setExito(false)
    const payload = {
      email: email,
      nombre_user: nombre,
      contrasena: clave,
      rut_user: "Sin RUT",
      telefono_user: "Sin teléfono",
      id_rol: 2
    }

    const resultado = await registrarUsuario(payload)

    if (resultado.ok) {
      setExito(true)
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } else {
      setError(resultado.mensaje)
    }
  }

  return (
    <PlantillaPublica>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <h2 className="display-6 text-center fw-bold text-dark mb-4">Crear cuenta</h2>

            <div className="card shadow-sm border-0 p-4 rounded-4">
              <p className="text-muted mb-4 text-center">
                Regístrate para hacer pedidos y revisar tu historial de compras en Ferretería El Tarugo.
              </p>

              {error && (
                <Alert variant="danger" dismissible onClose={() => setError('')}>
                  <strong>Error:</strong> {error}
                </Alert>
              )}

              {exito && (
                <Alert variant="success">
                  Cuenta creada exitosamente. Redirigiendo al login...
                </Alert>
              )}

              <FormularioRegistro onEnviar={manejarRegistro} />

              <p className="text-muted small mt-4 mb-0 text-center">
                ¿Ya tienes cuenta?{' '}
                <Link to="/login" className="text-warning fw-bold text-decoration-none">
                  Ingresa aquí
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}