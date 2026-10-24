import { formatoPrecio } from '../../utils/formato'

export function ComprobanteResumenTotal({ total }) {
  const neto = Math.round(total / 1.19)
  const iva = total - neto

  return (
    <div className="d-flex justify-content-end mb-4">
      <div className="text-end bg-light p-3 rounded-3 col-12 col-sm-6">
        <div className="d-flex justify-content-between mb-1">
          <span className="text-muted">Neto estimado:</span>
          <span>{formatoPrecio(neto)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span className="text-muted">I.V.A. (19%):</span>
          <span>{formatoPrecio(iva)}</span>
        </div>
        <div className="d-flex justify-content-between border-top pt-2 fs-5 fw-bold text-dark">
          <span>Total Orden:</span>
          <span>{formatoPrecio(total)}</span>
        </div>
      </div>
    </div>
  )
}