import {Container} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import shoes1 from './shoes1.jpeg';
import shoes2 from './shoes2.jpeg';
import shoes3 from './shoes3.jpeg';
import shoes4 from './shoes4.jpeg';
import shoes5 from './shoes5.jpeg';
import shoes6 from './shoes6.jpeg';
import shoes7 from './shoes7.jpeg';
import shoes8 from './shoes8.jpeg';
import shoes9 from './shoes9.jpeg';
import shoes10 from './shoes10.jpeg';
import shoes11 from './shoes11.jpeg';
import shoes12 from './shoes12.jpeg';
import { FaRegStar,FaStar,FaStarHalfAlt} from "react-icons/fa";
import {Link} from 'react-router-dom';
//import Route from 'react-router-dom/Route';

//import {browserHistory, Switch} from "react-router";

import './products.module.css';
//import Button  from '../homepage/addtocart.module';
//import Pdetails from './productdetails.module';
//import { useHistory } from "react-router-dom";
  const product=[
    {id:'p1',pname:'NIKE 231',pprice:'$30',image:<img src={shoes1} alt="shoes1" width="180px" className="" ></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/> ,star5:<FaRegStar/>,},
    {id:'p2',pname:'NIKE 999',pprice:'$40',image:<img src={shoes2} alt="shoes2" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>},
    {id:'p3',pname:'PUMA 555',pprice:'$50',image:<img src={shoes3} alt="shoes3" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/> ,star5:<FaStarHalfAlt/>},
    {id:'p4',pname:'NIKE 356',pprice:'$30',image:<img src={shoes4} alt="shoes4" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>},
    {id:'p5',pname:'PUMA 731',pprice:'$35',image:<img src={shoes5} alt="shoes5" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/> ,star5:<FaStar/>},
    {id:'p6',pname:'NIKE 987',pprice:'$30',image:<img src={shoes6} alt="shoes6" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaRegStar/> ,star5:<FaRegStar/>},
    {id:'p7',pname:'PUMA 530',pprice:'$25',image:<img src={shoes7} alt="shoes7" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/>  ,star5:<FaRegStar/>},
    {id:'p8',pname:'NIKE 777',pprice:'$20',image:<img src={shoes8} alt="shoes8" width="180px" className=" "></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStarHalfAlt/>,star4:<FaRegStar/>,star5:<FaRegStar/>},
    {id:'p9',pname:'NIKE 900',pprice:'$60',image:<img src={shoes9} alt="shoes9" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>},
    {id:'p10',pname:'NIKE 340',pprice:'$34',image:<img src={shoes10} alt="shoes10" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>},
    {id:'p11',pname:'NIKE 570',pprice:'$28',image:<img src={shoes11} alt="shoes11" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaRegStar/> ,star5:<FaRegStar/>},
    {id:'p12',pname:'PUMA 420',pprice:'$39' ,image:<img src={shoes12} alt="shoes12" width="180px" className=""></img>,
    star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>},
   
  ];
  

function products() {
 

  
  return (

   <div className="products">
<Container>
  
<h2 className="mt-5">Product Listing</h2>
    <h6 className="mb-5">Best rates and good products is our assurance</h6>
    
    {
    product.map((item,i)=>
    
  <p>
   <div class="myDIV" style={{display:'block' }}>
{item.image}
<div class="hide" style={{transform: 'translate(0%, 0%)'}}>
<button class="mt-2">add to cart</button>
</div>
</div>


<ul className="" >  
<Link to="/productdetails" refresh="true" >  
 <li>{item.pname}</li>  
 <li>{item.star1}
{item.star2}
{item.star3}
{item.star4}
{item.star5}</li>  
 <li> {item.pprice}</li>  
 <li></li> 
 </Link>
 </ul>
 
 </p>
 
   )}
    
    </Container>

    
</div>

  );
  }
  export default products;