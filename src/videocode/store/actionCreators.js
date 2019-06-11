import { CHANGE_INPUT_VULAE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

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
