import React from "react";
import Modal from "../ui/Modal";
import "../style/Wallet.css";

// Images
import X from "../assets/x.png";
import MetamaskLogo from "../assets/MetamaskLogo.png";
import Walletconnect from "../assets/Walletconnect.png";
import DownArrow from "../assets/DownArrow.png";

const Wallet = (props) => {
  const walletList = [
    {
      id: "wl1",
      img: MetamaskLogo,
      title: "Metamask",
      alt: "metamask wallet",
    },
    {
      id: "wl2",
      img: Walletconnect,
      title: "WalletConnect",
      alt: "WalletConnect",
    },
  ];

  const wallets = walletList.map((wallet) => (
    <div key={wallet.id} className="walletlist-container">
      <div className="walletlist">
        <img src={wallet.img} alt={wallet.alt} />
        <p>{wallet.title}</p>
      </div>
      <img src={DownArrow} alt="Down Arrow" />
    </div>
  ));

  return (
    <Modal onHide={props.onHide}>
      <div className="modal-title">
        <h3>Connect Wallet</h3>
        <img src={X} alt="close-modal" onClick={props.onHide} />
      </div>
      <hr />
      <p className="modal-wallet-pick">Choose your preferred wallet:</p>
      <div className="wallet-container">{wallets}</div>
    </Modal>
  );
};

export default Wallet;
