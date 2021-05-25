//import {Container} from 'react-bootstrap';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Navbar,Nav} from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './shoppingcart.module.css';
//import './products.module.css';


 

function Orderplaced() {
 

  
  return (

   <div className="products">
     <div class="container-fluid ">
       <div class="row">
     <div class="col-sm-12 bg-white p mt-5 mb-5">

<h2>Your Order has been placed</h2>
<h6 class="mb-5"> If have any questions contact us +9134567845</h6>
<Link to="/">
<input type="button" value="Continue Shopping" active class="mr-5 pl-5 pr-5"></input>
</Link>
</div>
</div>
</div>
</div>

  );
  }
  export default Orderplaced;