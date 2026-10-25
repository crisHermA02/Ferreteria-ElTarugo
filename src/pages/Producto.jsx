import { useState, useRef, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { useProductos } from '../context/ProductosContext'
import { useCarrito } from '../context/CarritoContext'
import { Boton } from '../components/atoms/boton'
import { Badge } from '../components/atoms/badge'
import { Precio } from '../components/atoms/precio'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { obtenerImagen } from '../utils/imagenes'
import { rebotar } from '../utils/animaciones'

export function Producto() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { productos } = useProductos()
  const carrito = useCarrito()

  const producto = productos.find((p) => p.id === Number(id))
  useTituloPagina(producto ? producto.nombre : 'Producto no encontrado')

  const [agregado, setAgregado] = useState(false)
  const [cantidad, setCantidad] = useState(1)
  const [rutaFallida, setRutaFallida] = useState(null)
  const temporizador = useRef(null)

  useEffect(() => () => clearTimeout(temporizador.current), [])

  if (!producto) {
    return (
      <PlantillaPublica>
        <div className="py-5 text-center">
          <h2 className="h4 text-muted mb-3">Producto no encontrado</h2>
          <p className="text-secondary mb-4">El producto que buscas no existe o fue retirado del catálogo.</p>
          <Boton onClick={() => navigate('/catalogo')}>Volver al catálogo</Boton>
        </div>
      </PlantillaPublica>
    )
  }

  const sinStock = producto.stock === 0
  const ruta = obtenerImagen(producto.imagen)
  const hayImagen = ruta !== null && ruta !== rutaFallida

  function agregar(e) {
    const boton = e.currentTarget
    for (let i = 0; i < cantidad; i++) {
      carrito.add(producto)
    }
    setAgregado(true)
    rebotar(boton)
    clearTimeout(temporizador.current)
    temporizador.current = setTimeout(() => setAgregado(false), 1500)
  }

  return (
    <PlantillaPublica>
      <div className="py-4">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/catalogo" className="text-decoration-none text-secondary">Catálogo</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/categoria/${encodeURIComponent(producto.categoria)}`} className="text-decoration-none text-secondary">
                {producto.categoria}
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {producto.nombre}
            </li>
          </ol>
        </nav>

        <div className="card shadow-sm border-0 p-4">
          <div className="row g-4 align-items-center">
            <div className="col-md-5 text-center">
              <div className="p-3 bg-light rounded-3 d-flex align-items-center justify-content-center">
                {hayImagen ? (
                  <img
                    src={ruta}
                    alt={producto.nombre}
                    className="img-fluid rounded"
                    onError={() => setRutaFallida(ruta)}
                  />
                ) : (
                  <div className="text-muted p-4">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="mt-2 mb-0 small">Sin imagen disponible</p>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-7">
              <div className="d-flex gap-2 mb-2 flex-wrap">
                <Badge tone="neutral">{producto.categoria}</Badge>
                {producto.subcategoria && <Badge tone="neutral">{producto.subcategoria}</Badge>}
                {producto.precioAnterior && <Badge tone="marca">Oferta</Badge>}
              </div>

              <h1 className="h2 fw-bold text-dark mb-2">{producto.nombre}</h1>

              <p className="text-muted small mb-3">
                {producto.marca && <span className="me-3"><strong>Marca:</strong> {producto.marca}</span>}
                {producto.codigo && <span><strong>Código:</strong> {producto.codigo}</span>}
              </p>

              <div className="my-3">
                <Precio valor={producto.precio} anterior={producto.precioAnterior ?? null} />
              </div>

              <div className="mb-4">
                {sinStock ? (
                  <Badge tone="warning">Sin stock disponible</Badge>
                ) : (
                  <Badge tone="success">{producto.stock} unidades disponibles ({producto.unidad ?? 'Unidad'})</Badge>
                )}
              </div>

              {!sinStock && (
                <div className="d-flex align-items-center gap-3 mb-4">
                  <label htmlFor="cantidad" className="fw-semibold small text-muted">Cantidad:</label>
                  <div className="input-group w-50">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                    >
                      -
                    </button>
                    <input
                      id="cantidad"
                      type="number"
                      className="form-control text-center"
                      value={cantidad}
                      min="1"
                      max={producto.stock}
                      onChange={(e) => setCantidad(Math.max(1, Math.min(producto.stock, Number(e.target.value) || 1)))}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => setCantidad((c) => Math.min(producto.stock, c + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}

              <div className="d-flex gap-2 flex-wrap">
                <Boton
                  variant={agregado ? 'success' : 'warning'}
                  onClick={agregar}
                  disabled={sinStock}
                >
                  {agregado ? '✓ Agregado al carrito' : 'Agregar a la solicitud'}
                </Boton>
                <Boton variant="outline-secondary" onClick={() => navigate('/catalogo')}>
                  Seguir comprando
                </Boton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlantillaPublica>
  )
}

export default Producto