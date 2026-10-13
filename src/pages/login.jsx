import { useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { FormularioLogin } from '../components/organism/formularioLogin'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Login() {
  const navigate = useNavigate()
  useTituloPagina('Ingresar')

  return (
    <PlantillaPublica>
      <h2 className="h3 mb-3">Ingresar</h2>
      <FormularioLogin onEnviar={() => navigate('/catalogo')} />
    </PlantillaPublica>
  )
}