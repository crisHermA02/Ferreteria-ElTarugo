import { Row, Col } from 'react-bootstrap'

export function ComprobanteCliente({ cliente }) {
  return (
    <div className="bg-light p-3 rounded-3 mb-4">
      <h6 className="fw-bold text-secondary mb-2">Datos del Cliente</h6>
      <Row className="g-2 small">
        <Col sm={6}>
          <strong>Nombre:</strong> {cliente?.nombre}
        </Col>
        <Col sm={6}>
          <strong>Correo:</strong> {cliente?.email}
        </Col>
        <Col sm={12}>
          <strong>Dirección de entrega:</strong> {cliente?.direccion}
        </Col>
      </Row>
    </div>
  )
}