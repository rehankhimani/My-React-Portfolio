"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Home from "@/components/home";
import About from "@/components/about";
import Skills from "@/components/Skills";
import Projects from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Experience/>
      <Contact />
      <Footer />
    </div>
  );
}
