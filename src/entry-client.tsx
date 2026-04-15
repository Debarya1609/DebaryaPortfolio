import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AppRoutes from "./AppRoutes";
import "./index.css";

hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <BrowserRouter>
      <App>
        <AppRoutes />
      </App>
    </BrowserRouter>
  </StrictMode>,
);
