"use client";
import React from "react";
import "./style.css";

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="project-title">Weather App</h3>
          <p className="project-description">
            A simple Weather application demonstrating React state management and deployment.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/rehankhimani/Weather-app_byReact"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
            <a
              href="https://weather-app-by-react-nine.vercel.app/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-card">
          <h3 className="project-title">BestFood App with React Native</h3>
          <p className="project-description">
            A simple and responsive food ordering app built with React Native.
          </p>
          <a
            href="https://github.com/rehankhimani/bestFood-app-with-reactnative"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">Counter App</h3>
          <p className="project-description">
            A simple counter application demonstrating React state management and deployment.
          </p>
          <a
            href="https://github.com/rehankhimani/deploy-counter-new"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">Client-Server IP Project</h3>
          <p className="project-description">
            Frontend connected to backend using a local IP address for demonstration of communication.
          </p>
          <a
            href="https://github.com/rehankhimani/IP-project-Clinet-server-or-backend-server"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>

        <div className="project-card">
          <h3 className="project-title">Portal Project</h3>
          <p className="project-description">
            A portal-style application built according to class specifications, using modern UI principles.
          </p>
          <a
            href="https://github.com/rehankhimani/parc-app-acc-to-class"
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
