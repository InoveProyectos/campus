import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import inove_logo from "../assets/inove_logo.png";
import { resetAPI } from "../api/resetAPI.js";
import CustomSnackbar from "../utils/SnackBar"; // Asegúrate de que esta importación sea correcta
const defaultTheme = createTheme();
import { grey } from "@mui/material/colors";
import styles from "../views/RecoveryPasswd.module.css";

export default function RecoveryPasswd() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [warningSnackbar, setWarningSnackbar] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const [successSnackbar, setSuccessSnackbar] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    dni: '',
  });

  const handleSnackbarClose = () => {
    setWarningSnackbar(false);
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Enviando formulario")
  //   console.log(formData)

  //   resetAPI.post(formData)
  //     .then((response) => {
  //       setSuccessSnackbar(true);
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       setErrorSnackbar(true);
  //       window.location.reload();
  //     });
  //   setIsLoading(false);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    console.log(formData);

    resetAPI.post(formData)
      .then((response) => {
        setSuccessSnackbar(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        setErrorSnackbar(true);
        setIsLoading(false);
        window.location.reload();
      })
  };


  const handleRecovery = (e) => {
    setIsLoading(true)
    if (formData.name == "" || formData.dni == "") {
      setWarningSnackbar(true);
      setIsLoading(false);
      return;
    }
    handleSubmit(e)
  };



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100vw" }}>
        <CssBaseline />
        <CustomSnackbar
          open={warningSnackbar}
          onClose={handleSnackbarClose}
          message="Por favor, completa todos los campos."
          severity="warning"
          duration={1000}
        />
        <CustomSnackbar
          open={errorSnackbar}
          onClose={handleSnackbarClose}
          message="Error al realizar el inicio de sesión."
          severity="error"
          duration={1000}
        />
        <CustomSnackbar
          open={successSnackbar}
          onClose={handleSnackbarClose}
          message="Credenciales recuperadas exitosamente!."
          severity="success"
          duration={1000}
        />
        <Grid style={{ backgroundColor: grey[900], color: "white" }} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={Logo} alt="" />
            <div>
              <h3 style={{ textAlign: "start" }}>
                Ingrese su email de alumno, el sistema le enviará un mail con
                los datos de sus credenciales nuevas (usuario y contraseña)
              </h3>
            </div>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              style={{ width: "100%", textAlign: "start" }}
              onSubmit={handleSubmit}
            >
              <TextField
                className={styles.textfield}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                className={styles.textfield}
                margin="normal"
                required
                fullWidth
                name="dni"
                label="DNI"
                type="dni"
                id="dni"
                autoComplete="dni"
                value={formData.dni}
                onChange={handleInputChange}
              />
            </Box>
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, background: "#00DEBC", fontSize: "20px" }}
              disabled={isLoading}
              onClick={handleRecovery}
            >
              RECUPERAR
            </Button> */}
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, background: "#00DEBC", fontSize: "20px" }}
              disabled={isLoading}
              onClick={handleRecovery}
            >
              RECUPERAR
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              `url(${inove_logo})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
