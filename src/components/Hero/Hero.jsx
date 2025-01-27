import React, { useRef } from "react"
import Spline from '@splinetool/react-spline';
import "./Hero.css"

export default function Hero() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the file upload logic here
      console.log("Selected file:", file);
    }
  };

  return (
    <section className="hero">
      <Spline
        scene="https://prod.spline.design/i456MPBF5o22ysl8/scene.splinecode"
        className="spline-background"
      />
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
            <button className="btn-analyze" onClick={handleButtonClick}>
              <span className="icon"></span>
              Analyze
            </button>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </section>
  )
}