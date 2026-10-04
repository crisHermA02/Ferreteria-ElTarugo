function FiltrosCatalogo(props) {
    const { busqueda, categoria, categorias, soloStock } = props;

    return (
        <div className="row g-3 align-items-end mb-4 text-start">
            <div className="col-12 col-md-5">
                <label htmlFor="busqueda" className="form-label small fw-semibold">Buscar producto</label>
                <input
                    id="busqueda"
                    type="search"
                    className="form-control"
                    placeholder="Nombre, marca o código"
                    value={busqueda}
                    onChange={(e) => props.onBusqueda(e.target.value)}
                />
            </div>

            <div className="col-12 col-sm-7 col-md-4">
                <label htmlFor="categoria" className="form-label small fw-semibold">Categoría</label>
                <select
                    id="categoria"
                    className="form-select"
                    value={categoria}
                    onChange={(e) => props.onCategoria(e.target.value)}
                >
                    <option value="">Todas las categorías</option>
                    {categorias.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>

            <div className="col-12 col-sm-5 col-md-3">
                <div className="form-check form-switch pb-2">
                    <input
                        id="soloStock"
                        type="checkbox"
                        role="switch"
                        className="form-check-input"
                        checked={soloStock}
                        onChange={(e) => props.onSoloStock(e.target.checked)}
                    />
                    <label htmlFor="soloStock" className="form-check-label">Solo con stock</label>
                </div>
            </div>
        </div>
    );
}

export default FiltrosCatalogo;
