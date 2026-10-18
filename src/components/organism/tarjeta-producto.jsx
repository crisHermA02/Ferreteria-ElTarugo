import { Row, Col } from 'react-bootstrap'
import Item from '../molecules/item' 

export function TarjetaProducto(props) {
  const productos = props.productos || []

  if (productos.length === 0) {
    return <p role="status" className="text-muted my-4">No hay productos que coincidan con tu búsqueda.</p>
  }

  return (
    <Row className="g-4">
      {productos.map((producto) => (
        <Col key={producto.id} sm={6} lg={4} xl={3}>
          <Item producto={producto} onAdd={props.onAdd} />
        </Col>
      ))}
    </Row>
  )
}

export default TarjetaProducto