import React from 'react';
import Calculator from './components/Calculator.js';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar/navbar.js";
import MutualFund from './components/mutualfund.js';
import Login from './components/login.js';
import SignUp from './components/signUp.js';

function App() {

  return (

    <body>
      <Router>


        <div className="App">

          <MyNavbar />

          <Routes>
            <Route path="/" element={<MutualFund />} />
            <Route path="/calc" element={<Calculator />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/signUp' element={<SignUp/>} />
          </Routes>

        </div>

      </Router>


    </body>
  );
}

export default App;