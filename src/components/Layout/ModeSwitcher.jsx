import { Box, IconButton, useColorScheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../../App.css";

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        marginTop: "20px",
        marginRight: "20px",
      }}
    >
      <Box
        sx={
          mode === "light"
            ? {
                display: "flex",
                width: "150px",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "var(--mui-palette-background-paper)",
                color: "--mui-palette-background-paper",
                borderRadius: 1,
                border: "3px solid black",
                p: 1,
                fontWeight: "bold",
                fontSize: "25px",
              }
            : {
                display: "flex",
                width: "150px",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.danger",
                color: "white",
                borderRadius: 1,
                border: "3px solid white",
                p: 1,
                fontWeight: "bold",
                fontSize: "25px",
              }
        }
      >
        {mode}
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            if (mode === "light") {
              setMode("dark");
            } else {
              setMode("light");
            }
          }}
          color="inherit"
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>
      <br />
    </section>
  );
};

export default ModeSwitcher;
