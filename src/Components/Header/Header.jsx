// import React from "react";
// import BurgerMenu from "../BurgerMenu/BurgerMenu";
// import "./Header.css";

// const Header = ({ toggleMenu, isMenuOpen }) => {
//   return (
//     <header className={`app-header ${isMenuOpen ? "menu-open" : ""}`}>
//       <div className="header-content">
//         <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
//         <div className="logo-container">
//           <h1 className="logo-text">Logo</h1>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import "./Header.css";

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <header className={`app-header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header-content">
        <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <div className="logo-container">
          <h1 className="logo-text">Logo</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
