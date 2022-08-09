import React, { useState, useEffect } from "react";
import { obtenerPersonas } from "../../api/rulesPersona";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import Persona from "./Persona";

export default function TablePersonas() {
  const [personas, setPersonas] = useState([]);
  const pageSize = 100;
  const [pagina, setPagina] = useState(1);
  const [personasPorPagina, setPersonasPorPagina] = useState(10);

  useEffect(() => {
    getPersonas(pagina, pageSize);
  }, []);

  const getPersonas = async function (pagina, pageSize) {
    try {
      let busqueda = { filtro: "", pageNumber: pagina, pageSize: pageSize };
      let resultados = await obtenerPersonas(busqueda);
      setPersonas(resultados.data.items);
    } catch (error) {
      throw Error(error.message || "Error al obtener las personas");
    }
  };

  const columnas = [
    { tittle: "Documento", width: "auto" },
    { tittle: "Nombre", width: "auto" },
    { tittle: "Apellido", width: "auto" },
    { tittle: "Edad", width: "auto" },
  ];

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columnas.map((col) => {
                return (
                  <TableCell align="center" width={col.width}>
                    {col.tittle}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {personas.slice((pagina - 1) * personasPorPagina, (pagina - 1) * personasPorPagina + personasPorPagina)
            .map((persona) => {
              console.log(persona.doc);
              return <Persona data={persona} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        labelRowsPerPage="Filas por pagina: "
        component="div"
        count={personas.length}
        rowsPerPage={personasPorPagina}
        page={pagina}
        // onPageChange={hae}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
