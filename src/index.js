import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Assuming you have this CSS file
import App from "./App"; // Assuming you have an App component
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // For JS components like the navbar toggler


// Rendering the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
