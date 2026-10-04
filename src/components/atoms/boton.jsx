function boton(props) {
  const variante = props.variante || "primary";
  return (
    <button
      className={`btn btn-${variante} ${props.clase || ""}`}
      onClick={props.onClick}
      disabled={props.deshabilitado}
    >
      {props.texto}
    </button>
  );
}

export default boton;
