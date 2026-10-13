import { useCart } from '../../../context/CartContext'
import { CartItem } from '../../molecules/CartItem/CartItem'
import { formatoPrecio } from '../../../utils/formatoPrecio'

export function ShoppingCart() {
  const carrito = useCart()

  if (carrito.items.length === 0) {
    return <p role="status">El carrito está vacío.</p>
  }

  return (
    <section aria-label="Carrito de compras">
      <ul className="list-group mb-3">
        {carrito.items.map((item) => (
          <CartItem key={item.producto.id} item={item} onRemove={carrito.remove} onIncrement={carrito.increment} />
        ))}
      </ul>
      <p className="h5">
        Total: <strong>{formatoPrecio(carrito.totalPrecio)}</strong>
      </p>
    </section>
  )
}