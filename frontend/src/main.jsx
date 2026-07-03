import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App.jsx";
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
import WhyUs from "./pages/Our_services/WhyUs.jsx";
import CaseStudies from "./pages/Portfolio/CaseStudies.jsx";
import ClientProjects from "./pages/Portfolio/ClientProjects.jsx";
import AIMachineLearning from "./pages/Our_services/ai_machine_learning.jsx";
import PrivacyPolicy from "./pages/FooterPages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/FooterPages/TermsOfService.jsx";
import Disclaimer from "./pages/FooterPages/Disclaimer.jsx";
import Sitemap from "./pages/FooterPages/Sitemap.jsx";

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
      {
        path: "/whyUs",
        element: <WhyUs />,
      },
      {
        path: "/cases",
        element: <CaseStudies />,
      },
      {
        path: "/projects",
        element: <ClientProjects />,
      },
      {
        path: "ai",
        element: <AIMachineLearning />,
      },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/disclaimer", element: <Disclaimer /> },
      { path: "/sitemap", element: <Sitemap /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
