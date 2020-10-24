import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import {Provider} from 'react-redux'
import "./index.css";
import App from "./components/App";

import { AppReducer } from './Reducers/AppReducer';

const logger = ({ getState }) => (next) => (action) => {
    console.log("Dispatching action: ", action);
    next(action);
};
  
const store = createStore(AppReducer, applyMiddleware(logger, thunk))

ReactDOM.render(
    <Provider store = {store}>
         <App />
    </Provider>,
    document.getElementById("root")
);
