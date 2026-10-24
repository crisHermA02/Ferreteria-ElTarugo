import { Table } from 'react-bootstrap'
import { Boton } from '../atoms/boton'
import { ControlStock } from '../molecules/ControlStock'
import { formatoPrecio } from '../../utils/formato'

export function TablaProductosAdmin({ productos = [], onCambiarStock, onEliminar }) {
  return (
    <Table striped align="middle">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((p) => (
          <tr key={p.id}>
            <td>{p.nombre}</td>
            <td>{formatoPrecio(p.precio)}</td>
            <td>
              <ControlStock
                stock={p.stock ?? 0}
                onCambiar={(cambio) => onCambiarStock(p, cambio)}
              />
            </td>
            <td>
              <Boton variant="danger" onClick={() => onEliminar(p.id)}>
                Eliminar
              </Boton>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}