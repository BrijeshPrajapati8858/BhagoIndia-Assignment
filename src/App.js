
import React from 'react';
import './App.css';
import Nav_ from './Components/Navbar';
import Footer from './Components/Footer';

import Card_ from './Components/Card';
import Detail from './Components/Detail';
import { Route, Routes } from 'react-router-dom';

  function App() {
    

 

  
  return (
    <div className="App">
      <Nav_ />



      <Routes>
        <Route path="/" element={<Card_ />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}
 
export default App;
