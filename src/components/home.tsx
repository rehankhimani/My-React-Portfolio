// app/page.js ya app/home/page.js
"use client";
import React from "react";

import "./style.css";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="background-wrapper">
      <div
        className="full-background"
        style={{ backgroundImage: "url('/background2.jpg')" }}
      ></div>

      <Navbar /> {/* Navbar yahan use ho raha hai */}

      <section className="hero-section">
        <h1 className="hero-title">
          Hi, I&apos;m <span className="highlight">Muhammad Rehan Khimani</span>
        </h1>
        <p className="hero-subtitle">A Passionate Web Developer</p>
        <div className="hero-buttons">
          <a href="/contact" className="hero-button">Hire Me!</a>
          <a href="/My%20Resume%20(1).pdf" download className="hero-button">Download Resume</a>
        </div>
      </section>
    </div>
  );
}
