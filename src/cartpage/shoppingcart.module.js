//import {Container} from 'react-bootstrap';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
//import {Link} from 'react-router-dom';

import './shoppingcart.module.css';
//import './products.module.css';
import shoes1 from '../products/shoes1.jpeg';
import {Link} from 'react-router-dom';
 

function Shipping() {
   
  return (

   <div className="products">
     <div>
     <h2 class="mt-3 mb-3">
     <Navbar style={{backgroundColor: "lightgrey",paddingLeft:'80px'}}>
    <Nav>
      <Nav.Link href="/shoppingcart" active style={{marginRight: '250px',borderBottom:"5px solid red"}}>1. Shopping Cart</Nav.Link>
      <Nav.Link href="/shippingdetails"  disabled style={{marginRight: '250px',borderBottom:"5px solid grey"}}>2. Shipping Details</Nav.Link>
      <Nav.Link href="/paymentoption"  disabled style={{marginRight: '60px',borderBottom:"5px solid grey"}}>3. Payment Option</Nav.Link>
    </Nav>
</Navbar>
</h2>
     </div>

<div class="container-fluid">
<div class="row">
<div class="col-sm-8 bg-white"> 
 
<h2> Shopping Cart</h2>
<hr/>

<img src={shoes1} alt="shoes1" class="mr-5 pt-5" width="100px"></img>

<p class="mr-5">
    NIKE 231
  <br/>
nice shoes
<br/>
$30</p>
<input type="number" min="1" max="100" placeholder="1" class="mr-3"></input>
<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>
<br/>
<hr/>
<Link to="/shippingdetails">
<input type="button" value="Next" active class="mr-5 pl-5 pr-5"></input>
</Link>
<Link to="/productdetails">
<input type="button" value="Cancel" class="pl-5 pr-5 mb-5"></input>
</Link>


</div>

<div class="col-sm-4 bg-white"> 

<h3>Summary</h3>
<hr/>
<input placeholder='enter coupon code'></input>
<ul>
    <li>SUBTOTAL $30</li>
    <li>SHIPPING FREE</li>
    <li>TAXES $13</li>
    <hr/>
    <li>TOTAL $43</li>
    </ul>
</div>
</div>
</div>
</div>
  );
  }
  export default Shipping;