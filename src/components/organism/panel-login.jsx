import formulario from "../molecules/formulario";
import logo from "../atoms/logo";

function panelLogin(props) {
  return (
    <div className="panel-login">
      <h1>Iniciar sesión</h1>
      <formulario onEnviar={props.onLogin} />
      <div className="panel-login__links">
        <a href="/recuperar">¿Olvidaste tu contraseña?</a>
        <a href="/registro">Crear cuenta</a>
      </div>
    </div>
  );
}

export default panelLogin;