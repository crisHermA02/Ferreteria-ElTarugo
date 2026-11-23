import { Modal, Form, Button } from 'react-bootstrap'

const ROLES_POR_ID = {
  1: 'Administrador',
  2: 'Cliente',
  3: 'Contratista'
}

export function ModalUsuarioForm({ show, onHide, usuario, onGuardar }) {
  const esEdicion = Boolean(usuario)
  const rolInicial = usuario?.rol || ROLES_POR_ID[usuario?.id_rol] || 'Cliente'

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(e.target)
    const datos = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      rut: formData.get('rut'),
      telefono: formData.get('telefono'),
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
              defaultValue={usuario?.nombre_user || usuario?.nombre || ''}
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
            <Form.Label className="fw-semibold">RUT</Form.Label>
            <Form.Control
              type="text"
              name="rut"
              placeholder="12.345.678-9"
              defaultValue={usuario?.rut_user || usuario?.rut || ''}
              required={!esEdicion}
              disabled={esEdicion}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              placeholder="+56 9 1234 5678"
              defaultValue={usuario?.telefono_user || usuario?.telefono || ''}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Rol</Form.Label>
            <Form.Select name="rol" defaultValue={rolInicial}>
              <option value="Cliente">Cliente</option>
              <option value="Administrador">Administrador</option>
              <option value="Contratista">Contratista</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              placeholder="Alias, Calle y número, Comuna, Código postal"
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