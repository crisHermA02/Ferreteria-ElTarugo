import Boton from "../atoms/boton";

function TarjetaBienvenida({ onLogin, onRegister, onCatalogo }) {
    return (
        <div className="card shadow-sm border-0 p-4 mx-auto rounded-3 tarjeta-bienvenida-container">
            <section className="card-body">
                <p className="text-muted">Somos una ferretería ubicada en La Serena, Región de Coquimbo. Vendemos materiales de construcción, herramientas, pinturas, gasfitería, electricidad y mucho más.</p>
                <p className="text-muted mt-2">¡Ya llevamos 22 años trabajando y tenemos más de 800 productos en nuestro catálogo!</p>

                <section className="d-flex flex-wrap gap-2 my-4">
                    <Boton texto="Ver catálogo" variante="dark" onClick={onCatalogo} />
                    <Boton texto="Iniciar Sesión" variante="warning" onClick={onLogin} />
                    <Boton texto="Crear Cuenta" variante="warning" onClick={onRegister} />
                </section>

                <section className="mt-4">
                    <h3 className="fw-bold border-start border-4 border-warning ps-2 mb-3">¿Qué puedes hacer en esta página?</h3>
                    <ul className="text-muted lh-lg">
                        <li>Ver el catálogo de productos</li>
                        <li>Ver si hay stock antes de ir a la tienda</li>
                        <li>Crear tu cuenta de cliente o contratista</li>
                        <li>Iniciar sesión para hacer pedidos</li>
                    </ul>
                </section>

                <section className="mt-5 pt-3 border-top text-muted small">
                    <p className="mb-1"><strong>Dirección:</strong> La Serena, Región de Coquimbo</p>
                    <p className="mb-0"><strong>Horario:</strong> Lunes a Sábado de 9:00 a 19:00 hrs</p>
                </section>
            </section>
        </div>
    );
}

export default TarjetaBienvenida;