import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/context";
import Logo from "../assets/Logo.svg";
import inove_V2 from "../assets/inove_logo_v2.png";
import styles from "../views/SignInSide.module.css";

import { authAPI, getSessionInfo } from "../api/authAPI";
import CustomSnackbar from "../utils/SnackBar";
import { grey } from "@mui/material/colors";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://inovecode.com/">
        Inovecode
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  // Tomar datos del contexto
  const { dispatch } = useContext(AppContext);

  const [warningSnackbar, setWarningSnackbar] = React.useState(false);
  const [errorSnackbar, setErrorSnackbar] = React.useState(false);
  const [successSnackbar, setSuccessSnackbar] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSnackbarClose = () => {
    setWarningSnackbar(false);
    setErrorSnackbar(false);
    setSuccessSnackbar(false);
  };

  const completeLogin = () => {
    const sessionData = getSessionInfo();
    if (sessionData) {
      // Cambiar el estado de las variables de autenticación
      dispatch({ type: "setUsername", payload: sessionData.username });
      dispatch({ type: "setName", payload: sessionData.name });
      dispatch({ type: "setAuth", payload: true });

      // Definir a dónde deberemos realizar el redirect
      // 1 - A la página por defecto (home)
      // 2 - A la página definida en los query URL parameters

      // Leer los query string en búsqueda del parámetro next
      const next = new URLSearchParams(location.search).get("next");

      // Si el parámetro next está definido, se hace le redirect allí,
      // de lo contrario se hace el redirect a "home"
      const redirectTo = next ? next : "/";

      // navigate(redirectTo);
      setSuccessSnackbar(true);

      setTimeout(() => {
        setSuccessSnackbar(false);
        navigate(redirectTo);
      }, 1500);
    }
  };

  useEffect(() => {
    // Intentar realizar el login utilizando la session
    authAPI
      .refresh()
      .then((response) => {
        // Login efectuado exitosamente
        setSuccessSnackbar(true);
        completeLogin();
      })
      .catch((error) => {
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target.user.value;
    const password = event.target.password.value;

    if (username == "" || password == "") {
      setWarningSnackbar(true);
      return;
    }


    authAPI
      .login(username, password)
      .then((response) => {
        completeLogin();
      })
      .catch((error) => {
        setErrorSnackbar(!successSnackbar);
      });
  };

  const handleRecoveryPasswd = (event) => {
    // Suspendemos el evento para evitar submits erroneos
    event.preventDefault();
    navigate("/recoveryCredentials");
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
          duration={3000}
        />
        <CustomSnackbar
          open={errorSnackbar}
          onClose={handleSnackbarClose}
          message="Error al inicio de sesión, revisa tus credenciales."
          severity="error"
          duration={3000}
        />
        <CustomSnackbar
          open={successSnackbar}
          onClose={handleSnackbarClose}
          message="Login exitoso!."
          severity="success"
          duration={2000}
        />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              // `url(${inove})`,
              `url(${inove_V2})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid style={{ backgroundColor: grey[900], color: "white", justifyContent: "justify" }} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
              <h1>¡Bienvenido!</h1>
              <p>Login con su usuario o email de inove</p>
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
              style={{ width: "90%", marginLeft: "30px" }}
            >
              <TextField
                className={styles.textfield}
                margin="normal"
                required
                fullWidth
                id="user"
                label="Usuario / Email"
                name="user"
                autoComplete="user"
                autoFocus
              />
              <TextField
                className={styles.textfield}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, background: "#00DEBC", fontSize: "20px" }}
              >
                Log in
              </Button>
              <p>Al iniciar sesión estás aceptando nuestros {" "}
                {/* window.open("https://discord.gg/7YVXDHmtWh", "_blank")} */}
                <Link onClick={() => window.open("https://inovecode.com/terminos-y-condiciones", "_blank")} href="#"><u>términos y condiciones</u></Link></p>
              <Grid container>
                <Grid item xs>
                  <Link onClick={handleRecoveryPasswd} href="#" style={{ fontSize: "16px" }}>
                    ¿Olvidetaste tu credenciales?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 2.5, color: "white" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
