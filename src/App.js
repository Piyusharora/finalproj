import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from './Header/searchbar.module';
import Navi from './Header/nav.module';
import Products from './products/products.module';
import Footer from './Footer/Footer.module';
//import Product from './products/productsdata.module';
function App() {


  return (
    <div className="App">
      <Navi></Navi>
<Searchbar></Searchbar>
    
    <Products></Products>
    <Footer></Footer>
     </div>
  );
}
export default App;
