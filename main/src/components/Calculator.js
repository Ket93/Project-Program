import React from 'react';
import Form from './form.js';
import images from '../images/moneystash.png';
import './Calculator.css';

function Calculator() {
  return (
    <div className="Calculator">
      <h1 className="App-header">
        Financial Calculator 
      </h1>
      
      <form style={{backgroundImage: `url(${images})`, height:"100vh", backgroundRepeat: 'no-repeat'}}>
      <Form />
    </form>
    </div>
  );
}

export default Calculator;