import { useState, useEffect } from 'react'
import { Table, Card, Badge, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { ModalUsuarioForm } from '../../components/molecules/ModalUsuarioForm'
import { TarjetaMensaje } from '../../components/molecules/tarjeta-mensaje'
import { useTituloPagina } from '../../hooks/useTituloPagina'
import { Boton } from '../../components/atoms/boton'

const API_URL = import.meta.env.VITE_API_URL + '/usuarios';

const NOMBRES_ROLES = {
  1: 'Administrador',
  2: 'Cliente',
  3: 'Contratista'
};

export function UsuariosAdmin() {
  useTituloPagina('Gestión de Usuarios')
  const navigate = useNavigate()
  const [usuarios, setUsuarios] = useState([])
  const [modalAbierto, setModalAbierto] = useState(false)
  const [usuarioEditar, setUsuarioEditar] = useState(null)
  const [usuarioEliminar, setUsuarioEliminar] = useState(null)

  const cargarUsuarios = async () => {
    const token = localStorage.getItem('token')
    const res = await fetch(API_URL, { headers: { 'Authorization': `Bearer ${token}` } })
    if (res.ok) setUsuarios(await res.json())
  }

  useEffect(() => { cargarUsuarios() }, [])

  async function guardarUsuario(datos) {
    const token = localStorage.getItem('token')
    const url = usuarioEditar ? `${API_URL}/${usuarioEditar.id_user || usuarioEditar.id}` : API_URL
    const metodo = usuarioEditar ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method: metodo,
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(datos)
    })
    if (res.ok) {
      cargarUsuarios()
      setModalAbierto(false)
    }
  }

  async function confirmarEliminacion() {
    if (!usuarioEliminar) return
    const id = usuarioEliminar.id_user || usuarioEliminar.id
    const token = localStorage.getItem('token')
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
    if (res.ok) {
      cargarUsuarios()
      setUsuarioEliminar(null)
    }
  }

  return (
    <PlantillaAdmin>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h3 fw-bold mb-1">Gestión de Usuarios</h2>
          <p className="text-muted m-0">Administra los usuarios registrados en la plataforma.</p>
        </div>
        <Boton variant="warning" onClick={() => { setUsuarioEditar(null); setModalAbierto(true) }}>
          + Nuevo Usuario
        </Boton>
      </div>

      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-0">
          <Table hover className="align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Rol</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id_user || u.email}>
                  <td className="fw-bold">{u.nombre_user || u.nombre}</td>
                  <td className="text-muted">{u.email}</td>
                  <td>
                    <Badge bg={u.id_rol === 1 || u.rol === 'Administrador' ? 'danger' : 'secondary'}>
                      {NOMBRES_ROLES[u.id_rol] || u.rol || 'Cliente'}
                    </Badge>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-flex gap-2">
                      <Boton variant="outline-dark" onClick={() => navigate(`/admin/usuarios/${encodeURIComponent(u.email)}/pedidos`)}>Historial</Boton>
                      <Boton variant="outline-primary" onClick={() => { setUsuarioEditar(u); setModalAbierto(true) }}>Editar</Boton>
                      <Boton variant="outline-danger" onClick={() => setUsuarioEliminar(u)}>X</Boton>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <ModalUsuarioForm
        show={modalAbierto}
        onHide={() => setModalAbierto(false)}
        usuario={usuarioEditar}
        onGuardar={guardarUsuario}
      />

      <Modal
        show={Boolean(usuarioEliminar)}
        onHide={() => setUsuarioEliminar(null)}
        centered
        contentClassName="bg-transparent border-0"
      >
        <TarjetaMensaje
          titulo="¿Eliminar usuario?"
          descripcion={`Estás a punto de eliminar a ${usuarioEliminar?.nombre_user || usuarioEliminar?.nombre}. Esta acción no se puede deshacer.`}
        >
          <div className="d-flex justify-content-center gap-3">
            <Boton variant="outline-secondary" onClick={() => setUsuarioEliminar(null)}>
              Cancelar
            </Boton>
            <Boton variant="danger" onClick={confirmarEliminacion}>
              Sí, eliminar
            </Boton>
          </div>
        </TarjetaMensaje>
      </Modal>
    </PlantillaAdmin>
  )
}

export default UsuariosAdmin