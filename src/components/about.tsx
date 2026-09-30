"use client";
import React from "react";
import "./style.css";

export default function About() {
  return (
    <section className="py-5 bg-white" id="about">
      <div className="container">
        <h2
          className="text-center section-title text-dark mb-5"
          data-aos="fade-up"
        >
          About Me
        </h2>

        <div className="row align-items-center">
          {/* Left Column: Image */}
          <div
            className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center"
            data-aos="fade-right"
          >
            <div
              className="shadow-lg rounded-4 overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "380px",
                height: "460px",
              }}
            >
              <img
                src="/Rehan.png"
                className="w-100 h-100"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                alt="Muhammad Rehan Khimani"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div
            className="col-md-6 d-flex flex-column justify-content-start"
            data-aos="fade-left"
          >
            <h1 className="fw-bold mb-1">
              Muhammad Rehan Khimani
            </h1>

            <span
              className="text-primary fw-semibold mb-4"
              style={{ fontSize: "1.25rem" }}
            >
              Backend-focused Full Stack Developer
            </span>

            <p className="text-dark lead">
              I&apos;m a{" "}
              <strong>Backend-focused Full Stack Developer</strong>{" "}
              with hands-on experience building real-world, database-driven
              applications and SaaS platforms. My primary focus is{" "}
              <strong>Node.js backend development</strong>, where I work on
              REST APIs, authentication, databases, third-party integrations,
              business logic, and production systems.
            </p>

            <p className="text-dark">
              My current backend expertise includes{" "}
              <strong>Node.js</strong>, <strong>Express.js</strong>,{" "}
              <strong>MySQL</strong>, <strong>REST APIs</strong>,{" "}
              <strong>JWT Authentication</strong>,{" "}
              <strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
              <strong>Git</strong>, and{" "}
              <strong>third-party API integrations</strong>. I also have
              experience working with communication platforms involving{" "}
              <strong>SMS, Voice, Email, WhatsApp integrations,
              IVR systems, campaign management, wallet-based billing,
              and AI-driven automation</strong>.
            </p>

            <p className="text-dark">
              Alongside backend development, I have experience working with{" "}
              <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
              <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>Bootstrap</strong>, <strong>ASP.NET MVC</strong>,{" "}
              <strong>C#</strong>, <strong>SQL Server</strong>, and{" "}
              <strong>Entity Framework</strong>. This allows me to work
              across the stack when required while keeping backend systems
              and API development as my primary focus.
            </p>

            <p className="text-dark">
              I enjoy solving real-world engineering problems, debugging
              production issues, designing reliable APIs, working with
              databases, and continuously improving my backend development
              skills.
            </p>

            <div className="mt-4">
              <a
                href="mailto:muhammadrehanabdulqadir@gmail.com"
                className="btn btn-primary me-3 px-4"
              >
                Hire Me
              </a>

              <a
                href="/Muhammad Rehan Khimani (2).pdf"
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