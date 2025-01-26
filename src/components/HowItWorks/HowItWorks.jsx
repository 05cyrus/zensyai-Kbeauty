import React from "react"
import "./HowItWorks.css"

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works?</h2>
        <p className="subtitle">Unlock Your Beauty Potential in 3 Simple Steps with Kbeauty!</p>

        <div className="steps-container">
          <div className="steps-image">
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/front%20page2-XT5OrlATThXGkMz9Y4RnK2angfwLPW.png"
              alt="How it works demonstration"
            /> */}
          </div>

          <div className="steps-content">
            <div className="step">
              <h3>Step 1: Add a Photo</h3>
              <p>
                Choose a well-lit frontal photo and effortlessly upload it to Kbeauty. Remember, you should be the sole
                focus of the image.
              </p>
            </div>

            <div className="step">
              <h3>Step 2: Unleash the Power of Analysis</h3>
              <p>
                Experience the cutting-edge technology of PinkMirror's face analyzer. Our advanced algorithms and
                machine learning models will examine your facial structure, bone composition, and skin characteristics.
              </p>
            </div>

            <div className="step">
              <h3>Step 3: Instant Insights at Your Fingertips</h3>
              <p>
                Within moments, receive your comprehensive report packed with invaluable insights. Discover what truly
                matters for enhancing your allure and uncover personalized makeover tips.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

