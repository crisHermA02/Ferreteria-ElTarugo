import { Card, Badge } from 'react-bootstrap'

export function ResumenInventarioAdmin({ productos }) {
  const totalProductos = productos.length
  const agotados = productos.filter((p) => (p.stock ?? 0) === 0).length
  const criticos = productos.filter((p) => (p.stock ?? 0) > 0 && (p.stock ?? 0) <= 5).length

  return (
    <Card className="border-0 shadow-sm rounded-4 h-100">
      <Card.Header className="bg-white border-0 pt-4 px-4">
        <h5 className="fw-bold m-0">Resumen de Inventario</h5>
      </Card.Header>
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <span>Total Productos Registrados:</span>
          <span className="fw-bold fs-5">{totalProductos}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
          <span>Ítems Agotados:</span>
          <Badge bg="danger" className="fs-6">
            {agotados}
          </Badge>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
          <span>Ítems con Stock Crítico (≤ 5):</span>
          <Badge bg="warning" className="text-dark fs-6">
            {criticos}
          </Badge>
        </div>
      </Card.Body>
    </Card>
  )
}