import React,{useEffect,useState} from 'react'

const Count = () => {
 const[count,setCount]=useState(0);
 useEffect(()=>
 {
    setTimeout(() =>
    {
        setCount((count)=>count+1);
    },1000);
});
 
 return (
    <div>
 this page has {count} seconds....     
    </div>
  )
}

export default Count
