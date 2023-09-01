import React, { useEffect, useState } from 'react';
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from './img4.jpg'
const Gallery = [
    {
        category:"All"
    },
    {
        id:1,
        pic:img1,
        category:"Samsung"
    },
    {
        id:1,
        pic:img2,
        category:"Mi2"
    },
    {
        id:1,
        pic:img3,
        category:"Oneplus"
  },
    {
        id:1,
        pic:img4,
        category:"Mi2"
    },

];

function Product () {
    const[images,setImage]=useState(Gallery);
    //const [categList, setCategList] = useState(Gallery);
    
    const handleproduct=(Item)=>
    {
        const finaldata=Gallery.filter((value)=>
        {
            return value.category===Item;
        });
        if(Item !== "All"){
            setImage(finaldata);
            
        }
        else{
            setImage(Gallery)
            
        }
    }
   

  return (
    <div>
        <button onClick={() =>handleproduct('All')}>All</button>
        <button onClick={() =>handleproduct('Samsung')}>Samsung</button>
        <button onClick={() =>handleproduct('Mi2')}>Mi</button>
        <button onClick={() =>handleproduct('Oneplus')}>Oneplus</button>
                             
        <div>
            {
                images.map((val)=>
                {   
                    return(    
                    <>
                        <img src={val.pic} />
                    </> 
                    ) 
                })
            }
            </div> 
    </div>
  )
}

export default Product