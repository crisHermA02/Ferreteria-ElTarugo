import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { Item } from '../components/molecules/item'
import { useProductos } from '../context/ProductosContext'
import { useCarrito } from '../context/CarritoContext'
import { useTituloPagina } from '../hooks/useTituloPagina'

export function Ofertas() {
    const { productos } = useProductos()
    const carrito = useCarrito()
    useTituloPagina('Ofertas Especiales')

    const productosEnOferta = productos.filter(p => p.precioAnterior).length > 0 
        ? productos.filter(p => p.precioAnterior)
        : productos.slice(10, 18).map(p => ({ 
            ...p, 
            precioAnterior: Math.round(p.pVentaClp * 1.2) 
          }))

    return (
        <PlantillaPublica>
            <div className="py-4">
                <h2 className="display-6 fw-bold text-danger mb-4 border-start border-4 border-danger ps-3">
                    Ofertas Destacadas
                </h2>
                <p className="text-muted mb-4 lead">
                    Aprovecha estos descuentos por tiempo limitado.
                </p>

                <div className="row g-4">
                    {productosEnOferta.map(producto => (
                        <div key={producto.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <Item 
                                producto={producto} 
                                onAdd={carrito.add} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </PlantillaPublica>
    )
}

export default Ofertas