import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../themes";

// eslint-disable-next-line no-unused-vars
export const CustomThemeContext = React.createContext({
  currentTheme: "light",
  setCurrentTheme: (name) => {},
});

const CustomThemeProvider = (props) => {
  const { children } = props;

  // Read current theme from localStorage or maybe from an api
  const currentTheme = localStorage.getItem("theme") || "light";

  // State to hold the selected theme name
  const [themeName, setThemeNameState] = useState(currentTheme);

  // Retrieve the theme object by theme name
  const theme = themeName === "light" ? lightTheme : darkTheme;

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name) => {
    setThemeNameState(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setCurrentTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
