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
      <Table sx={{ minWidth: 850 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Paciente</TableCell>
            <TableCell align="right">Prontuário</TableCell>
            <TableCell align="right">Clínica</TableCell>
            <TableCell align="right">CID</TableCell>
            <TableCell align="right">Entrada</TableCell>
            <TableCell align="right">Procedimento</TableCell>
            <TableCell align="right">Médico Solicitante</TableCell>
            <TableCell align="right">Competência</TableCell>
            <TableCell align="right">Relação</TableCell>
            <TableCell align="right">Usuário</TableCell>
            <TableCell align="right">Data</TableCell>
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
                  {dados.nome_paciente}
                </TableCell>
                <TableCell align="right">{dados.prontuario}</TableCell>
                <TableCell align="right">{dados.clinica}</TableCell>
                <TableCell align="right">{dados.cid}</TableCell>
                <TableCell align="right">{dados.data_entrada}</TableCell>
                <TableCell align="right">{dados.procedimento}</TableCell>
                <TableCell align="right">{dados.medico_solicitante}</TableCell>
                <TableCell align="right">{dados.competencia}</TableCell>
                <TableCell align="right">{dados.relacao}</TableCell>
                <TableCell align="right">{dados.usuario}</TableCell>
                <TableCell align="right">{dados.data}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
