import { Link } from 'react-router-dom'

export function TarjetaBlog({ id, titulo, resumen, fecha }) {
    return (
        <article className="card shadow-sm border-0 h-100">
            <div className="card-body d-flex flex-column">
                <span className="badge bg-light text-secondary mb-2 align-self-start">
                    {fecha}
                </span>
                <h3 className="h5 fw-bold card-title">{titulo}</h3>
                <p className="card-text text-muted flex-grow-1">{resumen}</p>
                <Link to={`/blog/${id}`} className="btn btn-outline-dark mt-3">
                    Leer artículo completo
                </Link>
            </div>
        </article>
    )
}