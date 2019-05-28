import React, { Component } from 'react';

import * as Actions from './0301Actions.js';

const buttonStyle = {
  margin: '10px'
};

// 没有状态，不需要用对象表示。连类都不需要，缩略为一个函数
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
  constructor(props, context) {
    super(props, context);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.caption]
    };
  }

  onIncrement() {
    this.context.store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    this.context.store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    return <Counter caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value} />
  }
}

// CounterContainer.contextTypes = {
//   store: props.state
// }

export default CounterContainer;
