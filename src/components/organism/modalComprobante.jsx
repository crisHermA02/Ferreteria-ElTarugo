import { Modal, Form } from 'react-bootstrap'
import { ComprobanteEncabezado } from '../molecules/ComprobanteEncabezado'
import { ComprobanteCliente } from '../molecules/ComprobanteCliente'
import { ComprobanteTablaItems } from '../molecules/ComprobanteTablaItems'
import { ComprobanteResumenTotal } from '../molecules/ComprobanteResumenTotal'

export function ModalComprobante({ pedido, onCerrar, onCambiarEstado }) {
  if (!pedido) return null

  return (
    <Modal show={Boolean(pedido)} onHide={onCerrar} size="lg" centered>
      <Modal.Header closeButton className="border-0 bg-dark text-white p-4">
        <Modal.Title className="fw-bold">
          Comprobante de Solicitud #{pedido.id}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-4">
        <ComprobanteEncabezado estado={pedido.estado} fecha={pedido.fecha} />
        <ComprobanteCliente cliente={pedido.cliente} />
        <ComprobanteTablaItems items={pedido.items} />
        <ComprobanteResumenTotal total={pedido.total} />

        <div className="border-top pt-3">
          <Form.Group className="d-flex align-items-center gap-3">
            <Form.Label className="fw-bold m-0 text-nowrap">
              Cambiar Estado:
            </Form.Label>
            <Form.Select
              value={pedido.estado}
              onChange={(e) => onCambiarEstado(pedido.id, e.target.value)}
              className="w-auto"
            >
              <option value="En preparación">En preparación</option>
              <option value="Enviado">Enviado</option>
              <option value="Entregado">Entregado</option>
              <option value="Cancelado">Cancelado</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Modal.Body>

      <Modal.Footer className="border-0 bg-light px-4 py-3">
        <button type="button" className="btn btn-outline-secondary" onClick={onCerrar}>
          Cerrar
        </button>
        <button
          type="button"
          className="btn btn-warning fw-bold"
          onClick={() => window.print()}
        >
          Imprimir Comprobante
        </button>
      </Modal.Footer>
    </Modal>
  )
}