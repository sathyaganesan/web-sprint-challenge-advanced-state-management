import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import "./index.css";
import{ App }from "./App";

import { SmurfReducer } from './Reducers/SmurfReducer';

const logger = ({ getState }) => (next) => (action) => {
    console.log("Dispatching action: ", action);
    next(action);
};
  
const store = createStore(SmurfReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store = {store}>
         <App />
    </Provider>,
    document.getElementById("root")
);
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()