import React from "react";
import "./App.css";
import FetchSmurf from './components/FetchSmurf';

console.log('app.js init');
const App = () => {
 
    return (

      <div className="App">

        <h1>SMURFS Page</h1>
        <FetchSmurf/>

      </div>
      
    );
  }
export default App;

