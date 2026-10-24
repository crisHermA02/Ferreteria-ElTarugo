import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { ReportesTarjetasMetricas } from '../../components/molecules/ReportesTarjetasMetricas'
import { FormularioPerfilAdmin } from '../../components/molecules/FormularioPerfilAdmin'
import { ResumenInventarioAdmin } from '../../components/molecules/ResumenInventarioAdmin'
import { useAuth } from '../../context/AuthContext'
import { useTituloPagina } from '../../hooks/useTituloPagina'

export function ReportesPerfilAdmin() {
  useTituloPagina('Reportes y Perfil de Administración')
  const { usuario } = useAuth()

  const [nombreAdmin, setNombreAdmin] = useState(usuario?.nombre || 'Administrador')
  const [emailAdmin, setEmailAdmin] = useState(usuario?.email || 'admin@eltarugo.cl')
  const [mensajeGuardado, setMensajeGuardado] = useState(false)

  const pedidos = JSON.parse(localStorage.getItem('tienda_pedidos') || '[]')
  const productos = JSON.parse(localStorage.getItem('productos') || '[]')

  const totalVentas = pedidos.reduce((acc, p) => acc + (p.total || 0), 0)
  const promedioOrden = pedidos.length > 0 ? Math.round(totalVentas / pedidos.length) : 0

  function guardarPerfil(e) {
    e.preventDefault()
    const usuarioActualizado = { ...usuario, nombre: nombreAdmin, email: emailAdmin }
    localStorage.setItem('tienda_usuario', JSON.stringify(usuarioActualizado))
    setMensajeGuardado(true)
    setTimeout(() => setMensajeGuardado(false), 3000)
  }

  return (
    <PlantillaAdmin>
      <div className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-1">Reportes y Perfil de Administración</h2>
        <p className="text-muted m-0">Métricas operacionales e información de la cuenta administradora.</p>
      </div>

      <ReportesTarjetasMetricas
        totalVentas={totalVentas}
        promedioOrden={promedioOrden}
        totalPedidos={pedidos.length}
      />

      <Row className="g-4">
        <Col lg={6}>
          <FormularioPerfilAdmin
            nombreAdmin={nombreAdmin}
            setNombreAdmin={setNombreAdmin}
            emailAdmin={emailAdmin}
            setEmailAdmin={setEmailAdmin}
            mensajeGuardado={mensajeGuardado}
            onGuardar={guardarPerfil}
          />
        </Col>

        <Col lg={6}>
          <ResumenInventarioAdmin productos={productos} />
        </Col>
      </Row>
    </PlantillaAdmin>
  )
}

export default ReportesPerfilAdmin