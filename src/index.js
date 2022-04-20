import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import GlobalStyle from "./style/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router />
  </>,
  document.getElementById("root")
);
