import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// mui theme settings for light mode
export const lightThemeSettings = {
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 14,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
};


export const useMode = () => {
  const theme = useMemo(() => createTheme(lightThemeSettings), []);
  return theme;
};
