import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import { AppContext } from "../context/context";
import Logo from "../assets/Logo.svg";
import inove_V2 from "../assets/inove_logo_v2.png";

import { authAPI, getSessionInfo } from "../api/authAPI";

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

  const navigate = useNavigate();
  const location = useLocation();

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

      navigate(redirectTo);
    }
  };

  useEffect(() => {
    // Intentar realizar el login utilizando la session
    authAPI
      .refresh()
      .then((response) => {
        // Login efectuado exitosamente
        completeLogin();
      })
      .catch((error) => {
        // No se pudo logear desde la session
      });
  }, []);

  // Establecemos la función que guarda los cambios en los datos globales:
  const handleSubmit = (event) => {
    // Suspendemos el evento para evitar submits erroneos
    event.preventDefault();

    // Seteamos como autorizado al usuario
    const username = event.target.user.value;
    const password = event.target.password.value;

    if (username == "" || password == "") {
      alert("Debe ingresar username y password");
      return;
    }

    authAPI
      .login(username, password)
      .then((response) => {
        // Login efectuado exitosamente
        completeLogin();
      })
      .catch((error) => {
        alert(`No se pudo realizar el login: ${error.code}`);
        // imprimir el error informado por el backend
        alert(`${error.response.status} | ${error.response.data.detail}`);
      });
  };

  const handleRecoveryPasswd = (event) => {
    console.log(`Recovery passwd`);
    navigate("/recoveryCredentials");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100vw" }}>
        <CssBaseline />
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, background: "#00DEBC", fontSize: "20px" }}
              >
                Log in
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link onClick={handleRecoveryPasswd} href="#" style={{fontSize: "16px"}}>
                    ¿Olvidetaste tu credenciales?
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
