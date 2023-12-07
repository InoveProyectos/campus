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
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              border: "3px solid black",
              width: "40%",
              background: "black",
              color: "white",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "20px",
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
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              border: "3px solid black",
              width: "40%",
              background: "white",
              color: "black",
              padding: "10px 20px",
              fontWeight: "bold",
              borderRadius: "20px",
            },
          },
        },
      },
    },
  },
});

export default theme;
