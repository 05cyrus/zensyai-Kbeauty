import React from "react"
import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="analytics-overlay">
          <div className="graph"></div>
          <div className="chart"></div>
        </div>
        <div className="hero-text">
          <h1>
            <span>Analyze</span>
            <span>Your</span>
            <span>Beauty</span>
          </h1>
          <p>Upload a selfie or take a new photo to get your personalized beauty score.</p>
          <div className="cta-buttons">
            <button className="btn-upload">
              <span className="icon">↑</span>
              Upload Image
            </button>
            <button className="btn-selfie">
              <span className="icon">📸</span>
              Take a Selfie
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

