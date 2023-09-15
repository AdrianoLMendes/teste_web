import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import ErrorPage from "./pages/errorPage/error-page.jsx";
import Home from "./pages/home/home.jsx";
import RegisterData from "./pages/registerData/registerData.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "registerdata",
    element: <RegisterData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
