import React from "react";
import "./footer.css";
import grizzlyLogo from "../images/Grizzly Media Logo Hvid(1).png";
import fbIcon from "../images/icons8-facebook(1).svg";
import igIcon from "../images/icons8-instagram(1).svg";
import liIcon from "../images/icons8-linkedin(1).svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-address">
            <h2 className="footer-heading">Grizzly Media</h2>
            <p>Vestergade 62</p>
            <p>8200 Aarhus C</p>
          </div>
          <img
            src={grizzlyLogo}
            alt="Grizzly Media Logo"
            className="grizzly-logo"
          />
        </div>
        <div className="footer-right">
          <div className="footer-contact">
            <h2 className="footer-heading">Kontakt os</h2>
            <p>CVR: 41274611</p>
            <p>Telefon: +45 86 888 999</p>
            <p>GrizzlyMedia@gmail.com</p>
          </div>
          <div className="footer-social">
            <img src={fbIcon} alt="Facebook Icon" className="social-icon" />
            <img src={igIcon} alt="Instagram Icon" className="social-icon" />
            <img src={liIcon} alt="LinkedIn Icon" className="social-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
