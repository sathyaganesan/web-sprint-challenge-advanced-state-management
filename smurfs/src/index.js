import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import "./index.css";
import App from "./App";

import { smurfReducer } from './reducers/smurfReducer';

console.log('Initial Index.js');

const logger = ({ getState }) => (next) => (action) => {
    console.log("index.js Dispatching action: ", action);
    next(action);
  };
  
console.log('index.js Creating Smurf Reducer Store');

const store = createStore(smurfReducer,  applyMiddleware(logger, thunk));

console.log('index.js created store:', store);
console.log('index.js created store.state:', store.state);
console.log('index.js smurfReducer:', smurfReducer);

ReactDOM.render(
    <Provider store = {store}>
         <App />
    </Provider>,
    document.getElementById("root")
);
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()