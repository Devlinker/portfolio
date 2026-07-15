import { useState, useEffect } from "react";
import "./header.css";

export default function Header({ activeSection }) {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("selected-theme") || "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { id: "home", icon: "uil-estate", label: "Home" },
    { id: "about", icon: "uil-user", label: "About" },
    { id: "skills", icon: "uil-file-alt", label: "Skills" },
    { id: "qualification", icon: "uil-briefcase-alt", label: "Qualification" },
    { id: "contact", icon: "uil-message", label: "Contact-Me" },
  ];

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          MATHAN
        </a>
        <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
          <ul className="nav__list grid">
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={`#${item.id}`}
                  onClick={() => setShowMenu(false)}
                  className={`nav__link ${activeSection === item.id ? "active-link" : ""}`}
                >
                  <i className={`uil ${item.icon} nav__icon`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setShowMenu(false)}
          ></i>
        </div>
        <div className="nav__btns">
          <i
            className={`uil change-theme ${theme === "dark" ? "uil-sun" : "uil-moon"}`}
            id="theme-button"
            onClick={toggleTheme}
          ></i>
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setShowMenu(true)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
