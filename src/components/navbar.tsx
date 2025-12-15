"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function Navbar() {
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current?.classList.add("scrolled");
      } else {
        navbarRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Add active class
    document.querySelectorAll(".nav-link").forEach((link) =>
      link.classList.remove("active")
    );
    (e.target as HTMLElement).classList.add("active");
  
    // Collapse only if screen is small
    if (window.innerWidth < 992) {
      const navbarCollapse = document.getElementById("navLinks");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    }
  };
  

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className="navbar navbar-expand-lg navbar-dark  fixed-top"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          MRK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className=" navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto gap-3">
            {["home", "about", "skills", "services", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${item === "home" ? "active" : ""}`}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );

}
