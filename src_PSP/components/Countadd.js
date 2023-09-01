import React,{useEffect,useState} from 'react'


const Countadd= () => {
    const[count,setCount]=useState(0);
    const[calculation,setCalculation]=useState(0);
    useEffect(() =>
{
    setCalculation(()=>count*2);
    });

  return (
    <div>
       I have click this button{count} times....     
       <button onClick={()=>setCount((c)=>c+1)}>Like</button>
       <p>Calculation:{calculation}</p>
    </div>
  )
}

export default Countadd