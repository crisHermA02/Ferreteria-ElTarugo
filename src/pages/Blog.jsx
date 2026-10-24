import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { TarjetaBlog } from '../components/molecules/tarjeta-blog'
import { useTituloPagina } from '../hooks/useTituloPagina'

export const entradasBlog = [
    {
        id: 1,
        titulo: 'Cómo elegir la brocha adecuada para tu proyecto',
        resumen: 'No todas las brochas son iguales. Descubre cuál usar para esmaltes, látex o barnices y logra un acabado profesional en tu hogar.',
        fecha: '15 Octubre 2026',
        contenido: 'Pintar una habitación puede ser renovador, pero elegir la herramienta incorrecta arruinará el acabado. Para pinturas al agua (látex o esmalte al agua), lo ideal es usar brochas de cerdas sintéticas (nylon o poliéster) porque no absorben agua ni se hinchan. Por otro lado, para pinturas al aceite o barnices, las cerdas naturales son la mejor opción, ya que permiten un trazo mucho más suave y uniforme. Además, el tamaño importa: usa brochas de 1 a 2 pulgadas para marcos y bordes, y de 3 a 4 pulgadas para superficies más amplias si no quieres usar rodillo.'
    },
    {
        id: 2,
        titulo: 'Herramientas básicas que no pueden faltar en tu casa',
        resumen: '¿Se rompió una tubería o necesitas colgar un cuadro? Conoce el kit de supervivencia básico que todo hogar debería tener.',
        fecha: '02 Octubre 2026',
        contenido: 'Todos nos hemos enfrentado a una reparación de emergencia. Para no entrar en pánico, te recomendamos armar una caja de herramientas básica con lo siguiente: 1) Un martillo de carpintero, indispensable para clavar y extraer clavos. 2) Un destornillador con puntas intercambiables (cruz y paleta). 3) Un alicate universal para cortar y sujetar cables o alambres. 4) Una cinta métrica de al menos 3 metros. 5) Una llave ajustable (llave francesa) para gasfitería básica. Con esto, estarás preparado para el 90% de los imprevistos en casa.'
    }
]

export function Blog() {
    useTituloPagina('Blog y Consejos')

    return (
        <PlantillaPublica>
            <div className="py-4">
                <h2 className="display-6 fw-bold text-dark mb-4 border-start border-4 border-warning ps-3">
                    Blog y Consejos
                </h2>
                <p className="text-muted mb-4 lead">Descubre guías, tips y recomendaciones de nuestros expertos.</p>

                <div className="row g-4">
                    {entradasBlog.map((entrada) => (
                        <div key={entrada.id} className="col-md-6">
                            <TarjetaBlog {...entrada} />
                        </div>
                    ))}
                </div>
            </div>
        </PlantillaPublica>
    )
}
export default Blog