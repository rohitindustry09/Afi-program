import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import NavbarTab from './Navbar/NavbarTab.jsx';
import Footer from './Footer/Footer.jsx'
import HomeTab from './Home-Compo/HomeTab.jsx';
import ScrollToTop from './ScrollToTop.jsx';

function App() {
  return (
    <>
      <ScrollToTop />
      <NavbarTab />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
