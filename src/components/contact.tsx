"use client";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import "./style.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);  // Added for handling loading state
  const [errorMessage, setErrorMessage] = useState(""); // To show error messages

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);  // Start sending

    emailjs.sendForm(
      'rehan-services',      // Replace with your EmailJS Service ID
      'template_elwhvu9',    // Replace with your EmailJS Template ID
      formRef.current,
      'spsmH1DqaBMEwKvtL'    // Replace with your EmailJS User ID
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
      setIsSending(false);  // End sending process
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card">
        <h2 className="contact-heading">Contact Me</h2>

        <div className="contact-item">
          <FaEnvelope />
          <p>
            Email: <a href="mailto:muhammadrehanabdulqadir@gmail.com">muhammadrehanabdulqadir@gmail.com</a>
          </p>
        </div>

        <div className="contact-item">
          <FaPhoneAlt />
          <p>Phone: <a href="tel:923243187077">+92 (324) 3187077</a></p>
        </div>

        <div className="contact-item">
          <FaGithub />
          <p>GitHub: <a href="https://github.com/rehankhimani" target="_blank" rel="noopener noreferrer">@rehankhimani</a></p>
        </div>

        <div className="contact-item">
          <FaLinkedin />
          <p>LinkedIn: <a href="https://www.linkedin.com/in/muhammadrehan25/" target="_blank" rel="noopener noreferrer">/muhammadrehan</a></p>
        </div>

        <h3 className="contact-subheading">Or, send me a message directly:</h3>

        {errorMessage && <p className="error-message">{errorMessage}</p>}  {/* Displaying error message */}

        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows={5} required></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}  {/* Showing loading state */}
          </button>
        </form>
      </div>
    </section>
  );
}
