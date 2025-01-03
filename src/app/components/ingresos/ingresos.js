"use client";
import "./ingresos.css";
export default function Ingresos({ ingresos }) {
  return (
    <div className="contenedor-ingresos-egresos">
      {/* Título de la sección de ingresos */}
      <div className="contenedor-ingresos--titulo">Ingresos</div>
      {/* Contenedor de la lista de ingresos */}
      <div className="registros">
        {/* Cada registro se representa con un div */}
        {ingresos.map((ingreso) => (
          <div key={ingreso.idIngreso} className="ingreso">
            {/*Descripción del ingreso*/}
            <div className="registro-descripcion">{ingreso.descripcion}</div>
            {/*Valor del ingreso */}
            <div className="resgitro-valor">${ingreso.valor}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
