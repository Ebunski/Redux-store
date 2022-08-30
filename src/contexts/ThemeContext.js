import React, { useEffect, useContext, useState, useRef } from "react";

const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const bodyRef = useRef(document.body);
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getTheme() {
    const savedTheme = localStorage.getItem("theme");
    console.log(savedTheme);
    if (savedTheme) return JSON.parse(savedTheme);
    else {
      const preference = getPreference();
      bodyRef.current.className = preference;
      return preference;
    }
  }

  function getPreference() {
    console.log("checking preferences....");

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    else {
      return "light";
    }
  }

  function changeTheme() {
    console.log(theme);
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    bodyRef.current.className = newTheme;
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
