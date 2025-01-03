import "./cabecero.css";
export default function Cabecero({ ingreso, egreso }) {
  return (
    <div className="contenedor">
      <div className="cabecero-values">
        <div className="cabecero-titulo">Presupuesto disponible</div>
        {/*Monto total de presupuesto */}
        <div className="presupuesto-valor">${ingreso - egreso}</div>

        <div className="presupesto-ingresos">
          <div className="presupuesto-ingresos-texto">Ingresos</div>
          <div className="derecha">
            {/* Valor total de ingresos */}
            <div className="presupesto-ingreso-valor">${ingreso}</div>
            <div className="presupesto-egreso-porcentaje"></div>
          </div>
        </div>
        <div className="presupesto-egresos">
          <div className="presupuesto-ingresos-texto">Egresos</div>
          <div className="derecha">
            {/* Valor total de egresos */}
            <div className="presupesto-egreso-valor">${egreso}</div>
            {/* Porcentaje de egresos correspondiente al presupuesto total */}
            <div className="presupesto-egreso-porcentaje">
              {/* Si el ingreso es mayor a 0, se calcula el porcentaje; de lo contrario, se muestra 0% */}
              {ingreso > egreso
                ? `${((egreso / (ingreso - egreso)) * 100).toFixed(2)}%`
                : "100%"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
