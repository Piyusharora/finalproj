import React from 'react';
//import Products from './products.module';
//import shoes1 from './shoes1.jfif';
function products() {
const product=[
    {id:'p1',pname:'NIKE 231',pprice:'$30'},
    {id:'p2',pname:'NIKE 232',pprice:'$40'},
    {id:'p3',pname:'NIKE 233',pprice:'$50'},
    {id:'p4',pname:'NIKE 234',pprice:'$30'},
    {id:'p5',pname:'NIKE 235',pprice:'$35'},
    {id:'p6',pname:'NIKE 236',pprice:'$30'},
    {id:'p7',pname:'NIKE 237',pprice:'$25'},
    {id:'p8',pname:'NIKE 238',pprice:'$20'},
    {id:'p9',pname:'NIKE 239',pprice:'$60'},
    {id:'p10',pname:'NIKE 240',pprice:'$34'},
    {id:'p11',pname:'NIKE 241',pprice:'$28'},
    {id:'p12',pname:'NIKE 242',pprice:'$39' ,url:'./homepage/shoes1.jfif'},
   
  ]

  


  return (
<div className="App">

 {
    
   product.map((item,i)=>

   
 
<p>
{item.pname}

{item.pprice}
</p>

  )}
    
        </div>
  );
}
export default products;