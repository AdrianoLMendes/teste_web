import * as React from "react";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//BUSCA OS DADOS DA API
import api from "../../services/api";

export default function BasicTable() {
  const [data, setData] = useState();
  const getDados = async () => {
    await api.get("/api/dados").then((response) => setData(response.data));
  };

  useEffect(() => {
    getDados();
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Remessa</TableCell>
            <TableCell align="right">Competência</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Ano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data.map((dados) => (
              <TableRow
                key={dados.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {dados.remessa}
                </TableCell>
                <TableCell align="right">{dados.competencia}</TableCell>
                <TableCell align="right">{dados.quantidade}</TableCell>
                <TableCell align="right">{dados.valor}</TableCell>
                <TableCell align="right">{dados.ano}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
