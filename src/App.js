import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Help from "./components/Help";
import Cart from "./components/Cart";
import ErrorComponent from "./components/ErrorComponent";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/help", element: <Help /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:restaurantId", element: <Restaurant /> },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
