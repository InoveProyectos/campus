import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
// import { requestAPI } from "../../api/apiRequest.js";
import CustomSnackbar from "../SnackBar.jsx";

const FileUploader = ({ textButton, nroCuota }) => {
  const [successSnackbar, setSuccessSnackbar] = useState(false);
  const fileInputRef = useRef(null);

  const handleSnackbarClose = () => {
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
      alert("Debe cargar un selectedFile");
      return;
    }

    if (selectedFile.size > 1000000) {
      alert("El archivo supera los 1MB de tamaño máximo permitido");
      return;
    }

    if (
      !(
        selectedFile.type === "application/pdf" ||
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      )
    ) {
      alert("Formato inválido, solo se permiten archivo PDF, PNG o JPEG.");
      return;
    }

    // try {
    //   const api = requestAPI;
    //   await api.post(selectedFile, nroCuota);
    //   setSuccessSnackbar(true);
    // } catch (error) {
    //   console.error("Error al subir el archivo", error);
    //   alert("Error al subir el archivo");
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
        message="Archivo subido con éxito."
        severity="success"
        duration={2000}
      />
    </div>
  );
};

export default FileUploader;
