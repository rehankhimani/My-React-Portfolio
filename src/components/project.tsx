"use client";
import React from "react";
import "./style.css";

const projects = [
  {
    title: "Weather App",
    description:
      "A simple Weather application demonstrating React state management and deployment.",
    imageUrl: "/Project1.jpg", // Place image in /public/Images/projects/
    github: "https://github.com/rehankhimani/Weather-app_byReact",
    live: "https://weather-app-by-rehan.vercel.app/",
  },
  {
    title: "BestFood App (React Native)",
    description: "A simple and responsive food ordering app built with React Native.",
    imageUrl: "/bestFoodApp.jpg",
    github: "https://github.com/rehankhimani/bestFood-app-with-reactnative",
  },
  {
    title: "Counter App",
    description:
      "A simple counter application demonstrating React state management and deployment.",
    imageUrl: "/images.jpeg",
    github: "https://github.com/rehankhimani/deploy-counter-new",
  },
  {
    title: "Client-Server IP Project",
    description:
      "Frontend connected to backend using a local IP address for demonstration of communication.",
    imageUrl: "/serverClientIp.jpg",
    github: "https://github.com/rehankhimani/IP-project-Clinet-server-or-backend-server",
  },
  {
    title: "Portal Project",
    description:
      "A portal-style application built according to class specifications, using modern UI principles.",
    imageUrl: "/portal.png",
    github: "https://github.com/rehankhimani/parc-app-acc-to-class",
  },
  {
    title: "E-Commerce Dashboad",
    description:
      "Admin dashboard built in ASP.NET Core MVC + EF.",
    imageUrl: "/Project3.jpg",
    github: "https://github.com/rehankhimani/E-Commerce_Dashboard/tree/master",
  },
];

export default function Projects() {
  return (
    <section className="py-5 bg-white" id="projects">
      <div className="container">
        <h2 className="text-center section-title text-dark mb-5" data-aos="fade-up">
          Projects
        </h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index} data-aos="zoom-in">
              <div className="card project-card border-0 shadow-sm rounded-4 h-100 overflow-hidden">
                <div className="ratio ratio-16x9">
                  <img
                    src={project.imageUrl}
                    className="img-fluid object-fit-cover"
                    alt={project.title}
                  />
                </div>
                <div className="card-body">
                  <h5 className="fw-bold text-primary">{project.title}</h5>
                  <p className="text-muted">{project.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-end gap-2 bg-white border-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-dark btn-sm rounded-pill"
                    >
                      <i className="bi bi-github"></i> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm rounded-pill"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
