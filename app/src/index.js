import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppStore from './actions/AppStore';



ReactDOM.render(<App store={AppStore} />, document.getElementById('root'));
registerServiceWorker();
