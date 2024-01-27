import { Box, IconButton, useColorScheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../App.css";
import styles from "./ModeSwitcher.module.css";
import classnames from "classnames";

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();


  return (
    <section className={styles.container}>
      <Box
        className={classnames(
          mode === "light" ? styles.containerLight : styles.containerDark
        )}
      >
        <span className={styles.modeName}>{mode}</span>
        <IconButton
          className={styles.iconResponsive}
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
