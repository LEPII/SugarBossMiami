import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (location.pathname === "/") {
      if (offset > 100) {
        setScrolled(true);
        setShowButton(true);
      } else {
        setScrolled(false);
        setShowButton(false);
      }
    } else {
      setScrolled(true);
      setShowButton(true);
    }
  }, [location.pathname, setScrolled, setShowButton]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname, handleScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Hero Pic" />
          
        </Link>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}>
            Services
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={location.pathname === "/gallery" ? "active" : ""}>
            Gallery
          </Link>
        </li>
        <li
          className={`navbar-button-wrapper ${
            showButton && window.innerWidth > 1024 ? "show" : ""
          }`}>
          <Link to="/contact" className="navbar-button btn btn--primary">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
