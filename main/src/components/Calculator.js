import React from 'react';
import Form from './form.js';
import images from '../images/moneystash.png';

function Calculator() {
  return (
    <div className="Calculator">
      <header className="App-header">
        Financial Calculator 
      </header>
      
      <div style={{ backgroundImage: `url(${images})`, height:"100vh", backgroundRepeat: 'no-repeat'}}>
      <Form />
    </div>
    </div>
  );
}

export default Calculator;