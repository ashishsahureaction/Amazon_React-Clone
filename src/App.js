import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, NavLink, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Check from './Check';


function App() {
  return (
    <Router>
 <div className="app">
 <Routes>
 <Route path='/' element={<h1><Header/><Home/>Home!!!</h1>}></Route>
 <Route path='/checkout' element={<h1><Header/><Checkout/>Checkout</h1>}></Route>
 <Route path='/login' element={<h1>Login Page</h1>}></Route>  

 </Routes>
 <Check/>
    </div>
    </Router>

  );
}

export default App;
