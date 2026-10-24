import { Card, Row, Col, Form } from 'react-bootstrap'

export function FiltroUmbralStock({ busqueda, setBusqueda, umbral, setUmbral }) {
  return (
    <Card className="border-0 shadow-sm rounded-4 mb-4">
      <Card.Body className="p-3">
        <Row className="g-3 align-items-center">
          <Col md={7}>
            <Form.Control
              type="search"
              placeholder="Buscar por producto, categoría o ID..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </Col>
          <Col md={5} className="d-flex align-items-center gap-2 justify-content-md-end">
            <Form.Label className="mb-0 text-nowrap fw-semibold small text-muted">
              Umbral crítico:
            </Form.Label>
            <Form.Select
              value={umbral}
              onChange={(e) => setUmbral(Number(e.target.value))}
              className="w-auto"
            >
              <option value={3}>≤ 3 unidades</option>
              <option value={5}>≤ 5 unidades</option>
              <option value={10}>≤ 10 unidades</option>
              <option value={20}>≤ 20 unidades</option>
            </Form.Select>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}