import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import api from "../../services/api";

export default function Data() {
  const [data, setData] = useState();
  const getDados = async () => {
    await api.get("/api/dados").then((response) => setData(response.data));
  };

  useEffect(() => {
    getDados();
  });

  return (
    <div className="App">
      {data &&
        data.map((dados) => (
          <Card key={dados.codigo} sx={{ minWidth: 50 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Competência: {dados.competencia}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Remessa: {dados.remessa}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Quantidade de AIH's digitadas: {dados.quantidade}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Valor faturado: R$ {dados.valor}
              </Typography>
              <Typography><br></br></Typography>
              <Typography
                sx={{ fontSize: 14 }}
                gutterBottom
              >
                Ano: {dados.ano}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
