"use client";
import "./home.css";
import Cabecero from "@/app/components/cabecero/cabecero";
import Egresos from "@/app/components/egresos/egresos";
import FormNuevoRegistro from "@/app/components/formNuevoRegistro/formNuevoRegistro";
import Grafica from "@/app/components/grafica/grafica";
import Ingresos from "@/app/components/ingresos/ingresos";
import { useEffect, useState } from "react";

export default function Home() {
  //states de los arreglos de ingresos y egresos, asi como del monto total de ingresos y egresos
  const [ingresos, setIngresos] = useState([]);
  const [egresos, setEgresos] = useState([]);
  const [ingreso, setIngreso] = useState(0);
  const [egreso, setEgreso] = useState(0);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("ingresos"));
    if (datosGuardados) setIngresos(datosGuardados);
  }, []);

  useEffect(() => {
    const datosGuardados = JSON.parse(localStorage.getItem("egresos"));
    if (datosGuardados) setIngresos(datosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
  }, [ingresos]);

  useEffect(() => {
    localStorage.setItem("egresos", JSON.stringify(egresos));
  }, [egresos]);

  return (
    <div className="page-container">
      {/*Componente de cabecero*/}
      <Cabecero ingreso={ingreso} egreso={egreso} />
      {/*Componente de formulario de nuevo registro*/}
      <FormNuevoRegistro
        setIngresos={setIngresos}
        ingresos={ingresos}
        setIngreso={setIngreso}
        egresos={egresos}
        setEgresos={setEgresos}
        setEgreso={setEgreso}
      />
      {/*Componentes que cargan la lista de ingresos y egresos */}
      <div className="contenedor-registros">
        <Ingresos ingresos={ingresos} />
        <Egresos egresos={egresos} />
      </div>
      <div></div>
    </div>
  );
}
