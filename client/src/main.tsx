import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/globals.css";
// Supports weights 200-800
import "@fontsource-variable/bricolage-grotesque";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
