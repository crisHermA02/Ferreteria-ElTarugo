import { useState } from 'react'
import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { FormularioAgregarProducto } from '../../components/organism/FormularioAgregarProducto'
import { TablaProductosAdmin } from '../../components/organism/TablaProductosAdmin'
import { useProductos } from '../../context/ProductosContext'
import { validarObligatorio, validarNumero } from '../../utils/validaciones'
import { useTituloPagina } from '../../hooks/useTituloPagina'

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

  function cambiarStock(producto, cambio) {
    const nuevoStock = Math.max(0, (producto.stock || 0) + cambio)
    
    if (productosCtx.actualizarStock) {
      productosCtx.actualizarStock(producto.id, nuevoStock)
    } else if (productosCtx.actualizar) {
      productosCtx.actualizar(producto.id, { ...producto, stock: nuevoStock })
    } else if (productosCtx.editar) {
      productosCtx.editar(producto.id, { ...producto, stock: nuevoStock })
    }
  }

  return (
    <PlantillaAdmin>
      <h2 className="h3 mb-3">Administrar productos</h2>
      
      <FormularioAgregarProducto
        nombre={nombre}
        precio={precio}
        errores={errores}
        onChangeNombre={setNombre}
        onChangePrecio={setPrecio}
        onSubmit={agregar}
      />

      <TablaProductosAdmin
        productos={productosCtx.productos}
        onCambiarStock={cambiarStock}
        onEliminar={productosCtx.eliminar}
      />
    </PlantillaAdmin>
  )
}