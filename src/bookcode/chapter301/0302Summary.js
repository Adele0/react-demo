import React, { Component } from 'react';

import store from './0301Store.js';

// class Summary extends Component {
//   render() {
//     return (
//       <div>Total Count: {this.props.sum}</div>
//     );
//   }
// }

// 没有状态，不需要用对象表示。连类都不需要，缩略为一个函数
function Summary ({sum}) {
  return (
    <div>Total Count: {sum}</div>
  );
}

class SummaryContainer extends Component {
  constructor(props) {
    super(props);

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
    return (
      <Summary sum={this.state.sum}></Summary>
    );
  }
}

export default SummaryContainer;
