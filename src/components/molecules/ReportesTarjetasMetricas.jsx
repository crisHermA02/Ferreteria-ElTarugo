import { Row, Col, Card } from 'react-bootstrap'
import { formatoPrecio } from '../../utils/formato'

export function ReportesTarjetasMetricas({ totalVentas, promedioOrden, totalPedidos }) {
  return (
    <>
      <h4 className="h5 fw-bold text-secondary mb-3">Métricas de Operaciones</h4>
      <Row className="g-3 mb-4">
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-primary text-white">
            <small className="text-uppercase fw-bold opacity-75">Ventas Totales</small>
            <h3 className="display-6 fw-bold m-0">{formatoPrecio(totalVentas)}</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-success text-white">
            <small className="text-uppercase fw-bold opacity-75">Ticket Promedio</small>
            <h3 className="display-6 fw-bold m-0">{formatoPrecio(promedioOrden)}</h3>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm rounded-4 p-3 bg-dark text-white">
            <small className="text-uppercase fw-bold opacity-75">Total Solicitudes</small>
            <h3 className="display-6 fw-bold m-0">{totalPedidos} órdenes</h3>
          </Card>
        </Col>
      </Row>
    </>
  )
}