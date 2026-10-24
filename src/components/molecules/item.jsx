import { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Boton } from '../atoms/boton'
import { Badge } from '../atoms/badge'
import { Precio } from '../atoms/precio'
import { rebotar, volarAlCarrito } from '../../utils/animaciones'
import { obtenerImagen } from '../../utils/imagenes'

export function Item(props) {
  const producto = props.producto
  const sinStock = producto.stock === 0
  const [agregado, setAgregado] = useState(false)
  const [rutaFallida, setRutaFallida] = useState(null)
  const ruta = obtenerImagen(producto.imagen)
  const hayImagen = ruta !== null && ruta !== rutaFallida
  const temporizador = useRef(null)

  useEffect(() => () => clearTimeout(temporizador.current), [])

  function agregar(evento) {
    const boton = evento.currentTarget
    props.onAdd(producto)

    setAgregado(true)
    rebotar(boton)
    volarAlCarrito(boton)
    clearTimeout(temporizador.current)
    temporizador.current = setTimeout(() => setAgregado(false), 1300)
  }

  return (
    <Card as="article" className="card-producto h-100">
      <Link to={`/producto/${producto.id}`} className="text-decoration-none text-dark">
        <div className="card-producto__caja">
          {hayImagen ? (
            <img
              src={ruta}
              alt={producto.nombre}
              className="card-producto__imagen"
              loading="lazy"
              onError={() => setRutaFallida(ruta)}
            />
          ) : (
            <div className="card-producto__sin-imagen" role="img" aria-label="Producto sin imagen">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="small mt-2">Sin imagen</span>
            </div>
          )}
        </div>
      </Link>
      <Card.Body className="d-flex flex-column">
        <div className="mb-2 d-flex gap-2 flex-wrap">
          <Badge tone="neutral">{producto.categoria}</Badge>
          {producto.precioAnterior && <Badge tone="marca">Oferta</Badge>}
        </div>
        <Card.Title as="h3" className="h6">
          <Link to={`/producto/${producto.id}`} className="text-decoration-none text-dark">
            {producto.nombre}
          </Link>
        </Card.Title>
        <Precio valor={producto.precio} anterior={producto.precioAnterior ?? null} />
        <p className="mb-3">
          {sinStock ? (
            <Badge tone="warning">Sin stock</Badge>
          ) : (
            <Badge tone="success">{producto.stock} disponibles</Badge>
          )}
        </p>
        <div className="mt-auto d-flex gap-2" aria-live="polite">
          <Link to={`/producto/${producto.id}`} className="btn btn-outline-secondary btn-sm flex-shrink-0 d-flex align-items-center justify-content-center">
            Ver detalle
          </Link>
          <Boton variant={agregado ? 'success' : 'primary'} onClick={agregar} disabled={sinStock} className="flex-grow-1">
            {agregado ? '✓ Agregado' : 'Agregar'}
          </Boton>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item