import { formatoPrecio } from '../../utils/formato'

export function ResumenOrden({ items, totalPrecio }) {
    return (
        <div className="card shadow-sm border-0 bg-light p-4">
            <h3 className="h5 fw-bold mb-3">Resumen de la orden</h3>
            <ul className="list-group list-group-flush mb-3 bg-transparent">
                {items.map(item => (
                    <li key={item.producto.id} className="list-group-item bg-transparent d-flex justify-content-between lh-sm px-0">
                        <div>
                            <h6 className="my-0">{item.producto.nombreDelProducto}</h6>
                            <small className="text-muted">Cantidad: {item.cantidad}</small>
                        </div>
                        <span className="text-muted">{formatoPrecio(item.producto.pVentaClp * item.cantidad)}</span>
                    </li>
                ))}
            </ul>
            <div className="d-flex justify-content-between border-top pt-3 fw-bold fs-5">
                <span>Total (CLP)</span>
                <span>{formatoPrecio(totalPrecio)}</span>
            </div>
        </div>
    )
}