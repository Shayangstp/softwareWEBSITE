import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import classes from "./App.module.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App className={classes.body} />
  </BrowserRouter>
);

reportWebVitals();
