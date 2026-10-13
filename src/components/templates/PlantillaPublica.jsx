import {useNavigate } from 'react-router-dom'; // Importa el hook para cambiar de rutas
import nav from '../organism/nav'; // Los componentes deben iniciar con mayúscula (Nav)
import footer from '../organism/footer'; // Los componentes deben iniciar con mayúscula (Footer)

// Inicializa la función para navegar. Corregido: useNavigate() en lugar de useNaviagate()
export function PlantillaPublica(props){
    const navigate = useNaviagate();

    return(
        <>
        <nav
        categorias={categorias}
        onNavegar={naviagate}
        onBuscar={(texto) => navidate('/busqueda/${encodeURIComponent(texto)')}
        />
        <main className= "contenido">
            {props.children}
            </main>
            <Footer onNavegar/>
        </>
    )
}
