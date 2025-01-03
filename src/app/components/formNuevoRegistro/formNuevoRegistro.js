"use client";
import { useState } from "react";
import "./formulario.css";
export default function FormNuevoRegistro({
  setIngresos,
  ingresos,
  setIngreso,
  egresos,
  setEgresos,
  setEgreso,
}) {
  const [tipo, setTipo] = useState("ingreso");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState(0);
  const [idIngreso, setIdIngreso] = useState(ingresos.length + 1);
  const [idEgreso, setIdEgreso] = useState(egresos.length + 1);
  const registroIngreso = { idIngreso, descripcion, valor };
  const registroEgreso = { idEgreso, descripcion, valor };

  const handleChange = (e) => {
    setTipo(e.target.value);
  };

  const handleChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const handleChangeValor = (e) => {
    setValor(e.target.value);
  };
  const handleLogin = async (event) => {
    if (event) event.preventDefault();
  };

  const handleAddIngresos = () => {
    setIngresos((prevIngresos) => [...prevIngresos, registroIngreso]);

    alert("Se agregara un ingreso");
  };

  const handleAddEgresos = () => {
    setEgresos((prevEgresos) => [...prevEgresos, registroEgreso]);

    alert("Se agregara un egreso");
  };

  const handleRegister = () => {
    if (descripcion.trim() == "" || valor === 0) {
      alert("Campos vacios");
    } else {
      const valorNumerico = parseFloat(valor);
      if (tipo === "ingreso") {
        handleAddIngresos();
        setIdIngreso((prevIdIngreso) => (prevIdIngreso += 1));
        setIngreso((prevIngreso) => prevIngreso + valorNumerico);
      }
      if (tipo === "egreso") {
        handleAddEgresos();
        setIdEgreso((prevIdEgreso) => (prevIdEgreso += 1));
        setEgreso((prevEgreso) => prevEgreso + valorNumerico);
      }
    }
  };

  return (
    <div className="contenedor-formulario">
      <form id="forma" onSubmit={handleLogin}>
        <div className="agregar">
          <div className="agregar_contenedor">
            <select
              name=""
              className="agregar_tipo"
              id="tipo"
              value={tipo}
              onChange={handleChange}
            >
              <option value="ingreso">+</option>
              <option value="egreso">-</option>
            </select>
            <input
              type="text"
              className="agregar_descripcion"
              placeholder="Agregar descripción"
              name="descripcion"
              id="descripcion"
              onChange={handleChangeDescripcion}
            />
            <input
              value={valor}
              type="number"
              className="agregar_valor"
              placeholder="Valor"
              name="valor"
              id="valor"
              step="any"
              onChange={handleChangeValor}
            />
            <button onClick={handleRegister} className="agregar_btn" type="">
              +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
