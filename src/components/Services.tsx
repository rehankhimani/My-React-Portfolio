// "use client";
// import React from "react";
// import "./style.css"; // Optional for custom styles

// const services = [
//   {
//     title: "Web Development",
//     desc: "Full-stack web development with modern UI (HTML, CSS, React) and robust backend using ASP.NET MVC and SQL Server.",
//   },
//   {
//     title: "Custom Dashboards",
//     desc: "Interactive admin dashboards with charts, filters, and real-time analytics.",
//   },
//   {
//     title: "Responsive UI",
//     desc: "Modern mobile-first responsive design with Bootstrap/Tailwind.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-5 bg-white" id="services">
//       <div className="container">
//         <h2
//           className="text-center section-title text-dark"
//           data-aos="fade-up"
//         >
//           Services
//         </h2>
//         <div className="row g-4">
//           {services.map((service, index) => (
//             <div className="col-md-4" key={index} data-aos="zoom-in">
//               <div className="card service-card shadow-sm p-4 border-0 rounded-4 h-100">
//                 <h4 className="fw-bold text-primary">{service.title}</h4>
//                 <p className="text-muted">{service.desc}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import "./style.css";

const services = [
  {
    title: "Backend Development",
    desc: "Scalable backend development using Node.js and Express.js, including business logic, authentication, authorization, database operations, and production-ready APIs.",
  },
  {
    title: "REST API Development",
    desc: "Secure and well-structured REST APIs for web and mobile applications with JWT authentication, role-based access control, validation, error handling, and third-party API integrations.",
  },
  {
    title: "Database Development",
    desc: "Database-driven application development using MySQL and SQL Server, including database design, relationships, queries, CRUD operations, and performance-focused data handling.",
  },
  {
    title: "Third-Party API Integration",
    desc: "Integration of external services and APIs such as SMS, Voice, Email, WhatsApp, payment, authentication, and other business platforms into custom applications.",
  },
  {
    title: "SaaS & Business Systems",
    desc: "Development and backend support for real-world SaaS and business platforms involving campaigns, automation, user management, billing, wallets, reporting, and communication workflows.",
  },
  {
    title: "Full-Stack Web Development",
    desc: "Full-stack application development using Node.js, Express.js, React.js, Next.js, HTML, CSS, and Bootstrap, with backend development as the primary focus.",
  },
];

export default function Services() {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <h2
          className="text-center section-title text-dark mb-5"
          data-aos="fade-up"
        >
          Services
        </h2>

        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
              data-aos="zoom-in"
            >
              <div className="card service-card shadow-sm p-4 border-0 rounded-4 h-100">
                <h4 className="fw-bold text-primary mb-3">
                  {service.title}
                </h4>

                <p className="text-muted mb-0">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}