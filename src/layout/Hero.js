import React from "react";
import "../style/Hero.css";
import Button from "../ui/Button";
import Container from "../ui/Container";

// Images
import HeroNft from "../assets/HeroNft.png";

const Hero = () => {
  return (
    <section className="hero-section">
      <Container className="hero-container">
        <div className="hero-about">
          <p className="hero-text">
            Rent a <span>Place</span> away from <span>Home</span> in the{" "}
            <span>Metaverse</span>
          </p>
          <p className="hero-text-description">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="hero-search">
            <input type="text" placeholder="Search for location" />
            <Button>Search</Button>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroNft} alt="nfts" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
