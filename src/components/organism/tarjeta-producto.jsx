import { Row, Col } from 'react-bootstrap'
import { Item } from '../molecules/item'

export function TarjetaProducto(props) {
  if (props.productos.length === 0) {
    return <p role="status">No hay productos que coincidan con tu búsqueda.</p>
  }
  return (
    <Row className="g-4">
      {props.productos.map((producto) => (
        <Col key={producto.id} sm={6} lg={4}>
          <Item producto={producto} onAdd={props.onAdd} />
        </Col>
      ))}
    </Row>
  )
}

export default TarjetaProducto