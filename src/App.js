import React from 'react';
import logo from './logo.svg';
import './App.css';




  const style={

  color:'red',
  fontWeight:'700',
  backgroundColor:'yellow'

  }

  
  
function App() {
  
  const players=["Messi","C.Ronaldo"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
         
        <h3>I am a React Hero</h3>
         <Person></Person>
          <Footballer name={players[0]} nationality="Argentina" ></Footballer>      
          <Footballer name={players[1]} nationality="Portugal"></Footballer>

         
          </header>
          
     
  </div>
  );
}


function Person(){

const personStyle={
color:'orange',
border:'2px solid yellow',
marginBottom:'10px',
padding:"10px 20px"

}

return(
<div style={personStyle}>

<h1>Shakib Al Hasan</h1>
<h3>Hero of the Year</h3>

</div>

)


}

function Footballer(props){
  const footballStyle={
   
    border:"2px solid gold",
    padding:"10px 15px",
    borderRadius:"10px"


  }
console.log(props)

return (

<div style={footballStyle}>

<h1>The Best: {props.name} </h1>
<h3>Nationality: {props.nationality} </h3>

</div>

)


}

export default App;
