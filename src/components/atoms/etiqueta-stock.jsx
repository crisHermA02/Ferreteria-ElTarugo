// Muestra la disponibilidad de un producto según su stock y su stock mínimo.
function EtiquetaStock({ stock, stockMinimo }) {
    if (stock <= 0) {
        return <span className="badge text-bg-danger">Sin stock</span>;
    }
    if (stock <= stockMinimo) {
        return <span className="badge text-bg-warning">Quedan {stock}</span>;
    }
    return <span className="badge text-bg-success">En stock</span>;
}

export default EtiquetaStock;
