import React,{useState} from 'react'
import '../a1.css'

export default function Hooks() 
{
 const[num,setNum] = useState(0);
 function increment() {
    setNum (num+1);
   
 };
 function decrement() {
    if (num !=0)
    {
    setNum (num-1);}
 };
 
    return (
    <div className="banner">
    
   <p classname="inner-banner">My Age is:{num}</p>
   <br/>
<button onClick = {increment}> Increment</button>     
 
<button onClick = {decrement}> Decrement</button>     
    </div>
  )
}

