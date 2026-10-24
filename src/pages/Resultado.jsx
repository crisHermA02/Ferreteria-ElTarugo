import { useSearchParams, useNavigate } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { Boton } from '../components/atoms/boton'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { formatoPrecio } from '../utils/formato'

export function Resultado() {
  useTituloPagina('Estado de la Solicitud')
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const estado = searchParams.get('estado')
  const orden = searchParams.get('orden')
  const total = searchParams.get('total')

  const esExito = estado === 'exito'

  return (
    <PlantillaPublica>
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm border-0 p-4 p-md-5 rounded-4">
              <div className="mb-4">
                <span
                  className={`d-inline-flex align-items-center justify-content-center rounded-circle p-3 fs-1 fw-bold ${
                    esExito ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger'
                  }`}
                >
                  {esExito ? 'Exito' : 'Error'}
                </span>
              </div>

              <h2 className="h3 fw-bold text-dark mb-3">
                {esExito ? '¡Solicitud Confirmada!' : 'Algo salió mal'}
              </h2>

              <p className="text-muted mb-4">
                {esExito
                  ? `Tu orden #${orden} por ${formatoPrecio(total ? Number(total) : 0)} ha sido procesada con éxito y se encuentra en preparación.`
                  : 'Tuvimos un problema procesando tu pago o guardando tu solicitud.'}
              </p>

              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                {esExito ? (
                  <>
                    <Boton variant="warning" onClick={() => navigate('/mis-pedidos')}>
                      Ver Mis Pedidos
                    </Boton>
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => navigate('/catalogo')}
                    >
                      Volver al catálogo
                    </button>
                  </>
                ) : (
                  <Boton variant="danger" onClick={() => navigate('/checkout')}>
                    Reintentar Solicitud
                  </Boton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}

export default Resultado