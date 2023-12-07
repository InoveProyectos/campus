// Importamos React Router:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos componentes visuales:
import LoginRedirect from "../views/Login";
import Logout from "../views/Logout";
import Home from "../views/Home";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import Layout from "../components/Layout/Layout";
import theme from "../utils/theme";
import "../index.css";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/logout" element={<Logout />} />

          <Route path="/" element={<Layout />}>
            {/* <Route path='cursos' element={<cursos />} /> */}
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </CssVarsProvider>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
