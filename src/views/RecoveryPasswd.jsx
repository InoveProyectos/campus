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
import inove_logo from "../assets/inove_logo.png";

import { authAPI, getSessionInfo } from "../api/authAPI";

const defaultTheme = createTheme();

export default function RecoveryPasswd() {
  const navigate = useNavigate();

  const handleRecovery = () => {
    navigate("/login");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh", width: "100vw" }}>
        <CssBaseline />
     
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
              <h3 style={{textAlign: "start"}}>
                Ingrese su email de alumno, el sistema le enviará un mail con
                los datos de sus credenciales nuevas (usuario y contraseña)
              </h3>
            </div>
            <Box
              component="form"
              noValidate
              onSubmit={handleRecovery}
              sx={{ mt: 1 }}
              style={{ width: "100%", textAlign: "start" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="dni"
                label="DNI"
                type="dni"
                id="dni"
                autoComplete="dni"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 4, mb: 2, background: "#00DEBC", fontSize: "20px" }}
              >
                Recuperar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              // `url(${inove})`,
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
