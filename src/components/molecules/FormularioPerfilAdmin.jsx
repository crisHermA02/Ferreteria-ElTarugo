import { Card, Form, Button } from 'react-bootstrap'

export function FormularioPerfilAdmin({
  nombreAdmin,
  setNombreAdmin,
  emailAdmin,
  setEmailAdmin,
  mensajeGuardado,
  onGuardar
}) {
  return (
    <Card className="border-0 shadow-sm rounded-4 h-100">
      <Card.Header className="bg-white border-0 pt-4 px-4">
        <h5 className="fw-bold m-0">Perfil del Administrador</h5>
      </Card.Header>
      <Card.Body className="p-4">
        {mensajeGuardado && (
          <div className="alert alert-success py-2 rounded-3 small mb-3">
            ✓ Datos actualizados correctamente.
          </div>
        )}
        <Form onSubmit={onGuardar}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              value={nombreAdmin}
              onChange={(e) => setNombreAdmin(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              value={emailAdmin}
              onChange={(e) => setEmailAdmin(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" variant="warning" className="fw-bold w-100">
            Actualizar Datos
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}