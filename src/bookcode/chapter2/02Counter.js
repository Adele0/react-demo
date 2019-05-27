import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {
  constructor(props) {
    // 不调用super(props)组件实例的所有成员函数就无法通过this.props访问到父组件传递的props值
    super(props)
    // es6创造的react组件类并不自动绑定this到当前实例对象
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
    // 必须是js对象
    this.state = {
      count: props.initValue
    }
  }

  onClickIncrementButton() {
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

    this.setState({count: newValue})
    // 当前组件传递给外界props（函数）
    this.props.onUpdate(newValue, previousValue)
  }

  render() {
    // ES6 解构
    const {caption} = this.props;
    return(
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    )
  }
}

// 从 React v15.5 开始 ，React.PropTypes 助手函数已被弃用
// Counter.propTypes = {
//   caption: PropTypes.string.isRequired,
//   initValue: PropTypes.number,
//   onUpdate: PropTypes.func
// };

Counter.defaultProps = {
  initValue: 0,
  onUpdate: f => f //什么都不做的函数
};

export default Counter;
