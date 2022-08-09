import React from 'react'
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function Persona({data}) {

  return (
    <TableRow key={data.doc}>
      <TableCell align='center'>{data.doc}</TableCell>
      <TableCell align='center'>{data.nombre}</TableCell>
      <TableCell align='center'>{data.apellido}</TableCell>
      <TableCell align='center'>{data.edad}</TableCell>
    </TableRow>
  );
}
