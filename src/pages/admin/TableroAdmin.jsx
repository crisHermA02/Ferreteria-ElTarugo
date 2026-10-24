import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { useTituloPagina } from '../../hooks/useTituloPagina'
import { useTableroAdmin } from '../../hooks/useTableroAdmin'

export function TableroAdmin() {
  useTituloPagina('Panel de Administración')
  const { metricas } = useTableroAdmin()

  const tarjetas = [
    {
      titulo: 'Solicitudes Recibidas',
      valor: metricas?.totalSolicitudes ?? 0,
      subtexto: 'Órdenes registradas',
      color: 'primary',
      ruta: '/admin/solicitudes',
    },
    {
      titulo: 'Catálogo de Productos',
      valor: metricas?.totalProductos ?? 0,
      subtexto: 'Ítems en inventario',
      color: 'success',
      ruta: '/admin/catalogo',
    },
    {
      titulo: 'Ítems Críticos',
      valor: metricas?.itemsCriticos ?? 0,
      subtexto: 'Stock bajo o reposición',
      color: 'danger',
      ruta: '/admin/items-criticos',
    },
    {
      titulo: 'Usuarios Registrados',
      valor: metricas?.totalUsuarios ?? 0,
      subtexto: 'Clientes en plataforma',
      color: 'warning',
      ruta: '/admin/usuarios',
    },
  ]

  return (
    <PlantillaAdmin>
      <div className="mb-4">
        <h2 className="h3 fw-bold text-dark mb-1">Resumen General</h2>
        <p className="text-muted m-0">Estado del sistema y accesos directos a los módulos de gestión.</p>
      </div>

      <Row className="g-4 mb-4">
        {tarjetas.map((t, idx) => (
          <Col key={idx} sm={6} xl={3}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <div>
                    <span className="text-muted small fw-bold text-uppercase d-block mb-1">
                      {t.titulo}
                    </span>
                    <h3 className="display-6 fw-bold text-dark m-0">{t.valor}</h3>
                  </div>
                  <span className="fs-2" role="img" aria-label={t.titulo}>
                    {t.icono}
                  </span>
                </div>
                <div>
                  <small className="text-muted d-block mb-3">{t.subtexto}</small>
                  <Link
                    to={t.ruta}
                    className="btn btn-sm btn-outline-dark rounded-pill w-100 fw-semibold"
                  >
                    Gestionar
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </PlantillaAdmin>
  )
}

export default TableroAdmin