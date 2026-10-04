import { useMemo, useState } from "react";
import PlantillaPublica from "../components/templates/plantillaPublica";
import TarjetaProducto from "../components/organism/tarjeta-producto";
import FiltrosCatalogo from "../components/molecules/filtros-catalogo";
import Boton from "../components/atoms/boton";
import { useProductos } from "../context/ProductosContext";
import { obtenerImagen } from "../utils/imagenes";
import { normalizar } from "../utils/formato";

function Catalogo({ onNavegar, onAgregar, cantidadCarrito }) {
    const { productos } = useProductos();
    const [busqueda, setBusqueda] = useState("");
    const [categoria, setCategoria] = useState("");
    const [soloStock, setSoloStock] = useState(false);

    const categorias = useMemo(
        () => [...new Set(productos.map((p) => p.categoria))].sort((a, b) => a.localeCompare(b, "es")),
        [productos]
    );

    const visibles = useMemo(() => {
        const texto = normalizar(busqueda.trim());
        return productos.filter((p) => {
            if (categoria && p.categoria !== categoria) return false;
            if (soloStock && p.stock <= 0) return false;
            if (!texto) return true;
            const campos = [p.nombreDelProducto, p.marca, p.categoria, p.subcategoria, p.codigo];
            return campos.some((c) => normalizar(c).includes(texto));
        });
    }, [productos, busqueda, categoria, soloStock]);

    function limpiarFiltros() {
        setBusqueda("");
        setCategoria("");
        setSoloStock(false);
    }

    return (
        <PlantillaPublica onNavegar={onNavegar} cantidadCarrito={cantidadCarrito}>
            <h2 className="text-center fw-bold mb-1">Catálogo de productos</h2>
            <p className="text-center text-muted mb-4">
                Revisa precios y disponibilidad antes de venir a la tienda.
            </p>

            <FiltrosCatalogo
                busqueda={busqueda}
                onBusqueda={setBusqueda}
                categoria={categoria}
                onCategoria={setCategoria}
                categorias={categorias}
                soloStock={soloStock}
                onSoloStock={setSoloStock}
            />

            <p className="text-muted small text-start" aria-live="polite">
                Mostrando {visibles.length} de {productos.length} productos
            </p>

            {visibles.length === 0 ? (
                <div className="text-center py-5">
                    <p className="mb-3">No encontramos productos con esos filtros.</p>
                    <Boton texto="Limpiar filtros" variante="outline-dark" onClick={limpiarFiltros} />
                </div>
            ) : (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
                    {visibles.map((p) => (
                        <div className="col" key={p.codigo}>
                            <TarjetaProducto
                                imagen={obtenerImagen(p.imagen)}
                                titulo={p.nombreDelProducto}
                                marca={p.marca}
                                subcategoria={p.subcategoria}
                                unidad={p.unidad}
                                precio={p.pVentaClp}
                                stock={p.stock}
                                stockMinimo={p.stockMinimo}
                                onAgregar={() => onAgregar?.(p)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </PlantillaPublica>
    );
}

export default Catalogo;