import CampoTexto from '../atoms/campo-texto';
import Buscador from '../molecules/buscador';
import AccionNav from '../molecules/accion-nav';

function Nav(props) {
  return (
    <nav className="navbar">
      <CampoTexto tipo="bold" texto={props.titulo || "El Tarugo"} />

      <Buscador enBuscar={props.enBuscar} />

      <AccionNav enAbrirCarrito={props.enAbrirCarrito} enLogin={props.enLogin} />
    </nav>
  );
}

export default Nav;