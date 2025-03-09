import {  useState, useEffect } from "react";
import { createContext } from "react";


export const ThemeContext = createContext();
export const ThemeProvider = ({ childern }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.clasSsName = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {childern}
    </ThemeContext.Provider>
  );
};
