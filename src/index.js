import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
/* 书上每一节例子 */
// import Example from './bookcode/chapter1/01ClickCounter';
// import Example from './bookcode/chapter2/02ControlPanel';
// import Example from './bookcode/chapter3/0301ControlPanel';
// 第三章，context中需要把store和provider挂在全局(报错store undefined，无法执行，可能是版本问题)
// import store from './bookcode/chapter3/0301Store.js';
// import Example from './bookcode/chapter3/0301ControlPanel';
// import Provider from './bookcode/chapter3/0303Provider.js';
// 使用react-redux插件
// import { Provider } from 'react-redux';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<Example />, document.getElementById('root'));
  // 第三章，context中需要把store和provider挂在全局
  // ReactDOM.render(
  //   <Provider store={store}>
  //     <Example />
  //   </Provider>
  //   , document.getElementById('root'));


/*
* 视频学习代码 
*/
import TodoList from './videocode/TodoList.js';
ReactDOM.render(<TodoList />, document.getElementById('root'))

// serviceWorker.unregister();
