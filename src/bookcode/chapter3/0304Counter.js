import React from 'react';
import * as Actions from './0301Actions.js';
import { connect } from 'react-redux';

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

// 把store上的状态转化为内层傻瓜组件的prop
function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

// 把内层傻瓜组件中的用户动作转化为派送给store的动作（把暴露出来的函数类型prop关联上dispatch）
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

// 2次函数执行，connect和connect返回的函数
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
