import { Form } from 'react-bootstrap'

export function CampoFormulario(props) {
  const error = props.error ?? ''
  const tipo = props.tipo ?? 'text'

  return (
    <Form.Group className="mb-3" controlId={props.id}>
      <Form.Label>{props.etiqueta}</Form.Label>
      <Form.Control
        type={tipo}
        value={props.valor}
        onChange={(e) => props.onChange(e.target.value)}
        isInvalid={error !== ''}
        aria-invalid={error !== ''}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  )
}