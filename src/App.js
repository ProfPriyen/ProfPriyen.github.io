
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Login';
import Components from './components/Components';



function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Login /> }/>
        <Route path="/components/*" element={<Components name='user01' id='01'/>} />
        {/* Other routes */}
      </Routes>
     </Router>
    </>
  );
}

export default App