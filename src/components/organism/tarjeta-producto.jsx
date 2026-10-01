import Boton from '../atoms/boton';
import Precio from '../atoms/precio';
import CampoTexto from '../atoms/campo-texto';

function TarjetaProducto(props) {
  return (
    <section className="tarjeta-producto">

      <img src={props.imagen} alt={props.titulo} />
      <CampoTexto tipo="title" texto={props.titulo } />
      <Precio precio={props.precio} />
      <Boton texto="Agregar al carrito" onClick={props.onAgregar} />
      
    </section>
  );
}

export default TarjetaProducto;