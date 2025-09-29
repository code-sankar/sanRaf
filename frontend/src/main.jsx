import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
import AIMachineLearning from "./pages/Our_services/ai_machine_learning.jsx";
import Blockchain from "./pages/Our_services/blockchain.jsx";
import CloudSolutions from "./pages/Our_services/cloud_solutions.jsx";
import Cybersecurity from "./pages/Our_services/cybersecurity.jsx";
import DataAnalytics from "./pages/Our_services/data_analytics.jsx";
import MobileDevelopment from "./pages/Our_services/mobiledev.jsx";
import Testing from "./pages/Our_services/testing.jsx";
import UIUXDesign from "./pages/Our_services/uiux.jsx";
import WebDevelopment from "./pages/Our_services/webdev.jsx";
import NotFound from "./pages/NotFound.jsx";
import Technologies from "./pages/Technologies.jsx";
import Blogs from "./pages/Blogs.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/web",
        element: <WebDevelopment />,
      },
      {
        path: "/apps",
        element: <MobileDevelopment />,
      },
      {
        path: "/design",
        element: <UIUXDesign />,
      },
      {
        path: "/cybersecurity",
        element: <Cybersecurity />,
      },
      {
        path: "/analytics",
        element: <DataAnalytics />,
      },
      {
        path: "/cloud",
        element: <CloudSolutions />,
      },
      {
        path: "/ai",
        element: <AIMachineLearning />,
      },
      {
        path: "/blockchain",
        element: <Blockchain />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
      {
        path: "/tech",
        element: <Technologies />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
  
);
