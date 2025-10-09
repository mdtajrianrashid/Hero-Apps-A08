import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { router } from "./Routes/routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);