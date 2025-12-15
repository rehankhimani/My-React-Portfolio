"use client";
import React, { useEffect } from "react";
import Typed from "typed.js";
import Navbar from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"; // your custom styles
import Header from "./navbar";

export default function Home() {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Full Stack Developer", "Junior Developer"],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy(); // clean up
    };
  }, []);

  return (
    <div
      className="hero-section d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "url('/hero_bg_element.png') center center / cover no-repeat"

      }}
    >
      <div className="container mt-5">
        

        <div className="row justify-content-start">
          <div className="col-md-8" data-aos="fade-right">
            <h5 className="text-primary mb-3 fw-semibold">Hi! There</h5>
            <h1 className="fw-bold display-5 mb-3">Muhammad Rehan Khimani</h1>
            <h3 className="text-primary mb-4 fw-semibold">
              <span id="typed-text"></span>
            </h3>
            <p className="text-muted fs-5 mb-4">
              I build full-stack web applications using modern frameworks and clean UI/UX principles to deliver powerful digital experiences.
            </p>
            <a href="/Muhammad Rehan Khimani (2).pdf" download className="btn btn-primary btn-lg rounded-3 me-3">
              + Download Resume
            </a>
            <a
              href="https://wa.me/923242187077"  
              target="_blank"
              className="btn btn-outline-primary btn-lg  rounded-3"
            >
              Hire Me!
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}
