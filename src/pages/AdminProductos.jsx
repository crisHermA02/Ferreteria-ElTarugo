import { useState } from 'react'
import { Table } from 'react-bootstrap'
import { PlantillaPublica } from '../components/templates/PlantillaPublica'
import { CampoFormulario } from '../components/molecules/formulario'
import { Boton } from '../components/atoms/boton'
import { useProductos } from '../context/ProductosContext'
import { formatoPrecio } from '../utils/formato'
import { validarObligatorio, validarNumero } from '../utils/validaciones'
import { useTituloPagina } from '../hooks/useTituloPagina'

export default function AdminProductos() {
  const productosCtx = useProductos()
  const [nombre, setNombre] = useState('')
  const [precio, setPrecio] = useState('')
  const [errores, setErrores] = useState({})
  useTituloPagina('Administrar productos')

  function agregar(evento) {
    evento.preventDefault()
    const nuevos = {
      nombre: validarObligatorio(nombre, 'El nombre es obligatorio.'),
      precio: validarNumero(precio, 'El precio', 1),
    }
    setErrores(nuevos)
    if (nuevos.nombre === '' && nuevos.precio === '') {
      productosCtx.crear({ nombre, precio: Number(precio), categoria: 'Accesorios', stock: 10 })
      setNombre('')
      setPrecio('')
    }
  }

  return (
    <PlantillaPublica>
      <h2 className="h3 mb-3">Administrar productos</h2>
      <form onSubmit={agregar} noValidate className="mb-4">
        <CampoFormulario id="admin-nombre" etiqueta="Nombre" valor={nombre} onChange={setNombre} error={errores.nombre} />
        <CampoFormulario id="admin-precio" etiqueta="Precio" tipo="number" valor={precio} onChange={setPrecio} error={errores.precio} />
        <Boton type="submit">Agregar producto</Boton>
      </form>
      <Table striped>
        <thead>
          <tr><th>Nombre</th><th>Precio</th><th></th></tr>
        </thead>
        <tbody>
          {productosCtx.productos.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{formatoPrecio(p.precio)}</td>
              <td><Button variant="danger" onClick={() => productosCtx.eliminar(p.id)}>Eliminar</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PlantillaPublica>
  )
}