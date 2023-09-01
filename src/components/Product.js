import React from 'react'
import '../App.css';
import i1 from "../image/11.jpg" //(File in different folder so ../)
import i2 from "../image/12.jpg"
import i3 from "../image/12p.jpg"
import Task from '../Task';

const Product = () => {
  return (
    <div>
      <div className="App">
 <div class="myclass">
   <Task name="Mobile" img1={i1} price="15000 Rs" disc="Hello Mi note 11"/>
 </div>
 <div class="myclass">
   <Task name="Mobile" img1={i3} price="20000 Rs " disc="Hello Mi note 12"/>
 </div>
 <div class="myclass">
   <Task name="Mobile" img1={i2} price="25000 Rs" disc="Hello Mi note 12 Pro"/>
 </div>

 </div>
 </div>
  
  )
}

export default Product
