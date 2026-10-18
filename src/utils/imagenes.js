const imagenes = import.meta.glob('../assets/img/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
    eager: true,
    import: 'default',
})

export function obtenerImagen(nombreArchivo) {
    if (!nombreArchivo) return null
    return imagenes[`../assets/img/${nombreArchivo}`] ?? null
}
