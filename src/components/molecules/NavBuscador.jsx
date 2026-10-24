import { Form } from 'react-bootstrap'

export function NavBuscador({ texto, setTexto, buscar }) {
  return (
    <Form className="buscador tienda-buscador" role="search" onSubmit={buscar}>
      <div className="input-group">
        <Form.Control
          type="search"
          placeholder="Buscar productos…"
          aria-label="Buscar productos"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" className="btn btn-warning fw-bold" aria-label="Buscar">
          <span className="d-none d-lg-inline">Buscar</span>
          <svg className="d-lg-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </Form>
  )
}