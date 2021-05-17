import React from 'react';

//import Colors from './colors.module';
//import DetailsThumb from './detailsthumb.module.js';
import shoes1 from './shoes1.jfif';
import shoes2 from './shoes2.jfif';
//import shoes12 from './shoes12.jfif';

import {Switch,BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
   const products=[
        {id:1,iname1:"nike231",price1:"$30",details1:"lorem",image1:<img src={shoes1} alt="shoes1" width="580px" className="pr-3 pt-5"></img>
    ,button1:<input type="button" value="add to cart"></input>,},
    {id:2,iname1:"nike221",price1:"$30",details1:"lorem",image1:<img src={shoes2} alt="shoes2" width="580px" className="pr-3 pt-5"></img>
    ,button1:<input type="button" value="add to cart"></input>,}

      
    ];

  
    function Pdetails() {
    return(
      <Router>
      <div className="details">
        {
          products.map((item)=>
<p>
    
    
{item.image1}
<ul className="mt-5">
<li key={item.id}>{item.iname1}</li>
<li>{item.price1}</li>
<li>{item.details1}</li>
<li>{item.button1}</li>
</ul>

<Switch>
<Route exact path="/productdetails/" component={Pdetails} >
  
  </Route>
</Switch>
</p>           
             
            
          )}
      </div>
      </Router>
    );
  };


export default Pdetails;