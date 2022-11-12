import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import "../style/Header.css";

// Images
import Logo from "../assets/Logo.png";
import menu from "../assets/menu.png";
import close from "../assets/close.png";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else {
      header.classList.remove("scroll-header");
    }
  });

  return (
    <header className="header">
      <Container className="header-container">
        <Link to="/">
          <img src={Logo} alt="Metabnb" className="header-logo" />
        </Link>
        <div className="header-navlinks">
          <Link to="/">Home</Link>
          <Link to="/place-to-stay">Place to stay</Link>
          <a href="#nfts">NFTs</a>
          <a href="#community">Community</a>
        </div>
        <div className="nav-mobile-container">
          <div className={toggle ? "nav-mobile nav-active" : "nav-mobile"}>
            <Link to="/">
              <img src={Logo} alt="Metabnb" className="mobile-header-logo" />
            </Link>
            <Link to="/">Home</Link>
            <Link to="/place-to-stay">Place to stay</Link>
            <a href="#nfts">NFTs</a>
            <a href="#community">Community</a>
            <Button
              className="header-btn-mobile"
              onClick={() => {
                props.onShow();
                setToggle(false);
              }}
            >
              Connect wallet
            </Button>
            <img
              src={close}
              alt="close-header-menu"
              className="close-header-mobile"
              onClick={() => setToggle(false)}
            />
          </div>
        </div>
        <Button className="header-btn" onClick={props.onShow}>
          Connect wallet
        </Button>
        <img
          src={menu}
          alt="header-menu"
          className="header-mobile"
          onClick={() => setToggle(true)}
        />
      </Container>
    </header>
  );
};

export default Header;
