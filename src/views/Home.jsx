import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";



export default function Home() {

  const navigate = useNavigate();
  const isLoged = useSelector(state => state.login.isLoged);
  const userName = useSelector(state => state.login.userName);

  const onClickIrPersonas = () => {
    navigate('/personas');
  }

  return (
    <div>
      { isLoged && ( 
        <div>
          <h1>Bienvenido {userName}</h1>
          <Button onClick={onClickIrPersonas}>Ir a tabla de Personas</Button>
        </div>
      )}
    </div>
  );
}
