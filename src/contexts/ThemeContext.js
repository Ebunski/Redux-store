import React, { useEffect, useContext, useState, useRef } from "react";

const ThemeContext = React.createContext();

export default function ThemeProvider({ children }) {
  const bodyRef = useRef(document.body);
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    bodyRef.current.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      bodyRef.current.className = savedTheme.substring(
        1,
        savedTheme.length - 1
      );
      return JSON.parse(savedTheme);
    } else {
      const preference = getPreference();
      return preference;
    }
  }

  function getPreference() {
    console.log("checking preferences....");
    if (!window.matchMedia) return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches)
      return "dark";
    else {
      return "light";
    }
  }

  function changeTheme() {
    let newTheme;
    if (theme === "light") newTheme = "dark";
    if (theme === "dark") newTheme = "light";
    setTheme(newTheme);
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
