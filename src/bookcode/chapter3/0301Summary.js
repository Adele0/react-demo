import React, { Component } from 'react';

import store from './0301Store.js';

class Summary extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      // hasOwnProperty()方法用来检测一个对象自身(不包括原型链)是否具有指定名称的属性。有，返回true，否则返回false
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }
    return { sum: sum };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    const sum = this.state.sum;
    return (
      <div>Total Count: {sum}</div>
    );
  }
}

export default Summary;
