import React from "react";
import ReactDOM from "react-dom/client";  // Import the new 'client' version in React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Create a root using React 18's createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
