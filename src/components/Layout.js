import React, { useState } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHamburger = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleHamburger={toggleHamburger} />
      <Sidebar isOpen={isOpen} toggleHamburger={toggleHamburger} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
