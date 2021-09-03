import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from "./Components/form";
import data from "./Components/data.json";
function App() {
  return (
    <div className="App">
    <div className="App-content">
      <p>
        Aqui haremos el TO-DO List
      </p>
        <Form/>
    </div>
  </div>
  );
}

export default App;
