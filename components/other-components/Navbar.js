// "use client"
import React from "react"
import Image from "next/image"
import mainLogo from "../../assets/logo.jpg"

function Navbar() {
  return (
    <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <Image src={mainLogo} width="80" height="35" alt="logo" />
        </a>

        <a className="navbar-item" href="/">
          Home
        </a>
        <a className="navbar-item" href="/analysis">
          Analysis Docs
        </a>
        <a className="navbar-item" href="/about">
          About
        </a>
      </div>
    </nav>
  )
}

export default Navbar
