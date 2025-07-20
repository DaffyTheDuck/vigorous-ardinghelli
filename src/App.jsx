import React, { useState } from "react";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage";
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light"); // 'light' or 'dark'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="app-container" data-theme={theme}>
      <Header
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <HomePage isMenuOpen={isMenuOpen} />
    </div>
  );
}
