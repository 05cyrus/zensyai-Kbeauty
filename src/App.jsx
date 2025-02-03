import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Loader from "./components/Loader/Loader";
import "./App.css";

export default function App() {
  const [showLoader, setShowLoader] = useState(false);

  return (
    <div className={`app-container ${showLoader ? "loader-active" : ""}`}>
      {!showLoader ? (
        <>
          <Navbar setShowLoader={setShowLoader} />
          <Hero setShowLoader={setShowLoader} />
        </>
      ) : (
        <Loader setShowLoader={setShowLoader} />
      )}
    </div>
  );
}
