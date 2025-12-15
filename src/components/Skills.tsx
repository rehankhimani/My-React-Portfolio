"use client";
import React from "react";
import "./style.css";

const codingSkills = [
  { name: "HTML, CSS ", level: 90 },
  { name: " JavaScript", level: 80 },

  { name: "React JS, Next JS", level: 80 },
  { name: "ASP.Net MVC", level: 50 },
  { name: "SQL Server", level: 55 },
];

const softSkills = [
  { name: "Active Listening", value: 90 },
  { name: "Team Collaboration", value: 80 },
  { name: "Time Management", value: 75 },
  { name: "Critical Thinking", value: 90 },
  { name: "Problem Solving", value: 80 },
  { name: "Public Speaking", value: 75 },
];

export default function Skills() {
  return (
    <section
      className="py-5 g-5"
      id="skills"
      style={{
       background: "url('/skill_bg.png') center center / cover no-repeat"

      }}
    >
      <div className="container">
        <h2
          className="text-center section-title mb-5 text-primary fw-bold"
          data-aos="fade-up"
        >
          Skills
        </h2>
        <div className="row gx-5 gy-4">
          {/* Left Column: Coding Skills */}
          <div
            className="col-md-6 bg-white p-4 shadow-sm rounded"
            data-aos="fade-right"
          >
            <h4 className="mb-4 text-dark fw-bold">Coding Skills</h4>
            {codingSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <p className="mb-1 fw-medium">{skill.name}</p>
                <div className="progress rounded-pill" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="badge bg-light text-primary border mt-1 float-end">
                  {skill.level}%
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Other Skills (Circular SVG) */}
          <div
            className="col-md-6 bg-white p-4 shadow-sm rounded"
            data-aos="fade-left"
          >
            <h4 className="mb-4 text-dark fw-bold">Other Skills</h4>
            <div className="row text-center gx-5 gy-4">
              {softSkills.map((skill, index) => {
                const dashOffset = 283 - skill.value * 2.83;
                return (
                  <div className="col-6" key={index}>
                    <div
                      className="position-relative d-inline-block"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <svg width="100" height="100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="#e9ecef"
                          strokeWidth="10"
                          fill="none"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="#0d6efd"
                          strokeWidth="10"
                          fill="none"
                          strokeDasharray="283"
                          strokeDashoffset={dashOffset}
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="position-absolute top-50 start-50 translate-middle fw-bold">
                        {skill.value}%
                      </div>
                    </div>
                    <p className="mt-2 fw-medium">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
