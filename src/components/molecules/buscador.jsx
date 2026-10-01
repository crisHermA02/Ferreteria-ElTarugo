import Boton from '../atoms/boton';
import Campo from '../atoms/campo';

function Buscador(props) {
  return (
    <div className="buscador">
      <Campo type="text" id="buscar" />
      <Boton texto="Buscar" variante="primary" onClick={props.enBuscar} />
    </div>
  );
}

export default Buscador;