import { useState } from 'react'
import { Table, Card, Badge, Form, Button } from 'react-bootstrap'
import { formatoPrecio } from '../../utils/formato'

export function TablaItemsCriticos({ items, actualizarStock }) {
  const [ediciones, setEdiciones] = useState({})

  function manejarCambio(id, valor) {
    setEdiciones({ ...ediciones, [id]: valor })
  }

  function guardarReposicion(id) {
    const nuevoStock = ediciones[id]
    if (nuevoStock !== undefined && nuevoStock !== '') {
      actualizarStock(id, nuevoStock)
      const copia = { ...ediciones }
      delete copia[id]
      setEdiciones(copia)
    }
  }

  if (items.length === 0) {
    return (
      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-5 text-center text-muted">
          <div className="fs-1 mb-2">🎉</div>
          <h5 className="fw-bold text-dark">¡Inventario sin novedades!</h5>
          <p className="mb-0">No hay productos con stock igual o inferior al umbral seleccionado.</p>
        </Card.Body>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-sm rounded-4 overflow-hidden">
      <Card.Body className="p-0">
        <div className="table-responsive">
          <Table hover className="align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio Venta</th>
                <th>Stock Actual</th>
                <th>Estado</th>
                <th className="text-end">Acción / Reposición</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
                const stockActual = item.stock ?? 0
                const esAgotado = stockActual === 0
                const valorEdicion = ediciones[item.id] ?? stockActual

                return (
                  <tr key={item.id}>
                    <td className="fw-bold">#{item.id}</td>
                    <td className="fw-semibold">
                      {item.nombreDelProducto || item.nombre}
                    </td>
                    <td>
                      <span className="badge bg-light text-dark border">
                        {item.categoria || 'Sin categoría'}
                      </span>
                    </td>
                    <td>{formatoPrecio(item.pVentaClp || item.precio || 0)}</td>
                    <td className="fw-bold fs-6">
                      <span className={esAgotado ? 'text-danger' : 'text-warning'}>
                        {stockActual} un.
                      </span>
                    </td>
                    <td>
                      {esAgotado ? (
                        <Badge bg="danger">Agotado</Badge>
                      ) : (
                        <Badge bg="warning" className="text-dark">Stock Bajo</Badge>
                      )}
                    </td>
                    <td className="text-end">
                      <div className="d-inline-flex align-items-center gap-2">
                        <Form.Control
                          type="number"
                          min="0"
                          className="form-control-sm text-center w-auto"
                          value={valorEdicion}
                          onChange={(e) => manejarCambio(item.id, e.target.value)}
                        />
                        <Button
                          variant="warning"
                          size="sm"
                          className="fw-bold text-nowrap"
                          onClick={() => guardarReposicion(item.id)}
                        >
                          Actualizar
                        </Button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  )
}