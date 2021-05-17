import {Navbar,Nav,Button} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaShoppingCart} from "react-icons/fa";

function Navi() {
  return (
    <div className="Nav">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      
    </Nav>
    <Nav>
      <Nav.Link href="#Home">Home</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
      <Nav.Link href="#features">Shop</Nav.Link>
      <Nav.Link href="#pricing">Help</Nav.Link>
      <Nav.Link href="#cart"><Button class="btn btn-primary"><FaShoppingCart className="mr-2"></FaShoppingCart>Your Cart(0)
       
      
      </Button></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  );
}
export default Navi;