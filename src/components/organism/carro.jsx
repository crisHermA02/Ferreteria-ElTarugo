import { useCarrito } from '../../context/CarritoContext'
import { ItemCarrito } from '../molecules/item-carrito'
import { formatoPrecio } from '../../utils/formato'

export function Carro() {
  const carrito = useCarrito()

  if (carrito.items.length === 0) {
    return <p role="status">El carrito está vacío.</p>
  }

  return (
    <section aria-label="Carrito de compras">
      <ul className="list-group mb-3">
        {carrito.items.map((item) => (
          <ItemCarrito key={item.producto.id} item={item} onRemove={carrito.remove} onIncrement={carrito.increment} />
        ))}
      </ul>
      <p className="h5">
        Total: <strong>{formatoPrecio(carrito.totalPrecio)}</strong>
      </p>
    </section>
  )
}