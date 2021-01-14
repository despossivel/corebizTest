import React, { memo } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartProvider from 'contexts/cart';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Home from 'pages/Home'

const Routes = () => <div className="App">
  <Router>
    <CartProvider>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </CartProvider>
  </Router>
</div>;

export default memo(Routes);
