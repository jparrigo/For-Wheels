import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio.tsx";
import Forms from "./pages/Forms/Forms.tsx";
import Resultado from "./pages/Resultado/Resultado.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
  },
  {
    path: "/forms",
    element: <Forms />,
  },
  {
    path: "/resultado",
    element: <Resultado />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
