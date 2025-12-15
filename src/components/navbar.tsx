"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navbar() {
  const navbarRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbarRef.current?.classList.add("scrolled");
      } else {
        navbarRef.current?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // Add active class
    document.querySelectorAll(".nav-link").forEach((link) =>
      link.classList.remove("active")
    );
    (e.target as HTMLElement).classList.add("active");
  
    // Collapse only if screen is small
    if (window.innerWidth < 992) {
      const navbarCollapse = document.getElementById("navLinks");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    }
  };
  

  return (
    <nav
      id="navbar"
      ref={navbarRef}
      className="navbar navbar-expand-lg navbar-dark  fixed-top"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          MRK
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navLinks"
          aria-controls="navLinks"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className=" navbar-collapse" id="navLinks">
          <ul className="navbar-nav ms-auto gap-3">
            {["home", "about", "skills", "services", "projects", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${item === "home" ? "active" : ""}`}
                  href={`#${item}`}
                  onClick={handleLinkClick}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );

}
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./style.css";

// export default function Navbar() {
//   const navbarRef = useRef<HTMLElement | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Scroll effect for background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         navbarRef.current?.classList.add("scrolled");
//       } else {
//         navbarRef.current?.classList.remove("scrolled");
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Link click handler for active state and mobile menu close
//   const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//     document.querySelectorAll(".nav-link").forEach((link) =>
//       link.classList.remove("active")
//     );
//     (e.target as HTMLElement).classList.add("active");

//     // Close menu on small screens
//     if (window.innerWidth < 992) {
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav
//       ref={navbarRef}
//       className={`navbar navbar-expand-lg fixed-top navbar-dark bg-dark ${menuOpen ? "open" : ""}`}
//     >
//        <div className="container">
//         <a className="navbar-brand" href="#">
//           MRK
//          </a>
        

//         {/* Toggle Button */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         {/* Menu */}
//         <div className={`navbar-collapse ${menuOpen ? "show" : "collapse"}`}>
//           <ul className="navbar-nav ms-auto gap-3">
//             {["home", "about", "skills", "services", "projects", "contact"].map((item) => (
//               <li className="nav-item" key={item}>
//                 <a
//                   className={`nav-link ${item === "home" ? "active" : ""}`}
//                   href={`#${item}`}
//                   onClick={handleLinkClick}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </a>
//               </li>
//             ))}
//             <li className="nav-item">
//               <a href="tel:+923053621212" className="btn btn-primary ms-lg-3 mt-3 mt-lg-0">
//                 Hire Me
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
