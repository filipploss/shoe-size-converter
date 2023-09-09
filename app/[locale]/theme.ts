import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: 24,
      fontWeight: 400,
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: 19,
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h4: {
      fontSize: 18,
      fontWeight: 300,
    },
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 18,
    },
  },
});

