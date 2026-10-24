import { useState, useEffect } from 'react'
import { Badge } from 'react-bootstrap'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { FiltrosSolicitudes } from '../../components/molecules/filtro-solicitudes'
import { TablaSolicitudes } from '../../components/molecules/tabla-solicitudes'
import { ModalComprobante } from '../../components/organism/modalComprobante'
import { useTituloPagina } from '../../hooks/useTituloPagina'

export function SolicitudesAdmin() {
  useTituloPagina('Gestión de Solicitudes')

  const [pedidos, setPedidos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [filtroEstado, setFiltroEstado] = useState('todos')
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null)

  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
    setPedidos(guardados)
  }, [])

  function cambiarEstado(id, nuevoEstado) {
    const actualizados = pedidos.map((p) =>
      p.id === id ? { ...p, estado: nuevoEstado } : p
    )
    setPedidos(actualizados)
    localStorage.setItem('tienda_pedidos', JSON.stringify(actualizados))

    if (pedidoSeleccionado && pedidoSeleccionado.id === id) {
      setPedidoSeleccionado({ ...pedidoSeleccionado, estado: nuevoEstado })
    }
  }

  const pedidosFiltrados = pedidos.filter((pedido) => {
    const coincideTexto =
      pedido.id?.toString().includes(busqueda) ||
      pedido.cliente?.nombre?.toLowerCase().includes(busqueda.toLowerCase()) ||
      pedido.cliente?.email?.toLowerCase().includes(busqueda.toLowerCase())

    const coincideEstado =
      filtroEstado === 'todos' || pedido.estado === filtroEstado

    return coincideTexto && coincideEstado
  })

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
      <div className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-1">Solicitudes Recibidas</h2>
        <p className="text-muted m-0">
          Revisa, gestiona y emite el comprobante oficial de cada pedido.
        </p>
      </div>

      <FiltrosSolicitudes
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        filtroEstado={filtroEstado}
        setFiltroEstado={setFiltroEstado}
      />

      <TablaSolicitudes
        pedidos={pedidosFiltrados}
        onVerComprobante={setPedidoSeleccionado}
        obtenerBadgeEstado={obtenerBadgeEstado}
      />

      <ModalComprobante
        pedido={pedidoSeleccionado}
        onCerrar={() => setPedidoSeleccionado(null)}
        onCambiarEstado={cambiarEstado}
      />
    </PlantillaAdmin>
  )
}

export default SolicitudesAdmin