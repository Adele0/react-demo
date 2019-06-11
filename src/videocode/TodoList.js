import React, { Component } from 'react';
import store from './store';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';

// 容器组件（聪明组件）
class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.listenEnter = this.listenEnter.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() { 
    return ( 
      <TodoListUI
        list={this.state.list}
        inputValue={this.state.inputValue}
        listenEnter={this.listenEnter}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
      />
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleDeleteItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  listenEnter(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick()
      e.stopPropagation()
    }
  }

  handleStoreChange() {
    this.setState(store.getState())
  }
}
 
export default TodoList;