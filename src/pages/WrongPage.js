import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export default function WrongPage() {
  const { theme } = useThemeContext();
  const isDark = theme === "dark";
  return (
    <main className="error">
      {isDark && <div className="backdrop"></div>}
      <a
        className="error__attribution"
        href="https://www.freepik.com/free-vector/page-found-with-people-connecting-plug-concept-illustration_7967788.htm#query=page%20found&position=24&from_view=keyword"
      >
        Image by storyset
      </a>{" "}
    </main>
  );
}
