import "./App.css";
import { CssBaseline } from "@mui/material";
import { AppProvider } from "./context/context";
import RouterPrincipal from "./routes/RouterPrincipal";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <CssBaseline />
        <RouterPrincipal />
      </AppProvider>
    </div>
  );
}

export default App;
