import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import logo21 from "../assets/logo21.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logo21} alt="SugarBossMiami Logo" className="footer-logo" />
      </div>
      <div className="footer-column">
        <h2>Contact Us</h2>
        <p>
          <FaPhone className="footer-icon" />
          <a href="tel:+7863579059">+1 (786) 357-9059</a>
        </p>
        <p>
          <FaWhatsapp className="footer-icon" />
          <a href="tel:+7863579059">+1 (786) 357-9059</a>
        </p>
        <p>
          <FaEnvelope className="footer-icon" />
          <a href="mailto:cakes@yourgodmother.com">cakes@yourgodmother.com</a>
        </p>
        <div className="social-links">
          <a
            href="https://www.facebook.com/people/Sugar-Boss-Miami/100040251162020/"
            target="_blank"
            rel="noopener noreferrer">
            <FaFacebookF className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/sugarbossmiami/"
            target="_blank"
            rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@sugarbossmiami"
            target="_blank"
            rel="noopener noreferrer">
            <FaTiktok className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
