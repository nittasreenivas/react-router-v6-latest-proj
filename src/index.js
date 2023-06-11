import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Signin from "./components/Signin";
import Ricky from "./components/Ricky";
import Countries from "./components/Countries";
import RickyDescription from "./components/RickyDescription";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            path: "ricky",
            element: <Ricky />
          },
          {
            path: "countries",
            element: <Countries />
          }
        ]
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/projects/ricky/:id",
        element: <RickyDescription />
      }
    ]
  }
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
