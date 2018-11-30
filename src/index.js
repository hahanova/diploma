import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { RouterApp } from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterApp />, document.getElementById('root'));
registerServiceWorker();