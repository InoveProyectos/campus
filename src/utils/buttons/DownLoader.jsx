import React from "react";
// import { requestAPI } from "../../api/apiRequest";
import Button from "@mui/material/Button";

function DownLoader({ textButton, nroCuota }) {
  // const api = requestAPI;
  const handleDownload = async () => {
    // api.get(nroCuota);
    console.log("Descargar comprobantes")
  };

  return (
    <div>
      <Button
       variant="contained"
        type="button"
        onClick={handleDownload}
        style={{ width: "130px"}}
      >
        {textButton}
      </Button>
    </div>
  );
}

export default DownLoader;
