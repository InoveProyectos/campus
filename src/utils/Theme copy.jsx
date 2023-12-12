import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { grey, yellow, blue } from "@mui/material/colors";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[200],
        },
        text: {
          primary: "black",
        },
        background: {
          paper: "hsl(240, 15%, 95%)",
        },
        border: {
          border: "10px solid black",
        },
      },
      titleH3: {
        fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
      },
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
        background: {
          paper: "black",
        },
        border: {
          border: "10px solid white",
        },
      },
      titleH3: {
        fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
      },
      backgroundCardIACurrentCourses: {
        background: "linear-gradient(38deg, #00B1B9 1.57%, #0097EC 98.56%)",
        borderRadius: "22px",
      },
      backgroundCardCuotas: {
        background: "#edf2f4",
        borderRadius: "22px",
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
