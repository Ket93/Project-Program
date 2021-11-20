import './App.css';
import MyButton from './components/button.js';
import MyForm from './components/form.js';
import mutualfund from "./images/mutualfund.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar/navbar.js";
import Home from "./components//pages/home.js";
import MutualFund from './components/mutualfund.js';

function App() {

  return (
    <body>
      <Router>


        <div className="App">

          <MyNavbar />

          <Routes>
            <Route path="/" element={<MutualFund />} />
          </Routes>

        </div>

      </Router>


    </body>
  );
}

export default App;
