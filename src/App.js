import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const products=[
    {name:"Photography",price:"$9.99/mo",link:"https://commerce.adobe.com/checkout/email/?cli=creative&co=US&ctx=fp&items%5B0%5D%5Bcs%5D=0&items%5B0%5D%5Bid%5D=08823B2E8361CE018F9A2C51CF489283&lang=en&promoid=P3KMQYMW&mv=other" },
    
    {name:"Acrobat Pro",price:"14.99/mo",link:"https://commerce.adobe.com/checkout/email/?cli=creative&co=US&ctx=fp&items%5B0%5D%5Bcs%5D=0&items%5B0%5D%5Bid%5D=792E692BB8D37D00463DA3FB1BC68ECB&lang=en&promoid=P3KMQYMW&mv=other" },
    
    {name:"Premiere Rush",price:"$9.99/mo",link:"https://commerce.adobe.com/checkout/email/?cli=creative&co=US&ctx=fp&items%5B0%5D%5Bcs%5D=0&items%5B0%5D%5Bid%5D=50BF575355545EEAB91FA5F0BB682A8B&lang=en&promoid=P3KMQYMW&mv=other" },
  
     ] 
 
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       
  <Products product={products[0]}></Products>
  <Products product={products[1]}></Products>
  <Products product={products[2]}></Products>

         
          </header>
          
     
  </div>
  );
}

function Products(props){
const productStyle={

border:"1px solid gray",
backgroundColor:"lightgray",
height:"250px",
width:"200px",
float:"left",
color:"black",
borderRadius:"10px",
overflow:"hidden",
marginBottom:"10px"

}

const buttonStyle={

  backgroundColor:"skyblue",
  color:"black",
  borderRadius:"5px",
  padding:"5px 8px",
  fontSize:"18px",
  
}

const buttonWriting={
  textDecoration:"none"
}

const {name, price, link}=props.product;

return (

<div style={productStyle}>

<h5>{name}</h5>
<p>{price}</p>
<button style={buttonStyle} ><a style={buttonWriting} href={link}>Buy Now</a></button>

</div>





)




}



export default App;
