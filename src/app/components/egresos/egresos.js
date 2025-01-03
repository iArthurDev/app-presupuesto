import "./egresos.css";

export default function Egresos({ egresos }) {
  return (
    <div className="contenedor-ingresos-egresos">
      {/* Título de la sección de egresos */}
      <div className="contenedor-egresos--titulo">Egresos</div>
      {/* Contenedor de la lista de egresos */}
      <div className="registros">
        {/* Cada registro se representa con un div  */}
        {egresos.map((egreso) => (
          <div key={egreso.idEgreso} className="egreso">
            {/*Descripción del egreso*/}
            <div className="registro-descripcion">{egreso.descripcion}</div>
            {/* Valor del egreso */}
            <div className="resgitro-valor">${egreso.valor}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
