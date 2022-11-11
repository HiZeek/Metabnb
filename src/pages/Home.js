import React, { Fragment } from 'react';
import Brands from '../layout/Brands';
import Hero from '../layout/Hero';
import NftSection from '../layout/NftSection';

const Home = () => {
  return (
    <Fragment>
        <Hero />
        <Brands />
        <NftSection />
    </Fragment>
  )
}

export default Home;