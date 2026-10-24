import { useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { Boton } from '../components/atoms/boton'
import { TarjetaPedido } from '../components/organism/tarjeta-pedido'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { usePedidos } from '../hooks/usePedidos'

export function MisPedidos() {
  useTituloPagina('Mis Pedidos')
  const navigate = useNavigate()
  const { pedidos } = usePedidos()

  if (pedidos.length === 0) {
    return (
      <PlantillaPublica>
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6">
              <div className="card shadow-sm border-0 p-5 rounded-4">
                <h2 className="h4 text-muted mb-3 fw-bold">Aún no tienes pedidos registrados</h2>
                <p className="text-muted mb-4">
                  Haz tus compras en el catálogo para revisar aquí tu historial de pedidos.
                </p>
                <div>
                  <Boton variant="warning" onClick={() => navigate('/catalogo')}>
                    Ir al catálogo
                  </Boton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PlantillaPublica>
    )
  }

  return (
    <PlantillaPublica>
      <div className="container py-4">
        <h2 className="h3 mb-4 fw-bold border-start border-4 border-warning ps-3">
          Historial de Pedidos
        </h2>

        <div className="row">
          <div className="col-12">
            {pedidos.map((pedido) => (
              <TarjetaPedido key={pedido.id} pedido={pedido} />
            ))}
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}

export default MisPedidos