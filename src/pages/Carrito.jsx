import { useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { Carro } from '../components/organism/carro'
import { Boton } from '../components/atoms/boton'
import { useCarrito } from '../context/CarritoContext'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Carrito() {
  const navigate = useNavigate()
  const carrito = useCarrito()
  useTituloPagina('Carrito')

  return (
    <PlantillaPublica>
      <h2 className="h3 mb-3">Tu carrito</h2>
      <Carro />
      {carrito.items.length === 0 && (
        <Boton onClick={() => navigate('/catalogo')}>Ir al catálogo</Boton>
      )}
    </PlantillaPublica>
  )
}
