import { useState } from "react";

function Header() {
  function navToggle() {
    document.body.classList.toggle("nav-open");
  }

  function navRemove() {
    document.body.classList.remove("nav-open");
  }

  return (
    <header className="header-container">
      <div className="logo">
        <a href="#">
          <img
            src={require("../images/logo-sercan.png")}
            alt="profile-logo-photo"
          />
        </a>
      </div>
      <button
        onClick={navToggle}
        className="nav-toggle"
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav">
        <ul className="nav-list">
          <li onClick={navRemove} className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li onClick={navRemove} className="nav-item">
            <a href="#about-me-page" className="nav-link">
              About me
            </a>
          </li>
          <li onClick={navRemove} className="nav-item">
            <a href="#work-page" className="nav-link">
              My Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
