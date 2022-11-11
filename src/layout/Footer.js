import React from "react";
import Container from "../ui/Container";
import "../style/Footer.css";

// Images
import FooterLogo from "../assets/FooterLogo.png";
import Facebook from "../assets/Facebook.png";
import Instagram from "../assets/Instagram.png";
import Twitter from "../assets/Twitter.png";

const Footer = () => {
  return (
    <footer>
      <Container className='footer-container'>
        <div>
          <img src={FooterLogo} alt="Metabnb" className="footer-logo" />
          <div className="footer-social-icons">
            <img src={Facebook} alt="facebook-icon" />
            <img src={Instagram} alt="instagram-icon" />
            <img src={Twitter} alt="twitter-icon" />
          </div>
          <p className="footer-copyright">&copy; 2022 Metabnb</p>
        </div>
        <div className="footer-menu">
          <h3>Community</h3>
          <ul>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>Places</h3>
          <ul>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beach</li>
            <li>Learn more</li>
          </ul>
        </div>
        <div className="footer-menu">
          <h3>About us</h3>
          <ul>
            <li>Road map</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
