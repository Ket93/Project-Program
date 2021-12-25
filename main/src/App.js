import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar/navbar.js";
import MutualFund from './components/mutualfund.js';
import Home from "./components/pages/home.js";
import Calculator from "./components/Calculator.js";

function App() {

  return (
    <body>
      <Router>


        <div className="App">

          <MyNavbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mutual-funds" element={<MutualFund />} />
            <Route path="/financial-calculator" element={<Calculator />} />
          </Routes>

        </div>

      </Router>


    </body>
  );
}

export default App;
