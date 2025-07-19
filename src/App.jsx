import React, { useState } from "react";
import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage";
import "./App.css";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <HomePage isMenuOpen={isMenuOpen} />
    </div>
  );
}
