import React, { memo } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Newsletter from './components/Newsletter';
// import BestSellers from './components/BestSellers';

const App = () => {
  return (
    <div className="App">

      <Header />

      <Slider />
      {/** 
      <BestSellers />
       */}
      <Newsletter />

      <Footer />

    </div>
  );
}

export default memo(App);
