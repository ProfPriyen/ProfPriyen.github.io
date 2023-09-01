import React,{useState} from 'react'

export default function Imghook() {
    const[num1,setNum1] = useState("red");
    const[num2,setNum2] = useState("12px");
    function Change() {
      if(num1==="red")
   
{
       setNum1 ("blue");
       setNum2("20px");}
       else{
         setNum1("red");
         setNum2("12px")
       }
    };
   
    
       return (
       <div className="banner">
    
      <p style={{ backgroundColor: num1}}>New color After click = </p>
   <button onClick = {Change}> Change CSS</button>     
      <p style={{fontSize:num2}}>Can you observe font resize??</p>
       </div>
     )
   }