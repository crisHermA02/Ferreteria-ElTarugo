import { useState, useEffect } from 'react'
import { Table, Card, Button, Badge } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { ModalUsuarioForm } from '../../components/molecules/ModalUsuarioForm'
import { useTituloPagina } from '../../hooks/useTituloPagina'

export function UsuariosAdmin() {
  useTituloPagina('Gestión de Usuarios')
  const navigate = useNavigate()

  const [usuarios, setUsuarios] = useState([])
  const [modalAbierto, setModalAbierto] = useState(false)
  const [usuarioEditar, setUsuarioEditar] = useState(null)

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('tienda_usuarios') || '[]')
    setUsuarios(guardados)
  }, [])

  function guardarUsuario(datos) {
    let actualizados = []
    if (usuarioEditar) {
      actualizados = usuarios.map((u) =>
        u.email === usuarioEditar.email ? { ...u, ...datos } : u
      )
    } else {
      actualizados = [...usuarios, datos]
    }
    setUsuarios(actualizados)
    localStorage.setItem('tienda_usuarios', JSON.stringify(actualizados))
    setModalAbierto(false)
  }

  return (
    <PlantillaAdmin>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h3 fw-bold text-dark mb-1">Gestión de Usuarios</h2>
          <p className="text-muted m-0">Administra los usuarios registrados en la plataforma.</p>
        </div>
        <Button
          variant="warning"
          className="fw-bold"
          onClick={() => {
            setUsuarioEditar(null)
            setModalAbierto(true)
          }}
        >
          + Nuevo Usuario
        </Button>
      </div>

      <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
        <Card.Body className="p-0">
          <div className="table-responsive">
            <Table hover className="align-middle mb-0">
              <thead className="table-dark">
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Rol</th>
                  <th>Dirección</th>
                  <th className="text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((u) => (
                  <tr key={u.email}>
                    <td className="fw-bold">{u.nombre}</td>
                    <td className="text-muted">{u.email}</td>
                    <td>
                      <Badge bg={u.rol === 'Administrador' ? 'danger' : 'secondary'}>
                        {u.rol || 'Cliente'}
                      </Badge>
                    </td>
                    <td className="small">{u.direccion || 'No registrada'}</td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-2">
                        <Button
                          variant="outline-dark"
                          size="sm"
                          onClick={() =>
                            navigate(`/admin/usuarios/${encodeURIComponent(u.email)}/pedidos`)
                          }
                        >
                            Ver Historial
                        </Button>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => {
                            setUsuarioEditar(u)
                            setModalAbierto(true)
                          }}
                        >
                          Editar
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>

      <ModalUsuarioForm
        show={modalAbierto}
        onHide={() => setModalAbierto(false)}
        usuario={usuarioEditar}
        onGuardar={guardarUsuario}
      />
    </PlantillaAdmin>
  )
}

export default UsuariosAdmin