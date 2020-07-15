import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Fonts/SFProDisplay-Black.ttf'
import './Fonts/SFProDisplay-Bold.ttf'
import './Fonts/SFProDisplay-Heavy.ttf'
import './Fonts/SFProDisplay-Light.ttf'
import './Fonts/SFProDisplay-Medium.ttf'
import './Fonts/SFProDisplay-Regular.ttf'
import './Fonts/SFProDisplay-Semibold.ttf'
import './Fonts/SFProDisplay-Thin.ttf'
import './Fonts/SFProDisplay-Ultralight.ttf'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
