import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './index.css';
import FormDialog from "../Dialog";


export default function Header() {
  const navigate = useNavigate();
  const [abrir, setAbrir] = React.useState(false);

  const handleClickOpen = () => {
    setAbrir(true);
  };

  const handleClose = () => {
    setAbrir(false);
  };


  return (
/*     <div>

    
      <div>
        <button onClick={navigate("/personas")}>El botoncito</button>
      </div>

      <div onClick={navigate("/")}>Personas</div>
      <div onClick={navigate("/")}>Relaciones</div>
      <div onClick={navigate("/")}>Telefonos</div>

    </div> */

    <nav className="navbar">
    <div className="container">
      <div>
        <div className="nav-header">
          <a href="" className="navbar-brand">
            <img
              src="https://concursar.miportal.gob.ar/static/media/concursarLogo.156fbaf3.png"
              height={55}
              alt=""
            />
          </a>
        </div>
        <FormDialog abrir={abrir} cerrar={handleClose} />
        <div className="navbar-collapse">
          <div className="mr-auto"></div>
          <div className="navbar-nav">
            <button type="button" className="btn-link" onClick={handleClickOpen}>
              Ingresar
            </button>
            <button type="button" className="btn-link">
              Registrarse
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  );
}
