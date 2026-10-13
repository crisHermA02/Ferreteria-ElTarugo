import { useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { Boton } from '../components/atoms/boton'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function NoEncontrada() {
    const navigate = useNavigate()
    useTituloPagina('Página no encontrada')

    return (
        <PlantillaPublica>
            <h2 className="h3 mb-3">Página no encontrada</h2>
            <p>No existe una página en esta dirección.</p>
            <Boton onClick={() => navigate('/')}>Ir al Inicio</Boton>
        </PlantillaPublica>
    )
}
