import Boton from '../atoms/boton';
import EtiquetaStock from '../atoms/etiqueta-stock';
import { formatearClp } from '../../utils/formato';

// Props antiguas (imagen, titulo, precio, onAgregar) se mantienen;
// el resto son opcionales y enriquecen la tarjeta para el catálogo.
function TarjetaProducto(props) {
  const { imagen, titulo, marca, subcategoria, unidad, precio, stock, stockMinimo } = props;
  const sinStock = stock !== undefined && stock <= 0;

  return (
    <section className="tarjeta-producto card h-100 border-0 shadow-sm text-start">
      {imagen ? (
        <img
          src={imagen}
          alt={titulo}
          loading="lazy"
          className="card-img-top bg-white p-3"
          style={{ height: 200, objectFit: 'contain' }}
        />
      ) : (
        <div
          className="d-flex align-items-center justify-content-center bg-light text-muted small"
          style={{ height: 200 }}
        >
          Sin foto
        </div>
      )}

      <div className="card-body d-flex flex-column">
        {subcategoria && <p className="text-muted small mb-1">{subcategoria}</p>}
        <h3 className="h6 fw-bold mb-1">{titulo}</h3>
        {marca && <p className="text-muted small mb-2">{marca}</p>}

        <div className="mt-auto">
          <p className="fs-5 fw-bold mb-2">
            {formatearClp(precio)}
            {unidad && <span className="text-muted fs-6 fw-normal"> / {unidad.toLowerCase()}</span>}
          </p>
          {stock !== undefined && (
            <p className="mb-3"><EtiquetaStock stock={stock} stockMinimo={stockMinimo} /></p>
          )}
          <Boton
            texto={sinStock ? "No disponible" : "Agregar al carrito"}
            variante="warning"
            clase="w-100"
            deshabilitado={sinStock}
            onClick={props.onAgregar}
          />
        </div>
      </div>
    </section>
  );
}

export default TarjetaProducto;
