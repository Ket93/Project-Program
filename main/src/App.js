import React from 'react';
import Form from './components/form.js';
import images from './images/moneystash.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Financial Calculator 
      </header>
      
      <div style={{ backgroundImage: `url(${images})`, height:"100vh", backgroundRepeat: 'no-repeat'}}>
      <Form />
    </div>
    </div>
  );
}

export default App;