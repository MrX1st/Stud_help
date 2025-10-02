import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Link, useLocation } from "react-router-dom";


function Navbar({ theme, setTheme }){


  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);


  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/advices", label: "Advices" },
    { path: "/experiences", label: "Experiences" },
    { path: "/info", label: "Info" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Study Support</Link>
        </div>

        <ul className={`navbar-links ${mobileMenuOpen ? "mobile-open" : ""}`} ref={menuRef}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="navbar-controls">
         


         {/* Theme Toggle */}
          <button className="theme-btn" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;