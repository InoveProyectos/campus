import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AppContext } from "../../context/context";
import ResponsiveDrawer from "./ResponsiveDrawer";

const Layout = () => {
  const { state } = useContext(AppContext);
  const { auth } = state;
  const location = useLocation();

  if (!auth) {
    // Se agrega en la URL el destino deseado
    // luego del login --> ?next=<url>
    // en los query parameters de la URL
    return <Navigate to={`/login?next=${location.pathname}`} replace />;
  }

  // Usuario logeado, se renderiza la vista
  //   <ResponsiveDrawer />u
  return <ResponsiveDrawer />;
};
export default Layout;
