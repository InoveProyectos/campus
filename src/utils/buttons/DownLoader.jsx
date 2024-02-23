import React from "react";
import { requestAPI } from "../../api/apiRequest";
import Button from "@mui/material/Button";
import CustomSnackbar from "../SnackBar";

function DownLoader({ textButton, nroCuota }) {
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const [successSnackbar, setSuccessSnackbar] = React.useState(false);
  const [errorSnackbarText, setErrorSnackbarText] = React.useState("No hay archivo para descargar.")
  const [successSnackbarText, setSuccessSnackbarText] = React.useState("Archivo descargado con éxito.")

  const handleSnackbarClose = () => {
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };

  const api = requestAPI;
  const handleDownload = async () => {
    try {
      const result = await api.get(nroCuota);
      setSuccessSnackbar(true);
    } catch (error) {
      setErrorSnackbar(true);
    }
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          type="button"
          onClick={handleDownload}
          sx={{ width: "130px", border: '0px', borderRadius: '10px', color: 'white', background: 'linear-gradient(to right top, #00b1b9, #00adc9, #00a8d8, #00a0e5, #0097ec)' }}
        >
          {textButton}
        </Button>
      </div>
      <CustomSnackbar
        open={successSnackbar}
        onClose={handleSnackbarClose}
        message={successSnackbarText}
        severity="success"
        duration={4000}
      />
      <CustomSnackbar
        open={errorSnackbar}
        onClose={handleSnackbarClose}
        message={errorSnackbarText}
        severity="error"
        duration={4000}
      />
    </>
  );
}

export default DownLoader;
