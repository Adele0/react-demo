import React from 'react';
import {connect} from 'react-redux';

// 没有状态，不需要用对象表示。连类都不需要，缩略为一个函数
function Summary ({value}) {
  return (
    <div>Total Count: {value}</div>
  );
}

function mapStateToProps(state) {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return {value: sum};
}


export default connect(mapStateToProps)(Summary);
