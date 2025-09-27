import React, { useState, useEffect, useRef } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { Link, useLocation } from "react-router-dom";


function Navbar({ theme, setTheme }){
  const getStoredLang = () => {
    const stored = localStorage.getItem("language");
    return stored === "RU" ? "RU" : "EN";
  };

  const [language, setLanguage] = useState(getStoredLang());
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
      if (menuRef.current && !menuRef.current.contains(e.target)) setMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const changeLanguage = (code) => { setLanguage(code); setLangOpen(false); };
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);

  const languages = [
    { code: "EN", label: "English", countryCode: "GB" },
    { code: "RU", label: "Russian", countryCode: "RU" },
  ];

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
         

          {/* Language Dropdown */}
          <div className="language-dropdown" onClick={() => setLangOpen(!langOpen)} ref={langRef}>
            <ReactCountryFlag
              countryCode={languages.find(l => l.code === language)?.countryCode}
              svg
              style={{ width: "20px", height: "20px" }}
            />
            <p>{languages.find(l => l.code === language)?.label}</p>

            {langOpen && (
              <ul className="language-list">
                {languages.map(lang => (
                  <li
                    key={lang.code}
                    className={lang.code === language ? "active" : ""}
                    onClick={(e) => { e.stopPropagation(); changeLanguage(lang.code); }}
                  >
                    <ReactCountryFlag countryCode={lang.countryCode} svg style={{ width: "20px", height: "20px" }} />
                    <span>{lang.label}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

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