//import {Container} from 'react-bootstrap';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import {Link} from 'react-router-dom';

//import './products.module.css';

  import  Paypal_logo from './paypal_logo.jpg';
  import shoes1 from '../products/shoes1.jpeg';   

function Payment() {
    
         
       
   

  return (

   <div className="products">
     <h2 class="mt-3 mb-3">
     <Navbar style={{backgroundColor: "lightgrey",paddingLeft:'80px'}}>
    <Nav>
      <Nav.Link href="/shoppingcart" style={{marginRight: '250px',borderBottom:"5px solid grey"}}>1. Shopping Cart</Nav.Link>
      <Nav.Link href="/shippingdetails"style={{marginRight: '250px',borderBottom:"5px solid grey"}}>2. Shipping Details</Nav.Link>
      <Nav.Link href="/paymentoption" active style={{marginRight: '60px',borderBottom:"5px solid red"}}>3. Payment Option</Nav.Link>
    </Nav>
</Navbar>
</h2>
     



<div class="container-fluid">
<div class="row">
<div class="col-sm-8 bg-white"> 

<h2> Payment method</h2>
<hr/>
<div style={{border:"1px solid grey"}}>
<input type="radio" name="pay" class='mt-4' checked></input>
<p>Credit Card


<br/>
 is a transactional card that enables the holder
 <br/> to make purchases of goods and services or 
 <br/>withdraw advance cash on credit.</p>
<br></br>
<input type="text" placeholder=" 0000 0000 0000 0000" id="input" class="mr-5 mb-4" maxlength = "16" minLength="16"
></input>

<input type="text" placeholder="MM/YY" class="mr-5"></input>
  <input type="text" placeholder="CVV"></input>
  <br/>
  <input type="text" placeholder="Card Holder Name" class="mb-5" size="85"></input>
  </div>
  <br/>
  <div style={{border:"1px solid grey"}}>
  <input type="radio" name="pay" ></input>
  <p>
  PayPal
  <br/>
  
  is one of the largest online 
  <br/>payment processors in the world.
  </p>
<img src={Paypal_logo} alt="paypal" WIDTH="100PX"/>
</div>
<br/>
<Link to="/orderplaced">
<input type="button" value="PayNow" active class="mr-5 pl-5 pr-5"></input>
</Link>
<Link to="/shippingdetails">
<input type="button" value="Back" class="pl-5 pr-5 mb-5"></input>
</Link>
</div>
<div class="col-sm-4 bg-white">
<h3>Summary</h3>
<hr/>
<img src={shoes1} alt="shoes1" class="mr-5" width="100px"></img>

<p>
    NIKE 231
  <br/>
$30</p>
<hr/>
<select>
            <option value="YES">Have A Coupon</option>
            <option value="NO">Don't Have A Coupon</option>
        </select>
        <hr/>
    <ul class="mt-3">
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
  export default Payment;