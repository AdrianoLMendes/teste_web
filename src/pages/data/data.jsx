import { useState, useEffect } from "react";

import api from "../../services/api";

export default function Data() {
  const [data, setData] = useState();

  useEffect(() => {
    api
      .get("/api/dados")
      .then((response) => setData(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      })
  }, []);

  return (
    <div className="App">
      <p>Competência: {data?.competencia}</p>
    </div>
  );
}
