const imagenes = import.meta.glob('../assets/img/*.{png,jpg,jpeg,webp,avif,gif,svg}', {
    eager: true,
    import: 'default',
})

export function obtenerImagen(nombreArchivo) {
    const defaultImg = imagenes['../assets/img/sin-imagen.png'] ?? null
    if (!nombreArchivo) return defaultImg
    return imagenes[`../assets/img/${nombreArchivo}`] ?? defaultImg
}