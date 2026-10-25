import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { TarjetaProducto } from '../components/organism/tarjeta-producto'
import { useProductos } from '../context/ProductosContext'
import { useCarrito } from '../context/CarritoContext'
import { filtrarProductos } from '../utils/filtrarDatos'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function Catalogo() {
  const navigate = useNavigate()
  const params = useParams()
  
  const nombre = params.nombre ? decodeURIComponent(params.nombre) : ''
  const texto = params.texto ? decodeURIComponent(params.texto) : ''
  
  const productosCtx = useProductos()
  const carrito = useCarrito()

  const visibles = filtrarProductos(productosCtx.productos, { texto, categoria: nombre })

  const [paginaActual, setPaginaActual] = useState(1)
  const productosPorPagina = 30

  useEffect(() => {
    setPaginaActual(1)
  }, [nombre, texto])

  const indiceUltimoProducto = paginaActual * productosPorPagina
  const indicePrimerProducto = indiceUltimoProducto - productosPorPagina
  const productosPaginados = visibles.slice(indicePrimerProducto, indiceUltimoProducto)
  
  const totalPaginas = Math.ceil(visibles.length / productosPorPagina)

  let titulo = 'Catálogo completo'
  if (nombre) titulo = nombre
  if (texto) titulo = `Resultados para "${texto}"`
  
  useTituloPagina(titulo)

  return (
    <PlantillaPublica>
      <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-2">
        <h2 className="h3 mb-0 text-dark fw-bold">{titulo}</h2>
        <span className="text-muted small">
          {visibles.length} productos {visibles.length > 0 && `(Pág. ${paginaActual} de ${totalPaginas})`}
        </span>
      </div>
      
      <TarjetaProducto productos={productosPaginados} onAdd={carrito.add} />

      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center mt-5 mb-4">
          <nav aria-label="Navegación del catálogo">
            <ul className="pagination shadow-sm">
              <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
                <button 
                  className="page-link text-dark" 
                  onClick={() => setPaginaActual(prev => Math.max(prev - 1, 1))}
                >
                  &laquo; Anterior
                </button>
              </li>
              
              {[...Array(totalPaginas)].map((_, i) => {
                const numPagina = i + 1;
                const esActiva = paginaActual === numPagina;
                return (
                  <li key={numPagina} className="page-item">
                    <button 
                      className={`page-link ${esActiva ? 'bg-warning border-warning text-dark fw-bold' : 'text-dark'}`}
                      onClick={() => setPaginaActual(numPagina)}
                    >
                      {numPagina}
                    </button>
                  </li>
                )
              })}

              <li className={`page-item ${paginaActual === totalPaginas ? 'disabled' : ''}`}>
                <button 
                  className="page-link text-dark" 
                  onClick={() => setPaginaActual(prev => Math.min(prev + 1, totalPaginas))}
                >
                  Siguiente &raquo;
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </PlantillaPublica>
  )
}