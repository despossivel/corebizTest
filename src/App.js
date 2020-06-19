import React, { memo } from 'react';

import CartProvider from './contexts/cart';

import Header from './components/Header';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Newsletter from './components/Newsletter';
import BestSellers from './components/BestSellers';

const App = () => {
  return (
    <div className="App">
      <CartProvider>
        <Header />
        <Slider />
        <BestSellers />
        <Newsletter />
        <Footer />
      </CartProvider>
    </div>
  );
}

export default memo(App);
