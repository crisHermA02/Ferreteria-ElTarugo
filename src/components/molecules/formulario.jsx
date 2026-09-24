import Boton from "../atoms/boton-enviar";
import Campo from "../atoms/campo";

function formulario(props) {
  return (
    <form className="formulario">
      <label for="Correo">Correo Electronico</label>
      <Campo type="email" id="Correo" />
      <label for="Clave">Contraseña</label>
      <Campo type="password" id="Clave" />
      <Boton texto="Enviar" onClick={props.onEnviar} />
    </form>
  );
}

export default formulario;