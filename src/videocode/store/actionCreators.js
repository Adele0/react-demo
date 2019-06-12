import axios from 'axios'
import { ADD_DATA, INIT_DATA, CHANGE_INPUT_VULAE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VULAE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initData = (data) => ({
  type: INIT_DATA,
  data
})

// 使用redux-thunk可以在store里直接返回函数
// 接收dispatch参数，直接使用dispatch派发action
export const getTodoList = () => {
  return (dispatch) => {
     axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/mock').then((res) => {
      const data = res.data.array
      const action = initData(data)
      dispatch(action)
    })
  }
}

// 练习thunk
export const addData = (data) => ({
  type: ADD_DATA,
  data
})

export const addTodoItem = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5d004ef495de7c77f8700638/video/mock').then((res) => {
      const data = res.data.array
      const action = addData(data)
      dispatch(action)
    })
  }
}