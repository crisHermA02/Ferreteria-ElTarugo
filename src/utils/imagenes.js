const imagenes = import.meta.glob('../assets/img/*.{png,jpg}', {
    eager: true,
    import: 'default',
})

export function obtenerImagen(nombreArchivo) {
    if (!nombreArchivo) return null
    return imagenes[`../assets/img/${nombreArchivo}`] ?? null
}
