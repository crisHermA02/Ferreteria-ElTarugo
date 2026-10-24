import { useParams, useNavigate } from 'react'
import { Card, Button } from 'react-bootstrap'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { TablaSolicitudes } from '../../components/molecules/tabla-solicitudes'
import { useTituloPagina } from '../../hooks/useTituloPagina'
import { Badge } from 'react-bootstrap'

export function HistorialUsuarioAdmin() {
  const { email } = useParams()
  const emailDecodificado = decodeURIComponent(email || '')
  useTituloPagina(`Historial - ${emailDecodificado}`)
  const navigate = useNavigate()

  const todosLosPedidos = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
  const pedidosUsuario = todosLosPedidos.filter((p) => p.cliente?.email === emailDecodificado)

  function obtenerBadgeEstado(estado) {
    switch (estado) {
      case 'Entregado':
        return <Badge bg="success">Entregado</Badge>
      case 'Enviado':
        return <Badge bg="info" className="text-dark">Enviado</Badge>
      case 'Cancelado':
        return <Badge bg="danger">Cancelado</Badge>
      default:
        return <Badge bg="warning" className="text-dark">En preparación</Badge>
    }
  }

  return (
    <PlantillaAdmin>
      <div className="d-flex align-items-center gap-3 mb-4">
        <Button variant="outline-secondary" size="sm" onClick={() => navigate('/admin/usuarios')}>
          ← Volver a Usuarios
        </Button>
        <div>
          <h2 className="h3 fw-bold text-dark m-0">
            Historial de Solicitudes
          </h2>
          <span className="text-muted small">{emailDecodificado}</span>
        </div>
      </div>

      <TablaSolicitudes
        pedidos={pedidosUsuario}
        onVerComprobante={() => navigate('/admin/solicitudes')}
        obtenerBadgeEstado={obtenerBadgeEstado}
      />
    </PlantillaAdmin>
  )
}

export default HistorialUsuarioAdmin