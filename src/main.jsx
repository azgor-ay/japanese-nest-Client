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
import LoginPage from "./Pages/UniquePages/LoginPage";
import RegisterPage from "./Pages/UniquePages/RegisterPage";
import ErrorPage from "./Pages/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: homePageData,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
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
        element: <PrivateRoute><DetailsChef></DetailsChef></PrivateRoute>,
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
