import { formatoPrecio } from '../../utils/formato'

export function TarjetaPedido({ pedido }) {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden mb-4">
      <div className="card-header bg-light d-flex flex-wrap justify-content-between align-items-center py-3 px-4 border-0">
        <div>
          <span className="fw-bold fs-5 me-3">Orden #{pedido.id}</span>
          <span className="badge bg-warning text-dark fw-bold me-2">
            {pedido.estado}
          </span>
          <small className="text-muted d-block d-md-inline mt-1 mt-md-0">
            {new Date(pedido.fecha).toLocaleDateString('es-CL', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </small>
        </div>
        <div className="mt-2 mt-md-0">
          <span className="fw-bold fs-5 text-dark">
            Total: {formatoPrecio(pedido.total)}
          </span>
        </div>
      </div>

      <div className="card-body p-4">
        <div className="row g-4">
          <div className="col-md-7">
            <h6 className="fw-bold mb-3 text-secondary">Productos</h6>
            <ul className="list-group list-group-flush">
              {pedido.items?.map((item, idx) => (
                <li
                  key={idx}
                  className="list-group-item px-0 d-flex justify-content-between align-items-center bg-transparent border-bottom"
                >
                  <div>
                    <span className="fw-medium">{item.producto.nombreDelProducto}</span>
                    <small className="text-muted d-block">
                      Cantidad: {item.cantidad} × {formatoPrecio(item.producto.pVentaClp)}
                    </small>
                  </div>
                  <span className="fw-bold text-dark">
                    {formatoPrecio(item.producto.pVentaClp * item.cantidad)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-5">
            <h6 className="fw-bold mb-3 text-secondary">Datos de despacho</h6>
            <div className="bg-light p-3 rounded-3 small">
              <p className="mb-1"><strong>Nombre:</strong> {pedido.cliente?.nombre}</p>
              <p className="mb-1"><strong>Correo:</strong> {pedido.cliente?.email}</p>
              <p className="mb-0"><strong>Dirección:</strong> {pedido.cliente?.direccion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TarjetaPedido