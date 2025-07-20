import React from "react";
import "./BurgerMenu.css";

const BurgerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <>
      <button
        className={`burger-button ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span className="burger-line line-1" />
        <span className="burger-line line-2" />
        <span className="burger-line line-3" />
      </button>

      <aside className={`nav-panel ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {["Home", "About Us", "Services", "Portfolio", "Contact"].map(
            (name) => (
              <li key={name}>
                <a href="#">{name}</a>
              </li>
            )
          )}
        </ul>
      </aside>

      {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu} />}
    </>
  );
};

export default BurgerMenu;
