"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    if (typeof window === "undefined") return;


    const handleScroll = () => {
      if (window.scrollY > 50) {
        headerRef.current?.classList.add("scrolled");
      } else {
        headerRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setOpen(false); // close mobile menu
  };

  return (
    <header ref={headerRef} className="header-section">
      <div className="container d-flex align-items-center justify-content-between">
        
        {/* Logo */}
        <div className="logo-wrapper">
          <a href="#" className="navbar-brand">MRK</a>
        </div>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler d-lg-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${open ? "show" : ""}`}>
          {["home","about","skills","services","projects","contact"].map(item => (
            <a
              key={item}
              href={`#${item}`}
              className={`nav-link ${activeLink === item ? "active" : ""}`}
              onClick={() => handleLinkClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
