import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShopProduct } from "./screens/ShopProduct";
import { Homepage } from "./screens/Homepage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ShopProduct />,
  },
  {
    path: "/shop-u47-product",
    element: <ShopProduct />,
  },
  {
    path: "/homepage",
    element: <Homepage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
