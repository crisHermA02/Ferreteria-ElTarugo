import { useNavigate } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import { ItemCarrito } from '../molecules/item-carrito'
import { Boton } from '../atoms/boton'
import { formatoPrecio } from '../../utils/formato'

export function Carro() {
  const carrito = useCarrito()
  const navigate = useNavigate()

  if (carrito.items.length === 0) {
    return <p role="status" className="text-muted my-4">El carrito está vacío.</p>
  }

  return (
    <section aria-label="Carrito de compras">
      <ul className="list-group mb-4 shadow-sm">
        {carrito.items.map((item) => (
          <ItemCarrito
            key={item.producto.id}
            item={item}
            onRemove={carrito.remove}
            onIncrement={carrito.increment}
            onDecrement={carrito.decrement}
          />
        ))}
      </ul>

      <div className="card shadow-sm border-0 p-3 bg-light">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="h5 mb-0">Total ({carrito.totalItems} ítems):</span>
          <strong className="h4 text-warning mb-0">{formatoPrecio(carrito.totalPrecio)}</strong>
        </div>

        <div className="d-flex flex-wrap justify-content-between gap-2 border-top pt-3">
          <Boton variant="outline-danger" onClick={carrito.clear}>
            Vaciar / Limpiar carrito
          </Boton>
          <div className="d-flex gap-2">
            <Boton variant="outline-secondary" onClick={() => navigate('/catalogo')}>
              Seguir comprando
            </Boton>
            <Boton variant="warning" onClick={() => navigate('/checkout')}>
              Confirmar solicitud
            </Boton>
          </div>
        </div>
      </div>
    </section>
  )
}