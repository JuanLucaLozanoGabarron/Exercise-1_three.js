import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./routes/Home";
import Car from "./routes/Car";
import Phone from "./routes/Phone";
import Sneaker from "./routes/Sneaker";
import Hotdog from "./routes/Hotdog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/car",
    element: <Car />,
  },
  {
    path: "/phone",
    element: <Phone />,
  },
  {
    path: "/sneaker",
    element: <Sneaker />,
  },
  {
    path: "/hotdog",
    element: <Hotdog />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
