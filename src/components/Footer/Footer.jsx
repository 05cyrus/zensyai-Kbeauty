import React from "react"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>At K-GlowZy, we are trained in understanding human beauty and finding ways to help you improve yours.</p>
        </div>

        <div className="footer-section">
          <h4>Our Promise</h4>
          <p>
            Do you want to know what makes you ATTRACTIVE? Find yourself, know what suits you and look better.Generate your Face Analysis Report INSTANTLY.
            <br />
            Backed by Science.
          </p>
        </div>

        <div className="footer-section">
          <h4>Useful Links</h4>
          <ul>
          <li>
              <button className="link-button">REPORT AN ERROR</button>
            </li>
            <li>
              <button className="link-button">ANALYSE YOUR FACE</button>
            </li>
            <li>
              <button className="link-button">CELEBRITY FEATURES</button>
            </li>
            <li>
              <button className="link-button">HELP</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© 2024 - 2025 All Rights Reserved by Zensyai.com</p>
        <div className="social-links">
          <button className="social-icon">Facebook</button>
          <button className="social-icon">Twitter</button>
          <button className="social-icon">Instagram</button>
        </div>
      </div>
    </footer>
  )
}

