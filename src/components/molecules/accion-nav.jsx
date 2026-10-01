import Boton from '../atoms/boton';

function AccionesNav(props) {
  return (
    <div className="acciones-nav">
      <Boton texto="Carrito" variante="secondary" onClick={props.enAbrirCarrito} />
      <Boton texto="Login" variante="primary" onClick={props.enLogin} />
    </div>
  );
}

export default AccionesNav;