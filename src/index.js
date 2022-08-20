import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./scss/style.scss";

import { Provider } from "react-redux";
import store from "./redux/store/index";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Before
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App tab="home" />, container);

// After
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);
