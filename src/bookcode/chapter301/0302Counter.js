import React, { Component } from 'react';

import store from './0301Store.js';
import * as Actions from './0301Actions.js';

const buttonStyle = {
  margin: '10px'
};

// 容器组件（container）/傻瓜组件（dumb）无状态组件（只有render）
// class Counter extends Component {
//   render() {
//     const {caption, onIncrement, onDecrement, value} = this.props;

//     return(
//       <div>
//         <button style={buttonStyle} onClick={onIncrement}>+</button>
//         <button style={buttonStyle} onClick={onDecrement}>-</button>
//         <span>{caption} count: {value}</span>
//       </div>
//     )
//   }
// }

// 没有状态，不需要用对象表示。连类偶读不需要缩略为一个函数
function Counter ({caption, onIncrement, onDecrement, value}) {
  return(
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  )
}

/* 展示组件（presentation）/聪明组件（smart）承担所有store相关联的工作
   它的render函数所做的就是渲染傻瓜组件，只负责传递必要的props
*/
class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    };
  }

  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    return <Counter caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value} />
  }
}

export default CounterContainer;
