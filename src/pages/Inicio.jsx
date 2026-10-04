import Nav from "../components/organism/nav";
import Footer from "../components/organism/footer";
import TarjetaBienvenida from "../components/molecules/tarjeta-bienvenida";

function Inicio({ onNavegar, cantidadCarrito }) {
    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Nav onNavegar={onNavegar} cantidadCarrito={cantidadCarrito} />
            <main className="container my-5 flex-grow-1">
                <h2 className="text-center fw-bold mb-4">Bienvenido a Ferreteria el Tarugo</h2>
                <TarjetaBienvenida onCatalogo={() => onNavegar?.("catalogo")} />
            </main>
            <Footer />
        </div>
    );
}

export default Inicio;
