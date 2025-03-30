import React, { createContext, useContext, useState } from "react";

//global theme context to handle dark and light theme
const ThemeContext = createContext(null);

//theme provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//custom hook to provide theme controls
export const useTheme = () => useContext(ThemeContext);
