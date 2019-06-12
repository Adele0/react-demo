import { INIT_DATA, CHANGE_INPUT_VULAE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

// action就是dispatch接受的action
export default (state = defaultState, action) => {

  if (action.type === CHANGE_INPUT_VULAE) {
    // reducer 可以接受state 但是不能直接改变state
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState
  }

  if (action.type === INIT_DATA) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState
  }

  return state
};