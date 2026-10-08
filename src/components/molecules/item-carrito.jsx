import CampoTexto from "../atoms/campo-texto"

import Precio from "../atoms/precio"
function itemCarrito(props) {
    const nombre = props.nombreProducto
    const desc = props.descripcion
    return <section>
        <CampoTexto tipo="title" texto={nombre} />
        <CampoTexto tipo="descripcion" texto={desc} />
        <img src={props.img} alt={nombre} />
        <Precio precio={props.precio} />
    </section>
}