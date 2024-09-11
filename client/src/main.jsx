import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthPage } from "./AuthPage";
import { DashboardPage } from "./DashboardPage";
import { App } from "./App.jsx";
const router = createBrowserRouter([
  { path: "/auth", element: <AuthPage /> },
  { path: "/", element: <DashboardPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>
);
