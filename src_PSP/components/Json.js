import React from 'react'
import i1 from "../image/11.jpg"
import i2 from "../image/12.jpg"

// rfc direct import structure
const Json = () => {
    const images=
[
    {
    id:1,
    pic:i1
},
{
    id:2,
    pic:i2
}
];
 
   return (
    <div>
      {
        images.map((val) => 
        {
          return <img src={val.pic} height="200px" width="200px" alt="logo"/>
        })
    }
     </div>
   )}
      export default Json;