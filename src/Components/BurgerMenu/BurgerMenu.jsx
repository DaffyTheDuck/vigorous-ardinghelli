// import React from "react";
// import "./BurgerMenu.css";

// const BurgerMenu = ({ toggleMenu, isMenuOpen }) => {
//   const navLinks = [
//     { name: "Home", href: "#" },
//     { name: "About Us", href: "#" },
//     { name: "Services", href: "#" },
//     { name: "Portfolio", href: "#" },
//     { name: "Contact", href: "#" },
//   ];

//   return (
//     <div className="burger-menu-container">
//       <button
//         onClick={toggleMenu}
//         className="burger-icon-button"
//         aria-controls="primary-navigation"
//         aria-expanded={isMenuOpen}
//       >
//         <span className="sr-only">Open main menu</span>
//         <span
//           className={`burger-line line-1 ${isMenuOpen ? "open" : ""}`}
//         ></span>
//         <span
//           className={`burger-line line-2 ${isMenuOpen ? "open" : ""}`}
//         ></span>
//         <span
//           className={`burger-line line-3 ${isMenuOpen ? "open" : ""}`}
//         ></span>
//       </button>

//       <div
//         id="primary-navigation"
//         className={`nav-panel ${isMenuOpen ? "open" : ""}`}
//       >
//         <h2 className="nav-title">Navigation</h2>
//         <nav>
//           <ul>
//             {navLinks.map((link) => (
//               <li key={link.name} className="nav-item">
//                 <a href={link.href} className="nav-link">
//                   {link.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default BurgerMenu;

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
