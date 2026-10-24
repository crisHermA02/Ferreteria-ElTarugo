import { Card, Row, Col, Form } from 'react-bootstrap'

export function FiltrosSolicitudes({ busqueda, setBusqueda, filtroEstado, setFiltroEstado }) {
  return (
    <Card className="border-0 shadow-sm rounded-4 mb-4">
      <Card.Body className="p-3">
        <Row className="g-3">
          <Col md={8}>
            <Form.Control
              type="search"
              placeholder="Buscar por ID de orden, cliente o correo..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Form.Select
              value={filtroEstado}
              onChange={(e) => setFiltroEstado(e.target.value)}
            >
              <option value="todos">Todos los estados</option>
              <option value="En preparación">En preparación</option>
              <option value="Enviado">Enviado</option>
              <option value="Entregado">Entregado</option>
              <option value="Cancelado">Cancelado</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}