
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {} from "react-icons/fa";
import './searchbar.module.css';
import Products from '../products/products.module';




class Searchbar extends React.Component{
  constructor(){
    super();
    this.state={
      search:''
    };
  }
  updatesearch(event){
    this.setState({search:event.target.value.substr(0,20)});
  }
  
  render(){
    let filter=this.props.product.filter(
      (product)=>{
        return product.pname.toLowerCase().indexOf(this.state.search.toLowerCase()) !==-1;
      }
    );
  return (
    <div className="search">
<h1 className="mt-5">Best For Your Feet 
<strong>ShoesHub</strong></h1>
<form>
      {filter.map((product)=>{
        return <Products product={product} 
        key={product.pname}></Products>
      })}
    
      <input type="text" value={this.state.search} onChange={this.updatesearch.bind(this)} placeholder="Search"/>
    </form>
    </div>
    );
  }}
  export default Searchbar;