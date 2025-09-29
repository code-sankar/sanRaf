import Navbar from "./components/Home/Navbar.jsx";
import Footer from "./components/Home/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { icons } from "./assets/Icons.jsx";
import { Bounce, ToastContainer } from "react-toastify";

import Home from "./pages/Home.jsx";
//import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
