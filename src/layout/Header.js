import React from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import "../style/Header.css";

// Images
import Logo from "../assets/Logo.png";

const Header = (props) => {
  return (
    <header>
      <Container className="header-container">
        <Link to="/">
          <img src={Logo} alt="Metabnb" className="header-logo" />
        </Link>
        <div className="header-navlinks">
          <Link to="/">Home</Link>
          <Link to="/place-to-stay">Place to stay</Link>
          <Link to="/nfts">NFTs</Link>
          <Link to="/community">Community</Link>
        </div>
        <Button className="header-btn" onClick={props.onShow}>Connect wallet</Button>
      </Container>
    </header>
  );
};

export default Header;
