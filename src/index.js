import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./scss/style.scss";

import { Provider } from "react-redux";
import ThemeProvider from "./contexts/ThemeContext";
import store from "./redux/store/index";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
