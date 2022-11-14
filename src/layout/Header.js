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

  const showToggle = () => {
    setToggle(true)
  }

  const hideToggle = () => {
    setToggle(false)
  }

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
        <Link to="/" onClick={hideToggle}>
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
            <Link to="/" onClick={hideToggle}>
              <img src={Logo} alt="Metabnb" className="mobile-header-logo" />
            </Link>
            <Link to="/" onClick={hideToggle}>Home</Link>
            <Link to="/place-to-stay" onClick={hideToggle}>Place to stay</Link>
            <a href="#nfts" onClick={hideToggle}>NFTs</a>
            <a href="#community" onClick={hideToggle}>Community</a>
            <Button
              className="header-btn-mobile"
              onClick={() => {
                props.onShow();
                hideToggle();
              }}
            >
              Connect wallet
            </Button>
            <img
              src={close}
              alt="close-header-menu"
              className="close-header-mobile"
              onClick={hideToggle}
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
          onClick={showToggle}
        />
      </Container>
    </header>
  );
};

export default Header;
