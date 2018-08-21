import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.sass';
import App from './components/App';
import store from './lib/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('app'));
