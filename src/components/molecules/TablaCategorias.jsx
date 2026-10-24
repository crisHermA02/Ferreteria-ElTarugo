import { Table, Card, Button, Badge } from 'react-bootstrap'

export function TablaCategorias({ categorias, conteoProductos, onEditar, onEliminar }) {
  if (categorias.length === 0) {
    return (
      <Card className="border-0 shadow-sm rounded-4">
        <Card.Body className="p-5 text-center text-muted">
          No hay categorías registradas en el sistema.
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
                <th>Categoría</th>
                <th className="text-center">Productos Asociados</th>
                <th className="text-end">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((cat) => (
                <tr key={cat}>
                  <td className="fw-bold">{cat}</td>
                  <td className="text-center">
                    <Badge bg="secondary" className="px-3 py-2 rounded-pill">
                      {conteoProductos[cat] || 0} productos
                    </Badge>
                  </td>
                  <td className="text-end">
                    <div className="d-inline-flex gap-2">
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => onEditar(cat)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => onEliminar(cat)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  )
}