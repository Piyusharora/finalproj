import React from 'react';
//import Colors from './colors.module';
//import DetailsThumb from './detailsthumb.module.js';
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
import { BsPersonSquare} from "react-icons/bs";
//import shoes12 from './shoes12.jpeg';
import {Link} from 'react-router-dom';
//import {Switch,BrowserRouter as Router} from 'react-router-dom';
//import Route from 'react-router-dom/Route';
import  './productdetails.module.css'; 
    
  const products=[
      {id:'p1',pname:'NIKE 231',pprice:'$30',image:<img src={shoes1} alt="shoes1" width="580px" className="pr-3 pt-5" ></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>, 
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes1} alt="shoes1" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p2',pname:'NIKE 999',pprice:'$40',image:<img src={shoes2} alt="shoes2" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes2} alt="shoes2" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p3',pname:'PUMA 555',pprice:'$50',image:<img src={shoes3} alt="shoes3" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/> ,star5:<FaStarHalfAlt/>,button1:<input type="button" value="add to cart">
      </input>,modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes3} alt="shoes3" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p4',pname:'NIKE 356',pprice:'$30',image:<img src={shoes4} alt="shoes4" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes4} alt="shoes4" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p5',pname:'PUMA 731',pprice:'$35',image:<img src={shoes5} alt="shoes5" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/> ,star5:<FaStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes5} alt="shoes5" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p6',pname:'NIKE 987',pprice:'$30',image:<img src={shoes6} alt="shoes6" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaRegStar/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes6} alt="shoes6" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p7',pname:'PUMA 530',pprice:'$25',image:<img src={shoes7} alt="shoes7" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStar/>  ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes7} alt="shoes7" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p8',pname:'NIKE 777',pprice:'$20',image:<img src={shoes8} alt="shoes8" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStarHalfAlt/>,star4:<FaRegStar/>,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes8} alt="shoes8" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p9',pname:'NIKE 900',pprice:'$60',image:<img src={shoes9} alt="shoes9" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes9} alt="shoes9" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p10',pname:'NIKE 340',pprice:'$34',image:<img src={shoes10} alt="shoes10" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes10} alt="shoes10" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p11',pname:'NIKE 570',pprice:'$28',image:<img src={shoes11} alt="shoes11" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaRegStar/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes11} alt="shoes11" width="100px" className="pr-3 pt-5" ></img>,},

      {id:'p12',pname:'PUMA 420',pprice:'$39' ,image:<img src={shoes12} alt="shoes12" width="580px" className="pr-3 pt-5"></img>,
      star1:<FaStar/>, star2:<FaStar/> ,star3:<FaStar/> ,star4:<FaStarHalfAlt/> ,star5:<FaRegStar/>,button1:<input type="button" value="add to cart"></input>,
      modal:<select id="modal">
      <option value="basic">Basic</option>
      <option value="premium">Premium</option>
    </select>,treview:'1 review',about:"nice product",over1:<img src={shoes12} alt="shoes12" width="100px" className="pr-3 pt-5" ></img>,},
     
    ];
  
    function Pdetails() {
    return(
      
      <div className="details">
        {
          products.map((item)=>
<p>
  <div>
{item.image}
<div style={{transform: 'translate(-35%, -100%)'}}>
    {item.over1}
  </div>
  <div style={{transform: 'translate(-5%, -200%)'}}>
    {item.over1}
  </div>
  <div style={{transform: 'translate(25%, -300%)'}}>
    {item.over1}
  </div>
<div style={{transform: 'translate(0%,-160%)'}}>
<hr/>
<h4>Review</h4>
<br/>
<BsPersonSquare size="50px"></BsPersonSquare>
<p class="ml-3">
  <ul><li>Mukesh Singh</li>

<li>march 13,2021</li>
<li>
<FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/> </li>
</ul>
</p>
<p class="ml-3">AMAZING SHOES VALUE FOR MONEY</p>
</div>
  </div>
  
<ul className="mt-5" >  
 <li><h2>{item.pname}</h2></li>  
 <li>
 <p>{item.star1}
{item.star2}
{item.star3}
{item.star4}
{item.star5}
</p>
<p class="mt-3 ml-3">
{item.treview} 
<hr/>
</p></li>
<li>
 <p><h4>{item.pprice}</h4></p> <p class="mt-3 ml-3"><h4> {item.modal}</h4></p></li>
 <li> <h4>{item.about}</h4></li>
 <hr/>
 <Link to="/shoppingcart" refresh="true" >  
 <li>{item.button1}</li>   
 </Link>
 
 </ul>
 
 
</p>            

          )}
      </div>
    );
  };


export default Pdetails;