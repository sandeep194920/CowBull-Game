import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";
import { StyleRoot } from "radium";

ReactDOM.render(
  // Our app needs to be wrapped in sytle root since we are using radium package for our media queries in userInputModal
  <StyleRoot>
    <GlobalStyles />
    <App />
  </StyleRoot>,

  document.getElementById("root")
);
