import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage';
import { Provider } from 'react-redux';
import store from './store';
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
    <Homepage />
  </Provider>
);
