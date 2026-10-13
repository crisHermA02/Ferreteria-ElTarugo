import { Boton } from '../../atoms/boton'
import { formatoPrecio } from '../../../utils/formato'

export function ItemCarrito(props) {
  const item = props.item
  const subtotal = item.producto.precio * item.cantidad

  return (
    <li className="list-group-item d-flex flex-wrap align-items-center gap-3">
      <div className="flex-grow-1">
        <span className="fw-semibold">{item.producto.nombre}</span>{' '}
        <span className="text-muted">x{item.cantidad}</span>
      </div>
      <span className="fw-bold">{formatoPrecio(subtotal)}</span>
      <div className="d-flex gap-2">
        <Boton variant="outline-secondary" onClick={() => props.onIncrement(item.producto.id)}>
          +
        </Boton>
        <Boton variant="danger" onClick={() => props.onRemove(item.producto.id)}>
          Quitar
        </Boton>
      </div>
    </li>
  )
}