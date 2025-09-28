import React from 'react'
import Footer from './components/Home/Footer.jsx'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Home/Navbar.jsx'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout