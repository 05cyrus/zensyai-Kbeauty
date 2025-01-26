import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import HowItWorks from "./components/HowItWorks/HowItWorks"
import Footer from "./components/Footer/Footer"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  )
}

