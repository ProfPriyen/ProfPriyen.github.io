import React from 'react'
import '../App.css'
import { Link, Route, Routes } from 'react-router-dom';

import Nav from 'react-bootstrap/Navbar';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';
import Timer from './Timer';
import Countadd from './Countadd'
import Onchange from './Onchange'
import Product from './Product'
import Countsecond from './Countsecond'
import Hooks from './Hooks';
import Imghook from './Imghook';
import Csshook from './Csshook'
import ToDo from './ToDo'
import Hidebutton from './Hidebutton'
import Filter from './Filter'
import Arraymap from './Arraymap'
import Json from './Json'
import Props from './Props'
import StockDetail from './StockDetail'

const Navbar = (props) => {
  return (
  <>
     <Nav>
     <ul type="none" className="navbar">
     <li>
        <Link to="home">Home</Link>
        </li>
          <li>
        <Link to="Props">Props</Link>
        </li>
          <li>
    <Link to="profile">Profile</Link>
    </li>
          <li>
    <Link to="settings">Settings</Link>
    </li>
    <li>
        <Link to="product">Product</Link>
        </li>
        <li>
    <Link to="Timer">Timer</Link>
    </li>
    <li>
        <Link to="StockDetail">StockDetail</Link>
        </li>
    
    <li class="dropdown">
    <button class="dropbtn">Effects
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to="Onchange">Onchange</Link>
    <Link to="ToDo">ToDo List</Link>
    <Link to="Hidebutton">Hide Button</Link>
    <Link to="Filter">Filter effect</Link>
    <Link to="Arraymap">Filter Array</Link>
    <Link to="Json">Json Effect</Link>
     </div>
     </li>

    <li class="dropdown">
    <button class="dropbtn">Counts
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to="Countadd">Counter </Link>
     <Link to="Countsecond">seconds </Link>
     </div>
     </li>

    <li class="dropdown">
    <button class="dropbtn">Hook
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to="Hooks">Hooks</Link>
    <Link to="Imghook">Imghook</Link>
    <Link to="Csshook">Csshook</Link>
     </div>
     </li>
      </ul>
</Nav>
{/* <marquee behavior="scroll" direction="left">      Welcome, {props.name}!      </marquee> */}
<div className="scrolling-container">
  <p className="scrolling-text">Welcome, {props.name} with id no. {props.id}!</p>
</div>
<div>
<Routes>
<Route path="Props" element={<Props />} />
  <Route path="Home" element={<Home />} />
  <Route path="product" element={<Product />} />
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
  <Route path="Timer" element={<Timer />} />
  <Route path="Countadd" element={<Countadd/>}/>
  <Route path="Hooks" element={<Hooks />} />
  <Route path="Imghook" element={<Imghook />} />
  <Route path="Csshook" element={<Csshook />} />
  <Route path="Countsecond" element={<Countsecond/>}/>
  <Route path="Onchange" element={<Onchange/>}/>
  <Route path="ToDo" element={<ToDo/>}/>
  <Route path="Hidebutton" element={<Hidebutton/>}/>
  <Route path="Filter" element={<Filter/>}/>
  <Route path="Arraymap" element={<Arraymap/>}/>
  <Route path="Json" element={<Json/>}/>
  <Route path="StockDetail" element={<StockDetail/>}/>
  
</Routes>
</div>

</>
)}



export default Navbar
