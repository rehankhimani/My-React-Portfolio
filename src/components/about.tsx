"use client";
import React from "react";
import "./style.css"; // keep this if needed for global styles

export default function About() {
  return (
    <section className="py-5 bg-white" id="about">
      <div className="container">
        <h2 className="text-center section-title text-dark mb-5" data-aos="fade-up">
          About Me
        </h2>
        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <img
            src="/bg2.png"
              className="img-fluid shadow-lg rounded-4"
              alt="About"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="col-md-6 d-flex flex-column justify-content-start" data-aos="fade-left">
            <h1 className="fw-bold mb-1">Muhammad Rehan Khimani</h1>
            <span className="text-primary fw-semibold mb-4" style={{ fontSize: "1.25rem" }}>
              Web Developer
            </span>

            <p className="text-dark lead">
              I&apos;m a <strong>self-taught Full-Stack Web Developer</strong> with a strong passion for crafting
              modern, high-performance web applications. I specialize in building scalable, user-friendly solutions
              that bridge design and functionality across the entire development stack.
            </p>
            <p className="text-dark">
              My expertise includes <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
              <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong>, <strong>React.js</strong>,{" "}
              <strong>ASP.NET MVC</strong>, <strong>C#</strong>, <strong>SQL Server</strong>, and{" "}
              <strong>Entity Framework</strong>. I&apos;m committed to writing clean, maintainable code and
              continuously evolving with modern technologies.
            </p>

            <div className="mt-4">
              <a
                href="mailto:muhammadrehanabdulqadir@gmail.com"
                className="btn btn-primary me-3 px-4"
              >
                Hire Me
              </a>
              <a
                href="/Files/Muhammad Rehan Khimani.pdf"
                download
                className="btn btn-outline-dark px-4"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
