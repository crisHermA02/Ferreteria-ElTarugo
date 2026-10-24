import { Link, useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioRegistro } from '../components/organism/formularioRegistro'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { useAuth } from '../context/AuthContext'

export default function Registro() {
  const navigate = useNavigate()
  const { login } = useAuth()
  useTituloPagina('Crear cuenta')

  function manejarRegistro(datosUsuario) {
    const nuevoUsuario = {
      id: Date.now(),
      nombre: datosUsuario.nombre,
      email: datosUsuario.email,
      direccion: ''
    }

    login(nuevoUsuario)
    navigate('/checkout')
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