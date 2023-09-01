import React,{useState} from 'react'
const Hidebutton =() =>{
    
const[show,setShow]= useState(false);
const[buttontext,setButtontext]= useState("show the value")
const[text,setText]= useState("")
function showhide() {
      setShow(!show);

      if(show===false)
      {
        setButtontext("hide");
        <br/>
        setText("Hello This value is hide by clkicking hide button");
      }
      else{
        setButtontext("show");
        setText("Click to see Hidden Message");      
    }
};
   
    
       return (
       <div>
   <button onClick = {showhide}> {buttontext}</button> 
   {text}    
       </div>
     )
   }
   export default Hidebutton;