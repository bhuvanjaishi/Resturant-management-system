import React from "react";
import "../App.css";


 function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">
        
        <div className="footer-about">
          <h2>Online <span>Restaurant</span></h2>
          <p>Delicious food delivered with love. Book your table anytime.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/services">Services</a>
          <a href="/booking">Book Table</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>📞 +977 9800000000</p>
          <p>📧 info@restaurant.com</p>
          <p>📍 Kathmandu, Nepal</p>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Online Restaurant. All Rights Reserved.
      </p>
    </footer>
  );
}



export default Footer;
