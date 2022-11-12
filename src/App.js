import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Wallet from "./layout/Wallet";
import Community from "./pages/Community";
import Home from "./pages/Home";
import Nft from "./pages/Nft";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  const [connectWallet, setConnectWallet] = useState(false);

  const showConnectWallet = () => {
    setConnectWallet(true);
  };

  const hideConnectWallet = () => {
    setConnectWallet(false);
    console.log('worked');
  };

  return (
    <main>
      <Router>
        <Header onShow={showConnectWallet} />
        {connectWallet && <Wallet onHide={hideConnectWallet} />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<PlaceToStay />} />
          <Route path="/nfts" element={<Nft />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
