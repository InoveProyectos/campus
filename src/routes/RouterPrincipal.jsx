// Importamos React Router:
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRedirect from "../views/SignInSide";
import Logout from "../views/Logout";
import { CssBaseline } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import Layout from "../components/Layout/Layout";
import theme from "../utils/Theme";
import "../index.css";
import CurrentCourses from "../components/Cursos";
import Cuotas from "../components/Cuotas";
import RecoveryPasswd from "../views/RecoveryPasswd";
import ApunteLink from "../views/ApunteLink";
import CardNosotros from "../components/Cards/CardNosotros";
import CardPerfil from "../components/Cards/CardPerfil";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<LoginRedirect />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/recoveryCredentials" element={<RecoveryPasswd />} />

          <Route path="/" element={<Layout />}>
            <Route path="/" element={<CurrentCourses />} />
            <Route path="/cursos" element={<CurrentCourses />} />
            <Route path="/pagos" element={<Cuotas />} />
            <Route path="/nosotros" element={<CardNosotros />} />
            <Route path="/perfil/:username" element={<CardPerfil />} />
            <Route path="/cursos/:courseCode/unidades/:uidx/link/:type" element={<ApunteLink />} />
          </Route>
        </Routes>
      </CssVarsProvider>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
