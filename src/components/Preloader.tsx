"use client";
import React, { useEffect, useState } from "react";
import "./style.css";

const Preloader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 2000); // Loader visible for 2s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={hide ? "hidden" : ""}>
      <div className="loader-content">
        <div className="loader-text">Muhammad Rehan Khimani</div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Preloader;
