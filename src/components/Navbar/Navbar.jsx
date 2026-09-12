import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About Us",
    "Services",
    "Products",
    "Collaborators",
  ];

  const handleMenuClick = (item) => {
    setActiveMenu(item);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="logo-icon">
            <svg width="45" height="45" viewBox="0 0 100 100" fill="none">
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#4ade80"
                strokeWidth="3"
                fill="none"
                className="logo-circle"
              />
              <path
                d="M50 20 C30 35, 25 55, 50 80 C75 55, 70 35, 50 20Z"
                fill="#4ade80"
                className="logo-leaf"
              />
              <line
                x1="50"
                y1="45"
                x2="50"
                y2="75"
                stroke="#0a1f0a"
                strokeWidth="2.5"
              />
              <line
                x1="50"
                y1="52"
                x2="38"
                y2="42"
                stroke="#0a1f0a"
                strokeWidth="2"
              />
              <line
                x1="50"
                y1="60"
                x2="62"
                y2="50"
                stroke="#0a1f0a"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">RISCE</span>
            <span className="logo-subtitle"></span>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className={`menu-item ${activeMenu === item ? "active" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleMenuClick(item)}
            >
              <a href={`#${item.toLowerCase().replace(" ", "-")}`}>
                {item}
                <span className="menu-underline"></span>
                <span className="menu-glow"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="navbar-cta">
          <button className="cta-button">
            <span>Contact Us</span>
            <div className="cta-shimmer"></div>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-bg"></div>
        <ul className="mobile-menu-list">
          {menuItems.map((item, index) => (
            <li
              key={item}
              className={`mobile-menu-item ${activeMenu === item ? "active" : ""}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
              onClick={() => handleMenuClick(item)}
            >
              <a href={`#${item.toLowerCase().replace(" ", "-")}`}>
                <span className="mobile-item-number">0{index + 1}</span>
                <span className="mobile-item-text">{item}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <button className="cta-button mobile-cta">
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* Navbar Bottom Line Animation */}
      <div className="navbar-bottom-line">
        <div className="line-glow"></div>
      </div>
    </nav>
  );
};

export default Navbar;
