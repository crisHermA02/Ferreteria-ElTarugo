import { PlantillaAdmin } from '../../components/templates/PlantillaAdmin'
import { FiltroUmbralStock } from '../../components/molecules/FiltroUmbralStock'
import { TablaItemsCriticos } from '../../components/molecules/TablaItemsCriticos'
import { useItemsCriticos } from '../../hooks/useItemsCriticos'
import { useTituloPagina } from '../../hooks/useTituloPagina'

export function ItemsCriticosAdmin() {
  useTituloPagina('Ítems Críticos - Gestión de Stock')

  const {
    itemsCriticos,
    totalCriticos,
    umbral,
    setUmbral,
    busqueda,
    setBusqueda,
    actualizarStock
  } = useItemsCriticos(5)

  return (
    <PlantillaAdmin>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <h2 className="h3 fw-bold text-dark mb-1">
            Ítems Críticos y Reposición de Stock
          </h2>
          <p className="text-muted m-0">
            Controla existencias bajas y reabastece productos directamente en el sistema.
          </p>
        </div>
        <div>
          <span className="badge bg-danger fs-6 px-3 py-2 rounded-pill">
            {totalCriticos} ítems bajo umbral
          </span>
        </div>
      </div>

      <FiltroUmbralStock
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        umbral={umbral}
        setUmbral={setUmbral}
      />

      <TablaItemsCriticos
        items={itemsCriticos}
        actualizarStock={actualizarStock}
      />
    </PlantillaAdmin>
  )
}

export default ItemsCriticosAdmin