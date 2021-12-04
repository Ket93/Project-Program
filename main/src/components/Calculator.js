import React from 'react';
import Form from './calcform.js';
import Mybutton from './button.js';
import images from '../images/moneystash.png';
import './Calculator.css';



function getVal() {
  const val_PV = document.querySelector('.presentValueInterest').value;
  const val_interest = document.querySelector('.interstInput').value;
  const val_periodic = document.querySelector('.perodicInput').value;
  const val_periods = document.querySelector('.periodsInput').value;
  const val_assets = document.querySelector('.assetsInput').value;

  var FV = val_PV * (1 + val_interest)^val_periods
}

function Calculator() {

  return (
    <div className="Calculator">
      <h1 className="App-header">
        Financial Calculator 
      </h1>
      

      {/*<img src={images} class="background-image"></img>*/}
      <Form class="calc-form"/>
      
      <Mybutton />
      
    </div>
  );
}

export default Calculator;