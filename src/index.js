import React, { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./reduxToolkit/store";
import { Provider } from "react-redux";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
// i18n translations might still be loaded by the http backend
// use react's Suspense
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback="loading">
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>
);
