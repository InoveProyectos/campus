import { Box, IconButton, useColorScheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "../App.css";
import styles from "./ModeSwitcher.module.css";
import classnames from "classnames";

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const iconStyleDark = {
    // border:'1px solid #00DEBC',
    borderRadius: '55px',
    padding: '5px',
    width:50,
    height:50,
    color: 'black',
    background: 'linear-gradient(to right top, #00debc, #4ee5aa, #79ea96, #9fee82, #c4f071)'

    }
    const iconStyleLight = {
      borderRadius: '55px',
      padding: '5px',
      width:50,
      height:50,
      color: 'white',
      background: 'linear-gradient(to right top, #3399aa, #0080a7, #0065a0, #004893, #1f267a)'

      }

  return (
    <section className={styles.container}>
      <Box
        className={classnames(
          mode === "light" ? styles.containerLight : styles.containerDark
        )}
      >
        <span className={styles.modeName}>{mode === 'dark'? 'Dark' : 'Light'}</span>
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
          {mode === "dark" ? <Brightness7Icon sx={iconStyleDark}/> : <Brightness4Icon sx={iconStyleLight} />}
        </IconButton>
      </Box>
      <br />
    </section>
  );
};

export default ModeSwitcher;
