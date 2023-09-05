
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Components from './components/Components';
import Authentication from './Authentication';



function App() {
  return (
    <>
   
   <Router>
      <Routes>

      <Route path="/" element={<Authentication /> }/>
        <Route path="/components/*" element={<Components/>} />
        {/* Other routes */}
        {/* Git changed */}
{/*Edited line pulled*/}
      </Routes>
     </Router>
     
    </>
  );
}

export default App

