"use client";
import React from "react";
import "./style.css"; // Optional for custom styles

const services = [
  {
    title: "Web Development",
    desc: "Full-stack web development with modern UI (HTML, CSS, React) and robust backend using ASP.NET MVC and SQL Server.",
  },
  {
    title: "Custom Dashboards",
    desc: "Interactive admin dashboards with charts, filters, and real-time analytics.",
  },
  {
    title: "Responsive UI",
    desc: "Modern mobile-first responsive design with Bootstrap/Tailwind.",
  },
];

export default function Services() {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <h2
          className="text-center section-title text-dark"
          data-aos="fade-up"
        >
          Services
        </h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in">
              <div className="card service-card shadow-sm p-4 border-0 rounded-4 h-100">
                <h4 className="fw-bold text-primary">{service.title}</h4>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
