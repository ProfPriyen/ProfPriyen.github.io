import React,{useState} from 'react'

export default function Onchange () {
  const clickMe = () =>
{
  alert("This is Submit")
}
const Reset = () =>
{
  alert("Fill again")
}

  const[firstName, setFirstName]= useState("");
  const[lastName, setLastName]= useState("");
function handlechange(event) {
    //console.log(event.target.value); 
    //to print value in colsole
    setFirstName(event.target.value);
  }
function handlechange2(event)
{
    setLastName(event.target.value);
}
  
    return (
      <>
    <div  class="App-header">
     <h1> Enter First Name </h1><input name="firstName" value={firstName} onChange={handlechange}/>   
         <h1>Your Name= {firstName}</h1> 
         <h1> Enter Last Name </h1>
         <input name="lastName" value={lastName} onChange={handlechange2}/>   

<h2>Your Surname ={lastName}</h2> 
         </div>
         <center> <h1 >Database Website</h1>
      <button onClick={clickMe}> Submit</button>
      <button onClick={Reset}> Reset</button>
      </center>
      </>
);
}
 