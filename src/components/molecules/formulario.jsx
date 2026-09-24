import boton from "../atoms/boton-enviar";
import campo from "../atoms/campo";

function formulario(props) {
  return (
    <div className="formulario">
      <label for="Correo">Correo Electronico</label>
      <campo type="email" id="Correo" />
      <label for="Clave">Contraseña</label>
      <campo type="password" id="Clave" />
      <boton texto="Enviar" onClick={props.onEnviar} />
    </div>
  );
}

export default formulario;