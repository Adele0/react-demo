import React, { Component } from 'react';
import Counter from './02Counter.js';

const style = {
  margin: '20px'
}

class ControlPanel extends Component {
  constructor(props) {
    super(props)
    this.onCounterUpdate = this.onCounterUpdate.bind(this);
    this.initValues = [ 0, 10, 20];
    /*
      reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
      reduce() 可以作为一个高阶函数，用于函数的 compose。
      注意: reduce() 对于空数组是不会执行回调函数的。
      array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
        total必需。初始值, 或者计算结束后的返回值。
        currentValue必需。当前元素。
        currentIndex可选。当前元素的索引
        arr可选。当前元素所属的数组对象
        initialValue可选。传递给函数的初始值
    */
    const initSum = this.initValues.reduce((a, b) => a+b, 0);
    this.state = {
      sum: initSum
    };
  }

  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange});
  }

  render() {
    return(
      // jsx中必须用{}把prop值包住
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="First" />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
        <hr/>
        <div>Total Count: {this.state.sum}</div>
      </div>
    )
  }
}

export default ControlPanel;
