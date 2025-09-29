import Navbar from "./components/Home/Navbar.jsx";
import Footer from "./components/Home/Footer.jsx";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/Home/scroll__top.jsx";

import Home from "./pages/Home.jsx";
//import './App.css'

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
