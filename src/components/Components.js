import React from 'react'
import '../App.css'

import { Link, Route, Routes } from 'react-router-dom';
import Wordfinder from './Wordfinder'

import Nav from 'react-bootstrap/Navbar';
import Home from './Home';
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
import Addition from './Addition';

import StockDetail from './StockDetail'
import TextConverter from './TextConverter'
import WordCounter from './WordCounter'
import Filterfruits from './Filterfruits'
import Footer from '../Footer';
const Navbar = (props) => {
  const username=localStorage.getItem("username");
  return (
  <>
     <Nav>
     <ul type="none" className="navbar">
     <li>
        <Link to="Home">Home</Link>
        </li>
        {/* <li>
        <Link to="WordCounter">Word</Link>
        </li> */}
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
    <Link to="Addition">Addition Number</Link>
    <Link to="Filter">Filter effect</Link>
    <Link to="TextConverter">Textconverter</Link>
    <Link to="Wordfinder">FindWord</Link>
    <Link to="Filterfruits">FilterFruits</Link>
     </div>
     </li>
      </ul>
</Nav>
{/* <marquee behavior="scroll" direction="left">      Welcome, {props.name}!      </marquee> */}
<div className="scrolling-container">
  <p className="scrolling-text">Welcome, {username} !</p>
</div>
<div>
<Routes>
  <Route path="Home" element={<Home />} />
  <Route path="product" element={<Product />} />
  {/* <Route path="WordCounter" element={<WordCounter />} /> */}
  <Route path="TextConverter" element={<TextConverter />} />
  <Route path="Wordfinder" element={<Wordfinder />} />
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
  <Route path="Addition" element={<Addition/>}/>
  <Route path="StockDetail" element={<StockDetail/>}/>
  <Route path="Filterfruits" element={<Filterfruits/>}/>
</Routes>
</div>
{/* <Footer/> */}
</>
)}



export default Navbar
