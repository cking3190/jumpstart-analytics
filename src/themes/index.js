import * as React from "react";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import "@fontsource/lexend-deca"; // Defaults to weight 400.

const lexendDeca = {
  fontFamily: "Lexend Deca",
};

const common = {
  typography: {
    fontFamily: "Lexend Deca",
    button: {
      textTransform: "none",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [lexendDeca],
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00ED64",
    },
    secondary: {
      main: "#00684A",
    },
  },
  ...common,
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ED64",
    },
    secondary: {
      main: "#00684A",
    },
  },
  ...common,
});
