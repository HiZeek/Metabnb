import React from "react";
import Button from "../ui/Button";
import Container from "../ui/Container";
import "../style/NftSection.css";

// Images
import NftImg from "../assets/NftsectionImg.png";

const NftSection = () => {
  return (
    <section className="nfts" id="community">
      <Container className="nft-container">
        <div className="nft-about-text">
          <h2>Metabnb NFTs</h2>
          <p>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <Button className>Learn more</Button>
        </div>
        <div className="nft-about-img">
          <img src={NftImg} alt="Nfts" />
        </div>
      </Container>
    </section>
  );
};

export default NftSection;
