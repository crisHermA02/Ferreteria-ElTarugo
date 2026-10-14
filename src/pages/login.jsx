import { Link, useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioLogin } from '../components/organism/formularioLogin'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Login() {
  const navigate = useNavigate()
  useTituloPagina('Ingresar')

  return (
    <PlantillaPublica>
      <div className="py-4">
        <h2 className="display-6 text-center fw-bold text-dark mb-4">Ingresar</h2>
        <div className="card shadow-sm border-0 p-4 mx-auto rounded-3" style={{ maxWidth: '480px' }}>
          <p className="text-muted mb-4">
            Ingresa con tu correo y tu clave para hacer pedidos y revisar tu historial de compras.
          </p>
          <FormularioLogin onEnviar={() => navigate('/catalogo')} />
          <p className="text-muted small mt-4 mb-0">
            ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </PlantillaPublica>
  )
}
