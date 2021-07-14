import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  // will have to wrap the App component in the BrowserRouter to use routing
  <BrowserRouter>  
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
