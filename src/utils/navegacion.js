export function decodificarRuta(ruta) {
    try {
        return decodeURIComponent(ruta)
    } catch {
        return ruta
    }
}

export function obtenerClaseCategoria(activa, esEspecial = false) {
    if (esEspecial) return `nav-link fw-bold text-danger`
    return `nav-link ${activa ? 'text-dark fw-semibold' : 'text-secondary'}`
}