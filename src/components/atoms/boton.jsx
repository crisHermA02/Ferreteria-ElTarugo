export function Boton(props) {
  const variant = props.variant ?? 'primary'
  const type = props.type ?? 'button'
  const disabled = props.disabled ?? false

  return (
    <button type={type} className={`btn btn-${variant}`} onClick={props.onClick} disabled={disabled}>
      {props.children}
    </button>
  )
}

export default Boton;
