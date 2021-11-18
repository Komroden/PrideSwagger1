import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {AppWrapper} from "./AppWrapper";

ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);


reportWebVitals();
