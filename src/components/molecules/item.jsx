import { useEffect, useRef, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Boton } from '../atoms/boton'
import { Badge } from '../atoms/badge'
import { Precio } from '../atoms/precio'
import { rebotar, volarAlCarrito } from '../../utils/animaciones'

export function Item(props) {
  const producto = props.producto
  const sinStock = producto.stock === 0
  const [agregado, setAgregado] = useState(false)
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
      {producto.imagen && (
        <Card.Img
          variant="top"
          src={`/src/assets/img/${producto.imagen}`}
          alt={producto.nombre}
          className="card-producto__imagen"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      )}
      <Card.Body className="d-flex flex-column">
        <div className="mb-2 d-flex gap-2 flex-wrap">
          <Badge tone="neutral">{producto.categoria}</Badge>
          {producto.precioAnterior && <Badge tone="marca">Oferta</Badge>}
        </div>
        <Card.Title as="h3" className="h6">{producto.nombre}</Card.Title>
        <Precio valor={producto.precio} anterior={producto.precioAnterior ?? null} />
        <p className="mb-3">
          {sinStock ? (
            <Badge tone="warning">Sin stock</Badge>
          ) : (
            <Badge tone="success">{producto.stock} disponibles</Badge>
          )}
        </p>
        <div className="mt-auto d-grid" aria-live="polite">
          <Boton variant={agregado ? 'success' : 'primary'} onClick={agregar} disabled={sinStock}>
            {agregado ? '✓ Agregado' : 'Agregar al carrito'}
          </Boton>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item