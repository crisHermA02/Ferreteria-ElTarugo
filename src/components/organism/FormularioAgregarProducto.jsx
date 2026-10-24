import { CampoFormulario } from '../molecules/formulario'
import { Boton } from '../atoms/boton'

export function FormularioAgregarProducto({
  nombre,
  precio,
  errores,
  onChangeNombre,
  onChangePrecio,
  onSubmit
}) {
  return (
    <form onSubmit={onSubmit} noValidate className="mb-4">
      <CampoFormulario
        id="admin-nombre"
        etiqueta="Nombre"
        valor={nombre}
        onChange={onChangeNombre}
        error={errores.nombre}
      />
      <CampoFormulario
        id="admin-precio"
        etiqueta="Precio"
        tipo="number"
        valor={precio}
        onChange={onChangePrecio}
        error={errores.precio}
      />
      <Boton type="submit">Agregar producto</Boton>
    </form>
  )
}