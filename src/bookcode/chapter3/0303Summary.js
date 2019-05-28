import React, { Component } from 'react';

// 没有状态，不需要用对象表示。连类都不需要，缩略为一个函数
function Summary ({sum}) {
  return (
    <div>Total Count: {sum}</div>
  );
}

class SummaryContainer extends Component {
  // 带上context参数才能让react实例初始化context
  // constructor(props, context) {
  //   super(props, context);
  constructor() {
    super(...arguments);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = this.context.store.getState();
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
    this.context.store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange);
  }

  render() {
    return (
      <Summary sum={this.state.sum}></Summary>
    );
  }
}

// SummaryContainer.contextTypes = {
//   store: this.props.state
// }

export default SummaryContainer;
