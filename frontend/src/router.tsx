import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AdminPage } from "./routes/AdminPage";
import { BasketPage } from "./routes/BasketPage";
import { CustomerPage } from "./routes/CustomerPage";
import LoginPage from "./routes/LoginPage/LoginPage";
import { NewOfferPage } from "./routes/NewOfferPage";
import { OfferDetailsEditPage } from "./routes/OfferDetailsEditPage";
import OfferDetailsPage from "./routes/OfferDetailsPage/OfferDetailsPage";
import { ReportsPage } from "./routes/ReportsPage";
import { SellerPage } from "./routes/SellerPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main</div>,
  },
  {
    path: "/offer/:offerId",
    element: <OfferDetailsPage />,
  },
  {
    path: "/offeredit/:offerId",
    element: <OfferDetailsEditPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/offers",
    element: <CustomerPage />,
  },
  {
    path: "/myoffers",
    element: <SellerPage />,
  },
  {
    path: "/newoffer",
    element: <NewOfferPage />,
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/reports",
    element: <ReportsPage />,
  },
  {
    path: "/basket",
    element: <BasketPage />,
  },
]);

export default Router;
