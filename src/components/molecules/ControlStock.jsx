import { Boton } from '../atoms/boton'

export function ControlStock({ stock = 0, onCambiar }) {
  return (
    <div className="d-inline-flex align-items-center border border-secondary-subtle rounded-2 p-1 bg-white">
      <Boton
        variant="outline-secondary"
        size="sm"
        onClick={() => onCambiar(-1)}
        disabled={stock <= 0}
        className="py-0 px-2 border-0 fw-bold"
      >
        -
      </Boton>
      <span className="fw-bold px-2 text-center" style={{ minWidth: '45px', display: 'inline-block' }}>
        {stock}
      </span>
      <Boton
        variant="outline-secondary"
        size="sm"
        onClick={() => onCambiar(1)}
        className="py-0 px-2 border-0 fw-bold"
      >
        +
      </Boton>
    </div>
  )
}