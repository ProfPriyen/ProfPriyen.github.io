import React,{useState} from 'react'
import i1 from "../image/11.jpg"
import i2 from "../image/12.jpg"
import i3 from "../image/12p.jpg"

export default function Imghook() {
    const[num,setNum] = useState(i1);
    function increment() {
       setNum (i2);
      
    };
   
    
       return (
       <div classname="banner">
   <button onClick = {increment}> New Image</button>     
    
      <p classname="inner-banner">{<img src={num} height="200px" width="200px" alt="logo"/>}</p>
       </div>
     )
   }