import React, { useRef } from "react"
import Spline from '@splinetool/react-spline';
import "./Hero.css"

export default function Hero({ setShowLoader }) {
  return (
    <section className="hero">
      <Spline
        scene="https://prod.spline.design/i456MPBF5o22ysl8/scene.splinecode"
        className="spline-background"
      />
      <div className="hero-content">
        <div className="hero-text">
          <h1>
          Personalized AI powered K-Beauty Aesthetician
          </h1>
          <h2>
          Your AI-Powered Aesthetician
          </h2>
          <p>Upload a selfie or take a new photo to get your personalized beauty score.</p>
          <div className="cta-buttons">
            <button className="btn-analyze"onClick={() => setShowLoader(true)}>
            Check Your Score
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}