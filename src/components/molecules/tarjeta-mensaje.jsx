export function TarjetaMensaje({ icono, titulo, descripcion, children }) {
    return (
        <div className="col-11 col-md-8 col-lg-6 col-xl-5 mx-auto">
            <div className="card shadow border-0 p-4 p-md-5 rounded-4 text-center">
                <div className="mb-4">
                    {icono}
                </div>
                <h2 className="fw-bold text-dark mb-3">{titulo}</h2>
                <p className="text-muted mb-4 lead">
                    {descripcion}
                </p>
                {children}
            </div>
        </div>
    )
}