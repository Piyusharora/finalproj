import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Header/searchbar.module';
import Navi from './Header/nav.module';
import Products from './products/products.module';
import Footer from './Footer/Footer.module';
import Pdetails from './products/productdetails.module';
import {Route,Switch} from 'react-router-dom';
import Cart from './cartpage/shoppingcart.module';
import Payment from './cartpage/paymentoption.module';
import Shipping from './cartpage/shippingdetails.module';
import { useState } from 'react';
import Orderplaced from './cartpage/orderplaced.module';
//import Product from './products/productsdata.module';
function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
  
      <Switch>
      <Route path='/' exact>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Navi></Navi>
      
<Searchbar></Searchbar>
    
    <Products></Products>
    
    <Footer></Footer>
      </Route>
      
    <Route path='/productdetails' exact>
    <Navi onShowCart={showCartHandler}></Navi>
<Pdetails></Pdetails>
<Footer></Footer>

    </Route>

    <Route path='/shoppingcart' exact>
    <Navi></Navi>
<Cart></Cart>
<Footer></Footer>
    </Route>

    <Route path='/shippingdetails' exact>
    <Navi></Navi>
<Shipping></Shipping>
<Footer></Footer>
    </Route>

    <Route path='/paymentoption' exact>
    <Navi></Navi>
<Payment></Payment>
<Footer></Footer>
    </Route>
    <Route path='/orderplaced' exact>
    <Navi></Navi>
<Orderplaced></Orderplaced>
<Footer></Footer>
    </Route>
    </Switch>
    
     </div>
  );
}
export default App;
