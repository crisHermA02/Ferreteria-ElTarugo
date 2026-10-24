export function ComprobanteEncabezado({ estado, fecha }) {
  return (
    <div className="d-flex justify-content-between align-items-start border-bottom pb-3 mb-4">
      <div>
        <h4 className="fw-bold text-dark m-0">Ferretería El Tarugo</h4>
        <small className="text-muted d-block">R.U.T.: 76.543.210-K</small>
        <small className="text-muted d-block">
          Avenida Balmaceda 1234, La Serena, Chile
        </small>
      </div>
      <div className="text-end">
        <span className="badge bg-warning text-dark fs-6 fw-bold mb-1 d-inline-block">
          {estado}
        </span>
        <small className="text-muted d-block">
          Fecha:{' '}
          {new Date(fecha).toLocaleDateString('es-CL', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
        </small>
      </div>
    </div>
  )
}