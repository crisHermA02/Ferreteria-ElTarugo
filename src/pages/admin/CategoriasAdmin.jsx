import { useState, useEffect } from 'react'
import { Modal, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { TablaCategorias } from '../../components/molecules/TablaCategorias'
import { useTituloPagina } from '../../hooks/useTituloPagina'

export function CategoriasAdmin() {
  useTituloPagina('Gestión de Categorías')

  const [categorias, setCategorias] = useState([])
  const [conteoProductos, setConteoProductos] = useState({})
  const [modalAbierto, setModalAbierto] = useState(false)
  const [categoriaEditar, setCategoriaEditar] = useState(null)
  const [nombreCategoria, setNombreCategoria] = useState('')

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('productos') || '[]')
    
    const listaCategorias = Array.from(
      new Set(productos.map((p) => p.categoria).filter(Boolean))
    )
    
    const conteo = productos.reduce((acc, p) => {
      if (p.categoria) {
        acc[p.categoria] = (acc[p.categoria] || 0) + 1
      }
      return acc
    }, {})

    setCategorias(listaCategorias)
    setConteoProductos(conteo)
  }, [])

  function abrirModalCrear() {
    setCategoriaEditar(null)
    setNombreCategoria('')
    setModalAbierto(true)
  }

  function abrirModalEditar(cat) {
    setCategoriaEditar(cat)
    setNombreCategoria(cat)
    setModalAbierto(true)
  }

  function guardarCategoria(e) {
    e.preventDefault()
    if (!nombreCategoria.trim()) return

    const productos = JSON.parse(localStorage.getItem('productos') || '[]')

    let productosActualizados = []
    if (categoriaEditar) {
      productosActualizados = productos.map((p) =>
        p.categoria === categoriaEditar ? { ...p, categoria: nombreCategoria.trim() } : p
      )
    } else {
      productosActualizados = [...productos]
      if (!categorias.includes(nombreCategoria.trim())) {
        setCategorias([...categorias, nombreCategoria.trim()])
      }
    }

    localStorage.setItem('productos', JSON.stringify(productosActualizados))
    
    const nuevaLista = Array.from(
      new Set(productosActualizados.map((p) => p.categoria).filter(Boolean))
    )
    setCategorias(nuevaLista)
    setModalAbierto(false)
  }

  function eliminarCategoria(cat) {
    if (window.confirm(`¿Eliminar la categoría "${cat}" de los productos asociados?`)) {
      const productos = JSON.parse(localStorage.getItem('productos') || '[]')
      const actualizados = productos.map((p) =>
        p.categoria === cat ? { ...p, categoria: 'Sin categoría' } : p
      )
      localStorage.setItem('productos', JSON.stringify(actualizados))
      setCategorias(categorias.filter((c) => c !== cat))
    }
  }

  return (
    <PlantillaAdmin>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h3 fw-bold text-dark mb-1">Gestión de Categorías</h2>
          <p className="text-muted m-0">Administra las categorías de productos de la tienda.</p>
        </div>
        <Button variant="warning" className="fw-bold" onClick={abrirModalCrear}>
          + Nueva Categoría
        </Button>
      </div>

      <TablaCategorias
        categorias={categorias}
        conteoProductos={conteoProductos}
        onEditar={abrirModalEditar}
        onEliminar={eliminarCategoria}
      />

      <Modal show={modalAbierto} onHide={() => setModalAbierto(false)} centered>
        <Form onSubmit={guardarCategoria}>
          <Modal.Header closeButton className="border-0 bg-dark text-white">
            <Modal.Title className="fw-bold">
              {categoriaEditar ? 'Editar Categoría' : 'Nueva Categoría'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            <Form.Group>
              <Form.Label className="fw-semibold">Nombre de la Categoría</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Ej. Herramientas Eléctricas"
                value={nombreCategoria}
                onChange={(e) => setNombreCategoria(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="border-0 bg-light">
            <Button variant="outline-secondary" onClick={() => setModalAbierto(false)}>
              Cancelar
            </Button>
            <Button type="submit" variant="warning" className="fw-bold">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </PlantillaAdmin>
  )
}

export default CategoriasAdmin