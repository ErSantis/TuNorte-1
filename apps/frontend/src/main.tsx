
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

// Crea una instancia del cliente
const queryClient = new QueryClient();

// Renderiza la aplicación
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
