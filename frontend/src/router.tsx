import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./routes/LoginPage/LoginPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  /* {
    path: "/offert/:gameid",
    element: <OffertDetails />,
  },*/
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default Router;
