import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AdminPage } from "./routes/AdminPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import { SellerPage } from "./routes/SellerPage";

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
  {
    path: "/myofferts",
    element: <SellerPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
]);

export default Router;
