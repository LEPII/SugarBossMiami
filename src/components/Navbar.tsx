import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo1.png";
import { useLanguage } from "../i18n/LanguageContext";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, toggleLanguage } = useLanguage();
  const closeMenu = () => setIsOpen(false);

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
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

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
          <Link to="/" onClick={closeMenu} className={location.pathname === "/" ? "active" : ""}>
            {t.nav.home}
          </Link>
        </li>
        <li>
          <Link
            to="/menu" onClick={closeMenu}
            className={location.pathname === "/menu" ? "active" : ""}>
            {t.nav.menu}
          </Link>
        </li>
        <li>
          <Link
            to="/gallery" onClick={closeMenu}
            className={location.pathname === "/gallery" ? "active" : ""}>
            {t.nav.gallery}
          </Link>
        </li>
        <li>
          <Link
            to="/faq" onClick={closeMenu}
            className={location.pathname === "/faq" ? "active" : ""}>
            {t.nav.faq}
          </Link>
        </li>
        <li
          className={`navbar-button-wrapper ${showButton ? "show" : ""
            }`}>
          <Link to="/contact" onClick={closeMenu} className="navbar-button btn btn--primary">
            {t.nav.contact}
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="lang-toggle-button"
            onClick={toggleLanguage}
            aria-label={t.nav.toggleLanguage}
          >
            {t.nav.toggleLabel}
          </button>
        </li>
        <li>
          <button
            type="button"
            className="theme-toggle-button"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={isDarkMode ? t.nav.lightMode : t.nav.darkMode}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
