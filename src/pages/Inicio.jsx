import PlantillaPublica from "../components/templates/plantillaPublica";
import TarjetaBienvenida from "../components/molecules/tarjeta-bienvenida";

function Inicio({ onNavegar, cantidadCarrito }) {
    return (
        <PlantillaPublica onNavegar={onNavegar} cantidadCarrito={cantidadCarrito}>
            <h2 className="text-center fw-bold mb-4">Bienvenido a Ferretería El Tarugo</h2>
            <TarjetaBienvenida onCatalogo={() => onNavegar?.("catalogo")} />
        </PlantillaPublica>
    );
}

export default Inicio;