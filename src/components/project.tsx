"use client";
import React from "react";
import "./style.css";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  badge?: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Multi-Channel SaaS Communication Platform",
    description:
      "Backend architecture for a production SaaS platform unifying SMS, WhatsApp, Voice/IVR, and Email under one system — with wallet-based billing, resource allocation, and usage tracking across all channels.",
    imageUrl: "/project 11.jpg",
    badge: "Production · Enterprise",
  },
  {
    title: "Email Delivery & Campaign System (Telnyx)",
    description:
      "End-to-end email infrastructure: domain verification (DKIM/SPF/DMARC), transactional & bulk campaign sending, inbound inbox routing via webhooks, delivery/open/click tracking, and detailed reporting.",
    imageUrl: "/email.jpg",
    badge: "Production · Enterprise",
  },
  {
    title: "SMS Broadcasting & Campaign Engine",
    description:
      "Bulk SMS system with CSV-based contact import, template variables, blacklist filtering, scheduled/immediate sending, and real-time balance-aware delivery via a background worker.",
    imageUrl: "/sms.jpg",
    badge: "Production · Enterprise",
  },
  {
    title: "WhatsApp Calling & Resource Billing",
    description:
      "Add-on based WhatsApp Calling minutes system with package + overage billing, resource allocation service, and consumption tracking integrated with the platform wallet.",
    imageUrl: "/whatsapp.jpg",
    badge: "Production · Enterprise",
  },
  {
    title: "BestFood App (React Native)",
    description: "A simple and responsive food ordering app built with React Native.",
    imageUrl: "/portal.png",
    github: "https://github.com/rehankhimani/bestFood-app-with-reactnative",
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard built in ASP.NET Core MVC + Entity Framework.",
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
                <div className="card-footer d-flex justify-content-end align-items-center gap-2 bg-white border-0">
                  {project.badge && (
                    <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                      {project.badge}
                    </span>
                  )}
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