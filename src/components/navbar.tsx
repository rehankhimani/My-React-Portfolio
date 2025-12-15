"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;


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

  const handleLinkClick = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (typeof window === "undefined") return;

    document.querySelectorAll(".nav-link").forEach((link) =>
      link.classList.remove("active")
    );
    (e.target as HTMLElement).classList.add("active");

    if (window.innerWidth < 992) {
      const navbarCollapse = document.getElementById("navLinks");
      if (navbarCollapse?.classList.contains("show")) {
        const bootstrap = await import("bootstrap");
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
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
