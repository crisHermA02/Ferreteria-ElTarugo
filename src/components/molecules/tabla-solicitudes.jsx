import { Table, Card } from 'react-bootstrap'
import { formatoPrecio } from '../../utils/formato'

export function TablaSolicitudes({ pedidos, onVerComprobante, obtenerBadgeEstado }) {
  if (pedidos.length === 0) {
    return (
      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-5 text-center text-muted">
          No se encontraron solicitudes con los criterios de búsqueda.
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
      <Card.Body className="p-0">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>N° Orden</th>
                <th>Fecha</th>
                <th>Cliente</th>
                <th>Dirección</th>
                <th>Total</th>
                <th>Estado</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td className="fw-bold">#{pedido.id}</td>
                  <td className="small text-muted">
                    {new Date(pedido.fecha).toLocaleDateString('es-CL', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </td>
                  <td>
                    <div className="fw-semibold">{pedido.cliente?.nombre}</div>
                    <small className="text-muted">{pedido.cliente?.email}</small>
                  </td>
                  <td className="small">{pedido.cliente?.direccion}</td>
                  <td className="fw-bold">{formatoPrecio(pedido.total)}</td>
                  <td>{obtenerBadgeEstado(pedido.estado)}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-outline-dark fw-semibold"
                      onClick={() => onVerComprobante(pedido)}
                    >
                      Ver Comprobante
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  )
}