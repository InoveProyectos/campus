import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import blue from "@mui/material/colors/blue";
import green from "@mui/material/colors/green";
import yellow from "@mui/material/colors/yellow";
import violet from "@mui/material/colors/purple";
import { grey } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[300],
        },
        text: {
          primary: "black",
        },
        button: {
          pepeButton: red[600],
          
          bgButton: "black",
        },
        border: {
          border: "10px solid black",
        },
        pepeButtonMui: blue[300],
        textoParrafo: violet[600],
        colorButtonText: {
          color: "white",
          fontSize: "clamp(1.25rem, 4vw, 2rem)",
        },
        titleH2: {
          color: "red",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
        },
        titleH3: {
          fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
        },
        background: {
          paper: "hsl(240, 15%, 95%)",
        },
        anchor: "green",
        backgroundCardIACurrentCourses: {
          background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
          borderRadius: "22px",
        },
        backgroundCardCoursesRecommended: {
          background: "linear-gradient(38deg, #EF5C98 1.57%, #6D8AF8 98.56%)",
          borderRadius: "22px",
        },
        backgroundCardCuotas: {
          background: "#edf2f4",
          borderRadius: "22px",
          marginTop: "5%",
          border: "3px solid black",
        },
        backgroundCardNotStarted: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #969696 1.57%, #4E4E4E 98.56%)",
        },
        backgroundCardFinished: {
          borderRadius: "22px",
          background:
            "linear-gradient(38deg, #9EFF9E 0%, #4CAF50 50%, #087f23 100%)",
        },
        textoSignIn: {
          color: "red",
        },
        textoTest: {
          color: "var(--mui-palette-textoSignIn-color)",
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              border: "3px solid black",
              width: "40%",
              background: "#00a6fb",
              color: "var(--mui-palette-colorButtonText-color)",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "20px",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            h2: {
              color: "white",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "AvertaStd-Semibold",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5",
            },
          },
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: grey[300],
        },
        text: {
          primary: "white",
        },
        button: {
          pepeButton: green[300],
          bgButton: "white",
        },
        pepeButtonMui: yellow[300],
        textoParrafo: green[300],
        colorButtonText: {
          color: "black",
          fontSize: "clamp(1.5rem, 4vw, 2rem)",
        },
        titleH2: {
          color: "yellow",
          fontSize: "clamp(1rem, 3vw, 1.3rem)",
        },
        titleH3: {
          fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
        },
        background: {
          paper: "black",
        },
        border: {
          border: "10px solid white",
        },
        anchor: {
          color: "white",
          fontWeight: "bold",
        },
        backgroundCardIACurrentCourses: {
          background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
          borderRadius: "22px",
        },
        backgroundCardCuotas: {
          background: "#edf2f4",
          borderRadius: "22px",
          marginTop: "5%",
          border: "0px ",
        },
        backgroundCardCoursesRecommended: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #EF5C98 1.57%, #6D8AF8 98.56%)",
        },
        backgroundCardNotStarted: {
          borderRadius: "22px",
          background: "linear-gradient(38deg, #969696 1.57%, #4E4E4E 98.56%)",
        },
        backgroundCardFinished: {
          borderRadius: "22px",
          background:
            "linear-gradient(38deg, #9EFF9E 0%, #4CAF50 50%, #087f23 100%)",
        },
        textoSignIn: {
          color: "cyan",
        },
        textoTest: {
          color: "var(--mui-palette-textoSignIn-color)",
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              border: "3px solid",
              width: "40%",
              background: "#00a6fb",
              color: "var(--mui-palette-colorButtonText-color)",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "20px",
            },
          },
        },
        MuiTypography: {
          styleOverrides: {
            h2: {
              color: "white",
              fontFeatureSettings: "'clig' off, 'liga' off",
              fontFamily: "AvertaStd-Semibold",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5",
            },
          },
        },
      },
    },
  },
});

export default theme;
