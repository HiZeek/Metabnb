import React, { Fragment } from 'react';
import Brands from '../layout/Brands';
import Hero from '../layout/Hero';
import NftSection from '../layout/NftSection';
import Places from '../layout/Places';

const Home = () => {
  return (
    <Fragment>
        <Hero />
        <Brands />
        <Places />
        <NftSection />
    </Fragment>
  )
}

export default Home;