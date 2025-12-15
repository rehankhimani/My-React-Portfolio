"use client";
import React from "react";
import "./style.css"; // Optional custom styles

export default function Experience() {
  return (
    <section
      className="py-5 text-white"
      id="experience"
      style={{
        background: "url('/testinomial.png') center center / cover no-repeat",
      }}
    >
      <div className="container">
        {/* Heading and CV Button */}
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
          <div>
            <h2 className="fw-bold text-black" data-aos="fade-up">
              My Experience
            </h2>
            <span
              className="text-light"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A journey of growth, learning, and development
            </span>
          </div>
          <a
            href="/My Resume.pdf"
            download
            className="btn btn-outline-light px-4 bg-white text-black fw-bold mt-3 mt-md-0"
            data-aos="fade-left"
          >
            Download CV
          </a>
        </div>

        {/* Experience Card */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-md-12 bg-white text-dark rounded shadow-sm p-4">
            <p className="text-primary fw-bold mb-1">Jan 2024 – Present</p>
            <h5 className="fw-bold mb-1">WallSoft Technologies</h5>
            <p className="fw-semibold mb-3">Full Stack Web Developer</p>
            <p className="mb-0">
              Developed enterprise-level web applications using ASP.NET Core MVC and Entity Framework, built responsive UIs using Bootstrap and Tailwind CSS, worked with SQL Server for data modeling and reporting modules, and contributed to Agile development processes using Git version control.
            </p>
          </div>
        </div>

        {/* Certification Section */}
        <div className="row" data-aos="fade-up">
          <div className="col-md-12">
            <h4 className="fw-bold text-black mb-4">Certifications</h4>

            <div className="bg-white text-dark p-4 rounded shadow-sm mb-4">
              <span className="badge bg-success mb-2">Completed</span>
              <h5 className="fw-bold mb-1">Full Stack Web Development</h5>
              <span className="text-muted">
                (Saylani Mass IT Training - Jan 2024)
              </span>
              <p className="mt-2 mb-3">
                Pursuing a Modern Web Application Development course from Saylani Mass IT Training (SMIT), focusing on MERN Stack, advanced JavaScript, and full-stack application building.
              </p>
              <a
                href="/Files/Certificate.pdf"
                target="_blank"
                className="btn btn-outline-primary"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
