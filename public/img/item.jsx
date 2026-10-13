import { Card } from 'react-bootstrap'
import { Boton } from '../../src/components/atoms/boton'
import { Badge } from '../../src/components/atoms/badge'
import { Precio } from '../../src/components/atoms/precio'

export function Item(props) {
  const producto = props.producto
  const sinStock = producto.stock === 0

  return (
    <Card as="article" className="card-producto h-100">
      {producto.imagen && (
        <Card.Img
          variant="top"
          src={`src/assets/img/${producto.imagen}`}
          alt={producto.nombre}
          className="card-producto__imagen"
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
        <div className="mt-auto d-grid">
          <Boton onClick={() => props.onAdd(producto)} disabled={sinStock}>
            Agregar al carrito
          </Boton>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Item