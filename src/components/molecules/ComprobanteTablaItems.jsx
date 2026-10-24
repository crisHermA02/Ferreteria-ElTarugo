import { Table } from 'react-bootstrap'
import { formatoPrecio } from '../../utils/formato'

export function ComprobanteTablaItems({ items }) {
  return (
    <>
      <h6 className="fw-bold text-secondary mb-3">Detalle de la Orden</h6>
      <Table responsive borderless className="align-middle mb-4">
        <thead className="border-bottom">
          <tr className="small text-muted text-uppercase">
            <th>Producto</th>
            <th className="text-center">Cantidad</th>
            <th className="text-end">Precio Unit.</th>
            <th className="text-end">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, idx) => {
            const precio = item.producto?.pVentaClp || item.producto?.precio || 0
            return (
              <tr key={idx} className="border-bottom">
                <td className="fw-medium">
                  {item.producto?.nombreDelProducto || item.producto?.nombre}
                </td>
                <td className="text-center">{item.cantidad}</td>
                <td className="text-end">{formatoPrecio(precio)}</td>
                <td className="text-end fw-bold">
                  {formatoPrecio(precio * item.cantidad)}
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}