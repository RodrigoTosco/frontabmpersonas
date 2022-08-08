import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";


export default function Home() {

  const isLoged = useSelector(state => state.login.isLoged);
  const userName = useSelector(state => state.login.userName);

  return (
    <div>
      { isLoged && (
        <h1>Bienvenido {userName}</h1>
      )}
    </div>
  );
}
