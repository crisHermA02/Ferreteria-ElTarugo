export function filtrarProductos(productos = [], filtros = {}) {
  const buscado = (filtros.texto || '').trim().toLowerCase()
  const categoriaBuscada = decodeURIComponent(filtros.categoria || '').trim().toLowerCase()

  return productos.filter((p) => {
    const nombreProducto = (p?.nombre || '').toLowerCase()
    const categoriaProducto = (p?.categoria || '').toLowerCase()

    const coincideTexto = buscado === '' || nombreProducto.includes(buscado)
    const coincideCategoria =
      categoriaBuscada === '' || categoriaProducto === categoriaBuscada

    return coincideTexto && coincideCategoria
  })
}