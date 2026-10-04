const clp = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
})

export function formatearClp(valor) {
    return clp.format(valor)
}

// Quita tildes y pasa a minúsculas para que "construccion" encuentre "Construcción"
export function normalizar(texto) {
    return String(texto ?? '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
}
