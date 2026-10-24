import { Container } from 'react-bootstrap'
import { obtenerClaseCategoria } from '../../utils/navegacion'

export function NavCategorias({ categorias = [], rutaActual, ir }) {
  return (
    <nav className="tienda-categorias bg-light border-bottom py-1" aria-label="Categorías">
      <Container>
        <ul className="nav flex-nowrap overflow-auto">
          <li className="nav-item">
            <a
              className={obtenerClaseCategoria(rutaActual === '/ofertas', true)}
              aria-current={rutaActual === '/ofertas' ? 'page' : undefined}
              href="/ofertas"
              onClick={(e) => ir(e, '/ofertas')}
            >
              Ofertas
            </a>
          </li>
          
          <li className="nav-item">
            <a
              className={obtenerClaseCategoria(rutaActual === '/catalogo')}
              aria-current={rutaActual === '/catalogo' ? 'page' : undefined}
              href="/catalogo"
              onClick={(e) => ir(e, '/catalogo')}
            >
              Ver Todo el Catálogo
            </a>
          </li>

          {categorias.map((c) => (
            <li key={c} className="nav-item">
              <a
                className={obtenerClaseCategoria(rutaActual === `/categoria/${c}`)}
                aria-current={rutaActual === `/categoria/${c}` ? 'page' : undefined}
                href={`/categoria/${c}`}
                onClick={(e) => ir(e, `/categoria/${c}`)}
              >
                {c}
              </a>
            </li>
          ))}

          <li className="nav-item ms-lg-auto border-start ps-2">
            <a
              className={obtenerClaseCategoria(rutaActual === '/blog')}
              aria-current={rutaActual === '/blog' ? 'page' : undefined}
              href="/blog"
              onClick={(e) => ir(e, '/blog')}
            >
              Blog y Consejos
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  )
}