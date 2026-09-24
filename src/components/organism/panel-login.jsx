import Formulario from "../molecules/formulario";

function panelLogin(props) {
  return (
    <section className="panel-login">
      <h2>Iniciar sesión</h2>
      <Formulario onEnviar={props.onLogin} />
      <section className="panel-login-links">
        <a href="/recuperar">¿Olvidaste tu contraseña?</a>
        <a href="/registro">Crear cuenta</a>
      </section>
    </section>
  );
}

export default panelLogin;