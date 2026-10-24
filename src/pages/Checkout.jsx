import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { CampoFormulario } from '../components/molecules/formulario'
import { Boton } from '../components/atoms/boton'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { formatoPrecio } from '../utils/formato'
import { useCheckout } from '../hooks/useCheckout'

export function Checkout() {
    useTituloPagina('Confirmar Solicitud')
    
    const {
        carrito,
        navigate,
        nombre,
        setNombre,
        email,
        setEmail,
        direccion,
        setDireccion,
        errores,
        manejarEnvio
    } = useCheckout()

    if (carrito.items.length === 0) {
        return (
            <PlantillaPublica>
                <div className="py-5 text-center">
                    <h2 className="h4 text-muted mb-3">Tu carrito está vacío</h2>
                    <Boton onClick={() => navigate('/catalogo')}>Ir al catálogo</Boton>
                </div>
            </PlantillaPublica>
        )
    }

    return (
        <PlantillaPublica>
            <div className="py-4">
                <h2 className="h3 mb-4 fw-bold border-start border-4 border-warning ps-3">
                    Confirmar Datos de Entrega
                </h2>

                <div className="row g-4">
                    <div className="col-lg-5 order-lg-2">
                        <div className="card shadow-sm border-0 bg-light p-4">
                            <h3 className="h5 fw-bold mb-3">Resumen de la orden</h3>
                            <ul className="list-group list-group-flush mb-3 bg-transparent">
                                {carrito.items.map(item => (
                                    <li key={item.producto.id} className="list-group-item bg-transparent d-flex justify-content-between lh-sm px-0">
                                        <div>
                                            <h6 className="my-0">{item.producto.nombreDelProducto}</h6>
                                            <small className="text-muted">Cantidad: {item.cantidad}</small>
                                        </div>
                                        <span className="text-muted">{formatoPrecio(item.producto.pVentaClp * item.cantidad)}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-between border-top pt-3 fw-bold fs-5">
                                <span>Total (CLP)</span>
                                <span>{formatoPrecio(carrito.totalPrecio)}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 order-lg-1">
                        <div className="card shadow-sm border-0 p-4">
                            <h3 className="h5 fw-bold mb-4">Datos del Cliente</h3>
                            <form onSubmit={manejarEnvio} noValidate>
                                <CampoFormulario 
                                    id="chk-nombre" 
                                    etiqueta="Nombre completo" 
                                    valor={nombre} 
                                    onChange={setNombre} 
                                    error={errores.nombre} 
                                />
                                <CampoFormulario 
                                    id="chk-email" 
                                    etiqueta="Correo electrónico" 
                                    tipo="email" 
                                    valor={email} 
                                    onChange={setEmail} 
                                    error={errores.email} 
                                />
                                <CampoFormulario 
                                    id="chk-direccion" 
                                    etiqueta="Dirección de despacho (Calle, Número, Comuna)" 
                                    valor={direccion} 
                                    onChange={setDireccion} 
                                    error={errores.direccion} 
                                />

                                <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                                    <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/carrito')}>
                                        Volver al carro
                                    </button>
                                    <Boton type="submit" variant="warning" className="px-5 fw-bold">
                                        Pagar y Confirmar
                                    </Boton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </PlantillaPublica>
    )
}

export default Checkout