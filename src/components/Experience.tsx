// "use client";
// import React from "react";
// import "./style.css"; // Optional custom styles

// export default function Experience() {
//   return (
//     <section
//       className="py-5 text-white"
//       id="experience"
//       style={{
//         background: "url('/testinomial.png') center center / cover no-repeat",
//       }}
//     >
//       <div className="container">
//         {/* Heading and CV Button */}
//         <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap">
//           <div>
//             <h2 className="fw-bold text-black" data-aos="fade-up">
//               My Experience
//             </h2>
//             <span
//               className="text-light"
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               A journey of growth, learning, and development
//             </span>
//           </div>
//           <a
//             href="/My Resume.pdf"
//             download
//             className="btn btn-outline-light px-4 bg-white text-black fw-bold mt-3 mt-md-0"
//             data-aos="fade-left"
//           >
//             Download CV
//           </a>
//         </div>

//         {/* Experience Card */}
//         <div className="row mb-5" data-aos="fade-up">
//           <div className="col-md-12 bg-white text-dark rounded shadow-sm p-4">
//             <p className="text-primary fw-bold mb-1">Jan 2024 – Present</p>
//             <h5 className="fw-bold mb-1">WallSoft Technologies</h5>
//             <p className="fw-semibold mb-3">Full Stack Web Developer</p>
//             <p className="mb-0">
//               Developed enterprise-level web applications using ASP.NET Core MVC and Entity Framework, built responsive UIs using Bootstrap and Tailwind CSS, worked with SQL Server for data modeling and reporting modules, and contributed to Agile development processes using Git version control.
//             </p>
//           </div>
//         </div>

//         {/* Certification Section */}
//         <div className="row" data-aos="fade-up">
//           <div className="col-md-12">
//             <h4 className="fw-bold text-black mb-4">Certifications</h4>

//             <div className="bg-white text-dark p-4 rounded shadow-sm mb-4">
//               <span className="badge bg-success mb-2">Completed</span>
//               <h5 className="fw-bold mb-1">Full Stack Web Development</h5>
//               <span className="text-muted">
//                 (Saylani Mass IT Training - Jan 2024)
//               </span>
//               <p className="mt-2 mb-3">
//                 Pursuing a Modern Web Application Development course from Saylani Mass IT Training (SMIT), focusing on MERN Stack, advanced JavaScript, and full-stack application building.
//               </p>
//               <a
//                 href="/Files/Certificate.pdf"
//                 target="_blank"
//                 className="btn btn-outline-primary"
//               >
//                 View Certificate
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import "./style.css"; // Optional custom styles

const experiences = [
  {
    duration: "Feb 2026 – Present",
    company: "Outhentica Global",
    role: "Backend Engineer — SaaS Communication & AI Systems",
    description:
      "Building the backend for a multi-channel SaaS communication platform using Node.js, Express.js, and MySQL. Designed and developed SMS, Voice/IVR, WhatsApp, and Email systems with third-party API integrations (Telnyx), campaign broadcasting, AI agents, wallet-based billing, resource allocation, and JWT/RBAC-secured REST APIs.",
  },
  {
    duration: "2024 – Jan 2026",
    company: "WallSoft Technologies",
    role: "Junior Software Developer (Internship → Full-Time)",
    description:
      "Developed enterprise-level web applications using ASP.NET Core MVC and Entity Framework, built responsive UIs with React.js, Redux, and TypeScript, worked with SQL Server for data modeling and HR/payroll reporting modules, and contributed to Agile development processes using Git version control.",
  },
];

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
            href="/Muhammad Rehan Khimani Backend Developer.pdf"
            download
            className="btn btn-outline-light px-4 bg-white text-black fw-bold mt-3 mt-md-0"
            data-aos="fade-left"
          >
            Download CV
          </a>
        </div>

        {/* Experience Cards */}
        {experiences.map((exp, index) => (
          <div className="row mb-4" key={index} data-aos="fade-up">
            <div className="col-md-12 bg-white text-dark rounded shadow-sm p-4">
              <p className="text-primary fw-bold mb-1">{exp.duration}</p>
              <h5 className="fw-bold mb-1">{exp.company}</h5>
              <p className="fw-semibold mb-3">{exp.role}</p>
              <p className="mb-0">{exp.description}</p>
            </div>
          </div>
        ))}

        {/* Certification Section */}
        <div className="row mt-4" data-aos="fade-up">
          <div className="col-md-12">
            <h4 className="fw-bold text-black mb-4">Certifications</h4>

            <div className="bg-white text-dark p-4 rounded shadow-sm mb-4">
              <span className="badge bg-success mb-2">Completed</span>
              <h5 className="fw-bold mb-1">Full Stack Web Development</h5>
              <span className="text-muted">
                (Saylani Mass IT Training - 2024)
              </span>
              <p className="mt-2 mb-3">
                Completed a Modern Web Application Development course from Saylani Mass IT Training (SMIT), focusing on the MERN stack, advanced JavaScript, and full-stack application building.
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