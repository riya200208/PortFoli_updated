import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import hit from "./images/hit.jpg";
const root = ReactDOM.createRoot(document.getElementById("root"));
const c = "./images/hit.jpg";
root.render(
  <React.StrictMode>
    <App />

    {/* <img src={hit} /> */}
  </React.StrictMode>
);
