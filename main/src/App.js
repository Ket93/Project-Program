import './App.css';
import MyButton from './components/button.js';
import MyForm from './components/form.js';
import mutualfund from "./images/mutualfund.png";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar/navbar.js";
import Home from "./components//pages/home.js";

function App() {

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    fontSize: "20px",
    padding: "10px 60px",
    marginTop: "1em",
    marginBottom: "2em",
    borderRadius: "5px",
    margin: "10px 0px",
    cursor: "pointer"
  };

  const labelStyle = {
    fontSize: "20px",
  };

  const inputStyleAction = {
    fontSize: "20px",
    marginLeft: "4em",
    marginBottom: "15px",
  };

  const inputStyleQuantity = {
    fontSize: "20px",
    marginLeft: "3.1em",
    marginBottom: "15px",
  };

  const inputStyleCompany = {
    fontSize: "20px",
    marginLeft: "2.7em",
    marginBottom: "15px",
  };

  const inputStyleOrder = {
    fontSize: "20px",
    marginLeft: "2em",
    marginBottom: "15px",
  };



  return (
    <body>
      <Router>


        <div className="App">

          <MyNavbar />

          <Routes>
            <Route path="/financial-calculator" element={Home} />
          </Routes>


          <h1 class="title">
            Mutual Funds and Stocks
          </h1>

          <h2>Search for a Fund</h2>

          <MyForm text="Action" labelStyle={labelStyle} inputStyle={inputStyleAction} type="text" />
          <MyForm text="Quantity" labelStyle={labelStyle} inputStyle={inputStyleQuantity} type="number" />
          <MyForm text="Company" labelStyle={labelStyle} inputStyle={inputStyleCompany} type="text" />
          <MyForm text="Order Type" labelStyle={labelStyle} inputStyle={inputStyleOrder} type="text" />



          <MyButton text="Submit" style={buttonStyle} />

          <img src={mutualfund} class="mutualfundIMG" />
        </div>

      </Router>


    </body>
  );
}

export default App;
