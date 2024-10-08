import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SupabaseProvider } from "./context/supabaseProvider.jsx";
import { AuthProvider } from "./context/authProvider.jsx";
import App from "./App.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SupabaseProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SupabaseProvider>
    </QueryClientProvider>
  </StrictMode>
);
