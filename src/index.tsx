import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureBooksStore from "./store/books-store";
import { GlobalStyles } from "./components/styles/Global";

configureBooksStore();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
