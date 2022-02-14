import React from "react";
import ReactDOM from "react-dom";
import BooksApp from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/configureStore";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BooksApp />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
