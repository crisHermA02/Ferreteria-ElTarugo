import { useNavigate } from "react-router-dom";
import PlantillaPublica from "../components/templates/PlantillaPublica";
import TarjetaBienvenida from "../components/molecules/tarjeta-bienvenida";

export function Inicio() {
    const navigate = useNavigate();

    return (
        <PlantillaPublica>
            <h2 className="display-6 text-center fw-bold text-dark mt-4 mb-4">Bienvenido a Ferretería El Tarugo</h2>
            <TarjetaBienvenida
                onCatalogo={() => navigate("/catalogo")}
                onLogin={() => navigate("/login")}
                onRegister={() => navigate("/registro")}
            />
        </PlantillaPublica>
    );
}

export default Inicio;
