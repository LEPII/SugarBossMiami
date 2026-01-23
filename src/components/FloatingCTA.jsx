import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/components/floatingCTA.css"

const FloatingCTA = () => {
  const [show, setShow] = useState(false);
  const [hideForFooter, setHideForFooter] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/contact") {
      setShow(false);
      return;
    }

    const onScroll = () => {
      setShow(window.scrollY > 300); 
    };

    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);


   useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideForFooter(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (location.pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      className={`floating-cta ${show && !hideForFooter ? "show" : ""}`}
      aria-label="Contact Us"
    >
      Order Today
    </Link>
  );
};

export default FloatingCTA;