import React from 'react';
import "../style/Brands.css";
import Container from '../ui/Container';

// Images
import Opensea from '../assets/Opensea.png';
import Metamask from '../assets/Metamask.png';
import MBToken from '../assets/MBToken.png';

const Brands = () => {
  return (
    <section className='brands-section'>
        <Container className='brand-container'>
            <img src={MBToken} alt="MBToken" />
            <img src={Metamask} alt="Metamask" />
            <img src={Opensea} alt="Opensea" />
        </Container>
    </section>
  )
}

export default Brands