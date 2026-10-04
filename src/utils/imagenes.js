// Las fotos viven en src/assets; el JSON solo guarda el nombre del archivo
// (campo "imagen") y aquí se resuelve a la URL que genera Vite.
const imagenes = import.meta.glob('../assets/*.{png,jpg}', {
    eager: true,
    import: 'default',
})

export function obtenerImagen(nombreArchivo) {
    if (!nombreArchivo) return null
    return imagenes[`../assets/${nombreArchivo}`] ?? null
}
