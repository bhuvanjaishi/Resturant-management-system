import React from "react";
import "../App";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or want to book a table? Reach out to us!</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📞 +977 9800000000</p>
          <p>📧 info@restaurant.com</p>
          <p>📍 Kathmandu, Nepal</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
