import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  var person={name:"Mahfuzur benson",
  phone:"01531542960"}
  var style={
    color:'red',
    backgroundColor:'salmon'
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
  <h1 style={style}>Here comes:{person.name+" "+person.phone}</h1>
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
