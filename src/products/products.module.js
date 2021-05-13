import {Container} from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import shoes1 from './shoes1.jfif';
import shoes2 from './shoes2.jfif';
import shoes3 from './shoes3.jfif';
import shoes4 from './shoes4.jfif';
import shoes5 from './shoes5.jfif';
import shoes6 from './shoes6.jfif';
import shoes7 from './shoes7.jfif';
import shoes8 from './shoes8.jfif';
import shoes9 from './shoes9.jfif';
import shoes10 from './shoes10.jfif';
import shoes11 from './shoes11.jfif';
import shoes12 from './shoes12.jfif';
import { FaRegStar,FaStar,FaStarHalfAlt} from "react-icons/fa";


import './products.module.css';

  const product=[
    {id:'p1',pname:'NIKE 231',pprice:'$30',image:<img src={shoes1} alt="shoes1" width="180px" className="pr-3 pt-5"></img>,},
    {id:'p2',pname:'NIKE 999',pprice:'$40',image:<img src={shoes2} alt="shoes2" width="180px" className="pr-3 pt-5"></img>},
    {id:'p3',pname:'PUMA 555',pprice:'$50',image:<img src={shoes3} alt="shoes3" width="180px" className="pr-3 pt-5"></img>},
    {id:'p4',pname:'NIKE 356',pprice:'$30',image:<img src={shoes4} alt="shoes4" width="180px" className="pr-3 pt-5"></img>},
    {id:'p5',pname:'PUMA 731',pprice:'$35',image:<img src={shoes5} alt="shoes5" width="180px" className="pr-3 pt-5"></img>},
    {id:'p6',pname:'NIKE 987',pprice:'$30',image:<img src={shoes6} alt="shoes6" width="180px" className="pr-3 pt-5"></img>},
    {id:'p7',pname:'PUMA 530',pprice:'$25',image:<img src={shoes7} alt="shoes7" width="180px" className="pr-3 pt-5"></img>},
    {id:'p8',pname:'NIKE 777',pprice:'$20',image:<img src={shoes8} alt="shoes8" width="180px" className="pr-3 pt-5"></img>},
    {id:'p9',pname:'NIKE 900',pprice:'$60',image:<img src={shoes9} alt="shoes9" width="180px" className="pr-3 pt-5"></img>},
    {id:'p10',pname:'NIKE 340',pprice:'$34',image:<img src={shoes10} alt="shoes10" width="180px" className="pr-3 pt-5"></img>},
    {id:'p11',pname:'NIKE 570',pprice:'$28',image:<img src={shoes11} alt="shoes11" width="180px" className="pr-3 pt-5"></img>},
    {id:'p12',pname:'PUMA 420',pprice:'$39' ,image:<img src={shoes12} alt="shoes12" width="180px" className="pr-3 pt-5"></img>},
   
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
{item.image}
<span><input type="button" value ="add to cart"></input></span>
<br/>
<text>
{item.pname}




 <FaStar></FaStar>
 <FaStar></FaStar>
 <FaStar></FaStar>
 <FaStarHalfAlt></FaStarHalfAlt>    
 <FaRegStar></FaRegStar>
 
 {item.pprice}
 </text>

 </p>
   )}
    
    </Container>


</div>
  );
  }
  export default products;