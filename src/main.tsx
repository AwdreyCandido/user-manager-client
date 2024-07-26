import "@fontsource-variable/sora";

import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/dashboard/home/HomePage.tsx";
import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import InsightsPage from "./pages/dashboard/insights/InsightsPage.tsx";
import UsersContextProvider from "./context/UsersContext.tsx";
import { Toaster } from "react-hot-toast";

const theme = createTheme({
  typography: {
    fontFamily: "font-family: 'Sora Variable', sans-serif",
  },
});

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/dashboard/home" /> },
  { path: "/dashboard/home", element: <HomePage /> },
  { path: "/dashboard/insights", element: <InsightsPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UsersContextProvider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
