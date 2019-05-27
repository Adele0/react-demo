import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Example from './bookcode/chapter1/01ClickCounter';
// import Example from './bookcode/chapter2/02ControlPanel';
import Example from './bookcode/chapter301/0301ControlPanel';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Example />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
