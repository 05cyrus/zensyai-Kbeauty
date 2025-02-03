import React, { useState, useEffect } from 'react';
import './Loader.css';

function Loader({ setShowLoader }) {  // Accept setShowLoader as a prop
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showLoadingText, setShowLoadingText] = useState(true);

  const loadingTexts = [
    'Accessing the database...',
    'Analyzing the pics...',
    'Setting a score...',
    'Generating results...'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 78) {
          return prev + 1;
        } else if (!showEmailInput) {
          setShowEmailInput(true);
          setShowLoadingText(false);
          return prev;
        }
        return prev;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [showEmailInput]);

  useEffect(() => {
    if (!showLoadingText) return;

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length);
    }, 1000);

    return () => clearInterval(textInterval);
  }, [showLoadingText, loadingTexts.length]); // ✅ Added `loadingTexts.length`

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setShowLoadingText(true);
      const completeProgress = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(completeProgress);
            setCompleted(true);
            return prev;
          }
        });
      }, 50);
    }
  };

  const handleReset = () => {
    setProgress(0);
    setEmail('');
    setShowEmailInput(false);
    setCompleted(false);
    setShowLoadingText(true);
    setShowLoader(false); // ✅ Ensure it returns to Header
  };

  return (
    <div className="l-container">
      <div className="l-box">
        {!completed ? (
          <>
            <div className="l-progress-bar">
              <div className="l-progress" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="l-progress-text">{progress}%</p>
            {showLoadingText && <p className="l-loading-text">{loadingTexts[currentTextIndex]}</p>}
            {showEmailInput && progress === 78 && (
              <form onSubmit={handleSubmit} className="l-email-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit">Get Results</button>
              </form>
            )}
          </>
        ) : (
          <div className="l-success-message">
            <h2>Success!</h2>
            <p>Your results have been sent to {email}</p>
            <button onClick={handleReset}>Back to Home</button> {/* ✅ Fix here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Loader;
