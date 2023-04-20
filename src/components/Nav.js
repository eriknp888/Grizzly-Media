import React from "react";
import "./GlobalNavigation.css";
import logo from "../images/Grizzly Media Logo Hvid(1).png";

function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="globalnavigation">
      <img src={logo} alt="Logo" className="globalnavigation-logo" />
      <ul>
        <li>
          <a onClick={() => scrollToSection("Hjem")}>Hjem</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("Vision")}>Vision</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("priser-section")}>Priser</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("Values")}>Værdier</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("Os")}>Mød os</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
