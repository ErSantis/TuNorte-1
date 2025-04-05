import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Crea una instancia del cliente
const queryClient = new QueryClient();

// Renderiza la aplicación
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
