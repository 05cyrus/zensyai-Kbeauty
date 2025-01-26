import React from "react"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-brand">
        <img src="/logo.svg" alt="Kbeauty" className="logo" />
        <span className="brand-text">Kbeauty</span>
      </div> */}
      <div className="navbar-menu">
        <a href="/">HOME</a>
        <a href="/choose-photo">CHOOSE PHOTO</a>
        <a href="/pricing">PRICING</a>
        <a href="/about">ABOUT</a>
      </div>
    </nav>
  )
}

