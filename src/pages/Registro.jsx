import { Link, useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioRegistro } from '../components/organism/formularioRegistro'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Registro() {
  const navigate = useNavigate()
  useTituloPagina('Crear cuenta')

  return (
    <PlantillaPublica>
      <div className="py-4">
        <h2 className="display-6 text-center fw-bold text-dark mb-4">Crear cuenta</h2>
        <div className="card shadow-sm border-0 p-4 mx-auto rounded-3" style={{ maxWidth: '480px' }}>
          <p className="text-muted mb-4">
            Regístrate para hacer pedidos y revisar tu historial de compras en Ferretería El Tarugo.
          </p>
          <FormularioRegistro onEnviar={() => navigate('/login')} />
          <p className="text-muted small mt-4 mb-0">
            ¿Ya tienes cuenta? <Link to="/login">Ingresa aquí</Link>
          </p>
        </div>
      </div>
    </PlantillaPublica>
  )
}
