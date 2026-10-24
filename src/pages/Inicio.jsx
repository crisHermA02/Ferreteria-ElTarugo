import { useNavigate, Link } from "react-router-dom"
import PlantillaPublica from "../components/templates/PlantillaPublica"
import TarjetaBienvenida from "../components/molecules/tarjeta-bienvenida"
import { useProductos } from "../context/ProductosContext"
import { useCarrito } from "../context/CarritoContext"
import { TarjetaProducto } from "../components/organism/tarjeta-producto"
import { categoriasDe } from "../utils/categorias"
import { useTituloPagina } from "../hooks/useTituloPagina"

export function Inicio() {
    const navigate = useNavigate()
    const productosCtx = useProductos()
    const carrito = useCarrito()
    useTituloPagina('Inicio')

    const categorias = categoriasDe(productosCtx.productos)
    const destacados = productosCtx.productos.slice(0, 4)

    return (
        <PlantillaPublica>
            <h2 className="display-6 text-center fw-bold text-dark mt-4 mb-4">Bienvenido a Ferretería El Tarugo</h2>
            
            <TarjetaBienvenida
                onCatalogo={() => navigate("/catalogo")}
                onLogin={() => navigate("/login")}
                onRegister={() => navigate("/registro")}
            />
            <section className="mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                    <h3 className="h4 text-dark fw-bold m-0 border-start border-4 border-warning ps-2">
                        Explora por Categorías
                    </h3>
                    <Link to="/catalogo" className="btn btn-sm btn-outline-dark">
                        Ver todas
                    </Link>
                </div>
                <div className="row g-3">
                    {categorias.map((cat) => (
                        <div key={cat} className="col-6 col-sm-4 col-md-3">
                            <button
                                type="button"
                                className="btn btn-light w-100 p-3 text-center border shadow-sm h-100 d-flex flex-column align-items-center justify-content-center gap-2 hover-shadow"
                                onClick={() => navigate(`/categoria/${encodeURIComponent(cat)}`)}
                            >
                                <span className="fw-semibold text-dark">{cat}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            <section className="mt-5 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
                    <h3 className="h4 text-dark fw-bold m-0 border-start border-4 border-warning ps-2">
                        Productos Destacados
                    </h3>
                    <Link to="/catalogo" className="btn btn-sm btn-warning fw-bold">
                        Ver todo el catálogo
                    </Link>
                </div>
                <TarjetaProducto productos={destacados} onAdd={carrito.add} />
            </section>
        </PlantillaPublica>
    )
}

export default Inicio