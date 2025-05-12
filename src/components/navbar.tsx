"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css"; // Make sure this path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${menuOpen ? "white-bg" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">MyPortfolio</div>

        {/* Toggle Button (right side on mobile) */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul className={`navbar-list ${menuOpen ? "open" : ""}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
