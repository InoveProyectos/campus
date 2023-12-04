// Importamos React Router:
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos componentes visuales:
import LoginRedirect from "../views/Login";
import Logout from "../views/Logout";
import Home from "../views/Home";

import Layout from "../components/Layout/Layout";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginRedirect />} />
        <Route path='/logout' element={<Logout />} />

        <Route path='/' element={<Layout />}>
          {/* <Route path='cursos' element={<cursos />} /> */}
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default RouterPrincipal;
