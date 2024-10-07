import { createContext } from "react";

export const themes = {
  light: {
    color: "#000",
    background: "#eee",
  },
  dark: {
    color: "#fff",
    background: "#000",
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  return <ThemeContext.Provider value={{ themes }}>{props.children}</ThemeContext.Provider>;
};
