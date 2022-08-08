import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={navigate("/personas")}>El botoncito</button>
      </div>

      <div onClick={navigate("/")}>Personas</div>
      <div onClick={navigate("/")}>Relaciones</div>
      <div onClick={navigate("/")}>Telefonos</div>

      {/* Aca deberia haber un nav con  */}
    </>
  );
}
