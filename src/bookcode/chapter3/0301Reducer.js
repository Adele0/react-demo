    
import * as ActionTypes from './0301ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      // 展开操作符spread operator
      return {...state, [counterCaption]: state[counterCaption] + 1};
      /*
      const newState = Object.assign({}, state)
      newState[counterCaption] ++
      return newState
       */
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
