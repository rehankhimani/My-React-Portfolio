"use client";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./style.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);  
  const [errorMessage, setErrorMessage] = useState(""); 

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);  

    emailjs.sendForm(
      'rehan-services',      
      'template_elwhvu9',   
      formRef.current,
      'spsmH1DqaBMEwKvtL'   
    ).then(
      () => {
        alert('Message sent successfully!');
        formRef.current!.reset();
      },
      (error) => {
        setErrorMessage("Failed to send message. Please try again.");
        console.error('EmailJS error:', error.text);
      }
    ).finally(() => {
      setIsSending(false);  
    });
  };

   return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-center section-title mb-5" data-aos="fade-up">
          Let's Connect
        </h2>
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-4 mb-4" data-aos="fade-right">
            <div className="bg-light p-4 shadow-sm rounded-4 h-100">
              <h5 className="fw-bold">Contact Info</h5>
              <p>
                <FaEnvelope className="me-2 text-primary" />
                <a href="mailto:muhammadrehanabdulqadir@gmail.com">
                  muhammadrehanabdulqadir@gmail.com
                </a>
              </p>
              <p>
                <FaPhoneAlt className="me-2 text-primary" />
                <a href="tel:+923243187077">+92 324 3187077</a>
              </p>
              <p>
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                Karachi, Pakistan
              </p>
              <p>
                <FaGithub className="me-2 text-primary" />
                <a
                  href="https://github.com/rehankhimani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/rehankhimani
                </a>
              </p>
              <p>
                <FaLinkedin className="me-2 text-primary" />
                <a
                  href="https://www.linkedin.com/in/muhammadrehan25/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/muhammadrehan25
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-8" data-aos="fade-left">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-light shadow-sm p-4 rounded-4"
            >
              <h5 className="fw-bold mb-3">Send me a message directly</h5>

              {errorMessage && (
                <p className="text-danger mb-3">{errorMessage}</p>
              )}

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="form-control"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary px-5 py-2 rounded-pill shadow-sm"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );}
