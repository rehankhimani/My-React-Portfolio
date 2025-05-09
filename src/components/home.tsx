"use client";
import React, { useState } from "react";
import "./style.css";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="background-wrapper">
      <div
        className="full-background"
        style={{ backgroundImage: "url('/background2.jpg')" }}
      ></div>

      <nav className={`navbar ${menuOpen ? "white-bg" : ""}`}>
        <div className="navbar-container">
          <div className="logo">MyPortfolio</div>

          {/* Toggle Button (right side on mobile) */}
          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Menu List */}
          <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

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
