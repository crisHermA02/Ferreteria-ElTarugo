import { useNavigate, useParams } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { TarjetaProducto } from '../components/organism/tarjeta-producto'
import { useProductos } from '../context/ProductosContext'
import { useCarrito } from '../context/CarritoContext'
import { filtrarProductos } from '../utils/filtrarDatos'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Catalogo() {
  const navigate = useNavigate()
  const params = useParams()
  const nombre = params.nombre ?? ''
  const texto = params.texto ?? ''
  const productosCtx = useProductos()
  const carrito = useCarrito()

  const visibles = filtrarProductos(productosCtx.productos, { texto, categoria: nombre })

  let titulo = 'Catálogo completo'
  if (nombre) titulo = nombre
  if (texto) titulo = `Resultados para "${texto}"`
  useTituloPagina(titulo)

  return (
    <PlantillaPublica>
      <h2 className="h3 mb-3">{titulo}</h2>
      <TarjetaProducto productos={visibles} onAdd={carrito.add} />
    </PlantillaPublica>
  )
}