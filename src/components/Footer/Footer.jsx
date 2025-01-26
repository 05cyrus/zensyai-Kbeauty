import React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>At KBeauty, we are trained in understanding human beauty and finding ways to help you improve yours.</p>
        </div>

        <div className="footer-section">
          <h4>Our Promise</h4>
          <p>
            Do you want to know what makes you ATTRACTIVE?
            Find yourself, know what suits you and look better.
            Generate your Face Analysis Report INSTANTLY.
            Backed by Science.
          </p>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <a href="#">REPORT AN ERROR</a>
            </li>
            <li>
              <a href="#">ANALYSE YOUR FACE</a>
            </li>
            <li>
              <a href="#">CELEBRITY FEATURES</a>
            </li>
            <li>
              <a href="#">HELP</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 - 2025 All Rights Reserved by KBeauty.com</p>
        <div className="social-links">
          <a href="#" className="social-icon">
            Facebook
          </a>
          <a href="#" className="social-icon">
            Twitter
          </a>
          <a href="#" className="social-icon">
            Instagram
          </a>
          <a href="#" className="social-icon">
            Pinterest
          </a>
          <a href="#" className="social-icon">
            LinkedIn
          </a>
          <a href="#" className="social-icon">
            YouTube
          </a>
          <a href="#" className="social-icon">
            Tumblr
          </a>
        </div>
      </div>
    </footer>
  )
}

