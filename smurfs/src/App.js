import React, { Component, useReducer } from "react";
import "./App.css";
import FetchSmurf from './components/FetchSmurf';
import {SmurfContext} from './Context/SmurfContext'
import { SmurfReducer, initialSmurfState } from './Reducers/SmurfReducer';

export const App = () => {
 
  const [fetchState, fetchStateDispatch] = useReducer(SmurfReducer, initialSmurfState);

    return (

      <div className="App">

        <h1>SMURFS Page</h1>

        <SmurfContext.Provider value = {fetchState}>
          <FetchSmurf dipatch={fetchStateDispatch} />
        </SmurfContext.Provider>
          
      </div>
      
    );
  }
