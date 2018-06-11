import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root'));
// Hot Module Replacement ( HMR) reload react app but don't do  page refresh
if (module.hot) {
    module.hot.accept();
    }
registerServiceWorker();
