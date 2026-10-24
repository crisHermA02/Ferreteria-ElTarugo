import { Modal, Form, Button } from 'react-bootstrap'

export function ModalUsuarioForm({ show, onHide, usuario, onGuardar }) {
  const esEdicion = Boolean(usuario)

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const datos = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      rol: formData.get('rol'),
      direccion: formData.get('direccion'),
    }
    onGuardar(datos)
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton className="border-0 bg-dark text-white">
          <Modal.Title className="fw-bold">
            {esEdicion ? 'Editar Usuario' : 'Nuevo Usuario'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              defaultValue={usuario?.nombre || ''}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              defaultValue={usuario?.email || ''}
              required
              disabled={esEdicion}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Rol</Form.Label>
            <Form.Select name="rol" defaultValue={usuario?.rol || 'Cliente'}>
              <option value="Cliente">Cliente</option>
              <option value="Administrador">Administrador</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              defaultValue={usuario?.direccion || ''}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="border-0 bg-light">
          <Button variant="outline-secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button type="submit" variant="warning" className="fw-bold">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}