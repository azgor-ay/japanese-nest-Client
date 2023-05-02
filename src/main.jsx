import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Pages/UniquePages/Home";
import Blog from "./Pages/UniquePages/Blog";
import ContactUs from "./Pages/UniquePages/ContactUs";
import Recipes from "./components/Recipes";
import homePageData from "./Loaders/HomePageData";
import DetailsChef from "./Pages/UniquePages/DetailsChef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: homePageData,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/chefDetails/:id",
        element: <DetailsChef></DetailsChef>,
        loader: ({ params }) =>
          fetch(
            `https://japanesenest-server-yeasin86.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
