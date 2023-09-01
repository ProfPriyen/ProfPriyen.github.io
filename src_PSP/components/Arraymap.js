import React from 'react'

const Arraymap = () => {
    const arr=[1,2,3,4,5];
    const newarr=arr.filter((num) =>
{

if(num===3)
{
  return false;
 }
  else 
  { return true;
  }
});
return  (
    <div>
      <center>
        <h1>Using Arraymap function</h1>
      </center>
      {/* {arr.map((value) => 
      {
return <h1> The array items are: {value}</h1>;
      })} */}
      <h3> After Filtering :{newarr}</h3>
    </div>
  )}

export default Arraymap
