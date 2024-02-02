import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { requestAPI } from "../../api/apiRequest.js";
import CustomSnackbar from "../SnackBar.jsx";

const FileUploader = ({ textButton, nroCuota }) => {
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const [errorSnackbarText, setErrorSnackbarText] = React.useState("Debe cargar un selectedFile.")
  const [successSnackbarText, setSuccessSnackbarText] = React.useState("Archivo subido con éxito.")
  const fileInputRef = useRef(null);

  const handleSnackbarClose = () => {
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Archivo seleccionado:", selectedFile);
    handleSubmit(selectedFile, event);
  };

  const handleSubmit = async (selectedFile, event) => {
    event.preventDefault();

    if (!selectedFile) {
      // alert("Debe cargar un selectedFile");
      setErrorSnackbar(true);
      return;
    }

    if (selectedFile.size > 1000000) {
      setErrorSnackbarText("El archivo supera los 1MB de tamaño máximo permitido")
      setErrorSnackbar(true);
      return;
    }

    if (
      !(
        selectedFile.type === "application/pdf" ||
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      )
    ) {
      // alert("Formato inválido, solo se permiten archivo PDF, PNG o JPEG.");
      setErrorSnackbarText("Formato inválido, solo se permiten archivo PDF, PNG o JPEG.")
      setErrorSnackbar(true);
      return;
    }

    // try {
    //   const api = requestAPI;
    //   await api.post(selectedFile, nroCuota);
    //   setSuccessSnackbar(true);
    // } catch (error) {
    //   setErrorSnackbarText("Error al subir el archivo")
    //   setErrorSnackbar(true);
    // }
  };

  return (
    <div>
      <input
        type="file"
        id="archivoInput"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: "none" }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ width: "130px" }}
        onClick={handleButtonClick}
      >
        {textButton}
      </Button>
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
    </div>
  );
};

export default FileUploader;
